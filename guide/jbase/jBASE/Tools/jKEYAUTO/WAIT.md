# WAIT

**Created At:** 8/30/2018 1:42:10 PM  
**Updated At:** 5/16/2019 6:30:57 PM  

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

The WAIT statement can be used to wait until a program loaded with the PROGRAM statement has completed. It can also be used to see if it has already completed. Options exist for timing out the operation and checking the exit code of the child process.

It takes the general form:

```
wait {PIPE expression_pipe} {FOR expression_for} {SETTING variable_setting}
```

where:

- **expression\_pipe** shows what pipe number to wait for. The pipe number is obtained using the $PIPE variable following a PROGRAM statement execution. If this is omitted, the default is to wait for pipe number 0, which is the first pipe created with the first PROGRAM statement.
- **expression\_for** shows any timeout in seconds. A value of 0 shows to return straight away. If this option is omitted, then the WAIT statement will wait forever until the program completes. If the program specified has already completed, then this WAIT statement returns immediately regardless of this setting.
- **variable\_setting** allows you to find out the exit code of the program. It can be one of the following formats:



| +ve number<br> | This is the exit code of the program.<br> |
| --- | --- |
| Snnn.<br> | This shows the program terminated due to an un-caught signal, where nnn is the signal number that caused the programs death.<br> |
| -1<br> | This shows the WAIT statement returned because the timeout operation specified by exprssion\_for was exceeded.<br> |
| -2<br> | This shows the value given in expression\_pipe was invalid.<br> |




## Note: 


> Generally, this statement ought to be used in all scripts so that the jkeyauto program does not exit before the child processes created with the PROGRAM statement. Should this happen then jkeyauto will attempt to kill all remaining child processes when it exits.




An example of use may be as:

```
time1 = $UBOOT
program "SLEEP 5"
pipeno = $PIPE
again:
wait PIPE pipeno FOR 2 SETTING s
IF s eq -2 then print "bad pipe number !" ; exit 2
IF s eq -1 then print "Still waiting to complete" ; goto again
time2 = $UBOOT
print "SLEEP exited with ":s:" and took ":time2-time1:" seconds"
```

to execute "SLEEP 5, then go in a loop with a 2 second timeout displaying a "Still waiting to complete" every 2 seconds. When the program finally completes, the exit code from the program is displayed.
