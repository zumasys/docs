# PN5_60685

**Created At:** 12/29/2017 10:13:41 AM  
**Updated At:** 2/16/2018 7:09:13 PM  
**Original Doc:** [pn5_60685](https://docs.jbase.com/release-notes/pn5_60685)  


### Description

QSELECT and FORM-LIST commands do not allow quoted arguments without spaces between the arguments



### Previous Release Behavior

```
jsh home ~ -->QSELECT MD "LIST""SORT"
 ** Error [ 202 ] **
Record 'LIST""SORT' is not on file
No record list generated; File empty?

jsh home ~ -->FORM-LIST MD "LIST""SORT"
 ** Error [ 202 ] **
Record LIST""SORT is not on file
```



### Current Release Behavior

In general,

```
QSELECT filename "arg1"'arg2'"arg3"\arg4\
FORM-LIST filename "arg1"'arg2'"arg3"\arg4\
```

are internally converted to:

```
QSELECT filename "arg1" 'arg2' "arg3" \arg4\
FORM-LIST filename "arg1" 'arg2' "arg3" \arg4\
```

For example,

```
jsh home ~ -->QSELECT MD "LIST""SORT"

 4 Records selected

>

jsh home ~ -->FORM-LIST MD "LIST""SORT"

 4 Records selected

>
```

Single-quotes, double-quotes and backslashes are handled in any combination.

Requires the Config\_EMULATE option **put\_spaces\_between\_quoted\_arguments** to be set.

This option is not added to any emulation by default.
