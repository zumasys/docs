# CASE

<PageHeader />

## Description

The **CASE** statement allows the programmer to execute a particular sequence of instructions based upon the results of a series of test expressions. It usually takes the form:

```
BEGIN CASE
    CASE expression
        statement(s)
    CASE expression
        statement(s)
. . .
END CASE
```

Where:

- The **BEGIN CASE** and **END CASE** statements bound the **CASE** structure. Within this block, an arbitrary number of **CASE** expression statements may exist followed by any number of jBASE BASIC statements.
- **expression** should evaluate to a TRUE or FALSE result. The evaluation of each expression at execution time is in order. If **expression** returns a TRUE result, it then executes the statements below. On completion of the associated statements, execution will resume at the first statement following the END CASE.

## Note

> - A default action, a form of exception handling may be introduced by using an expression that is always TRUE. This should always be the last expression in the **CASE** block.
> - BREAK is not necessarily required when using **CASE** in jBC, which may not be so in other languages.
> It is worth noting that a **CASE** statement immediately followed by another **CASE** statement does not result in cojoining those operations.

An example of use is as below:

```
LOOP
    INPUT Answer
UNTIL Answer = '' DO
    BEGIN CASE
    CASE Answer = 2
* if Answer = 2 then no operation will be performed
    CASE Answer = 1
        CRT "You won!"
    CASE @TRUE
        CRT "You came nowhere"
    END CASE
REPEAT
```

In the above scenario, a single comment is printed depending on the value of "Answer". If "Answer" is not 1 or 2 then the default **CASE** 1 rule will be executed as a "catch all".

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
