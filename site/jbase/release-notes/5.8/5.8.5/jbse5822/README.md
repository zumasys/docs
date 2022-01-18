# JBSE-5822

<PageHeader />

## Description

In an I-type, a TRANS operation doesn't require quoted file names. However, filenames surrounded with & cause an error.

## Previous Release Behavior

```
CREATE-FILE &SL&
```

```
CT &SL& 1

001 val1]val2
```

```
CT DICT &SL& VAL2

001 I
002 TRANS(&SL&, @ID, 1, 'X')
003
004
005 5L
```

```
LIST &SL& VAL2
Error in Statement "LIST &SL& VAL2"
Error in attribute definition item VAL2
Error in Itype:
Error in Itype: extrane...
```

## Current Release Behavior

```
LIST &SL& VAL2

PAGE    1                                                                                                                  15:01:55  13 JAN 2022

&SL&..........    VAL2.

1                 val1
                  val2


 1 Records Listed
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
