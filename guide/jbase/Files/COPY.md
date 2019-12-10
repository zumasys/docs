# COPY

**Created At:** 7/17/2018 2:56:44 PM  
**Updated At:** 1/10/2019 9:42:50 AM  


## Description 

The jBASE COPY command allows the user to copy specific or selected records from a specified file to the terminal, printer or another file. The DICT keyword can be used to specify that the record or records should be copy from or to a dictionary file. The command may be as:

```
COPY {DICT} filename{,section} {recordlist | *} {(Options}
```



where:

- **filename**is the name of a valid file; must be a supported jBASE file type.
- **section**is the name of a data section
- **recordlist**is the list of record identifiers to be copied. If the **recordlist**is omitted then the active SELECT list, if present, is used. An asterisk (**\***) denotes all records in the file.
- Options:



| Option<br> | Explanation<br> |
| --- | --- |
| A<br> | Force ASCII mode. Newline becomes attribute mark and vice versa<br> |
| B<br> | Force binary mode. No newline conversion<br> |
| D<br> | Delete record after copied<br> |
| F<br> | Output new page between ids, for T or P option<br> |
| I<br> | Suppress or display records ids as records are copied. Emulation dependent<br> |
| N<br> | Suppress pagination, for T or P option<br> |
| O<br> | Overwrite record in target if it already exists<br> |
| P<br> | Direct record contents to the spooler<br> |
| T<br> | Direct record contents to the terminal<br> |
| S<br> | Suppress line numbers, for T or P option<br> |
| X<br> | Hexadecimal display, for T or P option<br> |


###  

Alternate syntax:

```
COPY FROM {DICT} SourceFilename TO {DICT} TargetFilename {OrigID,{NewID}} {...} {Options}
```

where:

- **SourceFilename**is the file from which the records are copied from
- **TargetFilename**is the file where the records are copied to
- **OrigID**is the record ID to be copied
- **NewID**is the optional destination record ID


... denotes multiple **OrigID,NewID** sets where each set is separated by a space

- Options are as:



| Option<br> | Explanation<br> |
| --- | --- |
| ALL<br> | All records in SourceFilename are copied<br> |
| OVERWRITING<br> | Overwrite TargetFilename records with SourceFilename records<br> |
| DELETING<br> | Delete SourceFilename record after it is copied<br> |
| CRT<br> | Copy records to the screen<br> |
| LPTR<br> | Send output to the spooler<br> |
| NEW.PAGE<br> | Paginates the display<br> |
| NUM.SUPP<br> | Suppresses line numbers, valid only with CRT or LPTR options<br> |
| UPDATING<br> | Copies the record only if the the record already exists in TargetFilename<br> |
| ID.SUP<br> | Suppress output of record IDs, valid only with CRT or LPTR options<br> |
| SQUAWK<br> | Verbose output for the DELETING, OVERWRITING and UPDATING options<br> |
| HEX<br> | Display records in hexadecimal display, valid only with CRT or LPTR options<br> |


###  

## Note: 


> On Windows, confusion can occur when running in the *sh* or *msh* [emulation mode](328248-jshell) of the jSHELL. Rather than the expected record copy, COPY will invoke the Windows file copy command when used in either of these modes. The JCOPY command can be used to ensure that the record copy is invoked regardless of jSHELL emulation mode.


The Alternate Syntax is useful when a single command line is required to do the copy.



### EXAMPLES

```
COPY File1 Record1 (T
```

Copies Record1 from File1 to the terminal.



```
COPY File1 RecordId1 (OD
TO :(DICT File2 RecordId2
```

Copies RecordId1 from File1 to dictionary file File2]D overwriting RecordId2. Once copied the original Record1 is deleted from File1.



```
COPY FROM File1 TO DICT File2 RecordId1,RecordId2 OVERWRITING DELETING
```

Same as previous example, but uses the alternate syntax.

```
JCOPY EMPLOYEE 4090
TO : (WORK
```

Copies record 4090 from the EMPLOYEE file to record 4090 in the file WORK.



```
COPY FROM ORDERS TO ORDER.HISTORY ALL
```

Copies all records from the ORDERS file to the ORDER.HISTORY file
