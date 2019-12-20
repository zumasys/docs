# TIMEOUT

**Created At:** 9/29/2017 1:52:24 PM  
**Updated At:** 1/5/2018 6:26:05 PM  
**Original Doc:** [278967-timeout](https://docs.jbase.com/36868-jbase-basic/278967-timeout)  


# Description

The statement is used to terminate a read statement when no data has been read in a specified time period. It takes the general from:

```
TIMEOUT file.variable,Time
```

Where:

file.variable specifies a file opened for sequential access.

time is an expression that evaluates to the number of seconds the program should wait before terminating the [READSEQ](278773-readseq) statement.

**TIMEOUT**causes subsequent [READSEQ](278773-readseq) and [READBLK](277637-readblk) statements to terminate and execute ELSE statements if the number of seconds specified by time elapses while waiting for data.

If either file.variable or time evaluates to null, the **TIMEOUT** statement fails and the program enters the debugger.

An example of use is as:

```
OPENSEQ "SLIPPERS" TO FILE_VAR ELSE ABORT 201 
TIMEOUT FILE_VAR, 10
READBLK VAR1 FROM SLIPPERS, 15 THEN PRINT VAR1 ELSE
    PRINT "TIMEOUT OCCURRED"
END
```



Go back  to [jBASE BASIC](263498-jbase-basic).
