# SELECT

**Created At:** 9/28/2017 9:10:27 AM  
**Updated At:** 1/5/2018 6:15:03 PM  
**Original Doc:** [278801-select](https://docs.jbase.com/36868-jbase-basic/278801-select)  


# Description

The **SELECT**statement creates a select list of elements in a specified variable. The statement takes the general form:

```
SELECT {variable1} {TO variable2 | listnum} {SETTING setvar}
```

Where:

variable1 can be an [OPEN](277537-open)ed file descriptor, in which case the record keys in the specified file will be selected, or an ordinary variable in which case each field in the variable will become a list element.

variable1 may also be an existing list in which case the elements in the list will be selected.

If variable1 is not specified in the statement then it assumes the default file variable.

If variable2 is specified then the newly created list will be placed in the variable. Alternatively, specify a select list number in the range 0 to 10 with listnum. If neither variable2 nor listnum is specified then it assumes the default list variable.

If specifying the SETTING clause and the select fails, it sets setvar to one of [these values](277647-increamental-file-errors).



When constructing a list from record keys in a file, it does so by extracting only the first few keys, which when removed from the list obtains the next few keys and so on. Therefore, the creation of the list is not immediate. This means that the list could contain records, written to the file after starting the **SELECT** command.

Consider the situation where you open a file,**SELECT** it and then, because of the keys obtained, write new records to the same file. It would be easy to assume that these new keys would not show up in the list because you created the list before the new records existed. This is not the case. Any records written beyond the current position in the file will eventually show up in the list. In situations where this might cause a problem, or to ensure that you obtain a complete, qualified list of keys, you should use a slower external command like jQL SELECT or [SSELECT](278821-untitled-question) and then [READNEXT](278659-readnext) to parse the file.

If using a variable to hold the select list, then it should be unassigned or null before the **SELECT**. If it contains a number in the range 0 to 10 then it will use the corresponding select list number to hold the list, although you can still reference the list with the variable name. This "feature" is for compatibility with older platforms. See also example 3.

Lists can be selected as many times as required.

Examples of use include :

```
OPEN "Customers" ELSE ABORT 201, "Customers"
SELECT TO CustList1
SELECT TO CustList2
```

or:

```
OPEN "Customers" TO CustFvar ELSE ABORT 201, "Customers"
SELECT CustFvar TO 2
DONE = 0
LOOP
    READNEXT CustId FROM 2 ELSE Done = 1 UNTIL DONE DO
    GOSUB ProcessCust
REPEAT
```



Go back to [jBASE BASIC](263498-jbase-basic).
