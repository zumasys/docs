# PN5_60663

**Created At:** 12/25/2017 6:14:46 PM  
**Updated At:** 2/16/2018 7:06:39 PM  
**Original Doc:** [pn5_60663](https://docs.jbase.com/release-notes/pn5_60663)  
**Original ID:** 292204  
**Internal:** No  


### Description

jQL: Unable to get Value Number from exploded sort using an I-type; @NV not recognized



### Previous Release Behavior

```
create-file mvtest 1 1

ed mvtest 1
001 z]b]x]a

Dict ID: vn
001 I
002 @NV
003
004
005 2R

jsh home ~ -->sort mvtest by-exp *A1 *A1 vn hdr-supp ni-supp id-supp
Error in Statement "sort mvtest by-exp *A1 *A1 vn hdr-supp ni-supp id-supp"
Error in attribute definition item vn
Error in Itype: unexpected token: @NV
```



### Current Release Behavior

jsh home ~ --&gt;sort mvtest by-exp \*A1 \*A1 vn hdr-supp ni-supp id-supp

```
*a1...........    vn

a                  4
b                  2
x                  3
z                  1
```
