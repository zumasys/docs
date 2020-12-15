# Locking Models on jBASE

<PageHeader />

**Tags:**
<badge text='5.7.10+' vertical='middle' />

Following changes to jBASE from release 5.7.10 onwards, a number of record locking enhancements were made. In summary these enhancements are:

- New locking persistence model suited for D3 environments
- New locking persistence model suited for non-persistent applications, for example REST applications
- Better tools to report locking  
- Simple and flexible mechanisms to report and clear record locks.
- Extended information kept with the record lock, such as file name, application source and line number where lock was taken, session id, age of lock and any session timeout.
- User defined event handler for interrupting waits on record locks
- Performance improvements

The remainder of this document assumes jBASE release 5.7.10 or higher, and assumes the [`jDLS`](./../../jdls/README.md) locking daemon is active.

The 4 record locking strategies that jBASE now employs are as follows:

- `Thread` based locks. This is the default for jBASE. Each thread level in jBASE (e.g. [`PERFORM`](./../../jbc/execute/README.md) creates a new thread level) creates and owns its own locks and does not share them with child or parent programs. The locks are released by the following actions
  - When a [`WRITE`](./../../jbc/write/README.md), [`RELEASE`](./../../jbc/release/README.md) or [`DELETE`](./../../jbc/delete/README.md) statment is performed.
  - When the program issues a STOP, ABORT, EXIT() or is logged off.
  - When the file variable is closed by any means (e.g. the variable is re-assigned, or goes out of scope such as a RETURN from a SUBROUTINE will cause all local variables to go out of scope)
- `PORT` based locks. In this model, a record lock is shared by all child and parent threads with the same port number. Locks are released as per Thread models.
- `D3` locks. *NEW*. These locks are compatible with D3 locking. Fundamentally they work similar to Thread based locks. However, locks are only released under the following circumstances
  - When a [`WRITE`](./../../jbc/write/README.md), [`RELEASE`](./../../jbc/release/README.md) or [`DELETE`](./../../jbc/delete/README.md) statment is performed.
  - When the program issues a STOP or ABORT or is logged off.
- `PERSISTENT` session locks. *NEW* These locks are designed for web-based applications with non-persistent connections. The locks are owned by a prescribed session id rather than the port or thread that took the lock. These locks are only released under the following circumstances
  - When a [`WRITE`](./../../jbc/write/README.md),  [`RELEASE`](./../../jbc/release/README.md) or [`DELETE`](./../../jbc/delete/README.md) statment is performed by a program that has configured themselves with the same session id as that when the lock was taken (see later for how to do this)
  - When they timeout after the prescribed timeout period  

## Selecting the locking strategy

The locking strategies shown above can be mixed and matched--different applications can have different strategies, and can even switch strategies in the program. However each record lock will be respected irrespective of strategy.

The mechanism for choosing which strategy will be used by jBASE as a default for applications is 4 fold. In order of precedence these are

### Default strategy

By default, all record locks will be Thread based locks.

### Using jDLS options

The `PORT` based strategy can be chosen by [`jDLS`](./../../jdls/README.md) using the `-P` option.

Any of the 4 strategies can be selected using the `-l` option to jDLS i.e. `-lport`, `-lthread`, `-ld3` and `-lpersistent`.

### Emulation options

You can define the following in your  [`Config_EMULATE`](./../../emulation/README.md) using the `lock_strategy` variable set to port, thread, d3 or persistent. For example to enable D3 style record locking as the default, add this line:

```
lock_strategy = d3
```

### Programatically changing the lock strategy

The above 3 mechanisms decide the default locking strategy for when a program starts. However, you can programatically change the locking strategy when inside a program using the function call and/or class method detailed below. This is mandatory if you are using "persistent" locks as they require a session id and timeout to be declared.

## Changing the locking strategy in the application

The above mechanisms decide the record locking strategy for a jBASE program when it starts. For most customers, simply starting `jDLS` with one of the `-l` options will suffice.

However,there are exceptions, especially if you are running a web-based application and want to use session based persistent locks, you will need to supply a session id and timeout value.

