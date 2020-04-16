# RTNDATA

<PageHeader />

The **RTNDATA** statement allows a program to return specific data to the **RTNDATA** clause of another program's [EXECUTE](./../execute) statement. It takes the general form:

```
RTNDATA expression
```

Where:

**expression** may evaluate to any data type.

When a jBASE BASIC program executes another jBASE BASIC program using the [EXECUTE](./../execute) statement, it may specify a variable to pick up data using the **RTNDATA** clause. The data picked up will be that specified by the executed program using the **RTNDATA** statement.

The data will be discarded if the program is not executed by an [EXECUTE](./../execute) statement in another program.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
