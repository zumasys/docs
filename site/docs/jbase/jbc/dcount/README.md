# DCOUNT

**Created At:** 8/14/2017 10:28:38 AM  
**Updated At:** 10/25/2018 7:10:03 AM  
**Original Doc:** [266871-dcount](https://docs.jbase.com/36868-jbase-basic/266871-dcount)  
**Original ID:** 266871  
**Internal:** No  

## Description

This function counts the number of field elements in a string that are separated by a specified delimiter. It takes the general form:

```
DCOUNT(expression1, expression2)
```

Where:

- **expression1** evaluates to a string in which fields are to be counted.
- **expression2** evaluates to the delimiter string used to count the fields.

## Note

> - The delimiter string may consist of more than one character.
> - If expression1 is a NULL string, the function returns a value of zero.
> - The delimiter string may consist of any character, including system delimiters such as field marks or value marks.

An example of use is as follows:

```
A = "A:B:C:D"
CRT DCOUNT(A, ":")
```

The above code will display the value 4

See also: [COUNT](./../count).

Go back to [jBASE BASIC](./../README.md)
