# Defining CSV Files  

<PageHeader />

The key to the RDBMS mapping is a CSV file. A CSV can be reused against multiple files if their record definitions are the same.  

Although dictionaries – by default – are used to generate each CSV, this is not a requirement. Additionally, the dictionaries do not have any bearing on the creation of RDBMS tables or any I/O with the jEDI file (other than the usual jQL processing).  

## CSV Specification

The layout of the CSV is as follows:  

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| 1  | Column     | Used as a column name in a table |
| 2  | Attr       | Attribute position: 0 means record key |
| 3  | Length     | Maximum length for alphanumeric fields |
| 4  | Type       | Pseudo data type which is translated to an RDBMS type (e.g. AN - alphanumeric, N - numeric, D - date...) |
| 5  | MVAssoc    | Multi-value/Sub-value name. For sub-values within multi-values this is held as mvassoc|smvassoc. (MV set and SMV set in JEDI_CSV) |
| 6  | ControlMV  | Y/N flag denoting that this field can reliably be used to determine the number of values in an associated field. (MV ctrl in JEDI_CSV)
| 7  | NotNull    | Mandatory flag.  (Req in JEDI_CSV) |
| 8  | SplitMVPos | Position in a non-associated multi/sub-value field (V-pos). (V-pos in JEDI_CSV) |
| 9  | SplitChar  | Character for separating compound fields (e.g. a record key xxxxx-nn would have a splitchar of “-“ without the quotes) |
| 10 | Source     | Reserved for future use |

### Column name Restrictions

In most RDBMS there are strict rules for valid column names (and table names for that matter). The JEDI_CSV utility restricts data entry to valid column names.

### CSV Types  

The following types are used in the CSV field definition:

| <!----> | <!----> |  
| --- | --- |  
| A/AN | Alpha{-Numeric} field (i.e. VARCHAR in SQL terms).<br>Either option is valid as the jEDI translation to the RDBMS will behave the same.<br>Having both options is included for historical reasons and is down to user preference. |
| C    | Character (fixed length) field (i.e. CHAR in SQL terms). |
| N    | Numeric. The numeric type specification has the following options/behaviour:<br>N  Real number i.e. may contain decimals<br>N0 Integer<br>Nm Implied decimal to 'm' places i.e. assumes multi-value internal storage |
| D    | Date. For most RDBMS this will use the Datetime data type |
| T    | Time |
| DT   | DateTime<br>This is a special case field type that splits the date and time value into 2 multi-calues or 2 attributes (if the Attr field has 2 numbers separated by a pipe chracter: '\|' ) but only uses a single RDBMS column. |

### Defining Record (Primary) Keys

In a multi-value database each record has a single key value (often referred to as the ID) identifying the record. In the CSV the key is defined by specifying a field with an attribute of 0. In most cases you would only have one key field, however, there may be reasons (especially when it is desirable to form foreign key relationships) where a key is logically made up of more than one value. In this case you would have multiple column definitions with an attribute value of 0. See Compound Fields below.

#### Numeric Values  

There are a number of points to consider:  

1. Relational databases do not store leading zeros in numerically defined columns. So, if you have record keys, for example, like 00001 you must define the key column as an AN (alpha-numeric) type.
2. Integers – should be defined as N0
3. Implied decimals – i.e. values stored with a decimal place in an RDBMS but using the traditional multi-value implied decimal – should be defined as Nm (where m is the number of decimal places).
4. All other numeric values – i.e. if the field can contain numbers with a physical decimal character – should be defined as N

#### Date Time Values

Typically, in multi-value records, dates and times are stored as an integer. In most RDBMS there is no specific “Date” or “Time” field - DB2 is an exception - but instead the Date type comprises of a date and a time. In this situation the multi-value date is converted to an RDBMS date type and the time portion is set to midnight. For Time fields the date is set to day 0 for the RDBMS (typically 1 Jan 1900).

There is one exception, however, in that if you have a date and time stored in separate attributes in your multi-value record (or in 2 multi-values in the same attribute) you can define them as a single field as a DateTime field (DT). In the case of there being 2 attributes (as opposed to 2 multi-values) each attribute must be separated by a pipe (|) in the Attribute column.

You should also be aware that some RDBMS have a limit as to how far back dates are valid. For example SQL Server’s oldest date is 1 Jan 1753 (which translates to -78525 in jBASE).

Note: A field which is a duration of time – as opposed to the time of day – should be defined as Numeric not Time.  

#### Data Types in the ODBC Driver

The ODBC driver uses ANSI SQL syntax for all its interaction with the target RDBMS. However, not all RDBMS use the same name for various data types. To cater for this, the ODBC driver looks at the jEDIdrivers.ini for a section named for the database type (e.g. Oracle, DB2, SQL Server). The following data type pseudonyms are available:
• date
• time
• timestamp
• char
• varchar
• number
• decimal
• text

Below is an example extract from a jEDIdrivers.ini  

```
[Oracle]
date = DATE
time = DATE
timestamp = TIMESTAMP
text = CLOB
```

#### Multi-Values and Sub-Values

In multi-value there are basically 3 levels of data storage within a record:

| <!----> | <!----> | <!----> |
| --- | --- | --- |
| 1   | Attributes   | Separated by CHAR(254) |
| 2   | Multi-Values | Separated by CHAR(253) |
| 3   | Sub-Values   | Separated by CHAR(252) |

Attributes - in this case - are the key to mapping to each column in a table. Note: the jEDIDK does not map records where attributes are dynamic. If you need to store records as such in an RDBMS table the current methodology is to use the “unmapped” method.

Multi-values are typically given an associated name which will produce a nested table (the table name is comprised of the primary table name and the multi-value associate name which you specify in the CSV.  

Likewise Sub-values (within Multi-values) have their own name which is concatenated with the Multi-value table name to produce another nested table. The primary table name is typically the same as the original multi-value filename but can be specifically named during the CREATE-FILE stage.
  
#### Positional Multi-values

You may have an attribute with a finite set of multi-values (or sub-values) e.g. an Address with value positions for Street, Town, Postal Code, Country.

In this case you would (typically) not specify an associated multi-value name but use the V-pos field. Each field would have the same attribute number specified and a unique multi-value position (so in the above case: 1, 2, 3, 4). In this case the multi-values are treated as attributes and are mapped to regular columns in the primary table.

#### Positional Sub-values inside Repeating Multi-values

Taking the positional multi-values a step further, you may have positional values that repeat (e.g. 3-4 sub-values of address lines). In this case you would specify as many fields you need for the sub-values using the same attribute, enter sequential V-pos values for each field (starting at 1), and enter an associated name in the MV set field.

#### Positional Multi-values with Repeating Sub-values

Another alternative is positional values (e.g. 12 multi-values for each month in the year) with nested {sub-}values. In this case you would specify 12 fields using the same attribute, enter V-pos values 1-12, and enter an associated name in the MV set and SMV set fields.

Note: in both the above 2 scenarios there is only one nested table because in an RDBMS there is – in this case – only one abstract level of nested data: i.e. the positional values are really regular fields with repeating values. They could (perhaps should) have been stored as attributes with multi-values instead of multi-values with sub-values.

#### Compound Fields

When migrating from an existing multi-value implementation there may be instances of attributes/values which contain more than one piece of data separated by a literal character (e.g. * - . /). These compound fields can be split out into individual columns in the RDBMS. To facilitate this, the split character is applied to the field preceding the split character and the attribute value remains the same.
e.g. for an email address on attribute 3 you could have

```
EM_USER,3,30,A,,,,,@,
EM_DOMAIN,3,30,A,,,,,,
```

#### Storing Unmapped Records in the RDBMS

There may be situations where you need to store data in an RDBMS table but there is no set definition of a record (or you need to store the data in an RDBMS but you do not require query capability on the table). In this case you simply create an empty CSV and the resulting table will consist of an ID column as VARCHAR(200) and a RECORD column as BLOB (or similar depending on the RDBMS). There is no real need to have more than one of these empty CSV definitions. You would simply use the CSV=myemptycsv.csv clause in the CREATE-FILE statement.

#### Storing multi-values in a single column  

In some cases you may not need to map a multi-valued attribute to a nested table. In this situation simply set the field to an AN type with a length of 8000 (the current maximum length of an unmapped column).

Back to [jEDIJDK](./../README.md)

<PageFooter />
