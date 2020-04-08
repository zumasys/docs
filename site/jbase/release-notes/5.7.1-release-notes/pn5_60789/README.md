# PN5_60789

<PageHeader />

## Description

The jBC code translator does not handle literal @VMs in the code

### Previous Release Behavior

When there were literal Value Marks in the code, the code translator would fail to compile:

```
a = "1]2]3"
```

would result in:

```
jsh ~ -->basic bp vmtest.b (T
Call to code translator.
vmtest.b
a = "1
----^
jpp2: Error Unbalanced strings: Line 1 in file vmtest.b
Error occurred connecting jbc Pre-Processor, jpp: No such file or directory
jbccom -f -d -abp BASIC_1.b failed , command returned a code of 2
jcompile: Returned an error code of 8
 ** Unable to compile source vmtest.b **
jsh ~ -->
```

### Current Release Behavior

Embedded Value Marks are now handled correctly by the code translator.

Back to [5.7.1 Release Notes](./../README.md)
