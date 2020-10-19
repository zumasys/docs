# LAST() function

<PageHeader />

## Description

The **LAST()** function retrieves the last delimited element of a string. The **delimiter** can be any character.

It takes the general form:

```
LAST(expression, {delimiter})
```

Where:

* **expression** evaluates to the string to be processed.
* **delimiter** is optional and can be any character. If not specifed then **@AM** is used and is the default character. If there is no **@AM** then **@VM** is used. If there is no **@VM** then **@SVM** is used.

This function can only be use in **A;** conversions/correlatives or in [I-types](../conversion-processing/../i-types/README.md).

### Examples used with A; conversions or correlatives

```
A;LAST(6)
```

If attribute 6 contains any **@VM**s then the last multi-value is returned. If there are no **@VM**s then the last sub-value is returned.


```
A;last(2, ",")
```

Returns the last comma-delimited element from attribute 6.

### I-type examples

```
LAST(@RECORD)
```

Returns the last attribute from the record. This is the same as **LAST(@RECORD, @AM)**

```
last(@RECORD<1>)
```

If attribute 1 contains any **@VM**s then the last multi-value is returned. If there are no **@VM**s then the last sub-value is returned.

```
last(@RECORD<3,6>)
```

Returns the last sub-value from the 6th multi-value in attribute 3.

```
LAST(@RECORD<2>, @TAB)
```

Returns the last tab-delimited element from attribute 2.


Back to [Correlative Processing](./../conversion-processing)

  
<PageFooter />
