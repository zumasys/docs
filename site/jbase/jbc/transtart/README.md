# TRANSTART

**Created At:** 9/29/2017 2:23:59 PM  
**Updated At:** 1/5/2018 6:27:15 PM  
**Original Doc:** [278973-transtart](https://docs.jbase.com/36868-jbase-basic/278973-transtart)  
**Original ID:** 278973  
**Internal:** No  

## Description

In transaction processing, the **TRANSTART** statement is used to mark the beginning of a transaction. It takes the general form:

```
TRANSTART {SYNC}{start-text} [THEN statement | ELSE statement]
```

Where:

**SYNC** is an option to force the updates to be flushed at transaction end or abort.

**start-text** specifies an optional text string to save with the transaction start record.

A **THEN** or **ELSE** (or both) statement is required. The **THEN** clause will be executed if the transaction is successfully started. The **ELSE** clause will be executed if the transaction start fails for any reason.

## Note

> Record locks set during the transaction will not be released until a [TRANSEND](./../transend) or [TRANSABORT](./../transabort) statement is processed.

A program (or series of programs) can only have one active transaction at one time. If another **TRANSTART** statement is encountered whilst a transaction is active, a run-time error will be generated.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
