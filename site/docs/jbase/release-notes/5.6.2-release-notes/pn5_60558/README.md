# PN5_60558

**Created At:** 6/13/2017 11:54:37 AM  
**Updated At:** 11/23/2017 10:20:48 AM  
**Original Doc:** [pn5_60558](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60558)  


### Description

In PRIME emulation, calling the SPOOLER function corrupts the default select list.



### Previous Release Behavior

In the following example, the call to SPOOLER(3) would cause the READNEXT to revert back to the beginning of the select-list.

```
0001     old_id = ""
0002     EXECUTE "SELECT MD" CAPTURING quiet
0003     LOOP
0004         READNEXT id ELSE EXIT
0005         IF id = old_id THEN
0006             CRT "Default select-list corrupted!"
0007             STOP
0008         END
0009         formqueues = SPOOLER(3)
0010         old_id = id
0011     REPEAT
```

This is because, in the SPOOLER() function, we saved and restored the default save-list, but we didn't save or restore the pointers that allowed READNEXT to sequentially return item-ids in order.



### Current Release Behavior

The above code now works as expected and the SPOOLER() call has no adverse effect on the LOOP/READNEXT construct.
