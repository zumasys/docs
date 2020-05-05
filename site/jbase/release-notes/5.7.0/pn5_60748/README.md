# PN5_60748

<PageHeader />

## Description

jDLS not respecting port-based locking on Windows

### Previous Release Behavior

On Windows, when jDLS is started with port-based locking, programs EXECUTE'd from other programs, from the same port number, would report that records were locked from the first program.

In this example, LOCKTEST1 locks out LOCKTEST2, even though it is taking a lock on the same record in both programs:

```
PROGRAM LOCKTEST1
CRT "LOCKTEST1 running on port ":SYSTEM(18)
OPEN "MD" TO md ELSE STOP 201,"MD"
READU rec FROM md,"LIST" THEN
    CRT 'Port ':SYSTEM(18):' has the lock'
END ELSE
    STOP 202,"MD LIST"
END
EXECUTE "LOCKTEST2"
```

```
PROGRAM LOCKTEST2
CRT "LOCKTEST2 running on port ":SYSTEM(18)
OPEN "MD" TO md ELSE STOP 201,"MD"
READU rec FROM md,"LIST" LOCKED
    CRT "Record is locked on port ":SYSTEM(43)
END THEN
    CRT "Record was not locked"
END
```

```
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

Back to [jBASE 5.7.0 Release Notes](./../README.md)

<PageFooter />
