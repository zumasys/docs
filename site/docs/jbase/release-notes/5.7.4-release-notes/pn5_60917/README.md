# PN5_60917

**Created At:** 10/1/2019 10:09:53 AM  
**Updated At:** 10/6/2019 11:03:58 AM  
**Original Doc:** [pn5_60917](https://docs.jbase.com/75024-5-7-4-release-notes/pn5_60917)  


### Description

Spooler: **SP-CREATE Fnn** creates form queues with the wrong queue number



### Previous Release Behavior

```
SP-NEWTAB - Creates the STANDARD formqueue as queue number 0 (zero)
SP-CREATE DESKJET prog lp -d hpdeskjet - Creates as queue number 1
SP-CREATE F1 FILE /tmp/file.txt - Creates as queue number 2
SP-ASSIGN F1
```

The **SP-ASSIGN F1** statement assigned the **DESKJET** formqueue.

Likewise,

```
SP-ASSIGN F2
```

would have assigned the **F1** formqueue.



### Current Release Behavior

If queue number **nn** has already been assigned to a form queue then an error is thrown when attempting to create a **Fnn** or **Qnn** form queue.

```
jsh ~ -->SP-CREATE F1 FILE /tmp/file.txt

ILLEGAL NUMBER: Formqueue number '1' is already in use with formqueue 'DESKJET'!
jsh ~ -->
```



### Notes

This patch affects formqueues created with a name of **Fnn**, **fnn**, **Qnn**, **qnn** where **nn** is the queue number.
