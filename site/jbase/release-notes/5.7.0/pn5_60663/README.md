# PN5_60663

<PageHeader />

## Description

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

```
jsh home ~ -->sort mvtest by-exp *A1 *A1 vn hdr-supp ni-supp id-supp

*a1...........    vn

a                  4
b                  2
x                  3
z                  1
```

Back to [jBASE 5.7.0 Release Notes](./../README.md)

<PageFooter />
