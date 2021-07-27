# PN1260

<PageHeader />

## Description

@YEAR variable was not working in I-type

## Previous Release Behavior

For example:

CT DICT MD Year

```
Year
001 I
002 @YEAR
003
004 Year
005 2R
```

```
LIST MD Year
Error in Statement "LIST MD Year"
Error in attribute definition item Year
Error in Itype:
Error in Itype: extraneous input 'YEAR' expecting {<EOF>, ';'}
```

## Current Release Behavior

```
jsh SandBox ~ -->LIST MD SAMPLE 10 Year
PAGE    1

MD............    Tear

MD                  21
JACSELECT           21
SORT.ITEM           21
HDR-SUPP            21
COL-SUPP            21
COUNT.SUPP          21
HEADING             21
PG                  21
WITHIN              21
AN                  21


 10 Records Listed
```

Back to [5.8.3 Release Notes](./../README.md)

<PageFooter />
