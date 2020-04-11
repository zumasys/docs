# READL

**Created At:** 9/27/2017 2:18:28 PM  
**Updated At:** 11/27/2018 9:28:31 AM  
**Original Doc:** [278657-readl](https://docs.jbase.com/36868-jbase-basic/278657-readl)  
**Original ID:** 278657  
**Internal:** No  

**Tags:**
<badge text='record handling' vertical='middle' />

## Description

The **READL** statement allows a process to read a record from a previously opened file into a variable and takes a read-only shared lock on the record. It respects all records locked with the [READU](./../readu) statement but allows other processes using **READL** to share the same lock.

It takes the general form:

```
READL variable1 FROM {variable2,} expression {SETTING setvar} {ON ERROR statements} {LOCKED statements} THEN|ELSE statements
```

Where:

- **variable1** is the identifier into which the record will be read,
- **variable2**, if specified, should be a jBASE BASIC variable that has previously been opened to a file using the OPEN statement if **variable2** is not specified then the default file is assumed,
- The **expression** should evaluate to a valid record key for the file ,
- If the **SETTING** clause is specified and the read fails, **setvar** will be set to one of the [these values](./../incremental-file-errors).

If **ON ERROR** is specified, the statements following the **ON ERROR** clause will be executed, except for Incremental File error 128.

## Note

> **READL** takes a read-only shared record lock whereas READU takes an exclusive lock. This means that any record, which is read using **READL**, can also be read by another process using a **READL**. In other words, the lock on the record is 'shared' in that no [READU](./../readu) lock against the same record can be taken. Similarly, if a [READU](./../readu) takes a lock then **READL** will respect that lock. By comparison, a [READU](./../readu) takes an exclusive lock in that the one process retains control over the record.
>
> The usage of **READL** allows for an application to present a record to one or more users such that its integrity is ensured, i.e. the user(s) viewing the record can be assured that what is displayed is what they have and that no updates to that record have been made whilst viewing the record.
>
> While it is permissible to WRITE a record that has a **READL** lock, the intent of **READL** is to permit a 'read-only' shared lock and the act of WRITEing this record would not be considered good programming practice.
>
> [READ](./../read) takes no lock at all and does not respect any lock taken with [READU](./../readu) or **READL**. In other words, a READ can be performed at any time and on any record regardless of any existing locks.
>
> Due to limitations on Windows platforms, the **READL** statement behaves the same as the [READU](./../readu) statement, in other words they both take exclusive locks.
>
> If the record could not be read because another process already had a [READU](./../readu) lock on the record then one of two actions is taken. If the **LOCKED** clause was specified in the statement then the statements dependent on it are executed. If no **LOCKED** clause was specified then the statement blocks (hangs) until the other process releases the lock. The SYSTEM (43) function can be used to determine which port has the lock.
>
> If the statement fails to read the record then any statements associated with the **ELSE** clause will be executed. If the statement successfully reads the record then the statements associated with any **THEN** clause are executed. Either or both of **THEN** and **ELSE** clauses must be specified with the statement.
>
> The lock taken by the **READL** statement will be released by any of the following events however, be aware that the record will not be fully released until all shared locks have been released:
>
> - The same program with [WRITE](./../write), [WRITEV](./../writev) or [MATWRITE](./../matwrite) statements writes to the record.
> - The same program with the [DELETE](./../delete) statement deletes the record.
> - The record lock is released explicitly using the [RELEASE](./../release) statement.
> - The program stops normally or abnormally.
>
>
> See also: [WRITE](./../write), [WRITEU](./../writeu), [MATWRITE](./../matwrite), [MATWRITEU](./../matwriteu), [RELEASE](./../release), and [DELETE](./../delete).

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
