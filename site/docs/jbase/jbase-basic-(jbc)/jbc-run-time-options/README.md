#  jBC Run-time Options

**Created At:** 5/23/2018 2:04:49 PM  
**Updated At:** 6/6/2019 8:12:26 AM  
**Original Doc:** [jbc-run-time-options](https://docs.jbase.com/36868-jbase-basic/jbc-run-time-options)  


## Description 

A number of options may follow the invocation of a jBC program. The command line format is:

```
progname { -Joption(s) {-Joption(s)} progparam { progparam..}
```

The Descriptions below are UNIX-centric.




| Option<br> | Description<br> |
| --- | --- |
| **-Jb**<br> | Run as a background process. A background port number will be allocated and control will return to the calling program.<br> |
| **-Jc**<br> | To check the variables on exiting the program. This may be useful for debugging code with user-written C functions when looking for corrupted variables.<br> |
| **-Jd**<br> | To enter the debugger before execution of the first program line. The debugger prompt is displayed immediately.<br> |
| **-JD**<br> | Same as the -Jd option, to immediately enter the debugger, but will set the JBCDEBUGGER environment variable so that all programs executed by the parent will also immediately enter the debugger.<br> |
| **-Jp**<br> | Normally the debugger will try to display the line of source code associated with the current program position. The debugger will, by default, only look in the current working directory for the source file. You can use the -Jp option to give a list of file names to search in, each name delimited by a colon. The file can be any supported by jEDI, including hashed files and UNIX directories. The following example tells the debugger to lookfirst in the file BP in the home directory and then in the current working directory:<br>`% prog -Jp$HOME/BP:.`<br>You can also use the ‘p’ command from the debugger prompt to achieve the same effect.<br> |
| **-Jr**<br> | Redirects debugger input/output to the specified file. This allows you to debug on a different terminal from that running the application. This is very useful when debugging applications where screen layout is important. You can also use the ‘r’ command from the debugger prompt to achieve the same effect.<br> |
| **-Js**<br> | Displays the CPU usage on exiting the program.<br> |
| **-Ju**<br> | To set the terminal output to be unbuffered. Under normal circumstances, data printed to the terminal will only be actually be displayed under the following circumstances:<ul><li>A new line character is printed.</li><li>The maximum number of characters have been buffered.</li><li>The program terminates, or calls another program through the PERFORM, EXECUTE, CHAIN or ENTER command.</li><li>The program pauses due to execution of an INPUT, SLEEP or RQM statement.</li></ul><br>For example, in the following code, the data is not actually printed until the very last line:<br><br>```<br>FOR Loop = 1 TO 10<br>   PRINT @(0,23):”Loop “:Loop:@(-4):<br>   CALL DOTHIS<br>NEXT Loop<br>PRINT “Completed”<br>```<br><br>Some legacy applications do this sort of thing, and the status message is not displayed when it is required. There are a number of ways to force each PRINT or CRT statement to be displayed:<br><ul><li>Use this -Ju option.</li><li>Append a CHAR(0) to the end of the string. For example:</li></ul><br>```<br>PRINT @(0,23):”Loop “:Loop:@(-4):CHAR(0):<br>```<br><br>Note that this incurs a performance penalty and should be avoided if possible. Small terminal populations will probably not see much degradation, but large terminal populations performing lots of screen based activity will incur a significant penalty.<br> |
| **-Jw**<br> | Prevents the debugger being entered when warning messages are issued. By default, when a run-time error occurs and a warning message is issued, the debugger will be entered. The later section on error messages describes this more fully. This option will not affect fatal run-time errors, where the debugger will still be entered if possible.<br> |
| **-Jx**<br> | Causes the contents of the all variables in a program to be displayed at the end of a program.<br> |
| **-JC**<br> | Turns on [coverage support](./../../jbase/tools/jcover).<br> |
| **-JP**<br> | Turns on [profiling support](./../../jbase/tools/jprof).<br> |




The use of the -J options is usually hidden from the application. Consider the following jBC program:

```
001 PRINT DQUOTE(SENTENCE())
```

Assume the program was started like this:

```
testprog -Jw -JP filename recordkey
```

The output from the program would be:

```
“testprog filename recordkey”
```

The same is true for the **SYSTEM(1000)** function call. However the application can use the SYSTEM(1001) function call to obtain all the command line arguments, for example if you changed the source code to become:

```
001 PRINT DQUOTE(CHANGE(SYSTEM(1001), @AM, ” “)
```

And ran it the same way, the output would be:

```
“testprog -Jw -JP filename recordkey”.
```

Note that the reason for using the **CHANGE**function is that **SYSTEM(1000)**and **SYSTEM(1001)** return the command line with the arguments delimited by an attribute mark, whereas the **SENTENCE**function delimits the arguments with a space character.


