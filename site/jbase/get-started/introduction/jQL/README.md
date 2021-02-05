# jBASE Query Language (jQL)

<PageHeader />

## Understanding jQL

jQL is the query language used by jBASE. It takes the form of dictionary items used for selecting and sorting rows, and for displaying columns. The output, by default, uses sequential ID's in the dictionary of:

- The specified file or `USING` file
- `JBCDEFDICTS`
- `JEDIFILENAME_MD`
- Universe, Unidata and Prime emulations uses the @ phrase

This query language is capable of calculating column totals, averages, and percentages with the appropriate modifiers applied. Further, modifiers, if correctly applied, can alter the way a dictionary is used.

### jQL or SQL

Some differences exist between jQL and SQL. They can be summarized as follows:

| jQL                         | SQL                       |
| --------------------------- | ------------------------- |
| Dictionary calculations     | Command line calculations |
| Many dictionaries per field | One dictionary per field  |
| End-user tool               | Developer tool            |
| Retrieval only              | Retrieval/update          |
| Simple syntax               | Difficult syntax          |

### Parts of a jQL Sentence

There are 5 parts to a jQL sentence.

1. Command – the action to be taken.
2. File name – the data file upon which the action is taken.
3. Selection criteria – reduces the number of records in the query.
4. Sort criteria – puts resulting records in user defined order.
5. Output specifications – fields to display and additional formatting instructions.

### Finding A File

The MD is searched first if `JEDIFILENAME_MD` is set, then `JEDIFILEPATH` is searched.

### Selection Criteria

- The `WITH` or `WITHOUT` modifies the dictionary to be used as selection criteria.
- Relational operators are used to compare query value to data base contents. The following may be used: `=`, `#`, `<`, `>`, `<=`, `>=`.
- `AND` and `OR` are used when multiple selection criteria are required.
- `[`, `]`, `[]` may be used for sub-string extraction. The `LIKE` can also be used.

Some examples of selection criteria are as follows:

```
LIST CUSTOMER WITH CUS.NAME = “A]” CUS.NAME
```

```
LIST CUSTOMER WITH CUS.NAME LIKE “A…” CUS.NAME
SORT ORDER WITH ORD.DATE GE “10/01/96” AND LT “11/01/96” ORD.DATE
```

### Sort Criteria

Different key terms will sort search results differently as can be noted bellow:

1. `BY` - ascending
2. `BY-DSND` / `BY.DSND` - descending
3. `BY-EXP` / `BY.EXP` - explode a multivalue field, ascending
4. `BY-EXP-DSND` / `BY.EXP.DSND` - explode a multivalue field, descending

> Exploded sorts treat each multivalue as a separate column (field).

It is possible to have multiple sort levels, with each subsequent level a sub sort of the previous level. With regards sort justification, it is based on the dictionary (yes, you can sort numbers left justified).

Examples of Sort Criteria are as follows:

```
SORT ORDER BY ORD.DATE ORD.DATE
```

```
SORT ORDER BY-DSND ORD.DATE ORD.DATE
```

```
SORT ORDER BY ORD.DATE WITH ORD.DATE GE “10/01/96” AND LT 11/01/96” ORD.DATE
```

```
SORT CUSTOMER BY-EXP ORDERS ORDERS ORD.AMT ORD.DATE CUS.NAME
```

### Output Specifications

Any field name without a modifier is displayed

`TOTAL`, `AVERAGE`, `PERCENT`

`GRAND-TOTAL`

`BREAK-ON`

`HEADING`, `FOOTING`

`DET-SUPP`

Examples of Output Specifications are as follows:

```
SORT ORDER BY CUS.NAME BY ORD.DATE WITH ORD.DATE GE “10/01/96” AND LT “11/01/96” AND WITH ORD.AMT GE “500” BREAK-ON CUS.NAME “Total For ‘VUD’” ORD.DATE TOTAL ORD.AMT AVERAGE ORD.AMT HEADING “October 1996 Orders Over $500 By Customer’CL’”
```

```
SORT ORDER BY CUS.NAME WITH ORD.AMT GE “500” BREAK-ON CUS.NAME TOTAL ORD.AMT AVERAGE ORD.AMT DET-SUPP ID-SUPP
```

## Dictionaries

### Types of Dictionaries

**Type A or S**: Legacy style 10 line dictionary. Data descriptor or calculated. From the days when the data base was the OS.

**Type D**: Legacy style 5 line data descriptor. Actually it’s 7 lines, but jBASE may ignore two of them, and therefore may not be as functional as the legacy in some cases.

- This type was popular when the database was implemented on another OS.

**Type I**: Legacy style 5 line calculated column. Actually it’s 7 lines, but jBASE may ignore two two of them, and therefore may not be as functional as the legacy in some cases.

- This type was popular when the database was implemented on another OS.

**Type M or PH**: macro or phrase, 2 lines.

- Shorthand

**Macros and Phrases**:

Are file dictionary items that contain frequently used portions of a jQL sentence.

```
001+  M or PH (macro or phrase)
002+  jQL sentence parts or comments
```

For example, if a macro named _MYMACRO_ has been created containing _M_ and _CUS.NAME CUS.ADDR CUS.STATE_ on line 1 and 2 respectively, executing the `jED DICT CUSTOMER MYMACRO` command will bring in the editor something that resembles the text below:

```
001+  M
002+  CUS.NAME CUS.ADDR CUS.STATE
```

