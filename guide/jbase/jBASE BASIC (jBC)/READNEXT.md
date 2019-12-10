# READNEXT

**Created At:** 9/27/2017 2:35:47 PM  
**Updated At:** 11/27/2018 9:30:43 AM  


# Description

**READNEXT** retrieves the next element in a list variable. It takes the general form:

```
READNEXT variable1, variable2 {FROM variable3} {SETTING setvar} {THEN|ELSE statements}
```

Where:

- **variable1** is the variable into which the next element of the list will be read.
- **variable2** is used when the list has been retrieved externally from a [SSELECT](278821-sselect) or similar jBASE command that has used an exploding sort directive. When specified, this variable will be set to the multi-value reference of the current element. For example, if the [SSELECT](278821-sselect) used a **BY-EXP** directive on field 3 of the records in a file, the list will contain each record key in the file as many times as there are multi-values in the field. Each **READNEXT** instance will set variable2 to the multi-value in field 3 to which the element refers. This allows the multi-values in field 3 to be retrieved in sorted order.
- If **variable3** is specified with the FROM clause, the **READNEXT** operates on the list contained in variable3. If variable3 is not specified, the default select list variable will be assumed.


If the SETTING clause is specified and the read (to build the next portion of the list) fails, setvar will be set to one of [these values](277647-increamental-file-errors).

## Note: 


> **READNEXT** can be used as an expression returning a Boolean TRUE or FALSE value. If an element is successfully read from the list, TRUE is returned. If the list was empty, FALSE is returned.


An example of use is as:

```
LOOP WHILE READNEXT id FROM RecordList DO
    ......
REPEAT
```



See also: [SELECT](278801-select)

Go back to [jBASE BASIC](263498-jbase-basic).


