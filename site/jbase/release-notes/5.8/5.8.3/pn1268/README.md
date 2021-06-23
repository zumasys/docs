# PN1268

<PageHeader />

## Description

I-type SUBR call with another I-type expression as an argument causes segv

fOR Example:

```
SUBR("BUYER.GWHREL",(Z.LINE:"*":Z.BR),"")
```

## Previous Release Behavior

```
LIST TRANS-WORK Z.BUYER

Segmentation violation.
```

## Current Release Behavior

Query now works as expected.  

Back to [5.8.3 Release Notes](./../README.md)

<PageFooter />
