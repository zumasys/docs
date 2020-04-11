# PH-ALLOCATE

<PageHeader />

## Description

The jBASE **PH-ALLOCATE** command allocates a port number for use by jBASE background processes. The command may take the form:

```
PH-ALLOCATE {port {port }} {(Options}
```

and the user is prompted as:

```
PORT TO ALLOCATE ?
```

where:

- **port**- The port number to allocate
- **port port**- specifies that all ports within the range are to be allocated.

and **options** may be as:

- F- allocate port numbers for foreground processes,
- B- allocate port numbers for background processes (default).

## Note

> Enter the port number to allocate to the available list of jBASE background ports. he port number will remain allocated until de-allocated with PH-DELETE command.  Allocated port numbers can still be used for normal foreground processes when not being used for jBASE background processes.
>
> As of jBASE 5.2.31, the user does not require root privileges for this command.

### Example

```
PH-ALLOCATE
PORT TO ALLOCATE ? 100
```

Allocates port number 100 as available for use by jBASE background task processes.

Back to [Background Processing](./../README.md)

  
<PageFooter />
