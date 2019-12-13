# PN5_60840

**Created At:** 2/14/2019 10:19:34 AM  
**Updated At:** 2/14/2019 11:15:34 AM  


### Description

PREWRITE trigger unable to amend the record on the file the trigger is on



### Previous Release Behavior

As an example, the following trigger code would not update attribute 6 of the record when it was written to the file on which the trigger was on:

```
SUBROUTINE prewrite_trigger(filevar, event, prerc, flags, recordkey, record, userrc)
EQU TRIGGER_TYPE_PREWRITE TO 1
IF event EQ TRIGGER_TYPE_PREWRITE THEN record<6> = "prewritten"
RETURN
```



### Current Release Behavior

PREWRITE trigger is now able to amend the record.
