# PN5_60778

**Created At:** 8/28/2018 9:14:32 AM  
**Updated At:** 10/24/2018 8:46:03 PM  
**Original Doc:** [pn5_60778](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60778)  
**Original ID:** 336406  
**Internal:** No  

## Description

PROC: Error using **IH!** in a PQ proc

### Previous Release Behavior

A PROC such as:

```
PQ
S1
IH!test
```

would fail with:

```
jpq : Invalid parameter at line 3 in ., ihtest
```

This was due to the use of PQN buffer referencing characters (! # & %) with the IH command in a PQ proc.

### Current Release Behavior

The PROC no longer fails and PROC input buffers are correctly populated, e.g.

```
jbase-centos5-~: cat ihproc
PQ
S1
IH!it
S2
IH!works
Hihtest
P
jbase-centos5-~: cat ihtest.b
    PROCREAD buf ELSE STOP
    CRT buf
jbase-centos5-~/src/International/5.6.3.1: jpq ihproc
!it !works
jbase-centos5-~:
```

Back to [5.7.1 Release Notes](./../README.md)
