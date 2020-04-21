# Decatalog

<PageHeader />

The **DECATALOG** (aka **DELETE-CATALOG**) command removes released executables, suboutines, functions or methods.

```
DECATALOG {-d} FileName ProgramName
DELETE-CATALOG {-d} FileName ProgramName
```

These commands will remove an executable program from the **bin** directory (or the directory defined by the [JBCDEV_BIN](../envronmemt-variables/../../environment-variables/jbcdev_bin/README.md) environment variable) or remove a subroutine/function/method from the **lib** (or the directory defined by the [JBCDEV_LIB](../envronmemt-variables/../../environment-variables/jbcdev_lib/README.md) environment variable.

## Deleting the intermediate object code

The **-d** option deletes the intermediate object code that gets generated when a program is compiled. The files that get deleted are those that start with a **$** or end with **.o** (Unix) / **.obj** (Windows).

The advantage of using this option is that it prevents a changed program that has not been re-compiled from being inadvertently re-cataloged.

There are 2 ways to achieve this behavior:

1. by using the **-d** option, e.g. **DECATALOG -d filename program**

2. by setting the **DECATALOG_DELETE_OBJECT_CODE** environment variable, e.g. **export DECATALOG_DELETE_OBJECT_CODE=1** on Unix / **set DECATALOG_DELETE_OBJECT_CODE=1** on Windows

When this feature is implemented the **DECATALOG** command will look for and delete the intermediate object code files if said object code is in the **OBJECT** data section (e.g **bp,OBJECT**) or, if the **OBJECT** data section does not exist, is in the source code file.

*Caveat:*

If a program is compiled with an explicit filename, e.g.

```
BASIC bp test.b
```

**bp** in this case, then a subsequent:

```
DECATALOG -d . test
```

will only remove the object code if the current working directory is **bp**. 

[Back to Compilation](../README.md)

  
<PageFooter />
