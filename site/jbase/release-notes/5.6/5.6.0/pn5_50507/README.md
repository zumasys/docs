# PN5_50507

<PageHeader />

## Description

jQL: Null multi-values do not display correctly

## Previous Release Behavior

Previously the following would not produce the expected results:

```
ED ATEST 1
001 ]]3]]6]]9]]

ED DICT ATEST A1
001 A
002 1
...
008 A;IF 1 # "" THEN 1 ELSE "null"
009 L
010 10
```

```
LIST ATEST A1 NI-SUPP HDR-SUPP

ATEST.........    A1........
1                 null
                  null
                  null
                  null
                  null
                  null
```

## Current Release Behavior

```
LIST ATEST A1 NI-SUPP HDR-SUPP

ATEST.........    A1........
1                 null
                  null
                  3
                  null
                  6
                  null
                  9
                  null
                  null
```

Back to [5.6.0 Release Notes](./../README.md)

<PageFooter />
