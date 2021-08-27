# DEFC

<PageHeader />

**Tags:**
<badge text='callc' vertical='middle' />

## Description

Use the **DEFC** statement to declare an external C function to the jBASE BASIC compiler, define its arguments, and return types. The statement takes the general form:

```
DEFC {FuncType} FuncName ({ArgType {, ArgType ...}})
```

Where:

- **FuncType** and **ArgType** are of INT, FLOAT or VAR type. **FuncType** specifies the type of result that the function will return. Assumes INT if **FuncType** is omitted.
- The optional list of **ArgTypes** specifies the argument types that the C function will expect. The compiler must know this in advance, as it will automatically perform type conversions on these arguments

## Note

> - The **DEFC** statement assumes that the C functions will need to manipulate jBASE BASIC variables and hence will also require the thread data pointer. As such, all C functions require recoding to include the data pointer as an argument to the C function. The location of the data pointer argument depends upon the function return type.
> - A **DEFC** must be compiled for each C function before making any reference to it, else the compiler will not recognize the function name.
> - The function is called in the same manner, as it would be in a C program, which means it can be used as if it was an intrinsic function of the jBASE BASIC language and therefore returns a value. However, specifying it as a standalone function call causes the compiler to generate code that ignores any returned values.
> - When passing jBASE BASIC variables to a C function, the predefined macros must be utilized to access the various data types it contains. C functions are particularly useful for increasing the performance of tight loops that perform specific functions. The jBASE BASIC compiler must cater for any eventuality within a loop (such as the controlling variable changing from integer to floating point).
>
>
> A dedicated C function can ignore such events, if they are guaranteed not to happen.
>
> - The jBASE BASIC programmer may freely ignore the type of argument used when invoking the C function, as the jBASE BASIC compiler will automatically perform type conversion.

An exampe of use is as follows:

## C function

``` C
#include <jsystem.h>
#include <assert.h>

#ifdef DPSTRUCT_DEF
#define JBASEDP DPSTRUCT *dp,
#else
#define JBASEDP
#endif

VAR *MyString(VAR *Result, JBASEDP VAR *VarPtr)
{
    char *Ptr;
    assert(dp != NULL);
    Ptr = (char *) CONV_SFB(VarPtr);
    printf("MyString: %s - %d\n", Ptr, strlen(Ptr) );
    STORE_VBI(Result, strlen(Ptr) );
    return(Result);
}

INT32 MyCalc(INT32 Value1, INT32 Value2)
{
    INT32 Result;
    Result = (Value1 / Value2);
    printf("MyCalc: %d\n", Result);
    return(Result);
}
```

## jBASIC code

```
DEFC VAR MyString(VAR, VAR)
DEFC INT MyCalc(INT, INT)

var1 = 'var one'
var2 = 'var two'
int1 = 123
int2 = 456

var_result = MyString(var1, var2)

int_result = MyCalc(int1, int2)

CRT var_result, int_result
```

## Dealing with non-Standard C data types
There may be situations where you need to work with a structure/class object beyond the bounds of the standard
INT, STRING, VAR types. In these situations these object/pointers should be stored in a regular jBC var as follows:

```
void storeMyStruct(DPSTRUCT * dp, MyStruct* ptr, VAR * jbcVAR) {
    if (ptr) {
        if (jbcVAR->VarUnion.DynamicObjectPointer) {
            VAR_RELEASE_VB(jbcVAR); // in case you’re reusing an existing MyStruct VAR handle in the jBC code
        }
        VAR_INITIALISE_VB(jbcVAR);
        STORE_VBO(jbcVAR, ptr);
    } else {
        jbcVAR->VarUnion.DynamicObjectPointer = 0;
    }
}

MyStruct * getMyStruct(JBASEDP VAR* jbcVAR)
{
    MyStruct * ptr;

    ptr = (MyStruct*)(jbcVAR->VarUnion.DynamicObjectPointer);

    return ptr;
}

INT32 createMyStruct(DPSTRUCT dp, VAR * input, VAR * jbcVAR) {
    INT32 rc = 0;
    char * string_val = (char*)CONV_SFB(input);
    MyStruct * ptr = some_func_to_create_MyStruct(string_val);
    if (ptr) {
        storeMyStruct(dp, ptr, jbcVAR);
    } else {
        rc = -1;
    }
    return rc;
}
```
**createMyStruct()** can now be called from a jBC program:
```
DEFC INT createMyStruct(VAR, VAR)
...
rc = createMyStruct(my_jbc_input_var, h_MyStruct)
```
**h_MyStruct** can now be passed to another DEFC function to in turn call an external C API that expects a **MyStruct** object.
```
DEFC INT useMyStruct(VAR, VAR)
...
rc = useMyStruct(h_MyStruct, resultVar) ;! resultVar could be any type of result, even another struct/class abstract VAR
```
...and...
```
INT32 useMyStruct(DPSTRUCT * dp, VAR * jbcVAR, VAR * resultVar) {
    MyStruct * ptr = getMyStruct(dp, jbcVAR);
    ....
}
```

If using c++ you could use a template class instead of hard coding your object type (e.g. MyStruct).
```
template <class T>

T * getPtr(VAR* v_ptr, DPSTRUCT * dp)
{
        T * ptr;

        ptr = (T*)(v_ptr->VarUnion.DynamicObjectPointer);

        return ptr;
}

template <class T>

void storePtr(T * ptr, VAR * v_ptr, DPSTRUCT * dp)
{
        if (ptr)
        {
                if (v_ptr->VarUnion.DynamicObjectPointer)
                {
                        VAR_RELEASE_VB(v_ptr);
                }
                VAR_INITIALISE_VB(v_ptr);
                STORE_VBO(v_ptr, ptr);
        }
        else
        {
                v_ptr->VarUnion.DynamicObjectPointer = 0;
        }
}
```
And then...
```
MyStruct * getMyStruct(DPSTRUCT * dpVAR * v_ptr)
{
        return getPtr<MyStruct>(dp, v_ptr);
}

void storeMyStruct(DPSTRUCT * dp, MyStruct * ptr, VAR * v_ptr)
{
        storePtr<MyStruct>(dp, ptr, v_ptr);
}
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
