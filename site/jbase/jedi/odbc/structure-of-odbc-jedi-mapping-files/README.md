# Structure of ODBC jEDI Mapping Files

*<PageHeader />

## ODBC jEDI File Stub

When you create a file of type *ODBC*, a small file (*stub*) is generated. This stub instructs the jBASE file interface that it's interacting with an *ODBC* jEDI type file. When a jBASE program or command interacts with an *ODBC* type file, the *jEDI* driver parses the stub and uses the **connect** parameter (see example stub below) to retrieve the *DSN connection information string* from the **jEDIdrivers.ini** file. It then checks an internal *RDBMS* map to determine if a connection has already been made to the target *RDBMS*. If not, a new connection is established. Connections are persisted until the last file for a given connection is closed.

### Note #1

Subsequent I/O operations (e.g. SELECT, READNEXT, READ, WRITE) involve preparing *SQL* statements and binding parameters. Each type of operation has its own statement, and is only prepared on initial use.

Example stub:

```
JBC__SOB JediInitODBC CUSTOMER exist=0 connect=default expand=2 uniquekey=1 def=ID,0,5,N,,,1<tab>Name,1,255,A<tab>FirstName,2,255,A<tab>Phone,3,15,A,Agency<tab>Address,4,255,A,Agency,,,1<tab>ZIP,4,5,A,Agency,,,2<tab>City,4,26,A,Agency,,,3<tab>OrderNumber,5,5,N,OrderNumber<tab>OrderZone,6,10,A,OrderNumber|Zone<tab>UpdDate,7|8,,DT<tab>
```

Dissecting the above stub:

| <!----> | <!----> |
| --- | --- |
| JBC\_\_SOB | The jBASE file type (**SOB** stands for *Shared Object)*. |
| JediInitODBC | The initializing function used the first time an *ODBC*type file is used by a jBASE process. |
| CUSTOMER | The table name. |
| exist | Denotes whether the table existed when the CREATE-FILE was run. |
| connect | The label corresponding to the connection information string from the **jEDIdrivers.ini**file. |
| expand | The multi-value expansion type: **[0,1,2]**. Not applicable for existing tables. |
| uniquekey | Typically **1,** but if there is no primary/unique column available in the table this must be **0**. |
| def | A copy of the csv definition used at CREATE-FILE time (with line-breaks converted to *tabs*).<br>*Must have a trailing tab to terminate the definition.* |

## ODBC jEDI CSV Mapping Files

If you need to create a new table in the *RDBMS*, or want a bit more control over the mapping of an existing table, you will need to create a csv file. These can be generated from multi-value dictionaries, created in notepad, or in a spread-sheet editor to facilitate the mapping of the database table schema from jBASE to the desired *RDMBS*. The csv file format/mapping schema is as follows:

| <!----> | <!----> |
| --- | --- |
| ColumnName | Valid *SQL* column name |
| Attribute | Typically a single numeric value, with the exception of DateTime (DT) types which can have two attributes separated by a \| to split the date and time into separate fields.<br>***There must be at least one field set to attribute 0 to denote a primary key.*** |
| Width | Mandatory integer value for character type fields  |
| Type | See [Types](#types) below |
| Group Association  | Optional group name for repeating groups.<br><br>For sub-values the required format is: <br>{**multi-value name**\|**sub-value name**}. <br>The name entered will be appended to the primary table name (with a separation character of # unless **TblSep** is defined in the **jEDIdrivers.ini** file) when creating the associated table.  |
| MvGroup Controlling Flag  | **Y** or **1** to set the flag, or it can be left blank.<br><br>This flag should be set against a field that will always have a value when more than one field has the same Group Association. In jBASE terms this is akin to a *Controlling* dictionary. |
| Not Null Flag  | **Y** or **1** (This column *cannot* be null),<br>or **N,** **0,** or leave blank (This column *can* be null). |
| Positional multi-value | For multi-value (sub-value) fields that are non-repeating, you can enter the multi-value (or sub-value if within a multi-value group) position.<br>Note that if positional values are used in combination with a multi-value group association, this implies positional sub-values within a multi-value. If the group association is defined as a multi-sub-value association, this implies positional multi-values with repeating sub-values. |
| Compound Field Literal  | The literal character used for fields that are composite (e.g. date\*time). It is appended to the column value when retrieving data and is intended to be used to combine multiple fields in the same attribute.<br>The literal value does not appear in the *RDBMS* because the driver adds/removes it when reading/writing from/to the *RDBMS*.  |
| Foreign Source  | Facilitates foreign key relationships at the *RDBMS* level. Format must be table\_name.column\_name, and the table\_name must exist in the *RDBMS*. Additionally, there must also be at least two lines, the first pointing to attribute 0, and at least one pointing to an attribute other than 0.   |

### Types

| <!----> | <!----> |
| --- | --- |
| A{N} | Varchar |
| C | Char  |
| D | Date |
| T  | Time |
| DT  | DateTime|
| UTC | Universal Time Conversion< |
| N*d* | Numeric (where d is optional number of decimals)|

Below is an example of a csv file containing a valid dictionary mapping schema:

```
CUSTOMER.csv

CUSTNBR,0,10,AN,,,1
SPLITDT,1|2,,DT,,,1
MVDT,3,,DT,,,1
COMPDT,4,,DT,,,1,,*
SIZE,5,,N
```

### Note #2

The definition above defines a primary key, column “CUSTNBR”, as a VARCHAR(10).

SPLITDT: Pulling from a DateTime column of the same name, the date will appear in attribute 1 and the time in attribute 2.

MVDT: Similar to SPLITDT, but will appear as date]time on attribute 3 (i.e. multi-values 1 and 2).

COMPDT: Another DateTime that will appear as date\*time on attribute 4.

SIZE: A Number type column that will appear on attribute 5.

To generate a valid csv mapping file before running the *ODBC* jEDI, you can use the **jCreateCSV** command to generate one from an existing dictionary in jBASE.

### jCreateCSV Command Syntax

The command syntax is as follows:

jCreateCSV file\_name target.csv {prefix\_chars} {options}

Options:

| <!----> | <!----> |
| --- | --- |
| **-D {type}** | **Dictionary type build driver valid**<br>Types:<ul><li><strong><u>J</u></strong> for jDC,</li><li><u><strong>P</strong></u> or<strong>&nbsp;</strong><u><strong>U</strong></u> for Prime/Unidata</li><li><u><strong>A</strong></u> option (appended to J) for A types only (i.e. do not include &lsquo;S&rsquo; type dictionaries in the mapping).</li></ul> |
| **- O** | **Overwrite previous definition**<br>Leading characters we want to strip from the dictionary when creating column names in a csv. This is useful in cases where a standard prefix has been used to key the dictionaries (many 4GLs do this), and you do not want this prefix used on the column names.  |

----------------------------------------------------------------------------------------------------------------------------

[Introduction to the ODBC jEDI](./../introduction-to-the-odbc-jedi)

[Installing the ODBC jEDI on Linux/UNIX](./../installing-the-odbc-jedi-on-linux&unix)

[Installing the ODBC jEDI on Windows](./../installing-the-odbc-jedi-on-windows)

[Structure of ODBC jEDI Initialization Files](./../structure-of-odbc-jedi-initialization-files)

[Configuring the ODBC jEDI on Linux/UNIX](./../configuring-the-odbc-jedi-on-linux&unix)

[Configuring the ODBC jEDI on Windows](./../configuring-the-odbc-jedi-on-windows)

[Using the ODBC jEDI](./../using-the-odbc-jedi)

Back to [ODBC](./../README.md)

<PageFooter />
