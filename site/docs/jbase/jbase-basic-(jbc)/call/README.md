# CALL

**Created At:** 7/18/2017 12:07:59 PM  
**Updated At:** 10/24/2018 10:56:34 PM  
**Original Doc:** [263580-call](https://docs.jbase.com/36868-jbase-basic/263580-call)  
**Original ID:** 263580  
**Internal:** No  

## Description

The statement transfers program execution to an external [SUBROUTINE](./../subroutine). It usually takes the form:

```
CALL subroutine_name(argument, argument…. )
```

Or

```
CALL @subroutine_name(argument, argument ...)
```

Where **subroutine\_name** is the subroutine to be called. It can either be quoted or unquoted.

The **@** variant of this statement assumes that subroutine.name is a variable that contains the name of the subroutine to call.

The **CALL** statement may optionally pass a number of parameters to the target subroutine. These parameters can consist of any valid expression or variable name. If a variable name is used then the called program may return a value to the variable by changing the value of the equivalent variable in its own parameter list.

## Note

> - When using an expression to pass a parameter to the subroutine, built-in functions of jBASE BASIC (such as [COUNT](./../count)), cannot be used within the expression.
> - An unlimited number of parameters can be passed to an external subroutine. The number of parameters in the **CALL** statement must match exactly the number expected in the [SUBROUTINE](./../subroutine) statement declaring the external subroutine.
> - It is not required that the calling program and the external subroutine be compiled with the same [PRECISION](./../precision). However, any changes to precision in a subroutine will not persist when control returns to the calling program.
> - Variables passed, as parameters to the subroutine may not reside in any [COMMON](./../common) areas declared in the program.
> - If it is desired to pass a [DIM](./../dimension-%28dim%29)ensioned array as an argument use the [MAT](./../mat) keyword as:
>
> ```
> CALL subroutine.name(arg1, MAT myarray, arg3, ...)
> ```

An example of use can be as follows:

calling subroutine Hello:

```
CALL Hello("World")
```

defining subroutine Hello:

```
SUBROUTINE Hello(Message)
    PRINT "HELLO": Message
RETURN
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
