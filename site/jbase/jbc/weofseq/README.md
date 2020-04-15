# WEOFSEQ

<PageHeader />

## Description

**WEOFSEQ** writes end of file on file opened for sequential access, forcing truncation of the file at the current file pointer. Nothing is actually 'written' to the sequential file. It takes the general form:

```
WEOFSEQ FileVar { THEN | ELSE Statements}
```

Where:

**FileVar** specifies the file descriptor of the file opened for sequential access.

**Statements** are conditional jBASE BASIC statements

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

  
<PageFooter />
