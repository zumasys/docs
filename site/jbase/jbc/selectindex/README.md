# SELECTINDEX

<PageHeader />

**Tags:**
<badge text='file indexing' vertical='middle' />
<badge text='indexes with jbc' vertical='middle' />

## Description

This statement will create a dynamic array of record keys based on a single selection of a single index key value. It is more efficient to use a combination of [OPENINDEX](openindex) and [READNEXT](./../readnext/README.md) statements rather than the SELECTINDEX, but this statement was included for compatibility with legacy applications.

The command takes the general form:

```
SELECTINDEX index-name{,index-key} FROM file-var {TO select-var}
```

where **index-name** must correspond to the name of a valid index created on the file that has been opened to the file descriptor **file-var**.

If **index-key** is specified it must correspond to an indexed value within the index specified by **index-name**. If **select-var** is specified it is used to hold the select list created by the SELECTINDEX statement.

## Note

> Given an opened file descriptor this statement will select all the record keys in this file, sorted by the index definition **index-name**. An optional variable "index-key" can be used to restrict this selection to a single index key value. The value of "index-key" will be the raw value of the index data - no lookup code processing will be done on this value. For example if the index was created as a numeric field with a D2 lookup code, the values in "index-key" would be the numeric date (e.g. 13640) instead of the external representation (e.g. "05-MAY-2005").

### Example 1

Assuming a file called CUSTOMERS exists, and an index definition exists called "Name" , then the following code will display all the record keys which have the name "Smith". Note that the name must be exactly "Smith", a name such as "Smithy" will not be included

```
filename = "CUSTOMERS"
OPEN filename TO filevar ELSE STOP 201,filename
SELECTINDEX "Name","Smith" FROM filevar TO Smith.list
LOOP WHILE READNEXT KEY index.value,record.key FROM Smith.list DO
    CRT index.value,record.key
REPEAT
```

In the above example the variable "index.value" will always be returned as a "" (null) string. This is because normal select lists only contain record keys and multi-value numbers. In the above example it would perhaps be more appropriate to use the following loop.

```
LOOP WHILE READNEXT record.key FROM Smith.list DO
   CRT record.key
REPEAT
```

### Example 2

If an index on a date field exists, the following jBC code would be correct if it is desired to look for all records whose date is "23-July-1970".

```
SELECTINDEX "Date" , ICONV("23-JULY-1970") TO listName
LOOP WHILE READNEXT record_key FROM listName DO ...
```

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
