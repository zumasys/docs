# PN5_60773

<PageHeader />

## Description

The **jshow** command does not resolve filenames entered as filename,datasection

### Previous Release Behavior

**jshow** would not be able to find the data section of a file, e.g.

```
jsh ~ -->create-file main
[ 417 ] File main]D created , type = JD
[ 417 ] File main created , type = JD
jsh ~ -->create-file data main,section
[ 417 ] File main]Msection created , type = JD
jsh ~ -->jshow main,section
jsh ~ -->jshow -f main,section
jsh ~ -->
```

### Current Release Behavior

```
jsh  ~ -->jshow main,section
File:                     ./main]Msection
jsh ~ -->jshow -f main,section
File:                     ./main]Msection
jsh danielk ~ -->
```

Back to [5.7.1 Release Notes](./../README.md)
