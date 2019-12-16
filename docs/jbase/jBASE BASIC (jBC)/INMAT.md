# INMAT

**Created At:** 11/6/2017 2:27:22 PM  
**Updated At:** 1/5/2018 6:50:43 PM  


# Description 

The **INMAT** function returns the number of dimensioned array elements. It takes the general from:

```
INMAT( {array} )
```

Using the **INMAT** function, without the 'array' argument, returns the number of dimensioned array elements from the most recent [MATREAD](276956-matread), [MATREADU](276959-matreadu), MATREADL or [MATPARSE](276954-matparse) statement. If the number of array elements exceeds the number of elements specified in the corresponding DIM statement, the function will return zero. Using the **INMAT** function with the 'array' argument, returns the current number of elements to the dimensioned 'array'.

In some dialects the **INMAT** function is also used to return the modulo of a file after the execution of an [OPEN](277537-open) statement, which is inconsistent with its primary purpose and not implemented in jBASE. To achieve this functionality use the [IOCTL](276732-ioctl) function with the JIOCTL\_COMMAND\_FILESTATUS command.

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

This returns the number of elements in the CUSTRECarray to the variable CUSTREC.ELEMENTS.



Go back to [jBASE BASIC](263498-jbase-basic).
