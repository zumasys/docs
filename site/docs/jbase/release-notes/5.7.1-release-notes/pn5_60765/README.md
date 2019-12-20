# PN5_60765

**Created At:** 8/27/2018 12:13:41 PM  
**Updated At:** 10/24/2018 8:39:22 PM  
**Original Doc:** [pn5_60765](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60765)  


### Description

Correct a problem that when a CALL fails, the name displayed could become corrupted.



### Previous Release Behavior

A subroutine CALL can fail, but the name can be corrupted if non alphabetic characters were in the name.

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
