# TRANSQUERY

**Created At:** 9/29/2017 2:22:40 PM  
**Updated At:** 1/5/2018 6:26:59 PM  
**Original Doc:** [278972-transquery](https://docs.jbase.com/36868-jbase-basic/278972-transquery)  


# Description

The **TRANSQUERY**function is used to detect whether or not a transaction is active on the current process. It takes the general form:

```
TRANSQUERY()
```

**TRANSQUERY**will return 1 (true) if the process is within a transaction boundary, and 0 (false) if it is not. In other words, **TRANSQUERY** will return true if the [TRANSTART](278973-transtart) statement has been issued but a [TRANSEND](278974-transend) or [TRANSABORT](278971-transabort) statement has not yet been processed.

By default, all hashed files are marked for inclusion in a transaction however this can be modified by the jchmod utility.



Go back to [jBASE BASIC](263498-jbase-basic).
