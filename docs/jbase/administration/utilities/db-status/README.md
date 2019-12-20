# DB-STATUS

**Created At:** 8/16/2018 2:57:37 PM  
**Updated At:** 12/28/2018 2:08:32 PM  

**Tags:**
<badge text='db-status' vertical='middle' />
<badge text='status' vertical='middle' />
<badge text='db' vertical='middle' />
<badge text='database operations' vertical='middle' />

## Description 

This can be used to check the status of jBASE databases, i.e running or paused. It may be invoked as:

```
DB-STATUS option
```

where option may be:

- The **-a**option specifies that all databases should be shut down (This option is restricted to jBASE 5)
- The **-n**option specifies the database to shut down  ( This option is restricted to jBASE 5)
- Use the **-t** option to display users currently inside a transaction.
- The **-v** option is the verbose option.
- Use the **-w** option to display all users currently suspended and waiting for a DB-RESUME.
- The **-V** option is the very verbose option and is the equivalent of -t, -v and -w together.




Run this command as any user which also shows the status of the DB-PAUSE command

An example of use may be:

```
# DB-STATUS -V
DatajBASE paused at Mon Nov 25 16:13:36 2002
For READ and WRITE operations
Updates are denied also to root users
Existing transactions can continue until complete
Port 4 is waiting for DB-RESUME
Port 23 is waiting for DB-RESUME
Port 31 is inside a transaction
1 ports inside a transaction, 2 ports waiting for DB-RESUME
```



One common usage of these commands will be to split mirrors on a mirrored disk system. One of the mirrors can then continue a jBASE operation following a DB-RESUME and the other mirror, which is now quiescent, used for a fast backup using operating system specific backup tools.



## Note: 


> This utility is only available in jBASE 4.1 and later.

