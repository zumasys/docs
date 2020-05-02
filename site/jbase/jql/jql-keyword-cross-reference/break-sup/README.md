# BREAK-SUP, BREAK.SUP  

<PageHeader />

The BREAK-ON keyword causes jQL to generate a break-point whenever the value of the specified field changes but not actually display that field.

## Syntax  

```
BREAK-ON {options} field
```

where:

**options** control the appearance of the break-point.  
**field** is the field name or EVAL expression to be used as a break-point

The **options** are nominally the same as for BREAK-ON but only the following are useful:

## BREAK-SUP Options  

| <!----> | <!----> |
| --- | --- |
| B   | Break. Works in conjunction with the B option of the heading and footing modifiers to put the break values in the heading or footing |  
| D   | Data. Suppresses the break line if there is only one detail since the last BREAK. This is the line with the asterisks, any text that is specified, or totals |  
| L   | Line. Suppresses the blank line preceding the break data lie. Overrides the 'U' option if both are specified |  
| P   | Page. Causes each break item to be output on a separate page |  
| U   | Underlines. Places underlines on the line above the accumulated totals if the TOTAL modifier was specified. Ignored if used with the ‘L’ option |  

## Example

```
SORT ORDERS BY CUSTNO BREAK-SUP CUSTNO CUST.NAME TOTAL VALUE DET-SUPP
```

Back to [Cross Reference](./../README.md)

<PageFooter />
