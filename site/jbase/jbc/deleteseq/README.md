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
DELETESEQ Expression, FileVar{SETTING setvar} {ON ERROR Statements} {LOCKED Statements} THEN | ELSE Statements
```

Where:

- **Expression** specifies the variable to contain next record from sequential file.
- **FileVar** specifies the file descriptor of the file opened for sequential access.
- **Statements** are conditional jBASE BASIC statements.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
