# ABORT

**Created At:** 11/3/2017 10:41:21 AM  
**Updated At:** 1/5/2018 6:44:07 PM  
**Original Doc:** [284104-abort](https://docs.jbase.com/36868-jbase-basic/284104-abort)  
**Original ID:** 284104  
**Internal:** No  

## Description

The **ABORT** statement terminates the current running program and the program that called it. It takes the general form:

```
ABORT {message.number{, expression ...}}
```

- The optional message.number provided with the statement must be a numeric value, which corresponds to a record key in the jBASE error message file.  The optional message.number and expression(s) given with the command are parameters or resultants provided as variables, literal strings, expressions, or functions.
- A single expression or a list of expression(s) may follow the message.number. Where more than one expression is listed, they must be delimited by the use of the comma character. The expression(s)correspond to the parameters that need passing to the error file record to print it.

## Note

> This statement will terminate the execution of a jBASE BASIC program together with any calling program. It will then optionally display a message, and return to the shell prompt. The error file holds the optional message displayed on terminating the program.
>
> For successful printing of the message, parameters such as linefeeds, clearscreen, date and literal strings may also be required. Setting the Command Level Restart option can alter operation of this command.

An example of use may be as:

```
CRT "CONTINUE (Y/N) ?":;
INPUT ANS
IF ANS NE "Y" THEN ABORT 66, "Aborted"
```

This will terminate the program and print error message 66.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
