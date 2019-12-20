# System Parameter Operands 

**Created At:** 6/12/2018 11:46:18 AM  
**Updated At:** 6/12/2018 2:48:21 PM  
**Original Doc:** [321556-system-parameter-operands](https://docs.jbase.com/46351-conversion-processing/321556-system-parameter-operands)  

**Tags:**
<badge text='operand' vertical='middle' />
<badge text='jql' vertical='middle' />

## Description

Reference system parameters like date, time, the current break level, or the number of the current record. The general form is as:

```
system-operand
```

where system-operand can be any of the following:


| Operand<br> | Description<br> |
| --- | --- |
| D<br> | Returns the system date in internal format.<br> |
| LPV<br> | Returns the previous value transformed by a format code.<br> |
| NA<br> | Returns the number of fields in the record.<br> |
| NB<br> | Returns the current break level counter. 1 is the lowest break level, 255 is the GRAND TOTAL line.<br> |
| ND<br> | Returns the number of records (detail lines) since the last control break.<br> |
| NI<br> | Returns the record counter.<br> |
| NL<br> | Returns the record length in bytes<br> |
| NS<br> | Returns the subvalue counter<br> |
| NU<br> | Returns the date of last update<br> |
| NV<br> | Returns the value counter<br> |
| T<br> | Returns the system time in internal format.<br> |
| V<br> | Returns the previous value transformed by a format code<br> |




Back to [A-Corelatives](321284-a-correlatives)
