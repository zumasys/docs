# TRANSQUERY

**Created At:** 9/29/2017 2:22:40 PM  
**Updated At:** 1/5/2018 6:26:59 PM  
**Original Doc:** [278972-transquery](https://docs.jbase.com/36868-jbase-basic/278972-transquery)  
**Original ID:** 278972  
**Internal:** No  

## Description

The **TRANSQUERY** function is used to detect whether or not a transaction is active on the current process. It takes the general form:

```
TRANSQUERY()
```

**TRANSQUERY** will return 1 (true) if the process is within a transaction boundary, and 0 (false) if it is not. In other words, **TRANSQUERY** will return true if the [TRANSTART](./../transtart) statement has been issued but a [TRANSEND](./../transend) or [TRANSABORT](./../transabort) statement has not yet been processed.

By default, all hashed files are marked for inclusion in a transaction, however this can be modified using the jchmod utility.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)
