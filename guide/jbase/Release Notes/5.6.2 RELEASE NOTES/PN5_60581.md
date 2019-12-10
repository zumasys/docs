# PN5_60581

**Created At:** 6/20/2017 12:13:04 PM  
**Updated At:** 11/20/2017 9:15:40 PM  


### Description

Allow "!" to execute Operating System (OS) commands in Procs and Paragraphs



### Previous Release Behavior

For Procs, the only way to run an OS command is to use the PU to submit the command:

```
001 PQ
002 C Windows
003 Hdir > dir.out
004 PU

001 PQ
002 C Linux
003 Hps > ps.out
004 PU
```

There is currently no mechanism to be able to run OS commands in Paragraphs



### Current Release Behavior

You can now prepend a "!" to the command:

```
001 PQ
002 C Windows
003 H!dir > dir.out
004 P

001 PQ
002 C Linux
003 H!ps > ps.out
004 P

001 PA
002 * Windows
003 !dir > dir.out

001 PA
002 * Linux
003 !ps > ps.out
```

This functionality is dependent on **execute\_exclamation = true** configuration setting in Config\_EMULATE. This setting is in the D3 emulation by default.
