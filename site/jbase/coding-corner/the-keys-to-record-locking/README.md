# The Keys to Record Locking

<PageHeader />

This article is concerned with the three R's of record locking: READU, WRITEU, and RELEASE. While this topic covers *the fundamental rules and misconceptions of record locking.* Those of you who are seasoned developers may find some of these ideas sobering, or simply a confirmation that you have been doing it right all along.

The rules of record locking are:

1. Always take a lock on any record you intend to update.
2. All locks must be implicitly or explicitly released.
3. A record should not be locked for longer than necessary.

Let's take these one at a time:

## Rule 1: Always take a lock on any record you intend to update

It's best to get into this habit from the start. Take the scenario where it is late at night, everyone has gone home and you write a quick program to update some data in the customer file. Since you are the only one there you do not use record locking. Not only is this foolhardy as there may be background processes running but should you attempt to run this program again (since it was a very useful program) at a later date during business hours, the absence of any locking logic allows the program to potentially corrupt the customer file. We will come back to this later when we cover the misconceptions of record locking.

Before we move on to rule 2, let's take a look at the ways in which a record can be locked. The following jBC commands will take a lock on a record and respect locks taken against the same records:

READU
    READVU
    MATREADU

You should note that regardless of whether you are reading the entire record (READU) or a single attribute (READVU), a lock is taken against the whole record. In other words, you cannot lock individual attributes.

The only other way in which a lock can be taken on a record is via the JED or ED editor commands. If you attempt to edit a locked record you will be informed that your edit session is 'read only' and you will be prohibited from filing that record.

(Note: The READL and READVL statements can take a 'read only' shared lock but this functionality is only available in jBASE version 3.3.)

## Rule 2: All locks should be implicitly or explicitly released

Implicitly released locks are those which are released with the jBC statements WRITE, WRITEV,  MATWRITE or DELETE. In addition, locks are implicitly released when a program terminates with a STOP, ABORT or END statement, the EXIT() function, when the program transfers control with a CHAIN or ENTERstatement, or when the program terminates abnormally (i.e. a non-recoverable runtime error). It is appropriate at this time to mention that the WRITEU,  WRITEVU and MATWRITEU statements allows the lock on a record to be preserved during the write operation.

A record lock is explicitly released using the jBC  RELEASE statement. This statement is used to release a lock on an item in which a lock as been taken but was never implicitly released (i.e. it was never written to or deleted from the file). Issuing a RELEASE against a record that was never locked is harmless.

The following code snippet illustrates both methods of releasing a record lock. In this example, only existing records are processed and non-existent records are skipped:

```
LOOP WHILE READNEXT ID DO
   READU MyRecord FROM MyFile, ID THEN
   * Process existing record
   WRITE MyRecord ON MyFile, ID ; * Implicitly released
END ELSE
   * The record is not on file
   RELEASE MyFile, ID ; * Explicitly released
END
REPEAT
```

You will notice that when ID does not exist, the RELEASE statement releases a specific lock. This is an important point. Avoid using the RELEASE statement without arguments. Not only does this release all locks in all files taken by the current program (which may be undesirable due to the fact that one or more locks must remain set), it also releases all execution locks that were set in the current program with the LOCK statement. Plus it imposes additional overhead such that the entire lock table has to be searched for all locks belonging to the current process.

## Rule 3 : A record should not be locked for longer than necessary

The longest intervals, from the time a record is locked and written, occur most frequently in data entry programs. I am sure you are all familiar with the following scenario: A data entry operator opens a new order which locks a customer record, and then goes to lunch. Training issues aside, the best way to alleviate this situation is to defer locking the customer record until such time as the order is written. This resolves a number of problems. You don't have to be concerned with releasing the customer record should the order be canceled. You have allowed all other processes immediate access to that customer record without further lock conflicts. And you have made it simpler for your successor to maintain your code (after all, the next person to work on the program may be you!). Not to mention the poor data entry operator is saved from an embarrassing encounter. This concept can be extended to updating inventory, daily sales figures, data entry statistics, and so on.

Of course there is a way to determine the offending port which has taken the lock by testing SYSTEM(43) as the following code snippet illustrates:

```
LOOP
   ItemLocked = FALSE
   READU MyRec FROM MyFile, ID LOCKED
      ItemLocked = TRUE
      CRT "This item is locked on Port: ":SYSTEM(43)
      * Perform whatever actions are necessary for a locked item
      SLEEP 0.1 ; * Sleep for a tenth of a second before trying again
   END THEN
      * Process the record
      WRITE MyRec ON MyFile, ID
   END ELSE
      RELEASE MyFile, ID
   END
WHILE ItemLocked DO
REPEAT
```

The above example also illustrates another important element of record locking: the LOCKED clause. If the record could not be read because another process already had a lock on the record then one of two actions is taken. If the LOCKED clause was specified in the statement then the statements dependent on it are executed. If no LOCKED clause was specified then the statement 'hangs' until the lock is released by the other process.

Theoretically you could defer all record locking up to the point when the record must be written at which time you would lock the record and write it in consecutive statements, a concept otherwise known as Optimistic Locking. This, however, requires additional logic which determines if the record has changed from the time it was initially read and then provide suitable options to the user.

