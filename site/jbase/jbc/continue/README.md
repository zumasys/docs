# CONTINUE

<PageHeader />

**Tags:**
<badge text='program control' vertical='middle' />

## Description

The **CONTINUE** statement is the complimentary statement to the [BREAK](./../break) statement, without arguments. If used within a loop, program execution will skip the remaining code after the ‘continue’ statement in the current iteration and proceed directly on to the next iteration.

The compiler will issue a warning message and ignore the statement if it is found outside an iterative  loop such as [FOR...NEXT](./../for), [LOOP...REPEAT](./../loop).

An example of use is as:

```
FOR index = 1 TO 30
    IF MOD(index,2) = 0  THEN CONTINUE
    ELSE CRT index
NEXT index
```

The above example will execute the loop 30 times but will only print the value of "index" when "index" is an odd number.

See also: [BREAK](./../break), [EXIT](./../exit)

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
