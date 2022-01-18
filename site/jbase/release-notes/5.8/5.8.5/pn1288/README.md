# pn1288

<PageHeader />

## Description

LIST with EVAL causes segv

## Previous Release Behavior

```
LIST MD EVAL"@NI" WITH EVAL"@NI" < 3

causes segv
```

## Current Release Behavior

```text
Page    1

MD............ @NI.......

JACSELECT      1
SORT.ITEM      2
HDR-SUPP       3


 3 Records Listed
```

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