Thus issuing a query such as: `LIST CUSTOMER MYMACRO` will automatically include the above listed portions of JQL.

### Dictionaries again

1. I Types

```
001 I
002 Formula
003 Conversion code
004 Column heading
005 Format
```

2. D Types

```
001 D
002 Attribute #
003 Conversion code
004 Column heading
005 Format
```

3. 10 line structure

```
001 A
002 Attribute #
003 Column heading
004 Controlling/Dependent attributes
005-006 Blank
007 Conversion codes
008 Correlative codes
009 Justification
010 Column width
```

### Dictionary Processing

![jbase-fundamentals: dictionary_processing](./dictionary_processing.jpg)

Most Common Conversion Codes

These go on lines 3 (of an I or D type), or 7 and 8 (of an A type); and are also used with the `ICONV`, `OCONV`, and `FMT` jbc functions

- `D` – date
- `MD` or MR – decimal
- `MT` – time
- `G` – group extraction
- `T` – text extraction
- `Tfile` – table lookup
- There are more!

### Date Conversions

With jBASE, the internal value is the number of days from December 31, 1967. So if the internal value for date happens to be 10000,

- `D` - 18 MAY 1995
- `D2/` - 05/18/95
- `D4\*` - 05\*18\*1995
- `DW` - 4
- `DWA` - THURSDAY
- `DM` - 5
- `DMA` - MAY
- `DY` - 1995
- `DJ` - 138
- `DQ` – 2

### Decimal Conversions

If for instance the Internal value for a value is 100000,

- `MD2` or `MR2` - 1000.00
- `MD2,` or `MR2,` - 1,000.00
- `MD2,$` or `MR2,$` - \$1,000.00
- `MD4` or `MR4` - 10.0000
- `MD24` or `MR24` - 10.00

`MR` conversion has additional formatting capabilities.

### Time Conversions

With jBASE, the internal value is the number of seconds from midnight. So if for instance the internal value is 55555

- `MT` - 15:25
- `MTS` - 15:25:55
- `MTH` - 03:25PM
- `MTHS` - 03:25:55PM

### Group Extraction

This feature allows for the extraction of data based on a delimiter. If for instance the Internal format is 123\*456\*789, then it will follow that:

- `G*1` - 123
- `G1*1` - 456
- `G2*1` - 789
- `G1*2` - 456\*789

On line 2 of an I type

- `FIELD(CUS.NAME,’ ‘,1,2)` - returns the first two words of the field _CUS.NAME_

### Text Extraction

Allows for extracting data based on character position. If for instance an internal value of '123456789'

- `T1,3` - 123
- `T5,2` - 56
- `T1` - 1 if left justified, 9 if right justified

Use in a query on line 2 of an I type:

- `CUS.NAME[“1”,”3”]` - 123
- `CUS.NAME[“-5”,”-2”]` – 5678

### Table Lookup Example

- Country code stored in field 12 of a _CUSTOMER_ table
- Country names stored in field 1 of the _COUNTRY_ table with country code as the primary key
- In the dictionary of the _CUSTOMER_ table
- Field 2 references the field containing the lookup date (12)
- `TCOUNTRY;X;;1`
- On line 2 of an I type
- `TRANS(COUNTRY,COUNTRY.CODE,COUNTRY.NAME,”X”)`

### I Types

Field 2 contains the formula which can be made up of:

- Dictionary names
- @Variables - `@RECORD`, `@ID`, `@VM`, `@DATE`
- jBC functions – `TRANS`, `FIELD`, `COUNT`, etc.
- User subroutines – first argument is the return value
- jBASE supplies subroutines for multivalues
- `IF`…`THEN`…`ELSE`
- Multiple expressions separated by a semi colon ( \; )

### JBCUserConversions

Theses are user developed subroutines which perform user defined conversions. They take 5 arguments, that is :

- result - return value.
- source - original value.
- code - actual conversion code.
- type - 0 = `ICONV`, 1 = `OCONV`, -1 = `FMT`. `FMT` is used for dictionary conversions (line 7 or 3), the `FMT` function, and `CRT variable format`.
- error - non-zero enters debugger.

A standard conversion subroutine code cannot be used for custom subroutine code.

### Custom Date Conversion

```
SUBROUTINE JBCUserConversions(result, source, code, type, error)
error = 0
BEGIN CASE
  CASE code = “JCAL”
      * Day of Week: Month Day, Year
      DOW = OCONV(source,”DWA”)
      MONTH = OCONV(source,”DMA”)
      DAY = OCONV(source,”DD”)
      YEAR = OCONV(source,”DY”)
      result = type:” “:DOW:”: “:MONTH:” “:DAY:”, “:YEAR
  CASE 1
      result = “”
END CASE
RETURN
END
```

### Using JBCUserConversions

A-type

```
jed DICT ORDER MYDATE
001 A
002 3
003 My Date
007 JCAL
009 L
010 35
LIST ORDER ORD.DATE MYDATE
```

D- type

```
jed DICT ORDER MYDATE
001 D
002 3
004 My Date
005 35L
LIST ORDER ORD.DATE MYDATE
```

I- type

```
jed DICT ORDER MYDATE
001 I
002 OCONV(ORD.DATE,”JCAL”)
003
004 My Date
005 35L
LIST ORDER ORD.DATE MYDATE
```

Back to [Getting Started](./../../README.md)

<PageFooter />
