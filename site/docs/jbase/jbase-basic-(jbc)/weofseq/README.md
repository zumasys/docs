# WEOFSEQ

**Created At:** 10/4/2017 11:40:22 AM  
**Updated At:** 1/5/2018 6:31:13 PM  
**Original Doc:** [279567-weofseq](https://docs.jbase.com/36868-jbase-basic/279567-weofseq)  


# Description

**WEOFSEQ** writes end of file on file opened for sequential access,   forcing truncation of the file at the current file pointer. Nothing is actually 'written' to the sequential file. It takes the general form:

```
WEOFSEQ FileVar { THEN | ELSE Statements}
```

Where:

FileVar specifies the file descriptor of the file opened for sequential access.

Statements conditional jBASE BASIC statements



Go back to [jBASE BASIC](./../jbase-basic-programmers-reference-guide).
