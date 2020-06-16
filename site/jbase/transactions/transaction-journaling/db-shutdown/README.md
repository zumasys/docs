# DB-SHUTDOWN

<PageHeader />

## Syntax

```
DB-SHUTDOWN {-at}
```

Where:

-**a**      All Databases
-**t**      Transactions are allowed to complete

This command will allow the system administrator to shutdown the database in an orderly manner. This allows for a clean system shutdown,
ensuring database integrity. The effect on processes is the same as for DB-PAUSE.

Back to [Transaction Journaling](./../README.md)

<PageFooter />
