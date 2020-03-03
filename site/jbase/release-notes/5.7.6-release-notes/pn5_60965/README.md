# PN5_60965

**Created At:** 1/15/2020 1:53:39 PM  
**Updated At:** 1/15/2020 2:04:05 PM  
**Original Doc:** [pn5_60965](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60965)  
**Original ID:** 517134  
**Internal:** No  


### Description

**FORMLIST 0 TO var** caused segmentation violation if run with an active select.



### Previous Release Behavior

On some older releases the syntax of **FORMLIST nn TO var**allowed an active list. This incorrect usage of **FORMLIST**but additionally caused the statement to abort if there was an active select list.



### Current Release Behavior

The compiler has been changed to generate a string constant variable to the underlying function.

Example program:

```
IF SYSTEM(11) THEN
    ACTIVE.LIST = 1
    FORMLIST 0 TO MY.LIST
END ELSE
    MY.LIST = ''
    ACTIVE.LIST = 0
END
```
