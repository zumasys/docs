# DB-PAUSE

<PageHeader />

**Tags:**
<badge text='shutdown' vertical='middle' />
<badge text='pause' vertical='middle' />
<badge text='db-pause' vertical='middle' />
<badge text='db' vertical='middle' />
<badge text='pause database operations' vertical='middle' />

## Description

This command will pause all database operations, through jEDI, to the jBASE database. It takes the general form:

```
DB-PAUSE options
```

where options may be:

- **a** - option means that administrators (e.g. root users on UNIX) can still make updates to the database.
- **n** - option specifies the database to pause (This option is restricted to jBASE 5)
- **r** - option still allows read operations on the database and therefore only pauses updates.
- **-** option permits users inside a transaction to continue until it terminates the transaction by either a commit ([TRANSEND](./../../jbc/transend/README.md)) or a rollback ([TRANSABORT](./../../jbc/transabort/README.md)).

The command can be run a number of times with different options. For example, run it with the -a option to allow root users continued access then when sure all normal users are paused, run it again without the -a option, which will suspend the updates for all users.

An example of use use is as:

```
# DB-PAUSE
DatajBASE paused at Mon Nov 25 15:59:53 2002
For READ and WRITE operations
Updates are denied also to root users
Transactions will be blocked immediately.
```

## Note

> This utility is only available in jBASE 4.1 and later.

See also [DB-RESUME](./../db-resume/README.md)

Back to [Tools and Utilities](./../README.md)

<PageFooter />
