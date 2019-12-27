# WRITESEQ

**Created At:** 10/4/2017 11:59:54 AM  
**Updated At:** 1/5/2018 6:32:13 PM  
**Original Doc:** [279570-writeseq](https://docs.jbase.com/36868-jbase-basic/279570-writeseq)  
**Original ID:** 279570  
**Internal:** No  


# Description

This statement will write to a file opened for sequential access. It takes the general from:

```
WRITESEQ expression {APPEND} ON|TO FileVar THEN | ELSE statements
```

or

```
WRITESEQF expression {APPEND} TO FileVar THEN | ELSE statements
```

Where:

Variable specifies the variable to contain next record from sequential file.

FileVar specifies the file descriptor of the file opened for sequential access.

Statements conditional jBASE BASIC statements

## Note: 


> Each **WRITESEQ**writes the data on a line of the sequentially opened file. Each data is suffixed with a new line character. After each **WRITESEQ**, the file pointer moves forward to the end of line. The WRITESEQF statement forces each data line to be flushed to the file when it is written. The APPEND option forces each **WRITESEQ** to advance to the end of the file before writing the next data line.




See also: [OPENSEQ](./../openseq).

Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
