# PN5_60758

<PageHeader />

## Description

Debugger: Provide more accurate line numbers in the CASE statement

### Previous Release Behavior

If an error occurred inside the execution of the CASE statement, the debugger would be entered with the wrong line number.

### Current Release Behavior

Shows the correct line number. Note that this is a fix to the compiler, so if you want to take advantage, you need to re-compile your code. However the bug is fairly esoteric, so there is no real need to re-compile code unless you really want the fix.

Back to [5.7.1 Release Notes](./../README.md)

  
<PageFooter />
