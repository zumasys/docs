# NOBUF

<PageHeader />  

## Description

jBASE can buffer for sequential input and output operations. The **NOBUF** statement turns off this behavior and causes all writes to the file to be performed immediately. The **NOBUF** statement should be used in conjunction with a successful [OPENSEQ](./../openseq) statement and before any input or output is performed on the record.

It takes the general form:

```
NOBUF file.variable {THEN statements [ELSE statements] | ELSE statements}
```

If the **NOBUF** operation is successful, it executes the **THEN** statements otherwise, executes the **ELSE** statements. If **file.variable** is not a valid file descriptor then **NOBUF** statement fails and the program enters the debugger.

In the following example, if RECORD in DIRFILE can be opened, output buffering is turned off:

```
OPENSEQ 'DIRFILE', 'RECORD' TO DATA THEN NOBUF DATA
ELSE ABORT
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