You can change this strategy inside an application in two ways:

First, use the `JBASESetLockStrategy()` function call like this.  

In this example, we change the strategy to session based persistent locks:

```
INCLUDE JBC.h
RESULT = JBASESetLockStrategy("PERSISTENT" , "MY-SESSION-ID" , 120)
IF RESULT<1> NE "" THEN
    PRINT "Error while trying to set lock strategy -- ":RESULT<1> ; STOP
END
PRINT "Current locking strategy is now "
PRINT "Strategy Text    : ":RESULT<2>
PRINT "Strategy Integer : ":RESULT<3>
PRINT "Session ID       : ":RESULT<4>
PRINT "Session timeout  : ":RESULT<5>
```

Second, use the class method `$lock->setstrategy()`, which is very similar to the `JBASESetLockStrategy()` function call.  

In the example below, we set the strategy to `PORT` based locks:

```
obj = new object("$lock")
result = obj->setstrategy("port" , "" , 0)
print "Current strategy is "
print result->$tojson(1)

Results in

Current strategy is
{
    "errmsg":"",
    "lock_strategy":"PORT based locks",
    "lock_strategy_int":1,
    "session_id":"",
    "timeout":0
}
```

## Finding and reporting record locks

A number of ways exist to see what locks are outstanding. Some are command line utilities, and some are programmatic.

### jDLS -d [-v] [-L] [-X]

The  [`jDLS`](./../../jdls/README.md) program has always had the ability to display outstanding record locks, mostly commonly used as `jDLS -dvL`. For example the output of `jDLS -dvL`:

```
Lock monitor at pid:      54673 - Active
[ Some information deleted for brevity and clarity]

Record locks outstanding
Group value      pid     type  port    i-node   device   queued  age    ipaddr          key
808   0x6a277297 56006   WRITE 1       01f46125 00010303 None    9      0.0.0.0         COOPER*121042

Record locks:        20180 locks maximum in 1009 groups of 20 locks/group
                     1 locks currently in use
```

Instead of using the `-L` option, the new `-X` option shows the extended record information like this:

```
Lock monitor at pid:      54673 - Active
[Some information deleted for brevity and clarity]

Group  File Path             Record Key           Age     Timeout Port    Pid       Session ID           Source
808     ./CUSTOMERS          COOPER*121042        137     0       1       56006                          edit.jabba:624

Record locks:        20180 locks maximum in 1009 groups of 20 locks/group
                     1 locks currently in use
                     1 is max. locks found in one group
```

### SHOW-ITEM-LOCKS

The  [`SHOW-ITEM-LOCKS`](./../../utilities/show-item-locks/README.md) now supports the `(X)` option which displays the extended record information, for example:

```
jsh jbase ~ -->SHOW-ITEM-LOCKS (X)
PAGE    1                                                                       12:44:12  01 DEC 2020

Data File Path................    Item ID.............    Age...    Timeout    Port....

./CUSTOMERS                       COOPER*121042           526       0          1


 1 Records Listed
 ```

You can supply additional `jQL` information to control the columns and the sorting. The `DICT` items are described later in the `PORT` `JEDI` notes. Here is an example of displaying the oldest locks outstanding on your system:

 ```
 jsh jbase ~ -->SHOW-ITEM-LOCKS BY-DSND AGE (X)
PAGE    1                                                                       12:50:19  01 DEC 2020

Data File Path................    Item ID.............    Age...    Timeout    Port....

./DEMO*10                         iakhgvkizkflnmjcggra    272       0          1
./DEMO*100                        gasaxkedemgladabjlyb    140       0          1
./DEMO*12                         oremjxquojeupzxoefgt    33        0          1
```

### Using the $lock->getlocks() class method

Below is an example of using the `$lock->getlocks()` class method, shown running with a single lock active:

