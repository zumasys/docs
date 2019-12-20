# TRANSEND

**Created At:** 9/29/2017 2:25:41 PM  
**Updated At:** 1/5/2018 6:27:35 PM  
**Original Doc:** [278974-transend](https://docs.jbase.com/36868-jbase-basic/278974-transend)  


# Description

The **TRANSEND** statement is used to mark the end of a successfully completed transaction. It takes the general form:

```
TRANSEND {end-text} [THEN statement | ELSE statement]
```

Where:

end-text specifies an optional text string to save with the transaction end record.

A THEN or ELSE (or both) statement is required. The THEN clause will be executed if the transaction is successfully ended. The ELSE clause will be executed if the transaction end fails for any reason.

Any record locks set during the transaction will be released upon successful completion.



Go back to [jBASE BASIC](263498-jbase-basic).
