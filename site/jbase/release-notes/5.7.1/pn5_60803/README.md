# PN5_60803

<PageHeader />

## Description

Q-pointer casing issue

### Previous Release Behavior

Q-pointers could not resolve when using a mixed-case account name and/or file name.

Previously something like this would fail.

```
CT MD MYFILE
001 q
002 another_accounT
003 remote_filE
```

```
LIST myFile
```

where:

```
[myFile] is a record in the MD
[another_accounT] is a record in the SYSTEM file
[remote_filE] is an entry in the Q-pointer where the case did not match the actual file name  
```

### Current Release Behavior

Q-pointers now resolve regardless of the case of the account name and/or file name.

This change is only effective in D3 emulation.

Back to [5.7.1 Release Notes](./../jbase-5.7.1-release-notes/README.md)
  
<PageFooter />
