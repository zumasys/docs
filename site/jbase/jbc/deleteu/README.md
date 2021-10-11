# DELETEU

<PageHeader /> 

## Description

The **DELETEU** statement is used to delete a record without releasing the update record lock set by a previous [READU](./../readu/README.md) statement.

The file must first be opened with the [OPEN](./../open/README.md) statement. If a file variable is specified in the **OPEN** statement, it may then be used in the **DELETEU** statement. A comma must be placed between the file variable and the record ID expression.

If specifying no file variable in the **DELETEU** statement, the statement applies to the default file.

See also: [OPEN](./../open/README.md) statement (for a description of the default file).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
