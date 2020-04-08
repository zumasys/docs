# PN5_60765

<PageHeader />

## Description

Correct a problem that when a CALL fails, the name displayed could become corrupted.

### Previous Release Behavior

A subroutine CALL can fail, but the name could be corrupted if non-alphabetic characters were in the name.

For example, the name is "MY.BAD.PROG" but the name displayed is corrupted as "MY.BAD.PGOG"

```
jsh dsi zumasys1 /home/zumasys1 -->BADCALL
** Error [ SUBROUTINE_CALL_FAIL ] **
Unable to perform CALL to subroutine MY.BAD.PGOG , Line     1 , Source BADCALL.b
Press C to continue or Q to quit
Trap from an error message, error message name = SUBROUTINE_CALL_FAIL
Source changed to ./ZUMBP/BADCALL.b
0001     CALL MY.BAD.PROG
jBASE debugger->
```

### Current Release Behavior

No longer corrupted.

Back to [5.7.1 Release Notes](./../README.md)
