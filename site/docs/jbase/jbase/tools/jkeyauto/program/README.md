# PROGRAM

**Created At:** 9/6/2018 10:25:10 AM  
**Updated At:** 5/16/2019 6:28:56 PM  
**Original Doc:** [program](https://docs.jbase.com/48575-jkeyauto/program)  

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

Begins execution of an external program, but will not wait until the program terminates (unlike EXECUTE / PERFORM). This is basically the program desired to be controlled using jkeyauto The program can then have keyboard input 'fed' to it at a later stage in the script by using the INPUT statement.

It's general usage is as:

```
program expression (STDOUT expression_stdout} {STDERR expression_stderr} {SETTING variable_setting}
```

where :

- **expression** describes the program to start. This program is not executed though a shell, so normal shell meta-characters such as \* ? &gt; are not expanded.
- **expression\_stdout** can optionally be used to show what device or file to copy the program output to. By default all the output of the program is captured internally by jkeyauto. This option allows for making jkeyauto copy this captured data to another device or file. The special name \_-\_ shows jkeyauto to re-direct the output to the same terminal as jkeyauto.
- **expression\_stderr** can optionally be used to re-direct the stderr output of the program. Again,  '-' may be used as a special case.
- **variable\_setting**can be used to store the success code of loading the program. This is usually 0 and will only be set to other values in extreme circumstances, such as running out of system resources.


The following variables are set up following execution of this statement which can be examined later by the script.

- $? The return code from loading the program. Generally 0 means the program loaded okay, and any other value is an error.
- $PIPE The pipe number of the loaded program. This generally starts at 0 and increments each time the PERFORM statement is used. This variable may also be used in the INPUT statement to pass keyboard input to the program.
- $PID The process id of the loaded program.




An example of use is as:

```
JBCPORTNO = 50
loopcounter = 0
portincr = 3
filename = "CUSTOMERS"
again:
putenv "JBCPORTNO=":JBCPORTNO
putenv "JBCCONNECT="
outfile = "progout-":$loopcounter
perform "thisprog":" ":filename STDOUT "progout-":loopcounter
loopcounter=loopcounter+1
JBCPORTNO=JBCPORTNO+portincr
if loopcounter lt 10 then goto again
```



In the above example, 10 programs are loaded in the background. They have a range of port numbers from 50 to 77 in increments of 3 (by resetting JBCCONNECT to ensure a new port number will be allocated). The terminal output is redirected to a file named from "progout-0" through "progout-9".

The internal variable $PIPE will be set to the pipe number allocated for this program and this pipe number is used in other statements such as the WAIT or INPUT statements. The internal variable $? is also set to the success code of loading the program. The internal variable $PID is set to the process id that the operating system allocated for this new process.



## Note: 


> There can be any number of PERFORM statements in a script (or the same PERFORM statement executed more than once!!) However some Unix systems do sometimes limit the number of open file descriptors per process, and this may be a problem (systems such as AIX have a very high default limit).
> 
> It is usually possible to reconfigure the kernel if this is a problem.

