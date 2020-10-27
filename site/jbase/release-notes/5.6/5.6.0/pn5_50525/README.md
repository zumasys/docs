# PN5_50525

<PageHeader />

## Description

jQL is holding on to previous results

## Previous Release Behavior

```
jsh home ~ -->LIST-ITEM JQLTEST

    1
001 10
002 2

    2
001 20
002

DICT JQLTEST DIV
001 A
002 0
003
004
005
006
007
008 A;1/2
009 R
010 6

jsh home ~ -->LIST JQLTEST DIV

JQLTEST.......    DIV...

1                      5
2                      5
```

## Current Release Behavior

```
jsh home ~ -->LIST JQLTEST DIV

JQLTEST.......    DIV...

1                      5
2                      0
```

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />
