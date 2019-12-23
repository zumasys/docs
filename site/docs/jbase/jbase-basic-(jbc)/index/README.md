# INDEX

**Created At:** 9/7/2017 9:10:16 AM  
**Updated At:** 10/30/2018 9:55:16 AM  
**Original Doc:** [276152-index](https://docs.jbase.com/36868-jbase-basic/276152-index)  


# Description

The **INDEX** function will return the position of a character or characters within another string. It takes the general form:

```
INDEX(expression1, expression2, expression3)
```

Where:

- **expression1** evaluates to the string to be searched.
- **expression2** evaluates to the string or character that will be searched for within expression1.
- **expression3** should evaluate to an integer value and specify which occurrence of expression2 should be searched for within expression1.




## Note: 


> If the specified occurrence of *expression2*is not found in *expression1* then it returns Zero (0).


An example of use is as:

```
ALPHBT = "abcdefghijklmnopqrstuvwxyzabc"
CRT INDEX(ALPHBT , "a", 1)
CRT INDEX(ALPHBT , "a", 2)
CRT INDEX(ALPHBT, "jkl", 1)
```

to display:

```
1
27
10
```



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