```
*
* Set a web-based persistent lock whose session id (the lock owner)
* is 'test-session-id' and a 20 second timeout.
*
    obj = new object("$lock")
    obj->setstrategy("persistent","test-session-id",120)
*
* Take a simple lock
*
    open "DEMO" to filevar else stop 201,"DEMO"
    readu rec from filevar,"TEST-ITEMID" else rec = ""
*
* Get a list of locks and display them.
*
    locklist = obj->getlocks()
    print locklist->$tojson(1)

Results in an array with just one object

[
        {
                "lockid1":32793163,
                "lockid2":66307,
                "time_stamp":1606829543,
                "pid":58612,
                "key":"TEST-ITEMID",
                "port":1,
                "ip_int":0,
                "ip":"0.0.0.0",
                "filepath":".\/DEMO",
                "lock_strategy_int":2,
                "lock_strategy":"PERSISTENT locks",
                "session_id":"test-session-id",
                "source_name":"test10.jabba:11",
                "session_timeout":120,
                "wait_count":0,
                "thread_level":2

        }
]
```

## Note #1

> In the above example, the filepath shows as ".\/DEMO". The "\/" is the JSON standard way of escaping a forward slash but unless you're converting to JSON, then internally it will just be "./DEMO".

As another example of a jabba program (the Multi Value object script), this will get details of all the locks and print a formatted output:

```
*
* Get all record locks and display them.
*
    obj = new object("$lock")
    result = obj->getlocks()
*
* Do a HEADING
*
    HEADING "FILENAME             ITEM ID              SOURCE              Page 'PL'"
*
* In 'result' we now have an array of objects. Select each object in the array
*
    for arr in result
        print arr->filepath "L#20":" ":
        print arr->key "L#20":" ":
        print arr->source_name "L#20":" ":
        print
    next arr
```

### Using the JBASEReturnLockingInfo() function

The `JBASEReturnLockingInfo()` function is the multi-value equivalent of the above `$lock->getlocks()` class method call.  

The above example can be re-written as shown below. The first parameter is always 2:

```
*
* Get all record locks and display them.
*
    INCLUDE JBC.h
    result = ""
    JBASEReturnLockInfo(2,result)
*
* Do a HEADING
*
    HEADING "FILENAME             ITEM ID              SOURCE              Page 'PL'"
*
* In 'result' we now have a multi-value dynamic array of locks, one
* lock per attribute.
*
    FOR nextlock IN result USING @AM
        PRINT nextlock<1,15> "L#20":" ":
        PRINT nextlock<1,12> "L#20":" ":
        PRINT nextlock<1,16> "L#20":" ":
        PRINT
    NEXT nextlock
```

The second parameter to `JBASEReturnLockInfo()` is where we return the lock information. Each lock is an attribute. Each multi-value in that attribute describes something about the lock as follows:

```
<1,1>   Always "2"
<1,2>   Number of other users waiting for this lock.
<1,3>   The lock value as a hash of the record key
<1,4>   Lock id 1 , usually the i-node of the file
<1,5>   Lock id 2 , usually the i-dev of the file
<1,6>   Number of seconds lock taken
<1,7>   1 for a read lock, 0 for a write lock.
<1,8>   Process ID of owner of the lock.
<1,9>   Thread ID of the owner of the lock. Not of any use except internally
<1,10>  Port number of the owner of the lock.
<1,11>  IP Address of the lock owner
<1,12>  The actual record key
<1,13>  The session ID
<1,14>  The session timeout
<1,15>  The file path name
<1,16>  The source file name : line number
<1,17>  The lock type (port, thread, persistent) as an integer
<1,18>  The lock type expressed as a text string
<1,19>  The Thread (PERFORM) level when the lock was taken
```

### Using the new LOCK jEDI to display and clear locks

