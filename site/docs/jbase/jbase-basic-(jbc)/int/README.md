# INT

**Created At:** 9/13/2017 12:53:49 PM  
**Updated At:** 5/16/2019 3:24:32 PM  
**Original Doc:** [276607-int](https://docs.jbase.com/36868-jbase-basic/276607-int)  
**Original ID:** 276607  
**Internal:** No  

**Tags:**
<badge text='dround' vertical='middle' />
<badge text='rounding' vertical='middle' />
<badge text='round' vertical='middle' />
<badge text='roundoff' vertical='middle' />
<badge text='mathematical operations' vertical='middle' />
<badge text='floating point operations' vertical='middle' />

# Description

The **I****NT()**function returns the floor of a numeric value.

It takes the general form:

```
INT(expression) 
```

Where **e****xpression** should evaluate to a numeric value. The function will then return the integer portion of the value.

The function works by truncating the fractional part of the numeric value rather than by standard mathematical rounding techniques. Therefore, **INT****(9.001)** and **INT****(9.999)**will both return the value **9**.

An example of use is as:

```
CRT INT(22/7)
```

which will display the value **3**.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
