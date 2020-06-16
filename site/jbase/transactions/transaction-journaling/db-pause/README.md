# DB-PAUSE

<PageHeader />

## Syntax

```
DB-PAUSE {-art}
```

Where:

-**a**      Administrators are still allowed access to the database as such must be used with care.
-**r**      Read type operations are still allowed on the database. Write operations including DELETE-FILE, FILELOCK, CLEARFILE, WRITE and DELETE record will be paused.
-**t**      Transactions are allowed to complete.

The DB-PAUSE command is used when the administrator wishes to selectively pause the database. The pause effected by this
command prohibits all access to the database from this time, dependent on the options chosen. Processes will wait until this condition is
cleared from the database , with no application programming required to effect this wait.

Briefly, database transaction is defined so :  

TRANSTART  
READs  
WRITEs  
DELETEs  
Etc.   
TRANSEND  

When the TRANSEND instruction is executed, this process is now deemed to be “in a transaction” for database purposes. No database
updates have occurred up to this time, but they are cached.  

The “–**t**” option refers to those processes which have entered this state.  

Once a transaction has been processed fully this state is exited. The process will now be paused – depending on other options chosen.

Note: A complete description of the life of a transaction will be documented later.

Back to [Transaction Journaling](./../README.md)

<PageFooter />
