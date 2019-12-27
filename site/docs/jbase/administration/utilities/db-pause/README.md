# DB-PAUSE

**Created At:** 8/16/2018 2:56:49 PM  
**Updated At:** 4/19/2019 8:12:41 AM  
**Original Doc:** [db-pause](https://docs.jbase.com/46963-utilities/db-pause)  
**Original ID:** 334593  
**Internal:** No  

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

- **-a** option means that administrators (e.g. root users on UNIX) can still make updates to the database.
- **-n**option specifies the database to pause (This option is restricted to jBASE 5)
- **-r** option still allows read operations on the database and therefore only pauses updates.
- **-t** option permits users inside a transaction to continue until it terminates the transaction by either a commit ([TRANSEND](./../../../jbase-basic-%28jbc%29/transend)) or a rollback ([TRANSABORT](./../../../jbase-basic-%28jbc%29/transabort)).




The command can be run a number of times with different options. For example, run it with the -a option to allow root users continued access then when sure all normal users are paused, run it again without the -a option, which will suspend the updates for all users.

An example of use use is as:

```
# DB-PAUSE
DatajBASE paused at Mon Nov 25 15:59:53 2002
For READ and WRITE operations
Updates are denied also to root users
Transactions will be blocked immediately.
```



## Note: 


> This utility is only available in jBASE 4.1 and later.



