# PN5_60701

**Created At:** 2/19/2018 9:51:08 AM  
**Updated At:** 2/19/2018 11:41:11 AM  
**Original Doc:** [pn5_60701](https://docs.jbase.com/release-notes/pn5_60701)  
**Original ID:** 299722  
**Internal:** No  


### Description

jDLS -L does not display the lock table



### Previous Release Behavior

On Windows, **jDLS -L** would error out with:

```
ERROR: In StartServiceCtrlDispatcher, error 1063
```

On Linux, **jDLS -L** would error out with:

```
jdls: Error: Program called with no arguments - nothing to do
```

In order to display the lock table, it was necessary to include the **-d** option.



### Current Release Behavior

Issuing the **-L** option now implies the **-d** option and the lock table is properly displayed.
