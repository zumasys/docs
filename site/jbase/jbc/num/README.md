# NUM

<PageHeader />

## Description

The **NUM** function is used to test arguments for numeric values. It takes the general form:

```
NUM(expression)
```

Where **expression** may evaluate to any data type.

If it is found that every character in expression is numeric then **NUM** returns a value of Boolean TRUE. If any character in **expression** is found not to be numeric then a value of Boolean FALSE is returned.

## Note

> To execute user code migrated from older systems correctly, the **NUM** function will accept both a null string and the single characters ".", "+", and "-" as being numeric. Also, if running jBASE BASIC in ros emulation the "." , "+" and "-" characters would not be considered numeric.

An example of use is as:

```
LOOP
    INPUT Answer,1
    IF NUM (Answer) THEN BREAK ;* Exit loop if numeric
REPEAT
```

The above will ensure the program only exits when a numeric value is entered.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
