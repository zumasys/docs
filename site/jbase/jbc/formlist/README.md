# FORMLIST

**Created At:** 9/5/2017 3:00:01 PM  
**Updated At:** 1/5/2018 1:28:20 PM  
**Original Doc:** [275992-formlist](https://docs.jbase.com/36868-jbase-basic/275992-formlist)  
**Original ID:** 275992  
**Internal:** No  

## Description

The **FORMLIST** statement creates an active select list from a dynamic array. It takes the general form:

```
FORMLIST variable1 {TO variable2 | listnum}
```

Where:

- **variable1** specifies the dynamic array from which the active select list is to be created.
- If **variable2** is specified, then the newly created list will be placed in the variable.
- Alternatively, a select list number in the range 0 to 10 can be specified with **listnum**.

If neither **variable2** nor **listnum** is specified then the default list variable will be assumed.

An example of use is as:

```
arr_Var = "key3" : @AM : "key4" : @AM : "key5"
FORMLIST arr_Var TO list_Var
LOOP
    READNEXT Key FROM list_Var ELSE EXIT
    READ Item FROM Key THEN
        * Do whatever processing is necessary on Item
    END
REPEAT
```

See also: [DELETELIST](./../deletelist), [READLIST](./../readlist), [WRITELIST](./../writelist)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
