# JBSE-5733

<PageHeader />

## Description  

BY-EXP issue (with repeating field)

## Previous Release Behavior

With a dict item DET*GROSS.EXTENSION that has this correlative:

```text
A;IF 4 = "K" THEN 34*35/'10000'*'-1' ELSE 34*35/'10000'
```

The intent is to make the amount negative if the invoice type is K (a refund)

This is a simplified command from a larger report:

```text
SORT POS WITH ID EQ "951-19437-50042" BY-EXP ITEM.DEPARTMENT ID ITEM.DEPARTMENT INVOICE.TYPE DET*GROSS.EXTENSION ID-SUPP

Page    1                                                                                                                  14:27:41  10 JAN 2022

                           Invoice     Gross
       ID       Department  Type     Extension
--------------- ---------- ------- -------------

951-19437-50042 4000       K           -1,054.35
951-19437-50042 4000       K            1,380.40
951-19437-50042 4000       K            1,100.00
951-19437-50042 4000       K              233.25
951-19437-50042 4000       K              395.00
951-19437-50042 4000       K              355.00
951-19437-50042 4000       K              510.00
951-19437-50042 4000       K              394.90
951-19437-50042 4000       K              131.94
951-19437-50042 4000       K            4,196.00


 10 Records Listed
```

The correct result would show all items as negative.

## Current Release Behavior

Accepted behavior is that a REUSE option can be inserted into the A-correlatve to repeat the singular field, i.e.:

```text
A;IF 4R = "K" THEN 34*35/'10000'*'-1' ELSE 34*35/'10000'
```

which provides the correct result:

```text
Page    1                                                                                                                  14:29:56  10 JAN 2022

                           Invoice     Gross
       ID       Department  Type     Extension
--------------- ---------- ------- -------------

951-19437-50042 4000       K           -1,054.35
951-19437-50042 4000       K           -1,380.40
951-19437-50042 4000       K           -1,100.00
951-19437-50042 4000       K             -233.25
951-19437-50042 4000       K             -395.00
951-19437-50042 4000       K             -355.00
951-19437-50042 4000       K             -510.00
951-19437-50042 4000       K             -394.90
951-19437-50042 4000       K             -131.94
951-19437-50042 4000       K           -4,196.00


 10 Records Listed

```

In "d3" emualtion, ???

Back to [5.8.5 Release Notes](./../README.md)

<PageFooter />
