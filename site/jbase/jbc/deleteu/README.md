# DELETEU

**Created At:** 9/6/2017 7:42:34 AM  
**Updated At:** 1/5/2018 1:37:52 PM  
**Original Doc:** [276027-deleteu](https://docs.jbase.com/36868-jbase-basic/276027-deleteu)  
**Original ID:** 276027  
**Internal:** No  

## Description

The **DELETEU** statement is used to delete a record without releasing the update record lock set by a previous [READU](./../readu) statement.

The file must first be opened with the [OPEN](./../open) statement. If a file variable is specified in the [OPEN](./../open) statement, it may then be used in the **DELETEU** statement. A comma must be placed between the file variable and the record ID expression.

If specifying no file variable in the **DELETEU** statement, the statement applies to the default file.

See also: [READ](./../read) statements, [OPEN](./../open) statement (for a description of the default file).

Go back to [jBASE BASIC](./../README.md)
