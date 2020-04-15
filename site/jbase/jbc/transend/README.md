# TRANSEND

<PageHeader />

## Description

The **TRANSEND** statement is used to mark the end of a successfully completed transaction. It takes the general form:

```
TRANSEND {end-text} [THEN statement | ELSE statement]
```

Where:

**end-text** specifies an optional text string to save with the transaction end record.

A **THEN** or **ELSE** (or both) statement is required. The **THEN** clause will be executed if the transaction is successfully ended. The **ELSE** clause will be executed if the transaction end fails for any reason.

Any record locks set during the transaction will be released upon successful completion.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
