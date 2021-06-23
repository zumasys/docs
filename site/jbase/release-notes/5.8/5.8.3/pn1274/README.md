# PN1274

<PageHeader />

## Description

LIST-ITEM MD WITH *A1 = "t" causes segmentation violation with emulation setting "id_attr10_substring = true".

## Previous Release Behavior

```
LIST-ITEM MD WITH *A1 = "t" 
jBASE: Pid 20274: Signal 11: Segmentation fault. Aborting
jBASE: Extra signal information: Address not mapped to object
jBASE: Signal generated at list-item.b:78
Segmentation fault (core dumped)
```

## Current Release Behavior

```
jsh D3SandBox ~ -->LIST-ITEM MD WITH *A1 = "t" SAMPLE 5

PAGE    1                                                                                                                            12:29:18  23 JUN 2021

    JACSELECT
001 t
002 18

    SORT.ITEM
001 t
002 86

    HDR-SUPP
001 t
002 28

    COL-SUPP
001 t
002 59

    COUNT.SUPP
001 t
002 61
```

Back to [5.8.3 Release Notes](./../README.md)

<PageFooter />
