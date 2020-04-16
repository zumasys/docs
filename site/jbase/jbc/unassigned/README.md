# UNASSIGNED

<PageHeader />

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

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