Another area where deferred locking pays dividends is the program's ability to avoid a "deadlock" condition. Deadlocks, otherwise known as a "deadly embrace", occur when process A has a lock on a record which process B needs and, at the same time, process B has a lock on a different record which process A needs. This happens quite infrequently, but when it does, there is nothing to do but kill the two processes. If deferred locking was in place this situation would be nearly impossible to occur since the record is locked and written in the same breath.

* * *

On to misconceptions (which hopefully by now the answers have been provided).

## Misconception #1: DELETE, WRITE, WRITEV and MATWRITE automatically take a lock prior to updating the record

As we know, the only commands that can take a lock are of the READ variety. Take the following scenario:

1) Process A reads and locks the item.
2) Process B DELETEs the item without first taking a lock.
3) Process A writes the updated item to the file.

If the DELETE is deferred until the item is written out then the delete would lose the item that process A has, in all good faith, written to the file possibly based on more recent information than process B's decision to delete it. In short, you should lock the item before trying to delete it as the following code fragment illustrates:

```
READU MyRec FROM MyFile, ID THEN
   * Put whatever code here to determine if the record
   * should truly be deleted.
   IF OkToDelete THEN
      DELETE MyFile, ID
   END ELSE
      RELEASE MyFile, ID
   END
END ELSE
   RELEASE MyFile, ID
END
```

## Misconception #2: A READ (or MATREAD) will honor a locked record

If you are new to jBASE you will probably get bitten by this one once or twice. Take the following scenario:

1) Process A locks the item.
2) Process B READs the item without taking a lock. There is nothing preventing process B from doing this.
3) Process B updates and writes the item.
4) Process A updates and writes the item.

What happens is, in step 4, all of the updates made in process B are overwritten by the update in process A. The lesson to learn here is that only another READU, READVU or MATREADU will respect a record lock.

## Misconception #3: WRITEU, WRITEVU and MATWRITEU will take a lock prior to updating the record

This is akin to the first misconception to which we already know the answer.

## Misconception #4: READU (READVU, MATREADU) does not take a lock if the record does not exist

This supports an old saying I like to remind myself from time to time: "Logic is the art of going wrong with confidence." - Joseph Wood Krutch. Just remember, if you perform a READU type statement, the record is locked regardless of its existence. And this makes sense since there will be times when you wish to reserve a particular record ID while the record is being constructed.

In fact, one of the benefits to locking a non-existent record is the ability to lock all other processes out of a file or to prevent a process from running concurrently. For example, the following code snippet will only allow a single instance of this program to run:

```
OPEN "SYSTEM.CONTROL" TO SYSTEM.CONTROL ELSE ABORT 201
READU Poltergeist FROM SYSTEM.CONTROL, "NonExistentRecord" LOCKED
   CRT "This process is locked from Port: ":SYSTEM(43)
   STOP
END ELSE
   NULL
END
```

## Misconception #5: Locks can be taken on directory type files

Simply put, you cannot take a lock on a directory file. One of the advantages of jDLS is that you can take locks on directory files, although these are only advisory and only work within jBASE ('vi Item1' does not respect a lock taken by 'jed Item1').

The reason that a normal lock is not taken on a directory is that when you read an item (a file in this case; the nomenclature can get confusing here because directory 'files' are considered synonymous with hashed file 'items'), what happens is 'open', 'read', 'close'. You do not want to keep the items open as you could then end up with thousands of open files.

The 'directory' jEDI was really intended to be used for simple data interchange between jBASE and non-jBASE applications; if you want locks to be respected within your application you will have to use hashed files.

## Misconception #6: All locks are port-based

This one will, at times, snag even the most experienced programmer. The simple fact is locks on jBASE are process-based, not port-based (however, on UNIX systems, this can be overridden by starting jDLS with the -P option. This is a significant difference between jBASE and many (if not all) other multivalue implementations.

If you examine this a bit closer, you will see that the concept of a 'port' has significantly changed. On legacy systems, the USER/PORT combination was the governing entity for the entire logged on session. Now, a port is a 'loose' concept, it doesn't physically exist. Since jBASE is closer to the operating system and the operating system is process based, it makes more sense to manage locks by process.

To illustrate this difference, what would you expect to happen in program LOCK2, where CUSTOMER is a hashed file?

``

```
PROGRAM "LOCK1"
OPEN "CUSTOMER" TO CUSTOMER.FILE ELSE STOP
READU REC FROM CUSTOMER.FILE, "NonExistingRecord" ELSE REC = ""
PERFORM "LOCK2"
```

```
PROGRAM "LOCK2'
OPEN "CUSTOMER" TO CUSTOMER.FILE ELSE STOP
READU REC FROM CUSTOMER.FILE, "NonExistingRecord" LOCKED
   CRT "Program LOCK1 has the lock."
   STOP
END ELSE
   REC = ""
END
```

On legacy (port-based) systems, the LOCK2 program will take the ELSE clause, in other words, since the LOCK2 process was executed on the same port, LOCK2 retains the lock taken by the LOCK1 program. On jBASE (process-based), LOCK2 will take the LOCKED clause because the PERFORM "LOCK2" statement in effect starts another process.

If you intend to convert over to jBASE, this may cause you to rework some of your application, but at the end of the day, the application cooperating with the operating system will create a much more solid and portable product.

In conclusion, you can see that there is nothing here that is mysterious or difficult. If you follow these few simple rules and concepts you can master the keys to record locking.

[Back to Coding Corner](./../README.md)

  
<PageFooter />
