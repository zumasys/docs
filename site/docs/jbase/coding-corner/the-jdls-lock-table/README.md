# The jDLS Lock Table

**Created At:** 6/23/2018 9:25:01 AM  
**Updated At:** 12/21/2018 5:25:52 PM  
**Original Doc:** [jdls-lock-table](https://docs.jbase.com/coding-corner/jdls-lock-table)  


This article describes the jDLS lock table and guidelines for correctly sizing it.

On Linux and AIX the lock table is sized with the **jDLS -s** option.

On Windows, the lock table is sized with the **JBASE\_JRLA\_LOCKS**environment variable. The recommended place to set this is as a System environment variable.

There are no hard and fast rules as to what the correct lock table parameters are for a particular site. It really depends on the number of concurrent locks the application takes and how long these locks persist. The best course of action is to monitor and adjust as necessary. Here are some guidelines that will help tune it, if need be.

The lock table parameters specify the total number of concurrent locks and the number of groups these locks will be spread over.

For example, a setting of:

```
1000,20
```

requests a maximum of 1000 concurrent record locks spread over 50 groups (i.e. 1000/20) with a maximum of 20 locks in any one group. It is the *maximum locks within a group* that limits the number of locks. Should this maximum locks per group be reached within a specific group, jBASE will issue **Error 37** (on Windows, the error number is **39**).

The default setting, if the **-s** option or **JBASE\_JRLA\_LOCKS** is not specified, is **3020,20**.

Using:

```
jdls -dvL
```

you can observe details of which locks are in which groups, e.g.

```
[danielk@zumJBASE ~]$ jdls -dvL
Lock monitor at pid:      10562 - Active
Lock listener at pid:     10563 - Active
Program started:     Sat Jun 23 03:47:02 2018
Time last ran:       Sat Jun 23 04:12:44 2018
Time last tidied up: Sat Jun 23 04:12:02 2018
Lock retries:        0
Tidy-up time:        5 minutes
Locking mechanism:   IPC semaphores based on THREAD id
Tidy-up operations:  0
Semaphore IDs:       131075,  163844
Memory:              9776 bytes used , 125392 bytes free
CPU Usage:           0.02 usr , 0.01 sys

Record locks outstanding
Group value      pid     type  port    i-node   device   queued  ipaddr          key
34    0x000e3b50 15158   WRITE 1       0008123e 0000fd00 None    0.0.0.0         COL-SUPP
134   0x1408e821 15215   WRITE 2       0008123e 0000fd00 None    0.0.0.0         LIST

Record locks:        3020 locks maximum in 151 groups of 20 locks/group
                     2 locks currently in use
                     1 is max. locks found in one group
```

Once any particular group contains the maximum number of record locks (20 in this case) then, for the next record lock that would hash into that group, **Error 37** (or **39**) would be displayed. This error can be simulated by creating a test file and running this program:

```
0001     PROGRAM jdlstest
0002     OPEN "testfile" TO testfile ELSE STOP 201, "testfile"
0003     counter = 0
0004     doomsday = @FALSE
0005     LOOP UNTIL doomsday
0006         READU rec FROM testfile, counter ELSE NULL
0007         counter++
0008         CRT counter:' locked'
0009     REPEAT
```

Eventually, one of the lock table groups will fill up and after 30 seconds or so you will see:

```
Error 37 during READ_ERROR to file C:\home\testfile
Enter I to Ignore, R to Retry, Q to Quit :
```

Then, from another port:

```
jDLS -dvL
```

This will display all of the locks currently taken but the last part will show this summary:

```
Record locks:        3020 locks maximum in 151 groups of 20 locks/group
                     1560 locks currently in use
                     20 is max. locks found in one group
```

Ignoring the error does not create the particular lock and the subsequent continuation (taking further locks) is simply that any further locks successfully taken are not yet hashing into a currently full group.

The group into which a particular lock will hash is determined in a similar manner to the record hashing used when placing records into groups within a Hashed (J4 or jPlus) file. Note that this is very different from **record hashing**, where a group that becomes full will allocate more space by linking another frame onto the group link chain. So only the mechanism of hashing is similar; there is no actual correlation between the group into which a record hashes within a hashed file and the group within the jDLS lock table that a particular record lock will hash into. The hashing of the locks is affected by the inode of the file and the internal device number of the filesystem (the inode of the file and device number being different on each system).

So, given a setting of **1000,20**, i.e. a maximum of 20 locks per group:

- The worst case scenario would be that the first 21 locks would hash into the same group in the lock table, the 21st lock giving error 37.
- The best case scenario would be 1000 locks taken, where the 1000 locks hash perfectly with 20 locks in each of the 50 groups, with the 1001th lock giving error 37.


The real life scenario is somewhere in between these two extremes and the **Error 37** occuring whenever a lock hashes into a group that already contains the maximum number of locks per group.

There is no magic bullet as to what is the best combination of *maximum concurrent locks* vs *maximum locks per group* for a particular system.

- *More locks per group* means that, when determining whether a lock already exists, more locks have to be scanned within the group. We recommend having no more than 30 locks per group, more than that will severely degrade performance.
- *Fewer locks per group* means the likelyhood of a group exceeding the *maximum locks per group* limit increases.


So a suitable compromise, based on the number of concurrent locks a particular site is likely to reach, is required.

In reality, unless you are getting **Error 37**, we recommend using the default setting until there is a reason to change it. However, if you are starting to get **Error 37**, this would indicate that the application is taking locks and not releasing them. So it would be better to fix the application than to increase the lock table, which could result in performance issues.
