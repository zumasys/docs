# PN5_60618

**Created At:** 10/2/2017 2:26:23 PM  
**Updated At:** 11/22/2017 11:03:38 AM  
**Original Doc:** [pn5_60618](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60618)  


### Description

Case Independence: PortBas issue - Reserved words following a ";" ignored



### Previous Release Behavior

Code such as:

```
rec = INSERT(rec, 42; CRT)
```

or:

```
LOCATE(string, array;VAR;SORT) ELSE NULL
```

PortBas would not recognize **CRT**, **VAR** or **SORT** as a reserved words.



### Current Release Behavior

PortBas now converts the reserved words in the above examples to **Crt**, **Var**, **Sort**.
