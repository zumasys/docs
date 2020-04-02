# ASSIGNED

**Created At:** 7/17/2017 2:43:09 PM  
**Updated At:** 5/17/2019 9:35:49 AM  
**Original Doc:** [263528-assigned](https://docs.jbase.com/36868-jbase-basic/263528-assigned)  
**Original ID:** 263528  
**Internal:** No  

## Description

The function returns a Boolean TRUE or FALSE result depending on whether or not a variable has an assigned value.

```
ASSIGNED(variable)
```

Where **variable** is any variable declared in the program.

**ASSIGNED** returns TRUE if the variable named has an assigned value (even an empty string) before the execution of this statement. If **variable** has no assigned value then the function returns FALSE.

## Note

> Provision of this function is due to its implementation in older versions of the language. It is advised to program in such a way so as to avoid using this statement.

## Example

```
IF ASSIGNED(record) THEN
    CRT "The variable 'record' has been assigned a value."
END ELSE
    CRT "The variable 'record' has NOT been assigned a value."
END
```

See also: [UNASSIGNED](./../unassigned)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
