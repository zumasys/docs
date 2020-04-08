# PN5_60904

<PageHeader />

## Description

Spooler corruption on shutdown

### Previous Release Behavior

Issuing an **init 6** when the spooler was active would corrupt the **jspool\_log** file.

### Current Release Behavior

The **jspool\_log** file is now created as a J3 secure file.

In order to activate the **secure** feature it is necessary to set the **JEDI\_SECURE\_LEVEL** environment variable:

```
export JEDI_SECURE_LEVEL=3
```

When this environment variable is set this way, all updates to the **jspool\_log** file (and any other j3 files created with SECURE=YES or if the secure mode is changed with **jchmod +S**) are flushed to disk immediately.

Back to [5.7.4 Release Notes](./../README.md)
