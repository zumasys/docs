# PN5_60758

**Created At:** 8/27/2018 10:30:26 AM  
**Updated At:** 10/24/2018 8:39:03 PM  


### Description

Debugger: Provide more accurate line numbers in the CASE statement



### Previous Release Behavior

If an error occurred inside the execution of the CASE statement, the debugger would be entered with the wrong line number.



### Current Release Behavior

Shows the correct line number. Note that this is a fix to the compiler, so if you want to take advantage, you need to re-compile your code. However the bug is fairly esoteric, so there is no real need to re-compile code unless you really want the fix.

### 

