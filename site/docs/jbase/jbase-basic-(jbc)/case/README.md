# CASE

**Created At:** 7/24/2017 12:56:07 PM  
**Updated At:** 10/24/2018 10:57:46 PM  
**Original Doc:** [264319-case](https://docs.jbase.com/36868-jbase-basic/264319-case)  
**Original ID:** 264319  
**Internal:** No  

## Description

The **CASE** statement allows the programmer to execute a particular sequence of instructions based upon the results of a series of test expressions. It usually takes the form:

```
BEGIN CASE
CASE expression statement(s)
CASE expression
statement(s)
. . .
END CASE
```

Where:

- The **BEGIN CASE** and **END CASE** statements bound the **CASE** structure. Within this block, an arbitrary number of **CASE** expression statements may exist followed by any number of jBASE BASIC statements.
- The **expression** should evaluate to a TRUE or FALSE result. The evaluation of each expression at execution time is in order. If the expression returns a TRUE result, it then executes the statements below. On completion of the associated statements, execution will resume at the first statement following the END CASE.

## Note

> - A default action, a form of exception handling may be introduced by using an expression that is always TRUE. This should always be the last expression in the **CASE** block.
> - BREAK is not necessarily required when using **CASE** in jBC, which may not be so in other languages.
> It is worth noting that a **CASE** statement immediately followed by another **CASE** statement does not result in cojoining those operations.

An example of use is as below:

```
     BEGIN CASE
     CASE A = 2
         if A = 2 then no operation will be performed
     CASE A = 1
         CRT "You won!"
     CASE 1
         CRT "You came nowhere"
     END CASE

```

In the above scenario, a single comment is printed depending on the value of A. If A is not 1 or 2 then the default **CASE** 1 rule will be executed as a "catch all".

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
