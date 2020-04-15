# MOD/REM

<PageHeader />  

**Tags:**
<badge text='mod' vertical='middle' />
<badge text='rem' vertical='middle' />
<badge text='mathematical operations' vertical='middle' />

## Description

The **MOD** or **REM** functions return the arithmetic modulo of two numeric expressions. They take the general form:

```
MOD(expression1, expression2)
```

or

```
REM(expression1, expression2)
```

Where both **expression1** and **expression2** should evaluate to numeric expressions or a runtime error will occur.

The remainder of **expression1** divided by **expression2** calculates the modulo. If expression2 evaluates to 0, then the value of **expression1** is returned.

An example of use is as below:

```
FOR inx = 1 TO 10000
    IF MOD (inx, 1000) = 0 THEN
        *perform a task
    END
NEXT inx
```

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
