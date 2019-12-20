# PN5_60684

**Created At:** 12/29/2017 10:11:58 AM  
**Updated At:** 2/16/2018 7:09:00 PM  
**Original Doc:** [pn5_60684](https://docs.jbase.com/release-notes/pn5_60684)  


### Description

**mw42**drops to the debugger when an invalid option is supplied as the first argument



### Previous Release Behavior

Running the **mw42** command with an invalid option as the first argument would drop to the jBASE debugger, e.g.

```
[danielk@zumJBASE ~]$ mw42 x
Non-numeric value -- ZERO USED ,
Variable '(UNKNOWN)' , Line   216 , Source mw42.b
Trap from an error message, error message name = NON_NUMERIC
Line 216 , Source mw42.b
jBASE debugger->
```



### Current Release Behavior

**mw42** does not drop to the debugger; invalid options are now ignored.
