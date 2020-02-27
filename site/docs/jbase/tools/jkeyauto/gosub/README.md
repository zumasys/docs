# GOSUB

**Created At:** 8/30/2018 1:30:16 PM  
**Updated At:** 5/16/2019 6:28:02 PM  
**Original Doc:** [336878-gosub](https://docs.jbase.com/48575-jkeyauto/336878-gosub)  
**Original ID:** 336878  
**Internal:** No  

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

Transfer execution of the script to a specified label, but as a subroutine call. Program execution will continue with the next line after 'gosub' after the subroutine completes execution, usually with a RETURN statement.

```
gosub label
```

where **label** is the label to which execution should transfer.

An example of use may be as:

```
gosub loadprog
if exitcode ne 0 then exit exitcode
# Any other code
exit 0
#
loadprog: progname = "TESTER " : $VARNAME : " " : portno
portno = portno + 1
program loadprog
exitcode = $?
Return
```
