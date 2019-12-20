# TRANSABORT

**Created At:** 9/29/2017 2:20:31 PM  
**Updated At:** 1/5/2018 6:26:47 PM  
**Original Doc:** [278971-transabort](https://docs.jbase.com/36868-jbase-basic/278971-transabort)  


# Description

The statement is used to abort the current transaction and reverse any updates to the database. It takes the general form:

```
TRANSABORT {abort-text} [THEN statement | ELSE statement]
```

Where:

Abort-text specifies an optional text string to save in the transaction abort record.

A THEN or ELSE (or both) statement is required. The THEN clause will be executed if the transaction is successfully aborted. The ELSE clause will be executed if the transaction abort fails for any reason.

Any record locks set during the transaction will be released upon successful completion.



Go back to[jBASE BASIC](263498-jbase-basic).
