# CREATE-TRIGGER

<PageHeader />

## Description

The CREATE-TRIGGER ( aka CREATE.TRIGGER ) command is used to specify the database events for which the trigger subroutine is called

```
CREATE-TRIGGER -Options FileName {triggername|*} subroutine
```

Where **Options** can be:

| Option | Description |
| --- | --- |
| -a | Trigger can amend the record |
| -d | Trigger can be debugged |
| -t | trigger can terminate the update |
| -o | Overwrite any existing trigger definition |

## Trigger Names (types of triggers)

| Option | Description |
| --- | --- |
| POSTOPEN | Called before a file is opened |
| PREREAD | Called before a item is read |
| POSTREAD | Called after a item is read |
| PREWRITE | Called before a item is written to disk |
| POSTWRITE | Called after a item is written to disk |
| PREDELETE | Called before a item is deleted |
| POSTDELETE | Called after a item is deleted from disk |
| PRECLEAR | Called before a clear statement is executed |
| POSTCLEAR | Called after a clear statement is execute |
| \* | Called for any event shown above |

## Notes

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

Back to [Files](./../README.md).
