# SELECT

<PageHeader />

**Tags:**
<badge text='jbc and indexes' vertical='middle' />

## Description

When the SELECT statement is used with an index variable (created with the OPENINDEX statement) then it can be extended to the following syntax.

```
SELECT indexvariable {TO select-def} {ATKEY index-key{,record-key{,vmcount}}}
```

This form of the SELECT statement allows for use of the index data in conjunction with an index definition variable created with an OPENINDEX statement. In its simplest form the following example shows to display all the record keys within a file that have a secondary index (in ascending sequence\*\*) called "NAME" and thus the record keys will be displayed according to the sorted order of the index definition for "NAME"

```
OPENINDEX "CUSTOMERS", "NAME" TO index.var ELSE STOP 201,"NAME in CUSTOMERS"
SELECT index.var
LOOP WHILE READNEXT record.key DO
    CRT record.key
REPEAT
```

"TO select-def" may be used to perform the selection to a numbered list or a variable instead of to the default select list.

The use of the "ATKEY index-key{,record-key{,vmcount}} is optional and allows for positioning at a specific point in the index. In its minimal form, an index key at which to start the selection is specified. As each index key may contain many record keys, one can further sub-specify at which record key within that index. Finally each record may be multi-valued with the same index data, it is possible to sub-position at the value mark within the record key.

The SELECT .. ATKEY statement uses raw data whereas the key-select and query-index programs assume the index specification is in external representation and pass it through any defined lookup code.

\*\*When no starting index value is specified, the default value is 'null'. This works as expected for an ascending sort as 'null' always sorts before all other values. However, a default value of 'null' is hardly desirable for a descending sort, so it is necessary to use the "ATKEY" extension of the SELECT statement to force the select to start at the 'beginning' of a descending index. For example, if the "NAME" index was sorted in descending sequence then the statement

```
SELECT index.var ATKEY CHAR(127)
```

would place the pointer at the beginning of the index. This will work for descending numeric index keys as well.

### Example

Consider the following records written to a file with a simple left justified index created on a multi-valued attribute 1.

| Record Key | Data in attribute 1 |  |
| --- | --- | --- |
| A | COOPER]SMITH]JONES]COOPER]COOPER |
| B | COOPER]CLARK |
| C | JONES |

The following index data will now have been created for the above data

| Index key | Index data |
| --- | --- |
| CLARK | Key "B" at multi-value 2 |
| COOPER | Key "A" at multi-value 1 |
|  | Key "A" at multi-value 4 |
|  | Key "A" at multi-value 5 |
|  | Key "B" at multi-value 1 |
| JONES | Key "A" at multi-value 3 |
|  | Key "C" at multi-value 1 |
| SMITH | Key "A" at multi-value 2 |

The following are examples of jBC code on the above data and the resultant screen output along with comments on the action.

- ### SELECT the entire index

```
OPENINDEX filename,"INDEX1" TO index.var ELSE STOP 201,"INDEX1 in ":filename
SELECT index.var
LOOP WHILE READNEXT key DO
    CRT key
REPEAT
```

```
jsh. test1
B
A
A
A
B
A
C
A
```

Note that the order of the record keys (B,A,A,A,B,A,C,A) is identical to the table of index information shown.

- ### SELECT the index but only include names "JONES"

```
OPENINDEX filename,"INDEX1" TO index.var ELSE
    STOP 201,"INDEX1 in ":filename
END
SELECT index.var ATKEY "JONES"
LOOP
    READNEXT KEY index.key,record.key ELSE index.key = "
    WHILE index.key EQ "JONES" DO
        CRT index.key,record.key
    REPEAT
```

```
jsh. test2
JONES A
JONES C
```

In this example the program exits the loop once it run out of names of "JONES". Only two of these are present, the first in record key "A" and the second in record key "C".

- ### SELECT the index starting at "JONES" but use READPREV to find all the names that precede JONES (i.e. do NOT include JONES)

```
OPENINDEX filename,"INDEX1" TO index.var ELSE STOP 201,"INDEX1 in ":filename
SELECT index.var ATKEY "JONES"
LOOP WHILE READPREV KEY index.key,record.key,mvno DO
    CRT index.key,record.key,mvno
REPEAT
```

```
jsh . test3
COOPER B 1
COOPER A 5
COOPER A 4
COOPER A 1
CLARK B 2
```

In this example the index keys are read in reverse order. As a SELECT is assumed to be in forward direction, the first READPREV constitutes a change of direction subject to the rules described in the READPREV description. Hence the first index key is the one that precedes the first JONES entry.

Back to [Indexes](./../README.md)

  
<PageFooter />
