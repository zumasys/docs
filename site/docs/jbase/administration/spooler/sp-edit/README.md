# SP-EDIT

**Created At:** 4/5/2018 12:42:21 PM  
**Updated At:** 1/24/2019 8:46:20 AM  
**Original Doc:** [306467-sp-edit](https://docs.jbase.com/44205-spooler/306467-sp-edit)  


## Description 

This command edits a list of print jobs. It takes the general form:

```
SP-EDIT print-job-list {(options)}
```



where :

- print-job-list is the list of print jobs for editing, separated by spaces or commas.A range of jobs (n1-n2) may be specified.
- options are the command line options to be applied to the list of print jobs and can be one or more of the following:





| Option<br> | Description<br> |
| --- | --- |
| n<br> | number of bytes; maximum size in bytes of a generated file record<br> |
| I<br> | Generates a file record. Prompts for filename and record key. By default the "I" option will remove return and pad characters and convert linefeed characters to field mark characters (x”FE”). Each line of print data then becomes a field in the file record.<br> |
| A<br> | splits print data greater than 31,767 bytes into suffixed records. e.g. recordkey.001, recordkey.002, etc.<br> |
| O<br> | overwrites existing file record<br> |
| H<br> |  suppresses tape labels when the output designation is tape (see T option)<br> |
| P<br> | make characters less than x”20” and greater than x”7F” transparent<br> |
| T<br> | outputs the requested print jobs to tape<br> |
| U<br> |  selects all available hold files if no job numbers are specified on the command line<br> |





> ### Note: 
> 
> Root and the user that generated the job can only edit print jobs created with the P option assigned. Any user can edit print jobs created with the U option assigned. Print jobs, which are still OPEN, cannot be edited. The user will be prompted for a filename and record id for the print job data.




See also: [SP-EDITOR COMMANDS](sp-editor-commands).

Back to [Spooler.](jbase-spooler)


