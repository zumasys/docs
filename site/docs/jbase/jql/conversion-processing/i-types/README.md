# I Types

**Created At:** 6/8/2018 1:36:54 PM  
**Updated At:** 4/25/2019 1:11:31 PM  
**Original Doc:** [i-types](https://docs.jbase.com/46351-conversion-processing/i-types)  

**Tags:**
<badge text='attributes' vertical='middle' />
<badge text='jql' vertical='middle' />

## Description 

The jBASE jQL processor supports I-TYPES as imported from PRIME or Universe. The jBASE query language, jQL, supports I- and D-type attribute definition records.

### Formats

**I-TYPE**

```
001 I
002 Expression
003 Conversion
004 Header
005 Format
006 - 016 Reserved
```



**D-TYPE**

```
001 D
002 AttributeNo
003 Conversion
004 Header
005 Format
006 - 016 Reserved
```



where Expression can be one or more of :


| Type | Description |
| --- | --- |
| Dictionary Id | e.g. Attribute definition S/A/D/I type |
| @Variables | e.g. @RECORD, @ID, @USERNO, @DATE, @TIME |
| Functions | e.g. TRANS(File, Item, Attr, Code) |
| User Subroutines | e.g. MYSUB(param1, param2, param256) |
| Conditionals | e.g. IF X = Y THEN @RECORD ELSE "" |
| String Extraction | e.g. Expression[6,4] |


Multiple expressions can be defined within the same I-TYPE. e.g.

```
Expression ; Expression ;
```

Expressions can be parenthesized, contain numeric constants, string literals, enclosed in single or double quotes, and extended operators such as EQ, NE, LE, GT, CAT, AND, OR, MATCHES.



### User Subroutines 

Additional functionality can be added by calling user written basic subroutines. The user subroutines should be compiled and cataloged and the library location added to the library path or JBCOBECTLIST environment variables.

The first parameter of the called routine is the result parameter. This parameter is used as the evaluated value of the subroutine e.g.

```
FRED
001 SUBROUTINE FRED(Result, Param1)
002 IF Param1 > 100 THEN Result = 1 ELSE Result = 0
003 RETURN
```

Subroutines can be called from an I-TYPE by one or other of the following formats.

```
FRED(param1 {,param2_})
```

or

```
SUBR("FRED",param1 {,param2_})
```

**Conversion**attribute provides support for normal queries output conversions. E.g. D2, MT, F;, TFile etc.

**Header**attribute specifies the column heading text to be displayed.

**Format** attribute can be specified as follows:

```
Length {Padding} Justification { Conversion } { Mask }
```

Where :

- Length - The display column length.
- Padding - Any character except L,R,U or T. Default space.
- Justification - L Left, R Right, T Text, U Unlimited




Conversion - General form, n{$}{,}{Z}


| n | Number of digits after decimal point. |
| $ | Precede with current currency sign. |
| , | Insert thousandths separator every third digit. |
| Z | Suppress leading zeroes. |
| Mask | Output pattern. e.g. ##-###-## |


Note that spurious trailing spaces can give Invalid Conversion errors.



### EXAMPLES

To get the running total of an attribute:

```
001 I Running total of attribute 1
002 @record<1>; @1 + @RECORD<1>
003 MD2
004 Running]Total
005 10R
```



### ICOMP

The first time an I-TYPE is used in a query, i.e. jQL command, the expression attribute will be "compiled", to produce internal op codes and parameter definitions. This mechanism provides greater efficiency at run time. However to ensure that all I-TYPE definitions are compiled, rather than on a ad hoc basis, a utility, ICOMP, has been provided.

Called as:

```
ICOMP {DICT} FileName {RecordList | * }
```

Where:

- FileName is the name of file to convert.
- RecordList is the list of Record identifiers.


Note that ICOMP will always attempt to convert the dictionary section of a file. If RecordList is omitted, all I-TYPE definitions will be compiled. ICOMP will also respect a preceding SELECT list.



## Supported I-type functions

The following is a list of I-type functions which can be used directly in jBASE and those for which a subroutine must be written :


| Supported by Universe | Supported by jBASE 3.4 | Subroutine required |
| --- | --- | --- |
| ABS | ABS | <br> |
| ADDS | <br> | ADDS |
| ALPHA | <br> | ALPHA |
| ANDS | <br> | ANDS |
| ASCII | ASCII | <br> |
| ATAN | <br> | ATAN |
| CATS | CATS | <br> |
| CHAR | CHAR |   |
| CHARS | CHARS | <br> |
| COL1 | <br> | COL1 |
| COL2 | <br> | COL2 |
| CONVERT | CONVERT | <br> |
| COS | COS | <br> |
| COUNT | COUNT | <br> |
| COUNTS | COUNTS | <br> |
| DATE | DATE | <br> |
| DCOUNT | <br> | DCOUNT |
| DELETE | <br> | DELETE |
| DIVS | <br> | DIVS |
| DOWNCASE | <br> | DOWNCASE |
| EBCDIC | EBCDIC | <br> |
| EQS | EQS | <br> |
| EXP | EXP | <br> |
| EXTRACT | EXTRACT | <br> |
| FIELD | <br> | FIELD |
| FIELDS | FIELDS | <br> |
| FIELDSTORE | <br> | FIELDSTORE |
| FMT | FMT | <br> |
| FMTS | FMTS | <br> |
| GES | <br> | GES |
| GTS | GTS | <br> |
| ICONV | ICONV | <br> |
| ICONVS | ICONVS | <br> |
| IFS | IFS | <br> |
| INDEX | INDEX | <br> |
| INDEXS | INDEXS | <br> |
| INSERT | <br> | INSERT |
| INT | INT | <br> |
| ISNULL | <br> | ISNULL |
| ISNULLS | <br> | ISNULLS |
| ITYPE | <br> | ITYPE |
| LEN | LEN | <br> |
| LENS | LENS | <br> |
| LES | LES | <br> |
| LN | LN | <br> |
| LOWER | <br> | LOWER |
| LTS | LTS | <br> |
| MATCHFIELD | <br> | MATCHFIELD |
| MOD | <br> | MOD |
| MODS | <br> | MODS |
| NEGS | <br> | NEGS |
| NES | NES | <br> |
| NOT | NOT | <br> |
| NOTS | NOTS | <br> |
| NUM | NUM | <br> |
| NUMS | NUMS | <br> |
| OCONV | OCONV | <br> |
| OCONVS | OCONVS | <br> |
| ORS | <br> | ORS |
| PWR | PWR |   |
| QUOTE |   | QUOTE |
| RAISE |   | RAISE |
| REPLACE |   | REPLACE |
| REUSE | REUSE |   |
| RND | RND |   |
| SEQ | SEQ |   |
| SEQS | SEQS |   |
| SIN | SIN |   |
| SOUNDEX |   | SOUNDEX |
| SPACE |   | SPACE |
| SPACES | SPACES |   |
| SPLICE | SPLICE |   |
| SQRT | SQRT |   |
| STATUS |   | STATUS |
| STR | STR |   |
| STRS | STRS |   |
| SUBR | SUBR |   |
| SUBS |   | SUBS |
| SUBSTRINGS | SUBSTRINGS |   |
| SUM | SUM |   |
| SUMMATION |   | SUMMATION |
| SYSTEM |   | SYSTEM |
| TAN | TAN |   |
| TIME | TIME |   |
| TIMEDATE | TIMEDATE |   |
| TRANS | TRANS |   |
| TRIM | TRIM |   |
| TRIMB | TRIMB |   |
| TRIMF | TRIMF |   |
| TRIMS |   | TRIMS |
| UPCASE |   | UPCASE |
| XLATE | XLATE |   |




[Conversion Processing](./../conversion-processing)

Back to [jBASE Query Language (JQL)](jbase-query-language-jql-)
