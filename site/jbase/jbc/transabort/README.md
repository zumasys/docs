# TRANSABORT

<PageHeader />

## Description

The statement is used to abort the current transaction and reverse any updates to the database. It takes the general form:

```
TRANSABORT {abort-text} [THEN statement | ELSE statement]
```

Where:

**abort-text** specifies an optional text string to save in the transaction abort record.

A **THEN** or **ELSE** (or both) statement is required. The **THEN** clause will be executed if the transaction is successfully aborted. The **ELSE** clause will be executed if the transaction abort fails for any reason.

Any record locks set during the transaction will be released upon successful completion.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
