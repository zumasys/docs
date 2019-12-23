# STATUS Function

**Created At:** 9/27/2017 2:46:45 PM  
**Updated At:** 1/5/2018 6:02:32 PM  
**Original Doc:** [278661-status-function](https://docs.jbase.com/36868-jbase-basic/278661-status-function)  


# Usage: 

If used after an [OPENPATH](./../openpath) statement, the **STATUS** function will find the cause of a file open failure (that is, for a statement in which the ELSE clause is used). The following values can be returned if the statement is unsuccessful:

For the file access commands, [READ](./../read), [WRITE](./../write), [OPEN](./../open), the function returns:

- 0 if successful, or an
- Operating System error code if previous command failed.
- 13 is returned if permission denied on UNIX systems.




For [OCONV](./../oconv) conversions, the function returns:

- 0 if conversion was successful,
- 1 if an invalid conversion is requested,
- 3 if conversion of possible invalid date.




If used after [CLOSE](./../close), [DELETE](./../delete), [MATREAD](./../matread), [MATWRITE](./../matwrite), [OPEN](./../open), [READ](./../read) or [WRITE](./../write), **STATUS** returns 0 if successful and no error occurs. In the event an error occurs, status returns the error number.

If used after an [OPEN](./../open), [OPENPATH](./../openpath), or [OPENSEQ](./../openseq) statement, the file type is returned if the file is opened successfully. If the file is not opened successfully, the following values may be returned:

If used after a [READ](./../read) statement, the **STATUS**function returns, if the file is a distributed file, the following:

If used after a [READL](./../readl), [READU](./../readu), [READVL](./../readvl), or [READVU](./../readvu) statement, if the statement includes the LOCKED clause, the returned value is the terminal number, as returned by the WHO command, of the user who set the lock.

If used after a [READSEQ](./../readseq) statement,

If used after a [READT](./../readt), [REWIND](./../rewind), [WEOF](./../weof), or [WRITET](./../writet) statement, the returned value is hardware-dependent (I.e. varies according to the characteristics of the specific tape drive unit). The documentation that accompanied drive unit for may offer information about interpreting the values returned by the **STATUS** function.



Go back to[jBASE BASIC](./../jbase-basic-programmers-reference-guide).
