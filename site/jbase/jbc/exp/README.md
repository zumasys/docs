# EXP

**Created At:** 8/28/2017 8:26:58 AM  
**Updated At:** 10/25/2018 7:47:39 AM  
**Original Doc:** [269197-exp](https://docs.jbase.com/36868-jbase-basic/269197-exp)  
**Original ID:** 269197  
**Internal:** No  

**Tags:**
<badge text='mathematical operations' vertical='middle' />

## Description

The **EXP** function returns the mathematical constant to the specified power. It takes the general form:

```
EXP(expression)
```

Where **expression** may consist of any form of jBASE BASIC expression but must evaluate to a numeric argument or a runtime error occurs and the program enters the debugger.

## Note

> The returned value is accurate to as many decimal places specified by the [PRECISION](./../precision) of the program.

An example of use is as:

```
 zE10 = EXP(10) ;* Get e^10
```

Go back to [jBASE BASIC](./../README.md)
