# OPENPATH

**Created At:** 9/21/2017 1:25:59 PM  
**Updated At:** 11/27/2018 9:39:43 AM  
**Original Doc:** [277542-openpath](https://docs.jbase.com/36868-jbase-basic/277542-openpath)  
**Original ID:** 277542  
**Internal:** No  

**Tags:**
<badge text='record handling' vertical='middle' />
<badge text='file handling' vertical='middle' />

## Description

The **OPENPATH** statement opens a file (given an absolute or relative path) to a descriptor variable within jBASE BASIC.

```
OPENPATH expression1 TO {variable} {SETTING setvar} THEN|ELSE statements
```

Where:

- **expression1** should be an absolute or relative path to the file including the name of the file to be opened,
- If specified, **variable** will be used to hold the descriptor for the file. It should then be to access the file using [READ](./../read) and [WRITE](./../write). If no file descriptor variable is supplied, then the file will be opened to the default file descriptor,
- If the **OPENPATH** statement fails it will execute any **statements** associated with an **ELSE** clause. If successful, the **OPENPATH** will execute any **statements** associated with a **THEN** clause. The syntax requires either one or both of the **THEN** and **ELSE** clauses.

If the **SETTING** clause is specified and the open fails, setvar will be set to one of t[hese values](./../incremental-file-errors).

## Note

> The path specified may be either a relative or an absolute path and must include the name of the jBASE file being opened.
>
> The file that is the subject of the **OPENPATH** statement can be of any type known to the jBASE system. Its type will be determined and correctly opened transparently to the application, which need not be aware of the file type.

A jBASE BASIC program can open an unlimited amount of files.

An example of use is as:

```
OPENPATH "C:\Home\CUSTOMERS" TO F.Customers ELSE ABORT 201, "CUSTOMERS"
```

to open the file CUSTOMERS (located in C:\Home) to its own file descriptor F.Customers, or:

```
OPEN "F:\Users\data\CUSTOMERS" ELSE ABORT 201, "CUSTOMERS"
```

to open the CUSTOMERS file (located in F:\Users\data) to the default file variable.

See also: [OPEN](./../open) statement.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
