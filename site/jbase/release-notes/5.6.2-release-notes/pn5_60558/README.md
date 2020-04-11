# PN5_60558

<PageHeader /> 

## Description

In PRIME emulation, calling the SPOOLER function corrupts the default select list.

### Previous Release Behavior

In the following example, the call to SPOOLER(3) would cause the READNEXT to revert back to the beginning of the select-list.

```
old_id = ""
EXECUTE "SELECT MD" CAPTURING quiet
LOOP
    READNEXT id ELSE EXIT
    IF id = old_id THEN
        CRT "Default select-list corrupted!"
        STOP
    END
    formqueues = SPOOLER(3)
    old_id = id
REPEAT
```

This is because, in the SPOOLER() function, we saved and restored the default save-list, but we didn't save or restore the pointers that allowed READNEXT to sequentially return item-ids in order.

### Current Release Behavior

The above code now works as expected and the SPOOLER() call has no adverse effect on the LOOP/READNEXT construct.

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />
