# PN5_60599

<PageHeader />

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
