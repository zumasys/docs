# PN5_60684

<PageHeader />

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
