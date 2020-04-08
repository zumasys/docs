# External Representation of Data

<PageHeader />

**Tags:**
<badge text='file indexing' vertical='middle' />

In jBASE there is a concept of internal and external representation of data. These differences usually materialize, but are not limited to fields where dates and times are stored.

An "external" representation of a date is that which a user might understand, such as "15 JULY 1956" or "8/22/87". The data in the file would normally be stored in "internal" representation, and in the case of dates this is the number of days since 31 DEC 1967.

It may be desired for instance to create an index on a date field that is stored in the internal representation of date. The following would create an index on attribute 7, and it does so as a right justified (i.e. numeric) then sort so that the numbers in attribute 7 are sorted numerically (i.e. sorted in ascending dates)

```
jsh --> CREATE-INDEX ORDERS ORDER.DATE BY-AR 7
```

Assuming attribute 7 is the order date stored as a numeric value (i.e. count of days since 31 DEC 1967) then the following command would select all orders received on and after 1st January 1997.

```
jsh --> key-select ORDERS ORDER.DATE GE 10594
```

where 10594 is the number of days since 31 DEC 1967.

Obviously this isn't a particularly friendly sort of command ! The answer is to use the "look-up" code definition when an index is first created. When this is defined it means that any subsequent queries against the index from key-select or query-index will have that input string converted from an external representation to an internal representation. The following is a modification of the above example to show the index being created with the -lD option (which causes input data to be passed through the "D" conversion) and the modified, easier to use, version of key-select

```
jsh --> CREATE-INDEX -lD ORDERS ORDER.DATE BY-AR 7
```

```
jsh --> key-select ORDERS ORDER.DATE GE 1-JAN-1997
```

The look-up code only applies to the key-select or query-index command. Statements inside jBC code such as SELECTINDEX or SELECT .... ATKEY will continue to use the internal representation and no lookup code will be applied. The following is an example of jBC code to do the equivalent of the above key-select statement.

```
filename = "ORDERS"
OPENINDEX filename ,"ORDER.DATE" TO indexvar ELSE STOP 201,filename
SELECT indexvar TO list ATKEY "10594"
LOOP WHILE READNEXT KEY index.value,record.key FROM list DO
    PRINT "Next key past 1st Jan 1997 is ":OCONV(index.value,"D")
    PRINT "  from record key ":record.key
REPEAT
```

Back to [Indexes](./../README.md)
