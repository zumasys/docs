# Restoring from a Transaction Log

**Created At:** 3/21/2018 7:11:08 AM  
**Updated At:** 4/18/2018 8:11:53 PM  
**Original Doc:** [restoring-from-a-transaction-log](https://docs.jbase.com/43995-transactional-journaling/restoring-from-a-transaction-log)  
**Original ID:** 304806  
**Internal:** No  

## Selective Restores

There may be a time when a selective restore is preferable to a full restore.  This cannot be automated and has to be judged on its own merits.

### By Path

In this example, all updates to the CUSTOMER file which have been logged, except for any CLEARFILEs, are re-applied to the CUSTOMER file.

```
:SSELECT TJ1 WITH PATH EQ "C:\jBASE\CUSTOMER" AND WITH TYPE NE "CLEARFILE"
167 Records selected
>jlogdup INPUT set=current OUTPUT set=database
```

### By Type

In this example, all updates to the CUSTOMER file which have been logged, except for any CLEARFILEs, are re-applied to the CUSTOMER file.

```
:SSELECT TJ1 WITH TYPE NE "CLEARFILE"
167 Records selected
>jlogdup INPUT set=current OUTPUT set=database
```

Back to [Transactional Journaling](./../introduction-to-transaction-journaling)
