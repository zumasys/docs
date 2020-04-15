# INT

<PageHeader />  

**Tags:**
<badge text='dround' vertical='middle' />
<badge text='rounding' vertical='middle' />
<badge text='round' vertical='middle' />
<badge text='roundoff' vertical='middle' />
<badge text='mathematical operations' vertical='middle' />
<badge text='floating point operations' vertical='middle' />

## Description

The **INT()** function returns the floor of a numeric value.

It takes the general form:

```
INT(expression)
```

Where **expression** should evaluate to a numeric value. The function will then return the integer portion of the value.

The function works by truncating the fractional part of the numeric value rather than by standard mathematical rounding techniques. Therefore, **INT**(9.001) and **INT**(9.999) will both return the value **9**.

An example of use is as:

```
CRT INT(22/7)
```

which will display the value **3**.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
