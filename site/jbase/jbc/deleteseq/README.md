# DELETESEQ

<PageHeader />

**Tags:**
<badge text='sequential files' vertical='middle' />

## Description

The **DELETESEQ** statement deletes a sequential file. It takes the general form:

```
DELETESEQ Expression {SETTING setvar} {ON ERROR statements} {LOCKED Statements} THEN | ELSE Statements
```

or

```
DELETESEQ Expression, FileVar {SETTING setvar} {ON ERROR Statements} {LOCKED Statements} THEN | ELSE Statements
```

Where:

- **Expression** specifies the explicit path of an operating system file to delete.
- **Expression,FileVar** **FileVar** is a file that resides in the directory path specified by **Expression**
- **Statements** are conditional jBASE BASIC statements.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