A new `jEDI` (database driver) has been created to enable record locks to be displayed, selected and cleared. Once you have a file of type `jlock` then you can treat each record lock as though it were an item in a file, meaning you can run `jQL` queries, do a `SELECT`, `ED` the lock (although your can't modify it), and `DELETE` it or `CLEARFILE` it.

To accomplish this you will need a file of type `JLOCK`. There are 2 ways to create the file.

The first way is to use the file pre-defined in the jBASE release directory, for example at this location:

```
$JBCRELEASEDIR/dev/LOCK
```

The second way is to create a file of type `JLOCK`. This can be any name you like. For example:

```
jsh jbase ~ -->CREATE-FILE MYLOCK TYPE=OBJECT CLASS=jlock
[ 417 ] File MYLOCK]D created , type = JD
[ 417 ] File MYLOCK]D created , type = OBJECT
[ 417 ] File MYLOCK created , type = OBJECT
```

You now have a file of type `JLOCK`. We pre-fill the `DICT` section with useful items. The `DATA` section contains no records of its own, but is a window into the record locks maintained with jDLS. Each record in the file relates to one record lock.

You can now use this file as you would any data file, except remember each item relates to one record lock.

Some examples of using the file:

First, list the file (i.e. `LIST MYLOCK`). The DICT item contains defaults, but you can select your own, as you can **ANY** jQL statement. This is the mechanism we use in  [`SHOW-ITEM-LOCKS`](./../../utilities/show-item-locks/README.md) with the `(X)` option earlier.

```
jsh jbase ~ -->LIST MYLOCK
PAGE    1                                                                       14:34:49  01 DEC 2020

Data File Path................    Item ID.............    Age...    Timeout    Port....

./CUSTOMERS                       COOPER*121042           34        0          1


 1 Records Listed
```

List the file using different criteria. We use the pre-supplied _LOCK_ file here:

```
jsh jbase ~ --> SORT $JBCRELEASEDIR/dev/LOCK BY-DSND AGE BY FILEPATH BY PORT FILEPATH PORT
AGE ID-SUPP
PAGE    1                                                                       14:39:00  01 DEC 2020

Data File Path................    Port....    Age...

./DEMO*1                          4           31
./DEMO*1                          4           31
./DEMO*10                         1           31
```

This next example shows how to clear record locks, and is an example used during testing, we have 40,000 locks outstanding from 200 background jobs. We will delete all the record for port numbers between 30 and 34 inclusive:

```
jsh jbase ~ --> COUNT MYLOCK

 40000 Records counted

jsh jbase ~ --> SELECT MYLOCK WITH PORT GE 30 AND PORT LE 34

 1000 Records selected

>DELETE MYLOCK
1000 record(s) deleted.
jsh jbase ~ --> COUNT MYLOCK

 39000 Records counted
```

Carrying on from the above example, we can now use `CLEAR-FILE` to remove _ALL_ locks:

```
jsh jbase ~ --> CLEAR-FILE MYLOCK
jsh jbase ~ --> COUNT MYLOCK

 No Records counted

jsh jbase ~ -->
```

## Adding a record lock exception handler  

It is possible to add an exception handler for when an application is blocked while taking a record lock. Under normal circumstances, taking a record lock with a READU (or READVU etc.) statement will cause the application to halt indefinitely while waiting for the lock to be released, and transmitting a beep tone (char(7)) every 5 seconds. You can add an exception handler to trap when an application is waiting on a lock.

There are 2 ways to set an exception handler depending on your personal preference:  

- Through a function call
- Through a method in the $lock class

The exception handler can be one of 3 categories:

- A method in a class defined as "class::method"
- A SUBROUTINE defined as "subroutinename"
- NULL, meaning and existing handler is removed, defined as ""

The exception handler can be set against:

- All files through the user's program (all thread levels)
- An individual file

Below are the elements of a test program to demonstrate the functionality. The program 'test1' will take a couple of locks and then sit at an INPUT statement. Run it from one terminal and this is the output:

```
    Lock taken on item GREG in file DEMO
    Lock taken on item GREG in file DEMO2
    Press RETURN : ?
```

Now if we run the same program from a second terminal at the same time, the exception handler is invoked after 3 seconds and that executes a 'throw' statement which is caught and an error message displayed:

```
    greglockhandler subroutine here
    filename = ./DEMO
    itemid = GREG
    tout = 3
    Do a throw and exception
    Exception thrown : Lock GREG in file ./DEMO took more than 3 seconds, aborting
```

Let's take a closer look at the source code for program 'test1.jabba'. It looks like this:

```

    INCLUDE JBC.h
    open "DEMO" to dscb else stop 201,"DEMO"
    OPEN "DEMO2" to dscb2 else stop 201,"DEMO2"
*
* Set a global lock handler -- method 'lockhandler' in class 'greg'
*
    JBASESetLockHandler("","greg::lockhandler",3)
*
* Set a lock handler just for file "DEMO" using file descriptor dscb
* This will call a SUBROUTINE greglockhandler
*
    obj = new object("$lock")
    obj->setlockhandler(dscb,"greglockhandler",3)
*
* Start a try/catch block in case of errors.
*
    try
        readu rec from dscb,"GREG*":system(18) else rec = ""
        readu rec from dscb,"GREG" else rec = ""
        print "Lock taken on item GREG in file DEMO"
        readu rec from dscb2,"GREG" else rec = ""
        print "Lock taken on item GREG in file DEMO2"
        print "Press RETURN : ":
        input ans
    catch ex
        print "Exception thrown : ":ex->message
*        print ex->$tojson(1)
    end try
```

We can see is sets an exception handler for ALL files in the user's running application by calling JBASESetLockHandler() with a "" string as the first parameter. The second parameter defines that the handler is method lockhandler in class greg, and the third parameter shows to call the method after 3 seconds of waiting for a lock.

### Note #2

>If you passed "" as the second parameter, this means remove the event handler.

We set a lock handler explicitly for the file in the variable 'dscb' using the obj->setlockhandler() call by passing the file variable as the first parameter. The second parameter is the name of the subroutine to call as the event handler, and the third parameter is again the value 3, meaning call the subroutine after 3 seconds.

Whether you call JBASESetLockHandler() or the class method $lock->setlockhandler() is your preference, they are interchangeable.

In this example we have a handler set against an individual file *AND* a global handler, both with the same timeout value. The individual file handler has precedence over the global handler.

If the 'catch' clause is taken, then 'ex' becomes a dynamic object with various properties. The most useful property is the 'message' property and this is displayed. However, if you want to see everything available, un-comment the "print ex->$tojson(1)" statment and it will display the entire object, with useful properties such as call stacks.

The 'try/catch' block needn't be in the same block of code as the readu statement, they are most often at the very base of an application and can be used to catch everything.

Now, let's take a look at the exception handlers themselves:

```
    method greg::lockhandler(filename , itemid , tout)
        print "greg::lockhandler method here"
        print "filename = ":filename
        print "itemid = ":itemid
        print "tout = ":tout
        print "greg::lockhandler, set to 1 to ignore"
        return 1
    end method
*
    subroutine greglockhandler(rc , filename , itemid, tout)
        print "greglockhandler subroutine here"
        print "filename = ":filename
        print "itemid = ":itemid
        print "tout = ":tout
        print "Do a throw and exception"
        throw "Lock ":itemid:" in file ":filename:" took more than ":tout:" seconds, aborting"
        rc = 1
    end subroutine
```

First shown is the method lockhandler in class greg. This is the global event handler and was established in the original code like this:

```
JBASESetLockHandler("","greg::lockhandler",3)
```

It simply prints the 3 parameters it gets passed and returns a value of 1. There are 2 possible return values

- 0 . Ignore the call to the event handler. The application carries on as usual e.g. waiting for the lock
- 1 . Ignore the lock. The application will continue, but the lock will not be set. This of course is dangerous, but there might be times when it is useful.

The second block is the subroutine greglockhandler. This is the event handler just for a single file and was established in the original code like this:

```
    obj = new object("$lock")
    obj->setlockhandler(dscb,"greglockhandler",3)
```

This subroutine has 4 parameters compared to the 3 of the class method.  

The extra value is the return code to pass back to the caller, and the 2 possible return codes are the same as before -- 0 to ignore the call and 1 to ignore the lock and continue.

In this example, the setting of the return code never gets to that point "rc = 1", because we issue a 'throw' before that.  

### Note # 3

>If there isn't a try/catch block when we execute a 'throw', then the debugger will be entered.

Back to [Record Locking](./../README.md)

<PageFooter />
