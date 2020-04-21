# PH-CLEAR

<PageHeader />

## Description

The jBASE **PH-CLEAR** command clears the jBTP log and history file. The command may be as:

```
PH-CLEAR {taskid | port} {(Options}
```

where:

- **taskid** specifies that only the entries for the taskid are to be cleared.
- **port** specifies that the entries for the port number are to be cleared.

and **options** may be:

- I  Clear entries interactively. i.e. prompt before deleting entry.

## Note

> This command can only be executed by the super user/Administrators. If a taskid, port number or interactive option is NOT specified all entries in the log file will be deleted.

### Example

```
PH-CLEAR 100
```

Deletes log and history records for port number 100.

Back to [Background Processing](./../README.md)

<PageFooter />
