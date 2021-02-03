# Extended Dictionary Definitions  (EDICT)

<PageHeader />

**Tags:**
<badge text='jsql' vertical='middle' />
<badge text='odbc' vertical='middle' />
<badge text='jagent' vertical='middle' />

The jBASE Extended Dictionary enhances a regular DICT item to provide better control
when an SQL query (for example) is querying the file.

For example a date type dictionary - INVOICE_DATE - may be in the form:

```
001 D
002 1
003 D2/
004 Invoice Date
005 8R
```

or

```
001 A
002 1
003 Invoice Date
004
005
006
007 D2/
008
009 R
010 8
```

The extended dictionary typically starts at attribute 30.  

Taking the first example above:

```
001 D
002 1
003 D2/
004 Invoice Date
005 8R
...
030 JBASE_EDICT_START
031 123
...
039 1073742081
...
054 JBASE_EDICT_END
```

This specifies that the field (column) is a date type, is visible and the conversion code on <7> (or <3> in the case of "D" type) should be used.  

Starting with **jBASE 5.8** the conversion code is irrelevant from an ODBC perspective when using date and time fields as long as you specify the codes **123** and **124** respectively.

## Extended Dictionary Header

The default configuration of the extended dictionary starts on attribute 30 of the existing dictionary. When viewing the following table  **EDICT_START_ATTR** => **30**.  

e.g.

**EDICT_DATA_TYPE** => attribute **31**

**EDICT_FLAGS** => attribute **39**

| Equate | Value | Comments |
| --- | --- | --- |
| EDICT_START               | "JBASE_EDICT_START"   | String defining start of extended dict info |
| EDICT_END                 | "JBASE_EDICT_END"     | String defining end of extended dict info |
| EDICT_OPTIONS_ITEMID      | "jDP_Options"         | Item Id in dictionary for general file and default column options |
| EDICT_LEN                 | 17                    | Number of extended dictionary definitions |
| EDICT_DATA_TYPE           | EDICT_START_ATTR + 1  | Valid data type values |
| EDICT_LENGTH              | EDICT_START_ATTR + 2  | Maximum length of a string field otherwise null |
| EDICT_SCALE               | EDICT_START_ATTR + 2  | Maximum length of a string field; otherwise null |
| EDICT_DESCRIPTION         | EDICT_START_ATTR + 3  | Text description of the field / Auto increment ItemID - next available number |
| EDICT_COLUMN_NAME         | EDICT_START_ATTR + 4  | If not null used as column name rather than dict |
| EDICT_MV_GROUP_NAME       | EDICT_START_ATTR + 5  | If not null dictionary entry belongs to the named MV group table |
| EDICT_SMV_GROUP_NAME      | EDICT_START_ATTR + 6  | If not null dictionary entry belongs to the named SV group table |
| EDICT_MAX_VALUES          | EDICT_START_ATTR + 7  | If not null max values in attr and means it is ctrl field |
| EDICT_MAX_SUBVALUES       | EDICT_START_ATTR + 8  | If not null max subvalues in attr and means it is ctrl field |  
| EDICT_FLAGS               | EDICT_START_ATTR + 9  | Flags as defined below |
| EDICT_STORAGE_FORMAT      | EDICT_START_ATTR + 10 | Format of data in the Item |
| EDICT_FOREIGN_KEY_TABLE   | EDICT_START_ATTR + 11 | Table name of foreign key |
| EDICT_FOREIGN_KEY_COLUMNS | EDICT_START_ATTR + 12 | Column names of foreign key |
| EDICT_DEFAULT_VALUE         | EDICT_START_ATTR + 13 | Default value if not specified on an SQLINSERT |
| EDICT_MV_SV_POS           | EDICT_START_ATTR + 14 | Positional multi-value, sub-value |
| EDICT_XREF_NAME           | EDICT_START_ATTR + 15 | Cross reference to dictionary entry for synonym's entries |
| EDICT_END_MARKER          | EDICT_START_ATTR + EDICT_LENGTH | |

## Extended Dictionary Data Types (EDICT_DATA_TYPE)

| Equate | Value | Comments |
| --- | --- | --- |
| EDict_DT_STRING      | 108 | DT_TYPE_CSTRING, A null terminated string |
| EDict_DT_UINT32      |   4 | DT_TYPE_LU_ longword, logical; 32-bit unsigned quantity |
| EDict_DT_INT32       |   8 | DT_TYPE_L_ longword integer; 32-bit signed 2's-complement |
| EDict_DT_DATE        | 123 | DT_TYPE_ODBC_DATE_ ODBC Date format |
| EDict_DT_TIME        | 124 | DT_TYPE_ODBC_TIME_ ODBC Time format |
| EDict_DT_SCALEDINT32 | 101 | DT_TYPE_LS_ 32-bit signed scaled longword integer |
| EDict_DT_DECIMAL     | 101 | DT_TYPE_LS_ 32-bit signed handles embedded decimal |
| EDict_DT_LONGDECIMAL | 104 | DT_TYPE_QS_ 64-bit signed handles embedded decimal |
| EDict_DT_AUTONUMBER  | 192 | DT_TYPE_AUTONUMBER_ 32-bit signed scaled longword integer |

## Extended Dictionary Flags (EDICT_FLAGS)

The extended dictionary flags field is an integer representation of a bit-mapped field where features can be turned on/off.

There are two uses of these flags:

1. Tables (files)
2. Columns (dictionaries)

### Table options

| Setting | Bit Value |
| --------- | -------: |
| Visible | 1 |
| Not Visible | 2 |
| Insertable | 4 |
| Not Insertable | 8 |
| Deletable | 16 |
| Not Deletable | 32 |

### Column options

| Setting | Bit Value |
| --------- | -------: |
| Visible | 1 |
| Not Visible | 2 |
| Updateable | 4 |
| Not Updateable | 8 |
| Nullable | 16 |
| Not Nullable | 32 |
| SQLNulls | 64 |
| Not SQLNulls | 128 |
| Use Attr 7 | 256 |
| Don't Use Attr 7 | 512 |

Use the following formulas for determining the flag value you require:

Starting with **flags = 1073741824** if you wanted to hide a dictionary from any SQL related query/discovery simply add **2** to the initial flags value resulting in **1073741826**.

To make a column visible but not updatable from SQL you would add **1** and **8** resulting in **1073741833**.

>Why would you need to make a column *visible*? See **jDP_Options** (below)

## jDP_Options

**jDP_Options** is a special dictionary you can add to a file to set default **EDICT_FLAGS** for columns and tables.  

This dictionary is automatically created if you create a file and dictionary using [SQLCREATETABLE](../../jsql/SQL/#sqlcreatetable).

The format if the dictionary is:

```
001 G  
002 default Column flags  
003 default Table flags
```

In the example below the default column flags are set to not visible and tables to visible:  

jDP_Options:

```
001 G
002 1073741826
003 1073741825
```

The advantage of setting the default column flags to be *Not Visible* is if you have many duplicate or calculation type dictionaries that would clutter the column
listing of a table.  

You would then set the **Visible** bit setting in the [EDICT_FLAGS](#extended-dictionary-flags-edict-flags) for the fields you want to appear from a SQL perspective.

<PageFooter />
