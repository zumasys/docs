# NUM

**Created At:** 9/15/2017 2:45:59 PM  
**Updated At:** 11/27/2018 9:46:52 AM  
**Original Doc:** [276998-num](https://docs.jbase.com/36868-jbase-basic/276998-num)  
**Original ID:** 276998  
**Internal:** No  


# Description

The **NUM** function is used to test arguments for numeric values. It takes the general form:

```
NUM(expression)
```

Where **expression** may evaluate to any data type.

If it is found that every character in expression is numeric then **NUM** returns a value of Boolean TRUE. If any character in **expression** is found not to be numeric then a value of Boolean FALSE is returned.



## Note:


> To execute user code migrated from older systems correctly, the **NUM** function will accept both a null string and the single characters ".", "+", and "-" as being numeric. Also, if running jBASE BASIC in ros emulation the "." , "+" and "-" characters would not be considered numeric.


An example of use is as:

```
LOOP
    INPUT Answer,1
    IF NUM (Answer) THEN BREAK ;* Exit loop if numeric
REPEAT
```

The above will ensure the program only exits when a numeric value is entered.



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
