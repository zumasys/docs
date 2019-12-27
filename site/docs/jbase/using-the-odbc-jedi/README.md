# Using the ODBC jEDI 

**Created At:** 11/19/2019 7:24:34 PM  
**Updated At:** 12/27/2019 7:33:13 PM  
**Original Doc:** [using-the-jedi-odbc](https://docs.jbase.com/using-the-jedi-odbc)  
**Original ID:** 495889  
**Internal:** Yes  


## Using the ODBC jEDI with an existing table.

Creating an *ODBC*type file from an existing table can be as simple as:

```
CREATE-FILE tablename TYPE=ODBC COLS=*
```

This creates a stub that maps to the **tablename** parameter, and generates a dictionary for each table column so they're ready for querying with *jQL*.

### Note

A comma separated map/definition is generated in lieu of an existing csv.

If you only want to map to a subset of the table, you can specify a column list and an optional primary key (if none of the columns are primary keys).

### Example

You might have a table of ORDERS containing an auto sequenced key, an ORDER\_NBR column, and some other columns you wish to combine into the ODBC jEDI *view* of the table:

CREATE-FILE ORDERS TYPE=ODBC COLS=ORDER\_NBR,PRODUCT,PRICE,DATE\_ORDERED KEY=ORDER\_NBR

The example above will create a stub pointing to the **ORDERS** table, but will treat the **ORDER\_NBR**column as the key to the jBASE dynamic record. The **PRODUCT**, **PRICE,**and **DATE\_ORDERED**columns will be mapped to attributes **1, 2,** **3**and **4**(*datetime*fields are by default split into two fields, therefore the date portion maps to attribute **3** and the time portion to attribute **4**).

## Steps to create an ODBC jEDI stub using a CSV 

To generate a valid csv mapping file, and map it into your desired *RDBMS,*do the following in jBASE:

1. **CREATE-FILE DICT*****filename* 1**

2. Create a dictionary for each table column you wish to map. The ID for each dictionary should be a *valid* column name. The attribute can be whatever you want, however the primary key column must be 0. The dictionary type should be **A** if using the classic PICK style, or **D** for the Prime/Universe style. The heading, justification, and width attributes are not used by the *jEDI* interface, only for running jBASE queries.

### Note

You can create other dictionaries for reporting purposes but you should use S (for classic PICK style) or V / I for Prime/Universe style.

3. **jCreateCSV****{-O} -D*type* *filename* *table**name*****.csv**

The above command reads in all relevant dictionaries for filename, and generates a csv in the CSVdir parameter value defined in the **jEDIdrivers.ini**file.

### Note

It's recommended the csv files are named according to their intended table name (which could be the same as the filename). However, this is not an absolute requirement. Additionally, you can modify the resulting csv if desired using any jBASE or operating system text editor.

4. **CREATE-FILE DATA *filename*****TYPE=ODBC {*additional qualifiers*}**

### Note

The above example assumes the csv is *filename*.csv

The EXISTING argument is optional (the default value is set to YES, meaning the table exists; NO means the table does not exist, and will be created).

### ODBC CREATE-FILE Arguments and Information

Additional arguments you can use in the CREATE-FILE include:


| **CSV=csvname** | The csv option is required if the csv is not filename.csv |
| --- | --- |
| **Table=tablename** | The tablename if not the same as filename |
| **UniqueKey=YES|NO** | Defaults to YES. NO is used if the key column (i.e. attribute 0) is not a unique value per record/row |
| **Existing=YES|NO** | Specifies whether the table already exists, or should be created |
| **WRITEOPTS=[I,U,D]** | Used to restrict updates to a given table. The argument can use any combination of the following values:<br>&lt;**I**&gt;nsert<br>&lt;**U**&gt;pdate<br>&lt;**D**&gt;elete<br>For example, **WRITEOPTS=U** would only allow updates, **WRITEOPTS=ID** would allow inserts and deletes, and **WRITEOPTS=** would not allow any updates<br><br> |
| **Connect=dsn\_label** | Specifies which database connection information string to use from the jEDIdrivers.ini file (**default** is used if this argument is not specified) |

### Note

The attribute mapping from SQL column to multi-value record is arbitrary as there are no duplicates

## CSV/Schema Cleansing

When creating a csv definition from an existing jBASE file, the dictionaries used to generate the csv may cause a table column to not be 100% compliant with the data in the original dynamic-array record (e.g. typically resulting in a {VAR}CHAR type of an insufficient size).

The **jCheckSchema** command can be used to verify and even update the csv so that all the original records can be written to the *RDBMS*.

**jCheckSchema *original\_jBASE\_file* {*schema\_path*}*schema\_def* *{ID}* {options}**

If ***ID***is specified, only that record (keyed by *ID)*is checked. Otherwise, all records (or those in the current active select list) are checked.

**jCheckSchema** options:


| **-a*****list***<br> | Ignore "undefined" for the **attributes** specified in *list*(comma separated)<br> |
| **-c**<br> | **Check** data integrity<br> |
| **-i**<br> | **Interactive:** *prompts for changes*<br> |
| **-q**<br> | **Quiet:** no progress displayed<br> |
| **-r*****n***<br> | **Round** column lengths up to nearest factor of *n*<br> |
| **-w**<br> | Disable control character **warnings**<br> |
| **-R**<br> | **Report**only<br> |


### Example

jCheckSchema CUSTOMER CUSTOMER.csv -r5

This will read all records in the CUSTOMER file and check that the types and lengths of each attribute are compliant with the csv definition.

### Note

**jCheckSchema** will detect multi{sub}-value fields that have not been defined, however, it won't define them for you. You will need to amend the csv and specify multi{sub}-value association groups or positional multi-value options (if they are not repeating multi{sub}-values).

## IOCTL

The jBC (BASIC) language has an IOCTL function which has the syntax of:

***result\_code*= IOCTL(*file\_var*, *IOCTL\_option*, *in\_out\_arg*)**

The *ODBC jEDI* has the following non-standard IOCTL options:


| **68** | Over-riding SQL SELECT statement (**in\_out\_arg**) for the next **SELECT *file\_var*** statement (note: the result set must match the type and number of columns expected for the primary key denoted by the **def** in the *stub*.<br> |
| **98** | Specify the **in\_out\_arg** number of writes before a commit will be performed (useful for improved performance when performing a high volume of insert/update/delete operations).<br> |
| **99** | Issue a commit.<br> |
| **7000** | Execute the **in\_out\_arg**as an SQL statement on the target RDBMS (typically a singleton query-statement)<br> |


----------------------------------------------------------------------------------------------------------------------------

[Introduction to the ODBC jEDI](./../introduction-to-the-odbc-jedi)

[Installing the ODBC jEDI on Linux/Unix](./../installing-the-odbc-jedi-on-linux&unix)

[Installing the ODBC jEDI on Windows](./../installing-the-odbc-jedi-on-windows)

[Structure of ODBC jEDI Initialization Files](./../structure-of-odbc-jedi-initialization-files)

[Structure of ODBC JEDI Mapping Files](./../structure-of-odbc-jedi-mapping-files)

[Configuring the ODBC jEDI on Linux/Unix](./../configuring-the-odbc-jedi-on-linux&unix)

[Configuring the ODBC jEDI on Windows](./../configuring-the-odbc-jedi-on-windows)
