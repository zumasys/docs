# RETURN

**Created At:** 9/28/2017 7:44:17 AM  
**Updated At:** 1/5/2018 6:09:43 PM  
**Original Doc:** [278787-return](https://docs.jbase.com/36868-jbase-basic/278787-return)  
**Original ID:** 278787  
**Internal:** No  

## Description

The **RETURN** statement transfers program execution to the caller of a subroutine/function or to a specific label in the program. It takes the general form:

```
RETURN {TO label}
```

or

```
RETURN(expression)
```

Where:

**label** must reference an existing label within the source of the program.

**expression** evaluates to the value that is returned by a user-written function.

## Note

> - The **RETURN** statement will transfer program execution to the statement after the [GOSUB](./../gosub) that called the current internal subroutine.
> - If the **RETURN** statement is executed in an external [SUBROUTINE](./../subroutine) and there are no outstanding [GOSUB](./../gosub)s, then the program will transfer execution back to the program that called it via [CALL](./../call).
> - The program will enter the debugger with an appropriate message should a **RETURN** be executed with no [GOSUB](./../gosub) or [CALL](./../call) outstanding.

The second form of the **RETURN** statement is used to return a value from a user-written function. This form can only be used in a user-written function.

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
