# MAXIMUM

<PageHeader />  

**Tags:**
<badge text='dynamic arrays' vertical='middle' />

## Description

The function returns the element of a dynamic array with the highest numerical value. It takes the general form:

```
MAXIMUM(DynArr)
```

Where **DynArr** should evaluate to a dynamic array. Null dynamic array elements are treated as zero. Non-numeric dynamic array elements are ignored.

An example of use is as:

```
var_Arr =" "
FOR inx = 2 TO 4
    INS inx * 3 BEFORE var_Arr<-3>
NEXT inx
CRT MAXIMUM(var_Arr)
```

to display the number 12.

See also: [MINIMUM](./../minimum).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
