# PN5_60664

<PageHeader />

## Description

Add persistent locks as an option to jBASE

### Previous Release Behavior

Web application use a non-persistent connection. This means that once the action completes and the web client continues, all locks are released.

There is a need to support persistent locks in jBASE where the lock is maintained even when the process dies.

### Current Release Behavior

## jBASE Persistent Locks

Web application have a unique problem regarding locking. The connection to a server program is often a non-persistent connection. This means the process on the server will commence, deal with the request, and terminate. All record locks are lost at this point. Often in the application these locks need to be maintained over multiple connections, each connection non-persistent.

Another problem with locks is that sometimes a web server process will continually serve multiple requests -- each request might come from a different client and so have different locking permissions, but has to be dealt with by the same web server process.

jBASE Persistent Locks aim to provide a solution for these problems posed by writing web server applications.

### Current jBASE Locks -- a summary

Inside a jBASE application, written in multi-value BASIC (or jBC as it is called on jBASE), locks are mainly manipulated like this:

**READU** -- A record is read from the database and a record lock taken. If the lock is busy, the application waits. The lock owner is based on the port number.

**READU .... LOCKED** -- A record is read from the database, and if the lock is busy, the application continues at the LOCKED clause. The lock owner is based on the port number.

**WRITE** -- A record is written to the database, and any record lock is released

**WRITEU** -- A record is written to the database, and any record lock is maintained.

**RELEASE** -- Various option controls to unlock ALL locks, or unlock all locks on a single file, or unlock a single lock on a single file.

**CLOSE** -- When a file is closed, all locks are released.

**STOP** -- When the program ends, all locks are released.

### Enabling jBASE Persistent locks

To enable jBASE Persistent Locks, use the $persistent class like this

```
    obj = new object("$persistent")
    obj->setfile("sessionid_test4",120,"*")
```

The above example is written in the new jBASE language, jabbascript. (See later if you are not familiar with jabbascript). In the above example, it is telling jBASE to enable persistent locks on **ALL** files currently opened, with a 120 second timeout. This includes files in COMMON. The lock owner is "session\_test4" and this replaces the port number as the lock owner. This value for lock owner is any string less than 64 bytes and is usually, in web server programs, going to be the session id that identifies the client.

A variation of the code (shown below) shows a web application initialising itself, opening its often used files, and setting them to use persistent locks whose lock owner is the session id of the web call.

```
    $option jabba
    common /WebApp/ f_customers , f_prospects , session_id , lock_timeout
    open "CUSTOMERS" to f_customers else [ error code ]
    open "PROSPECTS to f_prospects else [ error code ]
    obj = new object("$persistent")
    obj->setfile(session_id , lock_timeout , f_customers , f_prospects )
```

Once a web server program finished with a request, then you should really remove persistent locking by either closing the files or using the setfile() call as shown below. In both cases, because the locks are persistent, no active locks will be released.

```
    obj = new object("$persistent")
    obj->setfile("",0,"*") // Disable any future persistent locks -- existing active locks will remain
```

### Notes on jBASE Persistent Locks

Note that once you call the setfile() method, it only affects currently opened files. Any future opened files will, by default, not use persistent locking and you need to call setfile() again on them. Once a file is closed, it loses its persistent locking status and when re-opened will not use persistent locking -- you need to call setfile() again.

Once you have enabled persistent locking for all currently opened files, it means jBASE will take persistent locks on all jBASE operations against those files, using the lock owner and timeout as specified. This is true of any jBASE database action be it in a jabbascript program or an existing jBC program. This means you only need use jabbascript to enable persistent locks, after that you can use any combination of jabbascript or legacy MV Basic (jBC).

Using a lock owner id of "" means we disable persistent locks on the specified files.

You can run the setfile() method as often as you like against all files, or selected files.

### jBASE Persistent Locks and MV Basic operations

Once persistent locks are initialised against one ore more file, database operations that effect locks now perform subtly differently as shown

