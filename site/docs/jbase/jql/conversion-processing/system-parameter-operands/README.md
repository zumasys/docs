# System Parameter Operands 

**Created At:** 6/12/2018 11:46:18 AM  
**Updated At:** 6/12/2018 2:48:21 PM  
**Original Doc:** [321556-system-parameter-operands](https://docs.jbase.com/46351-conversion-processing/321556-system-parameter-operands)  
**Original ID:** 321556  
**Internal:** No  

**Tags:**
<badge text='operand' vertical='middle' />
<badge text='jql' vertical='middle' />

## Description

Reference system parameters like date, time, the current break level, or the number of the current record. The general form is as:

```
system-operand
```

where system-operand can be any of the following:

| Operand | Description |
| --- | --- |
| D | Returns the system date in internal format. |
| LPV | Returns the previous value transformed by a format code. |
| NA | Returns the number of fields in the record. |
| NB | Returns the current break level counter. 1 is the lowest break level, 255 is the GRAND TOTAL line. |
| ND | Returns the number of records (detail lines) since the last control break. |
| NI | Returns the record counter. |
| NL | Returns the record length in bytes |
| NS | Returns the subvalue counter |
| NU | Returns the date of last update |
| NV | Returns the value counter |
| T | Returns the system time in internal format. |
| V | Returns the previous value transformed by a format code |

Back to [A-Correlatives](./../a-correlatives)
