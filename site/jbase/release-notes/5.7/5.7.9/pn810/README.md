# PN810

<PageHeader />

## Description

A **S**um operation of an A or F correlative operates on the entire attribute when it should be operating on each multi-value and, depending on the emulation, each sub-value.

## Previous Release Behavior

Data
```
    rec1
001 1\2\3]4

    rec2
001 5]6
```
Dictionaries
```
DICT PATH : DICT sumtest

*A0......    D/CODE...    A/AMC.    S/NAME...    V/CONV...    V/CORR...    V/TYPE...    V/MAX

tot          S                 0    Totals                    F;1;S        R                5
vals         S                 1    Vals                                   R                4
```
LIST sumtest vals tot
```
sumtest.......    Vals    Totals

rec1                 1         6
                     2
                     3
                     4         4
rec2                 5        11
                     6
```

## Current Release Behavior

```
sumtest....... Vals Totals

rec1              1     10
                  2
                  3
                  4
rec2              5     11
                  6
```

## Notes

The default jBASE behavior is shared by Universe. The D3 behavior is shared by QM.

jBASE and Universe native behavior is to sum the lowest delimited values. So if an attribute has only multi-values it will sum them. But if one of those multi-values has more than one sub-value then it only sums the sub-values and leaves single value multi-values as their own total.

Back to [5.7.9 Release Notes](./../README.md)
  
<PageFooter />
