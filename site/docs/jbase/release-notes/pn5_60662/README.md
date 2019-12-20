# PN5_60662

**Created At:** 12/25/2017 6:08:19 PM  
**Updated At:** 2/16/2018 7:06:29 PM  
**Original Doc:** [pn5_60662](https://docs.jbase.com/release-notes/pn5_60662)  


### Description

jQL: Unable to get Value Number from exploded sort using an A-type (10-line) dictionary



### Previous Release Behavior

```
create-file mvtest 1 1

ed mvtest 1
001 z]b]x]a

Dict ID: vn
001 A
002 1
...
008 A;NV
009 R
010 2

jsh home ~ -->sort mvtest by-exp *A1 *A1 vn hdr-supp ni-supp id-supp

*a1...........    vn

a                  1
b                  1
x                  1
z                  1
```

The **vn** column would always return 1.



### Current Release Behavior

```
jsh home ~ -->sort mvtest by-exp *A1 *A1 vn hdr-supp ni-supp id-supp

*a1...........    vn

a                  4
b                  2
x                  3
z                  1
```
