# CALL

<PageHeader />

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

> - When using an expression to pass a parameter to the subroutine, built-in functions of jBASE BASIC (such as [COUNT](./../count/README.md)), cannot be used within the expression.
> - An unlimited number of parameters can be passed to an external subroutine. The number of parameters in the **CALL** statement must match exactly the number expected in the [SUBROUTINE](./../subroutine/README.md) statement declaring the external subroutine.
> - It is not required that the calling program and the external subroutine be compiled with the same [PRECISION](./../precision/README.md). However, any changes to precision in a subroutine will not persist when control returns to the calling program.
> - Variables passed, as parameters to the subroutine may not reside in any [COMMON](./../common/README.md) areas declared in the program.
> - If it is desired to pass a [DIM](./../dimension-dim/README.md)ensioned array as an argument use the [MAT](./../mat/README.md) keyword as:
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
    CRT "Hello " : Message
RETURN
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
