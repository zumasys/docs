# SUBROUTINE

**Created At:** 11/6/2017 3:04:06 PM  
**Updated At:** 1/5/2018 6:52:25 PM  
**Original Doc:** [284390-subroutine](https://docs.jbase.com/36868-jbase-basic/284390-subroutine)  
**Original ID:** 284390  
**Internal:** No  


# Description

The **SUBROUTINE** statement is used at the start of any program that will be called externally by the [CALL](./../call) statement. It also declares any parameters to the compiler. It takes the general form:

```
SUB{ROUTINE} Name {({MAT} variable{,{MAT} variable...})}
```

Where:

Name is the identifier by which the subroutine will be known to the compilation process. It should always be present as this name (not the source file name), will be used to call it by. However, if the name is left out, the compiler will name subroutine as the source file name (without suffixes). Default naming is not encouraged as it can cause problems if source files are renamed.

Each comma separated variable in the optional parenthesized list is used to identify parameters to the compiler. These variables will be assigned the values passed to the subroutine by a [CALL](./../call) statement.

The **SUBROUTINE** statement must be the first code line in a subroutine.

A subroutine will inherit all the variables declared using the [COMMON](./../common) statement providing an equivalent [COMMON](./../common) area is declared within the **SUBROUTINE** source file. The program will fail to compile if the number of common variables used in each common area exceeds the number defined in the equivalent area in the main program.

Subroutines can only be called via the jBASE BASIC [CALL](./../call) statement.

A subroutine can redefine [PRECISION](./../precision) but the new precision will not persist when the subroutine returns to the calling program.

A subroutine will return to the [CALL](./../call)ing program if it reaches the logical end of the program or a [RETURN](./../return) is executed with no outstanding [GOSUB](./../gosub) statement.

A **SUBROUTINE** will not return to the calling program if a [STOP](./../stop) or [ABORT](./../abort) statement is executed.

An example of use is as:

```
SUBROUTINE DialUp(Number, MAT Results)
DIM Results(8)
....
```



See also: [CALL](./../call), [CATALOG](./../catalog), [COMMON](./../common), [RETURN](./../return)

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
