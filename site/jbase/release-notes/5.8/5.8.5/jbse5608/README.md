# JBSE-5608  

<PageHeader />

## Description

Issue with percentage DICT item

## Previous Release Behavior

If the following query is run, it produces the correct results, plus n error message:

```text
SORT POS WITH ID AND WITH ID EQ "951-19681-45478" ITEM.DEPARTMENT ITEM.NUMBER TOTAL ITEM.EXTENSION TOTAL ITEM.COST TOTAL DET.PROFIT.PCT ID-SUPP

Invalid or uninitialised variable -- ZERO USED ,
Var (UNKNOWN) , Line   151 , Source jql_listcolumnar.b

Page    1                                                                                                                                                                    12:10:22  30 NOV 2021

                               Item         Item     Profit
Department   Item Number     Extension      Cost     Percent
---------- ---------------- ----------- ------------ -------

2589       K1283___RED_____       14.00        5.410   61.36
2589       VVCREW__SEAFOM3X       52.00       25.270   51.40
2587O      GWP-19954BKPNK         29.95       11.000   63.27

                                  95.95       41.680   56.56
```

If a "BY-EXP DEPARTMENT" is added:

```text
SORT POS WITH ID AND WITH ID EQ "951-19681-45478" BY-EXP ITEM.DEPARTMENT ITEM.NUMBER TOTAL ITEM.EXTENSION TOTAL ITEM.COST TOTAL DET.PROFIT.PCT ID-SUPP

Invalid or uninitialised variable -- ZERO USED ,
Var (UNKNOWN) , Line   151 , Source jql_listcolumnar.b


Page    1                                                                                                                                                                    12:12:27  30 NOV 2021

                    Item         Item     Profit
  Item Number     Extension      Cost     Percent
---------------- ----------- ------------ -------

GWP-19954BKPNK         29.95       11.000  135.36
K1283___RED_____       14.00        5.410   61.36
VVCREW__SEAFOM3X       52.00       25.270  190.93

                       95.95       41.680   56.56


 3 Records Listed
```

the profit percent detail lines are incorrect.

## Current Release Behavior

```text
 Page    1                                                                                                                  13:06:40  10 JAN 2022
 
                     Item         Item     Profit
   Item Number     Extension      Cost     Percent
 ---------------- ----------- ------------ -------
 
 GWP-19954BKPNK         29.95       11.000   63.27
 K1283___RED_____       14.00        5.410   61.36
 VVCREW__SEAFOM3X       52.00       25.270   51.40
 
                        95.95       41.680   56.56
 
 
  3 Records Listed
```

In terms of jQL semantics, the correct result can be obtained by changing " TOTAL DET.PROFIT.PCT" to " CALC DET.PROFIT.PCT"

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
