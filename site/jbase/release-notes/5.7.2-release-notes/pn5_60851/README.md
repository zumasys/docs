# PN5_60851

**Created At:** 2/14/2019 10:43:10 AM  
**Updated At:** 2/14/2019 11:17:11 AM  
**Original Doc:** [pn5_60851](https://docs.jbase.com/release-notes/pn5_60851)  
**Original ID:** 365068  
**Internal:** No  

## Description

Compiler parsing issue a function definition [DEFFUN] has the same name as a DIM() or COMMON array

### Previous Release Behavior

The following code should not be allowed to compile, but did:

```
COMMON xyz(100)
DEFFUN xyz()
x = xyz()       ;* intended function call
```

### Current Release Behavior

Compiling the above code will produce an error similar to:

```
jpp2: Error Variable xyz at line 1 in file test.b is both a function and a dimensioned array.

Error occurred connecting jbc Pre-Processor, jpp: No error
jbccom -f -d -a. BASIC_2.b failed , command returned a code of 2
jcompile: Returned an error code of 8
 ** Unable to compile source aaa.b **
Return code = BASIC_ERROR
```
