# DELETEU

**Created At:** 9/6/2017 7:42:34 AM  
**Updated At:** 1/5/2018 1:37:52 PM  
**Original Doc:** [276027-deleteu](https://docs.jbase.com/36868-jbase-basic/276027-deleteu)  


# Description

The **DELETEU** statement is used to delete a record without releasing the update record lock set by a previous [READU](278774-readu) statement.

The file must first be opened with the [OPEN](277537-open) statement. If a file variable is specified in the [OPEN](277537-open) statement, it may then be used in the **DELETEU** statement. A comma must be placed between the file variable and the record ID expression.

If specifying no file variable in the **DELETEU** statement, the statement applies to the default file.



See also: [READ](277646-read) statements, [OPEN](277537-open) statement (for a description of the default file).

Go back to [jBASE BASIC](263498-jbase-basic).
