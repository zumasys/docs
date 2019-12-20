# PN5_60748

**Created At:** 4/19/2018 7:02:37 AM  
**Updated At:** 5/30/2018 8:36:45 AM  
**Original Doc:** [pn5_60748](https://docs.jbase.com/release-notes/pn5_60748)  


### Description

jDLS not respecting port-based locking on Windows



### Previous Release Behavior

On Windows, when jDLS is started with port-based locking, programs EXECUTE'd from other programs, from the same port number, would report that records were locked from the first program.

In this example, LOCKTEST1 locks out LOCKTEST2, even though it is taking a lock on the same record in both programs:

```
0001     PROGRAM LOCKTEST1
0002     CRT "LOCKTEST1 running on port ":SYSTEM(18)
0003     OPEN "MD" TO md ELSE STOP 201,"MD"
0004     READU rec FROM md,"LIST" THEN
0005         CRT 'Port ':SYSTEM(18):' has the lock'
0006     END ELSE
0007         STOP 202,"MD LIST"
0008     END
0009     EXECUTE "LOCKTEST2"

0001     PROGRAM LOCKTEST2
0002     CRT "LOCKTEST2 running on port ":SYSTEM(18)
0003     OPEN "MD" TO md ELSE STOP 201,"MD"
0004     READU rec FROM md,"LIST" LOCKED
0005         CRT "Record is locked on port ":SYSTEM(43)
0006     END THEN
0007         CRT "Record was not locked"
0008     END

jsh ~ -->LOCKTEST1
Running on port 1
Port 1 has the lock
LOCKTEST2 running on port 1
Record is locked on port 1
jsh ~ -->
```



### Current Release Behavior

```
jsh ~ -->LOCKTEST1
Running on port 1
Port 1 has the lock
LOCKTEST2 running on port 1
Record was not locked
jsh ~ -->
```

The LOCKTEST1 program does not lock out LOCKTEST2.

Note: This patch makes EXECUTEs compatible with SUBROUTINE calls that lock the same record from the same port number.
