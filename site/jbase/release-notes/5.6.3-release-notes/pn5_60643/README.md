# PN5_60643

**Created At:** 10/3/2017 9:48:59 AM  
**Updated At:** 11/27/2017 12:07:19 AM  
**Original Doc:** [pn5_60643](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60643)  
**Original ID:** 279168  
**Internal:** No  

## Description

jQL: Incorrect BREAK-ON totals and formatting at major break levels

### Previous Release Behavior

Given the following sample output:

```
              W        1,547.57       8,969.86
              XY           0.00          90.65
              Z            0.00       1,030.00
                    -----------    -----------
        99             1,547.57      10,090.51
                       1,547.57      30,917.48
```

- The sums on the second last line are incorrectly added (carried over) to the next line
- There should be a blank line between the last 2 lines, indicating a major control break

### Current Release Behavior

jQL totals and formatting are now correct:

```
              W        1,547.57       8,969.86
              XY           0.00          90.65
              Z            0.00       1,030.00
                    -----------    -----------
        99             1,547.57      10,090.51

                           0.00      20,826.97
```

Back to [5.6.2 release Notes](./../README.md)
