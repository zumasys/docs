# EXTRACT

**Created At:** 8/28/2017 8:46:18 AM  
**Updated At:** 10/25/2018 7:47:34 AM  
**Original Doc:** [269202-extract](https://docs.jbase.com/36868-jbase-basic/269202-extract)  
**Original ID:** 269202  
**Internal:** No  

**Tags:**
<badge text='dynamic arrays manipultation' vertical='middle' />

## Description

The **EXTRACT** function is an alternative method of accessing values in a dynamic array other than using the &lt;n,n,n&gt; syntax. It takes the general form:

```
EXTRACT(expression1, expression2 {, expression3 {, expression4}})
```

Where:

- **expression1** specifies the dynamic array to work with and will normally be a previously assigned variable,
- **expression2** specifies the field to extract,
- **expression3** the value to extract and ,
- **expression4** the subvalue to extract.

## Note

> expressions 2 through 4 should all return a numeric value or a runtime error will occur and the program will enter the debugger.

An example of use is as:

```
A = "0"; A<2> = "1"; A<3> = "2"
CRT EXTRACT(A, 2)
```

to display the value "1".

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
