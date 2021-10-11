# PN5_60620

<PageHeader />

## Description

Add option to jFormatCode to allow DIMensioned arrays to be treated like dynamic arrays

### Previous Release Behavior

Missing MAT before an array would mean the code would not compile.

### Current Release Behavior

Code should compile after jFormatCode has processed it.

This behavior is triggered by using the -m option, e.g.

```
jFormatCode -m -p -r mycode.b
```

Back to [5.6.3 Release Notes](./../README.md)

<PageFooter />
