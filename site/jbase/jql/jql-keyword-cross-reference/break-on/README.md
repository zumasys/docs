# BREAK-ON, BREAK.ON

<PageHeader />

The **BREAK-ON** keyword causes jQL to display the named field and also to generate a break-point whenever the value of that field changes.

## Syntax

```
BREAK-ON {options} field
```

where:

**options** control  the appearance of the breakpoint - see [BREAK-ON options](#break-on-options).  
**field** is the field name or EVAL expression on which to break when the value changes.  

### BREAK-ON Options  

| <!----> | <!----> |
| --- | --- |
| B   | Break. Works in conjunction with the B option of the heading and footing modifiers to put the break values in the heading or footing |  
| D   | Data. Suppresses the break line if there is only one detail since the last BREAK. This is the line with the asterisks, any text that is specified, or totals |  
| L   | Line. Suppresses the blank line preceding the break data lie. Overrides the 'U' option if both are specified |  
| P   | Page. Causes each break item to be output on a separate page |  
| R   | Rollover. Inhibits a page break until all the data associated with the current break is output |  
| U   | Underlines. Places underlines on the line above the accumulated totals if the TOTAL modifier was specified. Ignored if used with the ‘L’ option |  
| V   | Value. Causes the values of the control break attribute to be inserted at this point in the BREAK-ON label |  

## Example

```
SORT ORDERS BY CUSTNO BREAK-ON CUSTNO CUST.NAME TOTAL VALUE DET-SUPP
```

Back to [Cross Reference](./../README.md)

<PageFooter />
