# PH-DELETE

<PageHeader />

## Description

The jBASE **PH-DELETE** command deletes a port number allocated for the jBASE background task processes. The command may be as:

```
PH-DELETE {port {port }} {(Options}
```

with the user being prompted as:

```
PORT TO DELETE ?
```

Where:

- **port** - port number to delete
- **port port** - specifies that all ports with the range are to be deleted

and **options** may be as:

- F- delete port numbers for foreground processes
- B- delete port numbers for background processes

### Notes

> Enter the port number to delete from the available list of jBASE background ports. The port number is not available for jBASE background processes until allocated by the PH-ALLOCATE command.
>
> As of jBASE 5.2.31, the user does not require root privileges for this command.

### Example

```
PH-DELETE
PORT TO DELETE ? 100
100 DELETED FROM SERVICE
```

Port number 100 is no longer available for use by jBASE background task processes.

Back to [Background Processing](./../README.md)
