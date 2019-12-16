# PN5_60620

**Created At:** 10/2/2017 2:34:18 PM  
**Updated At:** 11/21/2017 1:00:23 PM  


### Description

Add option to jFormatCode to allow DIMensioned arrays to be treated like dynamic arrays



### Previous Release Behavior

Missing MAT before an array would mean the code would not compile.



### Current Release Behavior

Code should compile after jFormatCode has processed it.

This behavior is triggered by using the -m option, e.g.

```
jFormatCode -m -p -r mycode.b
```