**READU** -- A record is read from the database and a record lock taken. If the lock is busy, the application waits. If the timeout period expires, the lock will be automatically released and the blocking application can now take the lock. The lock owner is based on the lock owner passed via the setfile() method call. If you take a lock on an existing lock that you already own, the timeout value will be refreshed.

**READU .... LOCKED** -- A record is read from the database, and if the lock is busy, the application continues at the LOCKED clause. The lock owner is based on the lock owner passed via the setfile() method.

**WRITE** -- A record is written to the database, and any record lock is released. The lock owner is based on the lock owner passed via the setfile() method.

**WRITEU** -- A record is written to the database, and any record lock is maintained. The lock owner is based on the lock owner passed via the setfile() method.

**RELEASE** -- Various option controls to unlock ALL locks, or unlock all locks on a single file, or unlock a single lock on a single file. The lock owner is based on the lock owner passed via the setfile() method.

**CLOSE** -- When a file is closed, **no locks are released**. You must use RELEASE or WRITE to explicitly release any locks.

**STOP** -- When the program ends, **no locks are released**. You must use RELEASE or WRITE to explicitly release any locks.

## New jBASE commands for persistent locks

### list-persistent-locks

This command simply displays all persistent locks on the system.

```
jsh-> list-persistent-locks

Page        1                                                                                                  04 NOV 2017

Lock ID                  Filename                               Item Id                                Timeout  Remain

#2ZP12-9901              CUSTOMERS                              COOPER*25*07*1956                      60       5
#2ZP12-9901              PROSPECTS                              100976-JUL-2017                        120      115

2 Records listed
```

### clear-persistent-locks

This command allows the administrator to clear persistent locks as follows

```
jsh-> clear-persistent-locks -H
clear-persistent-locks -H

Clear persistent locks. Called as ...
   clear-persistent-locks filename
   clear-persistent-locks filename itemid
   clear-persistent-locks -A
   clear-persistent-locks -S lockid
```

The "filename" option will clear all locks held by a particular file.

The "filename itemid" option will clear one or more locks held by a single particular file.

The "-A" option will clear ALL persistent locks. For example

```
jsh-> clear-persistent-locks -A
201 Locks released
```

The "-S lockid" option will clear all locks held by a particular lock id.

## Using the $persistent class

In most cases, a web server application will be limited to using the setfile() method of this class as has been documented above. However, if your application wants to, it can directly use the methods available in this class.

This section details the methods available to a jabbascript program

### method $persistent::setfile(lock\_id , tout , "\*" | [filevar [,filevar]] )

Sets one or more opened files to use persistent locks.

**lock\_id** is the lock identifier (usually the web server session id) to replace port number as the lock number. If you pass a null string "", then we remove persistent locking from the specified files.

**tout** is the timeout in seconds for the lock. If you pass 0, we apply the default of 300 seconds.

**\*** - if you pass "\*" as the 3rd parameter, then all opened files in the process will have this setting applied to them.

**filevar [ , filevar]** One or more opened file variables to have the setting applied to.

This method can be used as often as you like repeatedly on the same file variable in order to change the lock identifier, the timeout and so on.

**Return Value** The methods returns the number of files the setting was applied to. In case of error, a negative value is returned.

```
   obj = new object("$persistent")
   numfiles = obj->persistent("##classid" , 120 , "*")
   CRT "Persistent locks applied to " : numfiles : " opened files"
```

### method $persistent::lock(filevar , vkey [ , waitflag] )

This method takes a persistent lock on a file variable.

**filevar** The file variable as created by the jBASE "OPEN" statement.

**vkey** The key (item id) of the lock to take.

**waitflag** Optional parameter. If you pass this, and it is set to 0, then the call with not block if the lock is taken.

By default the method will block until the lock is released (or until the lock times out). By passing a 3rd parameter of 0, we will not block.

**Return Value** 0 means there were no errors. JBC\_ERRNO\_LOCK\_TAKEN (defined in JBC.h) means the lock is taken by another process, but you passed the 3rd parameter as 0 to make the call non-blocking. Any other value is an error.

### method $persistent::unlock( [ filevar [ , vkey]])

