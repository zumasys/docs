# TRANSQUERY

<PageHeader />

## Description

The **TRANSQUERY** function is used to detect whether or not a transaction is active on the current process. It takes the general form:

```
TRANSQUERY()
```

**TRANSQUERY** will return 1 (true) if the process is within a transaction boundary, and 0 (false) if it is not. In other words, **TRANSQUERY** will return true if the [TRANSTART](./../transtart) statement has been issued but a [TRANSEND](./../transend) or [TRANSABORT](./../transabort) statement has not yet been processed.

By default, all hashed files are marked for inclusion in a transaction, however this can be modified using the jchmod utility.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
