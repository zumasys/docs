# PRECISION

**Created At:** 9/22/2017 1:46:19 PM  
**Updated At:** 11/27/2018 9:42:38 AM  
**Original Doc:** [277629-precision](https://docs.jbase.com/36868-jbase-basic/277629-precision)  

**Tags:**
<badge text='mathematical operations' vertical='middle' />

# Description

The **PRECISION**statement informs jBASE as to the number of digits of precision it uses after the decimal point in numbers. It takes the general form:

```
PRECISION integer
```

Where **integer** should be in the range 0 to 9.

## Note:


> - A **PRECISION** statement can be specified any number of times in a source file. Only the most recently defined precision will be active at any one time.
> - Calling programs and external subroutines do not have to be compiled at the same degree of precision, however, any changes to precision in a subroutine will not persist when control returns to the calling program.
> - jBASE uses the maximum degree of precision allowed on the host machine in all mathematical calculations to ensure maximum accuracy. It then uses the defined precision to format the number.


An example of use may be:

```
PRECISION 6
CRT 2/3
```

to print:

```
0.666666 ****(note: truncation not rounding!).
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
