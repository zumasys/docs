# COL-HDR-SUPP, COL.HDR.SUPP  

<PageHeader />

When the **COL-HDR-SUPP** keyword is used in a query, both page and column headings are suppressed.

## Syntax

```
COL-HDR-SUPP
```

## Example  

When the command:

```
LIST ORDERS AVG PRICE QTY CALC ILINE_TOTAL SAMPLE 5
```

```
PAGE    1                                                                                                                                          14:49:18  14 MAY 2020

ORDERS....    PRICE.....    Qty    Line Total

      1589        386.29      4       3953.88
                  311.82      5
                  424.81      2
       682        473.34      6       3689.62
                  424.79      2
      1137        351.05      8       7166.46
                  421.49      4
                  296.90      9
      2272         10.99      5       5601.47
                  450.00      6
                  316.28      9
       686         10.99      6         65.94
              ==========           ==========
***               323.23             20477.37


 5 Records Listed

```

Adding a COL-HDR-SUPP option :

```
LIST ORDERS AVG PRICE QTY CALC ILINE_TOTAL SAMPLE 5 COL-HDR-SUPP
```

should result in the following:

```
      1589        386.29      4       3953.88
                  311.82      5
                  424.81      2
       682        473.34      6       3689.62
                  424.79      2
      1137        351.05      8       7166.46
                  421.49      4
                  296.90      9
      2272         10.99      5       5601.47
                  450.00      6
                  316.28      9
       686         10.99      6         65.94
              ==========           ==========
***               323.23             20477.37
```

Back to [Cross Reference](./../README.md)

<PageFooter />
