# PN5_60968

**Created At:** 1/17/2020 10:58:41 AM  
**Updated At:** 1/17/2020 10:59:57 AM  
**Original Doc:** [pn5_60968](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60968)  
**Original ID:** 518974  
**Internal:** No  


### Description

Add a 5th parameter to the **LOCATE()** function to specify the start position.



### Previous Release Behavior

The jBASE BASIC syntax supports both the **LOCATE()**function and the **LOCATE**statement.

The **LOCATE**statement allowed a starting position to be defined.

The **LOCATE()** function does not allow a starting position to be defined (unless PRIME emulation was being used)



### Current Release Behavior

You can now add the starting position in the **LOCATE()**function as you can for the **LOCATE**statement. While this enhancement came from providing compatibility with D3, the change itself is universal and applies to all emulations, not just D3.

The syntax of the**LOCATE()** funtion was previously:

```
LOCATE(expression1, expression2{,expression3{,expression4}}; Var{; expression6}) THEN|ELSE statements
```

The syntax of the **LOCATE()**function is now

```
LOCATE(expression1, expression2{,expression3{,expression4{,expression5}}}; Var{; expression6}) THEN|ELSE statements
```

Where **expression5** indicates the field, value or subvalue from which the search will begin.
