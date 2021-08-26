# ASSIGNED

<PageHeader />

## Description

The function returns a Boolean TRUE or FALSE result depending on whether or not a variable has an assigned value.

```
ASSIGNED(variable)
```

Where **variable** is any variable declared in the program.

**ASSIGNED** returns TRUE if the variable named has an assigned value (even an empty string) before the execution of this statement. If **variable** has no assigned value then the function returns FALSE.

## Note

>This function has been provided for backward compatibility purposes, as it has been implemented in older implementations of the language. It is advised to program in such a way that this statement will not be needed.

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

<PageFooter />
