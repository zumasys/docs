# PN5_60913

**Created At:** 9/24/2019 8:40:23 AM  
**Updated At:** 10/6/2019 11:03:58 AM  
**Original Doc:** [pn5_60913](https://docs.jbase.com/75024-5-7-4-release-notes/pn5_60913)  
**Original ID:** 459843  
**Internal:** No  

## Description

Remove the restriction which prevents 2 or more copies of jlogdup restoring to the same machine simultaneously

### Previous Release Behavior

If you tried to load 2 copies of jlogdup with the 'set=database' option, you would get the following message and it would reject the second load.

```
ERROR:
Cannot have 2 copies of jlogdup restoring to the database simultaneously
```

### Current Release Behavior

The error has now been replaced with a warning, and allows the operation to continue.

```
WARNING:
There are 2 copies of jlogdup restoring to the database simultaneously
```

Back to [5.7.4 Release Notes](./../README.md)
