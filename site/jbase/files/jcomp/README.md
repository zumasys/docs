# jcomp

<PageHeader />

**Tags:**
<badge text='comparing records' vertical='middle' />
<badge text='comparing files' vertical='middle' />
<badge text='files' vertical='middle' />

## Description

The **jcomp** utility provides a mechanism to compare records from the same or different Hash files or directories.

```
jcomp {-Options} {DICT} filename{,section} {recordlist | *}
```

or

```
jcomp {DICT} filename{,section} {recordlist | *} {(Options}
```

where:

- **filename** is the name of a valid file. The file type must be one of the supported jBASE file types.
- **section** is the name of a data section
- **recordlist** is the list of record identifiers to be compared. An asterisk (\*) denotes all records in the file. If **recordlist** is omitted then an active SELECT list, if present, is used.
- **options** are as follows:

| Option | Description |
| --- | --- |
| -L or (L | Restrict error display to single line. |
| -N or (N | No paging. |
| -P or (P | Output to printer. |
| -S or (S | Suppress matching records. |
| -T or (T | Trim source before compare. |
| -V or (V | Verbose display of non-matching records. |

The resulting output of a comparison will prepend the line with a **C** (the line is Changed) or **I** (the line is Inserted). Using the **V** option will highlight the actual changes on a Changed line.

## Note

> Once the initial **jcomp** command has been submitted, the user will get a **with:** prompt. It is here that file and/or records to be compared, are to be specified. A left parenthesis specifies that the records are to be compared in another file.

Examples of use may be as:

```
comp File1 * (S
with:(File2
```

Compares all records from File1 with records with the same item-ids in File2. Suppresses the output of any records that are exactly the same from both files.

```
jcomp File1 rec1
with: rec2
```

Compares rec1 with rec2 in the File1 file.

```
jcomp File1 rec1 rec2
with:(File2 rec1 rec2
```

Compares the records rec1 and rec2 in File1 with the records rec1 and rec2 in File2 respectively.

```
GET-LIST MYLIST

123 Records selected

>jcomp CUSTOMERS (S
with:(PROSPECTS
```

Uses the MYLIST select-list to compare the records in the CUSTOMERS file with records in the PROSPECTS file. Suppresses the output of any records that are exactly the same from both files.

Back to [Files](./../README.md)
