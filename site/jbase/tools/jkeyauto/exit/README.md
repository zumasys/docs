# Exit

<PageHeader />

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

This command exits the executing program. It takes the form:

```
exit {expression}
```

where expression is the NUMERIC exit code which will be passed back to the parent process.

An example of use may be:

```
exitcode = 3
exit exitcode
```

to return an exit code of 3 to the parent process.

[Back to jKeyAuto](./../README.md)

<PageFooter />
