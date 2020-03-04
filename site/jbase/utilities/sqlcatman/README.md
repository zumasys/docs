# SQLCATMAN

**Created At:** 9/11/2018 12:06:59 PM  
**Updated At:** 3/12/2019 5:26:40 PM  
**Original Doc:** [sqlcatman](https://docs.jbase.com/46963-utilities/sqlcatman)  
**Original ID:** 338983  
**Internal:** No  

**Tags:**
<badge text='lookup table' vertical='middle' />
<badge text='catalog' vertical='middle' />
<badge text='sql ' vertical='middle' />
<badge text='sqlcatman' vertical='middle' />
<badge text='sql catalog lookup' vertical='middle' />

## Description

The **SQLCATMAN** utility provides a means of updating the SQL Catalog lookup table (see [JSQLFILENAME\_CATALOG](https://docs.jbase.com/41717-environment-variables/371305)). This table is used to specify which files are accessible to jBASE via the SQL and ODBC interfaces.

```
jsh --> sqlcatman [options] [ -f ( filename (-e dictname)? ) (tablename)? ]
```

where

- **options** may be :
  - -a  Add catalog entry, (CREATE TABLE)
  - -d  Add catalog entry, (CREATE DICT TABLE)
  - -r   Delete catalog entry, (DROP TABLE)
  - -h  Verbose Help, examples etc...
- **tablename** is the name of SQL table
- **filename** is the name of jBASE file (if omitted same as tablename)
- **dictname** is the name of jBASE dict file to use, (if omitted default for filename)

## **Adding new entries, option a and d**

When adding new entries, ( [ -f filename (tablename)? ] ), if the f filename option is not used, the default behavior is to use the table name for both the jBASE and SQL table. e.g.

```
sqlcatman -a ALTERTEST
```

Creates an entry in the SQL catalog called ALTERTEST, this will access the jBASE file ALTERTEST

Use the -f option to specify the jBASE file name, this is aimed at non standard SQL filenames, e.g. (a file with period marks in the name) for instance:

```
sqlcatman -a -f MY.JBASE.FILE ALTERTEST
```

This adds an entry for the jBASE file MY.JBASE.FILE, but when accessing it via SQL its called ALTERTEST.

## -e dictname

Sometimes it may be necessary to use an alternative dictionary with a file, perhaps to help limit which dictionary items users can see, or have a different view for each department. Take for example, a jBASE file called MYCUST. Internally it is made up of two separate files:

- MYCUSTS, which is the Data portion of the table and ,
- MYCUSTS]D Which is the Dictionary portion.

MYCUSTS]D holds all of the available dictionary's, however you may only want some users to see contact

details when doing a SQL query, for this use the -e option

```
sqlcatman -a -f /home/SOME.DATA -e /home/LIMMITEDCUSTS]D MYCUSTS
```

This still creates an entry for the table MYCUSTS but uses a different dictionary to define which columns

will be used.

## Add ( -a )

```
 sqlcatman -a ALTERTEST
```

Adds an entry for 'ALTERTEST'

```
sqlcatman -a -f ALTERTEST SQL_TABLE_NAME
```

Adds an entry for 'ALTERTEST', but saves its name as 'SQL\_TABLE\_NAME'. Any SELECT will be on SQL\_TABLE\_NAME

## Add Dictionary Table ( -d )

DICT tables are SQL tables that point to jBASE dictionaries

```
 sqlcatman -d -f ALTERTEST D_ZZ2
```

Using the dictionary from ALTERTEST, adds an entry using the alias 'D\_ZZ2'.

```
 sqlcatman -d D_ALTERTEST
```

Using the dictionary from ALTERTEST, adds an entry using the alias 'D\_ALTERTEST'.

## Delete (-r)

```
sqlcatman -r SQL_TABLE_NAME
```

Removes the entry for 'SQL\_TABLE\_NAME'

Back to [Utilities](./../utilities)
