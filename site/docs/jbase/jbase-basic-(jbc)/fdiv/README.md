# FDIV

**Created At:** 8/28/2017 8:53:18 AM  
**Updated At:** 10/25/2018 7:47:26 AM  
**Original Doc:** [269204-fdiv](https://docs.jbase.com/36868-jbase-basic/269204-fdiv)  

**Tags:**
<badge text='mathematical operations' vertical='middle' />
<badge text='floating point operations' vertical='middle' />

# Description

This function performs floating point division on two numeric values. It takes the general form:

```
FDIV(expression1, expression2)
```

where both **expression1** and **expression2** must evaluate to non-null numeric values.

## Note:


> If either of the arguments evaluates to null then a run time "non-numeric" error will occur. If the second argument evaluates to zero then a run time "divide by zero" error will occur. The calculation is not subject to the [PRECISION](./../precision) setting.


An example of use would be as:

```
CRT FDIV(0.41,3.14)
```

to display '0.1305732484'.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
