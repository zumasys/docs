# MINIMUM

<PageHeader />

**Tags:**
<badge text='dynamic arrays' vertical='middle' />

## Description

This function returns the element of a dynamic array with the lowest numerical value. It takes the general form:

```
MINIMUM(DynArr)
```

Where **DynArr** should evaluate to a dynamic array.

Null dynamic array elements are treated as zero. Non-numeric dynamic array elements are ignored. If the lowest number is less than zero then it is returned with a leading zero, e.g. 0.42

An example of use would be as:

```
var_Arr =" "
FOR inx = 2 TO 4
    INS inx * 3 BEFORE var_Arr<-3>
NEXT inx
CRT MINIMUM(var_Arr)
```

to display 6

See also: [MAXIMUM.](./../maximum)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
