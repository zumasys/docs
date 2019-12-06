# SUBROUTINE

**Created At:** 11/6/2017 3:04:06 PM  
**Updated At:** 1/5/2018 6:52:25 PM  


# Description

The **SUBROUTINE** statement is used at the start of any program that will be called externally by the [CALL](263580-call) statement. It also declares any parameters to the compiler. It takes the general form:

```
SUB{ROUTINE} Name {({MAT} variable{,{MAT} variable...})}
```

Where:

Name is the identifier by which the subroutine will be known to the compilation process. It should always be present as this name (not the source file name), will be used to call it by. However, if the name is left out, the compiler will name subroutine as the source file name (without suffixes). Default naming is not encouraged as it can cause problems if source files are renamed.

Each comma separated variable in the optional parenthesized list is used to identify parameters to the compiler. These variables will be assigned the values passed to the subroutine by a [CALL](263580-call) statement.

The **SUBROUTINE** statement must be the first code line in a subroutine.

A subroutine will inherit all the variables declared using the [COMMON](276024-common) statement providing an equivalent [COMMON](276024-common) area is declared within the **SUBROUTINE** source file. The program will fail to compile if the number of common variables used in each common area exceeds the number defined in the equivalent area in the main program.

Subroutines can only be called via the jBASE BASIC [CALL](263580-call) statement.

A subroutine can redefine [PRECISION](277629-precision) but the new precision will not persist when the subroutine returns to the calling program.

A subroutine will return to the [CALL](263580-call)ing program if it reaches the logical end of the program or a [RETURN](278787-return) is executed with no outstanding [GOSUB](276075-gosub) statement.

A **SUBROUTINE** will not return to the calling program if a [STOP](278838-stop) or [ABORT](284104-abort) statement is executed.

An example of use is as:

```
SUBROUTINE DialUp(Number, MAT Results)
DIM Results(8)
....
```



See also: [CALL](263580-call), [CATALOG](264320-catalog), [COMMON](276024-common), [RETURN](278787-return)

Go back to [jBASE BASIC](263498-jbase-basic).
