# CREATE-TRIGGER

**Created At:** 8/18/2018 7:50:30 PM  
**Updated At:** 8/28/2018 6:54:34 AM  
**Original Doc:** [create-trigger](https://docs.jbase.com/42462-distributed-files/create-trigger)  
**Original ID:** 335218  
**Internal:** No  


## Description 

The CREATE-TRIGGER ( aka CREATE.TRIGGER ) command is used to specify the database events for which the trigger subroutine is called

```
CREATE-TRIGGER -Options FileName {triggername|*} subroutine
```



Where Options can be:




| Option<br> | Description<br> |
| --- | --- |
| -a<br> | Trigger can amend the record<br> |
| -d<br> | Trigger can be debugged<br> |
| -t<br> | trigger can terminate the update<br> |
| -o<br> | Overwrite any existing trigger definition<br> |


Trigger Names (types of triggers)


| Option<br> | Description<br> |
| --- | --- |
| POSTOPEN<br> | Called before a file is opened<br> |
| PREREAD<br> | Called before a item is read<br> |
| POSTREAD<br> | Called after a item is read<br> |
| PREWRITE<br> | Called before a item is written to disk<br> |
| POSTWRITE<br> | Called after a item is written to disk<br> |
| PREDELETE<br> | Called before a item is deleted<br> |
| POSTDELETE<br> | Called after a item is deleted from disk<br> |
| PRECLEAR<br> | Called before a clear statement is executed<br> |
| POSTCLEAR<br> | Called after a clear statement is execute<br> |
| \*<br> | Called for any event shown above<br> |


## NOTES

CREATE-TRIGGER can be run multiple times for the same file. If a trigger has already been defined for the specified event then the overwrite flag must be used to effect the change.

If the trigger subroutine cannot be located the trigger will not fire but the actual activity will continue to happen.

## Examples

```
CREATE-TRIGGER BP POSTOPEN SUBBPOPEN
```

The subroutine SUBBPOPEN will be called immediately after the BP file is successfully opened by any jBASE process.

```
CREATE-TRIGGER -o PAYROLL * SUBBP
```

The subroutine SUBBP will be called for every database event to the PAYROLL file. Existing trigger definitions will be overwritten.

See [Trigger API](./../trigger-api) for instructions on how to create the trigger.


