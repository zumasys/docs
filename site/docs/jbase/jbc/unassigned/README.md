# UNASSIGNED

**Created At:** 9/29/2017 2:50:05 PM  
**Updated At:** 1/5/2018 6:29:18 PM  
**Original Doc:** [278984-unassigned](https://docs.jbase.com/36868-jbase-basic/278984-unassigned)  
**Original ID:** 278984  
**Internal:** No  

## Description

The **UNASSIGNED** function allows a program to determine whether a variable has been assigned a value. It takes the general form:

```
UNASSIGNED(variable)
```

Where:

**variable** is the name of variable used elsewhere in the program.

The function returns Boolean TRUE if **variable** has not yet been assigned a value. The function returns Boolean FALSE if **variable** has already been assigned a value.

An example of use is as:

```
IF UNASSIGNED(VAR1) THEN
    VAR1 = "Assigned now!"
    CRT VAR1
END ELSE
    CRT "I already have a value"
END
```

See also: [ASSIGNED](./../assigned)

Go back to [jBASE BASIC](./../README.md)
