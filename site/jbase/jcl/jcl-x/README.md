# jCL X

<PageHeader />

**Tags:**
<badge text='jcl' vertical='middle' />

## Description

The command halts execution of the program and returns control to the shell.

```
X{text}{+}
```

where:

- **text** is any text to be displayed on exit.
- **+** suppress a NEWLINE at exit or after text output.

## Note

> The X command returns control directly to the shell.

### Example

```
F-OPEN 1 SALES
XCannot Open SALES file!
```

The X command stops execution of the program if the file SALES cannot be opened, and displays a suitable message.

See also List processing

Back to [jCL.](./../README.md)
  
<PageFooter />