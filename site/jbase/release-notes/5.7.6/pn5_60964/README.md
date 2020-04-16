# PN5_60964

<PageHeader />

## Description

Util: ACCOUNT-SAVE duplicates saving distributed files

### Previous Release Behavior

When **ACCOUNT-SAVE** encounters a distributed file, it saves the whole distributed file as well as the part files separately.

### Current Release Behavior

Only the part files are saved.

The jBASE distributed file stub is not saved because distributed files are implemented differently on other multi-value platforms. Therefore it will be necessary to reassemble the distributed file on the target system.

### Notes

When a distributed file is created on jBASE, the dictionary of the distributed file is automatically set to **not** be saved by **ACCOUNT-SAVE**. If you wish for these files to saved then there are 2 options:

1) use the **ACCOUNT-SAVE (O** option to override the "no backup" flag

2) use **jchmod +B** on an individual file, e.g. **jchmod +B TESTFILE]D**

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)

  
<PageFooter />
