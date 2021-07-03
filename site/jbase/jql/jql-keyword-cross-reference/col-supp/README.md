# COL-SUPP, COL.SUP  

<PageHeader />

When the **COL-SUPP** keyword is used in a query, all column headings are suppressed.

## Syntax

```
COL-SUPP
```

## Example  

When this command:

```
LIST ORDERS AVG PRICE QTY CALC ILINE_TOTAL SAMPLE 5
```

produces:  

```
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

Adding a COL-SUPP option :

```
LIST ORDERS AVG PRICE QTY CALC ILINE_TOTAL SAMPLE 5 COL-SUPP
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


 5 Records Listed
```

Back to [Cross Reference](./../README.md)

<PageFooter />
