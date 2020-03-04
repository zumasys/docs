# jcomp

**Created At:** 7/20/2018 1:55:55 PM  
**Updated At:** 8/23/2018 1:26:44 PM  
**Original Doc:** [jcomp](https://docs.jbase.com/42462-distributed-files/jcomp)  
**Original ID:** 328702  
**Internal:** No  

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

- filename is the name of a valid file. The file type must be one of the supported jBASE file types.
- section is the name of a data section
- recordlist is the list of record identifiers to be compared. An asterisk (\*) denotes all records in the file. If the recordlist is omitted then an active SELECT list, if present, is used.
- The options are as follows:



| Option<br> | Description<br> |
| --- | --- |
| -L or (L<br> | Restrict error display to single line.<br> |
| -N or (N<br> | No paging.<br> |
| -P or (P<br> | Output to printer.<br> |
| -S or (S<br> | Suppress matching records.<br> |
| -T or (T<br> | Trim source before compare.<br> |
| -V or (V<br> | Verbose display of non-matching records.<br> |


The resulting output of a comparison will prepend the line with a **C**(the line is Changed) or **I**(the line is Inserted). Using the **V**option will hilite the actual changes on a Changed line.



## Note:


> Once the initial **jcomp**command has been submitted, the user will get a **with:**prompt. It is here that file and/or records to be compared, are to be specified. A left parenthesis specifies that the records are to be compared in another file.




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
