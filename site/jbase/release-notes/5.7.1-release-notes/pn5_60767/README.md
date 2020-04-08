# PN5_60767

<PageHeader />

## Description

Utilities: Running **jrf** on an encrypted file decrypts the file

### Previous Release Behavior

When the **jrf** command was run on a file encrypted with:

```
create-file filename encrypted=true
```

The resulting data would be decrypted.

### Current Release Behavior

The data remains encrypted after running **jrf** on an encrypted file.

Back to [5.7.1 Release Notes](./../README.md)
