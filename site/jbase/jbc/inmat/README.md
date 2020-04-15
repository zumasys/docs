# INMAT

<PageHeader />  

## Description

The **INMAT** function returns the number of dimensioned array elements. It takes the general from:

```
INMAT( {array} )
```

Using the **INMAT** function, without the 'array' argument, returns the number of dimensioned array elements from the most recent [MATREAD](./../matread), [MATREADU](./../matreadu), MATREADL or [MATPARSE](./../matparse) statement. If the number of array elements exceeds the number of elements specified in the corresponding DIM statement, the function will return zero. Using the **INMAT** function with the 'array' argument, returns the current number of elements to the dimensioned 'array'.

In some dialects the **INMAT** function is also used to return the modulo of a file after the execution of an [OPEN](./../open) statement, which is inconsistent with its primary purpose and not implemented in jBASE. To achieve this functionality use the [IOCTL](./../ioctl) function with the JIOCTL\_COMMAND\_FILESTATUS command.

An example of use is as:

```
OPEN "CUSTOMERS" TO CUSTOMERS ELSE STOP 201, "CUSTOMERS"
DIM CUSTREC(99)
ELEMENTS = INMAT(CUSTREC) ; * Returns the value "99" to the variable ELEMENTS
ID = "149"
MATREAD CUSTREC FROM CUSTOMERS, ID THEN
    CUSTREC.ELEMENTS = INMAT() ;
END
```

This returns the number of elements in the CUSTREC array to the variable CUSTREC.ELEMENTS.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
