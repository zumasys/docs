# DECATALOG_DELETE_OBJECT_CODE

<PageHeader />

**Tags:**
<badge text='environment variables' vertical='middle' />

## Description

When a program or subroutine is compiled, it creates an intermediate *object* file that is used when the program is CATALOG'd. This *comipiled object* file either starts with a **$** or ends with **.o** (Unix) or **.obj** (Windows). If the program (or subroutine) is subsequently DECATALOG'd then, by default, the *compiled object* file is not removed, which means that the program (or subroutine) could be re-CATALOG'd without recompiling the original source code. This behavior may not be desirable if the source code is being changed or has been decommissioned.

The **DECATALOG_DELETE_OBJECT_CODE** environment variable causes the intermediate *compiled object* file to be deleted when the program (or subroutine) is DECATALOG'd.

## Values

1

## Default

Not set.

## Setting

Normal environment variable, so it can be set at any time by:

## UNIX

```
export DECATALOG_DELETE_OBJECT_CODE=1
```

## Windows

```
set DECATALOG_DELETE_OBJECT_CODE=1
```

Go Back to [Environment Variables](./../README.md)

<PageFooter />
