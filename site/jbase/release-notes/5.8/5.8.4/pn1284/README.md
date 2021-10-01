# PN1284

<PageHeader />

## Description  

Field 0 is not being repeated when using 0R in an f-correlative

## Previous Release Behavior

```
    SEP104551*01
001 1064044*001*0010]1077968*001*0010]1077971*001*0010]1077994*001*0010]1429355*001*0010]1784322*001*0010]1800905*
    001*0010]1801522*001*0010]1806205*001*0010
```

With DICT item expecting to repeat field 0 and concatenate at end

```
    OC-ID_BAD
001 A
002 0
003 OC ITEM-ID (BAD)
004
005
006
007
008 F;1;C*;_;:;0R;(G0*1);_;:
009 L
010 30
```

Outputs only first value with 0 concatenated on the end

```
SEP104551*01               1064044*001*0010*SEP104551
                           1077968*001*0010*
                           1077971*001*0010*
                           1077994*001*0010*
                           1429355*001*0010*
                           1784322*001*0010*
                           1800905*001*0010*
                           1801522*001*0010*
                           1806205*001*0010*

```

## Current Release Behavior

Should display with all values having ID concatenated

```
SEP104551*01           1064044*001*0010*SEP104551     
                       1077968*001*0010*SEP104551     
                       1077971*001*0010*SEP104551     
                       1077994*001*0010*SEP104551     
                       1429355*001*0010*SEP104551     
                       1784322*001*0010*SEP104551     
                       1800905*001*0010*SEP104551   
                       1801522*001*0010*SEP104551     
                       1806205*001*0010*SEP104551 
```

Back to [5.8.4 Release Notes](./../README.md)

<PageFooter />