Remove a lock you have taken. Only locks whose lock id is the current lock id for the file variable will be released. In other words, if you take a lock, and then change the lock id using the 'setfile()' method , then you can't release the lock with a file variable.

**filevar** Optional parameter. This defines the file variable.

**vkey** Optional parameter. This defines the record key / item id.

**Return Value** The number of locks released. In the event of an error, a negative value is returned.

```
    rc = obj->unlock() // Release ALL locks
    Crt "A total of ":rc:" locks were released"
* OR
    rc = obj->unlock(filevar) // Release ALL locks held by a single file
    crt "Released ":rc:" locks from a single file"
* OR
    rc = obj->unlock(filevar , "MyItemId")
```

### method $persistent::clearlocks( [ filevar [ , vkey]])

This method is very similar to the unlock() method except we do no checks on the lock owner.

For example

```
    open "CUSTOMERS" to filevar then
        rc = obj->clearlocks(filevar)
    end
```

will clear all locks held against the CUSTOMERS file irrespective of who owns the lock.

This call is intended for system administrators. It is used internally by jBASE in the clear-persistent-locks command.

### method  $persistent::getlockfilename()

Returns the name of the lock file we use to hold persistent locks.

```
   obj = new object("$persistent")
   print "The lock file name is ":obj->getlockfilename()
```

### method $persistent::count([filevar])

Returns a count of the number of locks held by this process. If 'filevar' is passed, we restrict the count to that file.

## Using jabbascript

Jabbascript is the name of the enhanced language available from jBASE version 5.7. It is an extension to the existing legacy language (called jBC) and provides 99% compatibility with legacy code. It provides easy-to-use and rich support for dynamic objects and for JSON support. The name derives from the fact it is functionally similar to javascript, but it isn't javascript.

This section is not intended to document jabbascript, but to give a brief overview to allow the reader to become familiar enough to use it with persistent locks.

By default, jBASE will assume your code is the legacy MV BASIC code (or jBC). This provides backwards compatibility for application. To tell jBASE it is the new jabbascript, there are two ways.

**First** by using .jabba as an extension to your source code file name.

**Second** by adding "$option jabba" at the top of your code.

In the example below, we show the second method. In this simple program, we open a file and take a persistent lock. The program terminates. Then 'list-persistent-locks' shows the lock is still active.

```
jsh -->ED BP PROG1
PROG1
TOP
.p
TOP
001     $option jabba
002     open "CUSTOMERS" to d_customers else stop 201,"CUSTOMERS"
003     obj = new object("$persistent")
004     rc = obj->setfile("#2ZP12-9901" , 120 , "*" )
005     print "Persistent objects enabled on ":rc:" files"
006     readu record from d_customers,"12345x" else null
BOTTOM
.fi
Record 'PROG1' written to file 'BP'
jsh -->BASIC BP PROG1
PROG1
Source file PROG1 compiled successfully
jsh -->CATALOG BP PROG1
PROG1
Object PROG1 cataloged successfully
jsh -->PROG1
Persistent objects enabled on 1 files
jsh--> list-persistent-locks

Page        1                                                                                        04 NOV 2017

Lock ID                Filename                           Item Id                            Timeout  Remain

#2ZP12-9901            ./CUSTOMERS                        12345x                             120      99

1 Record listed
jsh -->
```

This is a pretty much all you need to know about jabbascript to use it with persistent locks. Remember, once enabled on a file, any operation such as READU/ WRITE / RELEASE will use persistent locks whether they are in a jabbascript program or a legacy MV Basic (jBC) program.

The only thing remaining in this section is case insensitivity. By default, jabbascript programs allow variable names and keywords to be case insensitive. So for example the variable "Customers" is the same as the variable "CUSTOMERS". It also means you may get compiler errors because the variable "System" now clashes with the reserved keyword "SYSTEM". So case insensitivity might not suit everyone. In which case, add the "$option case" to the start of your program like this

```
    $option jabba
    $option case
```

or alternately

```
    $option jabba, case
```

  
<PageFooter />
