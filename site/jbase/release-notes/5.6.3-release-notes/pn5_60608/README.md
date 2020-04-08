# PN5_60608

<PageHeader />

## Description

Fix a performance issue with the LOCKED clause.

### Previous Release Behavior

When  an application coded a READU with a LOCKED clause, if the LOCKED clause  was taken, there would be a 50msec sleep. This was proving to be a problem at a customer site, who did an inordinate number of  "SP-ASSIGN", and the SP-ASSIGN code did a READU with LOCKED.

### Current Release Behavior

If you have a despool process assigned to standard, then this simple test would take 5+ seconds to complete.

```
t1 = SYSTEM(9)
FOR I = 1 TO 100
    EXECUTE "SP-ASSIGN"
NEXT I
t2 = SYSTEM(9)
CRT "Loop count " : (I - 1) : " , elapsed " : (t2 - t1) / 1000
```

The reason for the 50ms sleep was because some applications did this

```
    retry:
        READU rec FROM FileVar,ItemId LOCKED goto retry ELSE ...
```

This  would cause the application to spin, and when this sleep was originally created most systems were single CPU systems and so a spinning process blocked other users, including blocking the process trying to release the lock.

Now, instead of a 50 ms sleep we do a 5 ms sleep, and only do this one LOCKED in a hundred. This means if some code is doing the 'goto retry' as shown above, and going in a tight loop, it will sleep every 100 retries and so we avoid the problem that the original sleep was intended to fix.

Note that on Windows systems this behavior only shows itself when jDLS is active

Back to [5.6.2 release Notes](./../README.md)
