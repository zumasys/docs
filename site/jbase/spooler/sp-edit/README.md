# SP-EDIT

<PageHeader />

## Description

This command edits a list of print jobs. It takes the general form:

```
SP-EDIT print-job-list {(options)}
```

where :

- **print-job-list** is the list of print jobs for editing, separated by spaces or commas.A range of jobs (n1-n2) may be specified.
- **options** are the command line options to be applied to the list of print jobs and can be one or more of the following:

| Option | Description |
| --- | --- |
| n | number of bytes; maximum size in bytes of a generated file record |
| I | Generates a file record. Prompts for filename and record key. By default the "I" option will remove return and pad characters and convert linefeed characters to field mark characters (x”FE”). Each line of print data then becomes a field in the file record. |
| A | splits print data greater than 31,767 bytes into suffixed records. e.g. recordkey.001, recordkey.002, etc. |
| O | overwrites existing file record |
| H |  suppresses tape labels when the output designation is tape (see T option) |
| P | make characters less than x”20” and greater than x”7F” transparent |
| T | outputs the requested print jobs to tape |
| U |  selects all available hold files if no job numbers are specified on the command line |

> ### Note
>
> Root and the user that generated the job can only edit print jobs created with the P option assigned. Any user can edit print jobs created with the U option assigned. Print jobs, which are still OPEN, cannot be edited. The user will be prompted for a filename and record id for the print job data.

See also: [SP-EDITOR COMMANDS](./../sp-editor-commands).

Back to [Spooler.](./../jbase-spooler)

<PageFooter />
