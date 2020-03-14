# PN5_60599

**Created At:** 10/2/2017 12:27:55 PM  
**Updated At:** 11/26/2017 2:42:06 PM  
**Original Doc:** [pn5_60599](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60599)  
**Original ID:** 279051  
**Internal:** No  

## Description

ACCOUNT-SAVE and ACCOUNT-RESTORE 32k limit

Add support for large records when using ACCOUNT-SAVE and ACCOUNT-RESTORE commands.

### Previous Release Behavior

Records greater than 32k where always truncated even with the (G option.

### Current Release Behavior

To enable new functionality, use the (G option when saving the account.

e.g.

```
ACCOUNT-SAVE . (G
```

This new behavior will be limited to jBASE saves only.

Records of any size will be okay as long as the (G option is used when running ACCOUNT-SAVE.

Back to [5.6.2 release Notes](./../README.md)
