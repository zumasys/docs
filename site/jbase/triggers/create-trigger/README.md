# CREATE-TRIGGER

<PageHeader />

## Description

The CREATE-TRIGGER ( aka CREATE.TRIGGER ) command is used to specify the database events for which the trigger subroutine is called.

```
CREATE-TRIGGER -Options FileName {triggername|*} subroutine
```

where:

- **FileName** can reference either a jBASE hashed file or a directory.
- **triggername** must be **\*** or one of the nine database events: POSTOPEN, PREREAD, POSTREAD, PREWRITE, POSTWRITE, PREDELETE, POSTDELETE, PRECLEAR, POSTCLEAR. If **\*** is specified then the trigger **subroutine** will be called for each of the nine database events.
- **options** for CREATE-TRIGGER are:

| Option | Name | Explanation |
| --- | --- | --- |
| -a or (A) | amend flag | subroutine can amend the record |
| -d or (D) | debug flag | subroutine can be debugged |
| -t or (T) | terminate flag | subroutine terminates update |
| -o or (O) | overwrite flag | overwrite any existing definitions |

- subroutine is the name of a jBC subroutine.

## Note

> CREATE-TRIGGER can be run multiple times for the same file. If a trigger has already been defined for the specified event then the overwrite flag must be used to effect the change.

### Examples

```
CREATE-TRIGGER BP POSTOPEN SUBBPOPEN
```

The subroutine SUBBPOPEN will be called immediately after the BP file is successfully opened by any jBASE process.

```
CREATE-TRIGGER -o PAYROLL * SUBBP
```

The subroutine SUBBP will be called for every database event to the PAYROLL file. Existing trigger definitions will be overwritten.

Also see [Trigger API](./../trigger-api).

Back to [Triggers](./../README.md)

<PageFooter />
