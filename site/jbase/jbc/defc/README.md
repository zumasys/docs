# DEFC

**Created At:** 8/16/2017 1:47:34 PM  
**Updated At:** 11/16/2018 10:37:51 PM  
**Original Doc:** [267408-defc](https://docs.jbase.com/36868-jbase-basic/267408-defc)  
**Original ID:** 267408  
**Internal:** No  

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

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
