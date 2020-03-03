# SSELECT

**Created At:** 9/28/2017 10:57:41 AM  
**Updated At:** 1/5/2018 6:22:11 PM  
**Original Doc:** [278821-sselect](https://docs.jbase.com/36868-jbase-basic/278821-sselect)  
**Original ID:** 278821  
**Internal:** No  

## Description

The **SSELECT** statement may be used to create:

- A numbered select list of record IDs in sorted order from a jBASE hashed file
- A numbered select list of record IDs from a dynamic array
- A select list of record IDs from a dynamic array is not in sorted order.

This list can then be accessed by subsequent [READNEXT](./../readnext) statement, which removes one record ID at a time from the list.

It may take the forms below:

```
SSELECT [variable] [TO list.number] [ON ERROR statements]
```

or

```
SSELECTN [variable] [TO list.number] [ON ERROR statements]
```

or

```
SSELECTV [variable] TO list.variable [ON ERROR statements]
```

Where:

**variable** can specify a dynamic array or a file variable. If it specifies a dynamic array, the record IDs must be separated by field marks (ASCII 254). If **variable** specifies a file variable, the file variable must have previously been opened. If **variable** is not specified, the default file is assumed. If the file is neither accessible nor open, or if **variable** evaluates to null, the **SSELECT** statement fails and the program enters the debugger with a run-time error message.

The **TO** clause specifies the select list that is to be used. **list.number** is an integer from 0 through 10. If no **list.number** is specified, select list 0 is used.

The **ON ERROR** clause is optional in **SSELECT** statements. The **ON ERROR** clause lets you specify an alternative for program termination when a fatal error is encountered during processing of a **SSELECT** statement.

The record IDs of all the records in the file forms the list. The record IDs are listed in ascending order. Each record ID is one entry in the list.

The [SSLECTV](./../sselectv) statement can be used to store the select list in a named list variable instead of to a numbered select list. **list.variable** is an expression that evaluates to a valid variable name.

## International Mode

When using the **SSELECT** statement in International Mode, the statement will use the currently configured locale to determine the rules by which each string is considered less than or greater than the other for sort purposes.

An example of use would be opening the file 'SLIPPERS' to the file variable 'DSCB', then creating an active sorted select list of record IDs.  
The [READNEXT](./../readnext) statement assigns the first record ID in the select list to the variable @ID, then displays it.

```
OPEN '','SLIPPERS' TO DSCB ELSE CRT "Not Open"
SSELECT
READNEXT @ID THEN CRT @ID
```

Go back to [jBASE BASIC](./../README.md)
