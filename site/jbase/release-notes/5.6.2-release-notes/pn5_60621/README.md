# PN5_60621

**Created At:** 10/2/2017 2:47:32 PM  
**Updated At:** 11/26/2017 1:18:24 PM  
**Original Doc:** [pn5_60621](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60621)  
**Original ID:** 279077  
**Internal:** No  

## Description

Case Independence: jFormateCode to move semi-colon separated INCLUDEs to a dedicated lines

### Current Release Behavior

Prior to this patch, semi-colon separated INCLUDE lines were ignored, e.g.

```
INCLUDE FILE-INC DEFAULTS ; INCLUDE FILE-INC VW.FILES
INCLUDE file-inc BILL.FILE ; INCLUDE file-inc BILL.TRANS; INCLUDE file-inc PROJECT.BILLING
INCLUDE file-inc BILL.CHGS ; INCLUDE file-inc BILL.CHGS.PARENT
```

now becomes:

```
INCLUDE FILE-INC DEFAULTS
INCLUDE FILE-INC VW.FILES
INCLUDE file-inc BILL.FILE
INCLUDE file-inc BILL.TRANS
INCLUDE file-inc PROJECT.BILLING
INCLUDE file-inc BILL.CHGS
INCLUDE file-inc BILL.CHGS.PARENT
```

Back to [5.6.2 release Notes](./../README.md)
