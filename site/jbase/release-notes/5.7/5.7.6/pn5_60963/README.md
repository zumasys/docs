# PN5_60963

<PageHeader />

## Description

**ACCOUNT-SAVE** on Windows doesn't save files with Windows reserved characters ? \* ; | &lt; &gt; )

### Previous Release Behavior

When running **ACCOUNT-SAVE** (aka **ACCSAVE**) on Windows, any file name with a Windows reserve character was not saved.

For example, if a file is named ABC\*DEF then the **ACCOUNT-SAVE** process would display these lines:

```
ACCOUNT-SAVE : Skipping file 'ABC*DEF]D' in directory 'C:\jBASE\TESTACCT'
ACCOUNT-SAVE : Skipping file 'ABC*DEF' in directory 'C:\jBASE\TESTACCT'
```

### Current Release Behavior

All valid files with Windows reserved characters are saved.

Back to [5.7.6 Release Notes](../jbase-5.7.6-release-notes/README.md)

<PageFooter />
