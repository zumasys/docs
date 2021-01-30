# jSQL

<PageHeader />

## Using SQL against a jBASE Database
jBASE includes support for a subset of the ANSI standard for SQL (Structured Query Language). Typical use of SQL against a jBASE database is via ODBC and JODBC but the same query structure can be used in any jBASE environment/program preceding the command with **SQL**.

See also [Introduction to ODBC](../connectivity/ODBC/README.md)

### Commands used against tables (files)
**SQLDELETE**  
**SQLDESCRIBE**  
**SQLINSERT**  
**SQLSELECT**  
**SQLUPDATE**  

The following command is a special case query command that returns an active select list:  
**SQLSELECTL**  
 (see [jQL](../jql/README.md) for more information on *select lists*)

### Commands for administering tables (files)
**SQLALTERTABLE**  
**SQLDROPTABLE**  
**SQLCREATETABLE**  
**SQLCREATEDICTTABLE**

## SQL Compliance
A common problem with using SQL with a jBASE database is existence of illegal characters in filenames and dictionaries (*tables* and *columns* from a SQL perspective). 

For example:

```INVOICE-HISTORY```  
or  
```INVOICE.HISTORY```

are both invalid.

To correct this problem without affecting the existing applications jBASE provides a SQL Catalog file
(see [SQLCATMAN](../utilities/sqlcatman/README.md)).

Once you have your SQL Catalog file/directory created you could then create an entry like:

```
INVOICE_HISTORY
001 /dbms/ACCOUNTS/INVOICE-HISTORY
002 /dbms/ACCOUNTS/INVOICE-HISTORY]D
```

### SQL Column Names
Similar to file names being non-SQL compliant, dictionaries also need addressing as valid *column* names. There are two recommended ways of achieving this goal:

1. Create a separate SQL compliant dictionary file which would then be applied to attribute <2> of the SQL Catalog entry.
2. Use **jDP_Options** to control which dictionaries are visible to any SQL query.

In both cases it is recommended to make use of the [jBASE Extended Dictionary](../files/extended-dictionary/README.md).

As an example, given the following dictionary:
```
PAID.DATE
001 A
002 11
003 Date Paid
004
005
006
007 D2/
008
009 R
010 8
```
an extended dictionary version could be:
```
PAID.DATE
001 A
002 11
003 Date Paid
004
005
006
007 D2/
008
009 R
010 8
011
012
013
014
015
016
017
018
019
020
021
022
023
024
025
026
027
028
029
030 JBASE_EDICT_START
031 123
032 12
033
034 PAID_DATE
035
036
037
038
039 1073741825
040
041
042
043
044
045
046
047
048
049
050
051
052
053
054 JBASE_EDICT_END
```

See also [jDP_Options](../files/extended-dictionary/#jdp-options).

<PageFooter />
