# OPEN

**Created At:** 9/21/2017 12:30:45 PM  
**Updated At:** 4/24/2019 4:27:09 PM  
**Original Doc:** [277537-open](https://docs.jbase.com/36868-jbase-basic/277537-open)  
**Original ID:** 277537  
**Internal:** No  

**Tags:**
<badge text='fileopen' vertical='middle' />
<badge text='record handling' vertical='middle' />
<badge text='file handling' vertical='middle' />

## Description

The **OPEN** statement opens a file or device to a descriptor variable. It takes the general form:

```
OPEN{expression1,} expression2 TO {variable} {SETTING setvar} THEN|ELSE statements
```

Where:

- The combination of **expression1** and **expression2** should evaluate to a valid file name of a file type that already installed on the jBASE system. If the file has a dictionary section to be opened by the statement then specify by the literal string "DICT" being specified in **expression1**.
- If specified, the **variable** will be used to hold the descriptor for the file. It should then be used to access the file via [READ](./../read) and [WRITE](./../write). If no file descriptor variable is supplied, then the file will be opened to the default file descriptor. Specific data sections of a multi level file may specified by separating the section name from the file name by a "," char in **expression2**.
- If specifying the **SETTING** clause and the open fails, **setvar** will be set to one of [these values](./../incremental-file-errors).

If the **OPEN** statement fails it will execute any statements associated with an **ELSE** clause. If the **OPEN** is successful, it will execute any statements associated with a **THEN** clause. The syntax requires either one or both of the THEN and ELSE clauses.

The **OPEN** statement uses the environment variable JEDIFILEPATH to search for the named file. If there is no defined named file, it will search the current working directory followed by the home directory of the current process.

The file that is the subject of the **OPEN** statement can be of any type known to the jBASE system. Its type will be determined and correctly opened transparently to the application, which need not be aware of the file type. A jBASE BASIC program can open an unlimited amount of files.

An example of use is as:

```
OPEN "DICT", "CUSTOMERS" TO F.Dict.Customers ELSE
ABORT 201, "DICT CUSTOMERS"
END
```

to open the dictionary section of file CUSTOMERS to its own file descriptor F.Dict.Customers, or:

```
OPEN "CUSTOMERS" ELSE ABORT 201, "CUSTOMERS"
```

to open the CUSTOMERS file to the default file variable.

Go back to [jBASE BASIC](./../README.md)
