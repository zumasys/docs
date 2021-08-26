# PN5_60966

<PageHeader />

## Description

**CLEAR-BASIC-LOCKS** and **LIST-EXECUTION-LOCKS** were not functioning.

### Previous Release Behavior

Any locks set by the basic **LOCK** statement would not show up on **LIST-EXECUTION-LOCKS** and could not be cleared by **CLEAR-BASIC-LOCKS**.

### Current Release Behavior

Both commands are now working.

Example program:

```
LOCK 10 ELSE STOP
INPUT w
```

```
LIST-EXECUTION-LOCKS
...
LOCK        PID     PORT

  10       7254        1

[973] 1 LOCKS LISTED.
```

```
CLEAR-BASIC-LOCKS

Polling 2 ports ...

1 LOCKS CLEARED.
```

Back to [5.7.6 Release Notes](../jbase-5.7.6-release-notes/README.md)

<PageFooter />
