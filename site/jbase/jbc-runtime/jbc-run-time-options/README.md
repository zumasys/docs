# jBC Run-time Options

<PageHeader />

## Description

A number of options may follow the invocation of a jBC program. The command line format is:

```
progname { -Joption(s) {-Joption(s)} progparam { progparam..}
```

The Descriptions below are UNIX-centric.

| Option | Description |
| --- | --- |
| **-Jb** | Run as a background process. A background port number will be allocated and control will return to the calling program.<br>The process is then run without consuming a jBASE|
| **-Jc** | To check the variables on exiting the program. This may be useful for debugging code with user-written C functions when looking for corrupted variables. |
| **-Jd** | To enter the debugger before execution of the first program line. The debugger prompt is displayed immediately. |
| **-JD** | Same as the -Jd option, to immediately enter the debugger, but will set the JBCDEBUGGER environment variable so that all programs executed by the parent will also immediately enter the debugger. |
| **-Jp** | Normally the debugger will try to display the line of source code associated with the current program position. The debugger will, by default, only look in the current working directory for the source file. You can use the -Jp option to give a list of file names to search in, each name delimited by a colon. The file can be any supported by jEDI, including hashed files and UNIX directories. The following example tells the debugger to look first in the file BP in the home directory and then in the current working directory:<br><br>`% prog -Jp$HOME/BP:.`<br><br>You can also use the ‘p’ command from the debugger prompt to achieve the same effect. |
| **-Jr** | Redirects debugger input/output to the specified file. This allows you to debug on a different terminal from that running the application. This is very useful when debugging applications where screen layout is important. You can also use the ‘r’ command from the debugger prompt to achieve the same effect. |
| **-Js** | Displays the CPU usage on exiting the program. |
| **-Ju** | To set the terminal output to be unbuffered. Under normal circumstances, data printed to the terminal will only be actually be displayed under the following circumstances:<ul><li>A new line character is printed.</li><li>The maximum number of characters have been buffered.</li><li>The program terminates, or calls another program through the PERFORM, EXECUTE, CHAIN or ENTER command.</li><li>The program pauses due to execution of an INPUT, SLEEP or RQM statement.</li></ul>In Example 1 below, the data is not actually printed until the very last line.Some legacy applications do this sort of thing, and the status message is not displayed when it is required. There are a number of ways to force each PRINT or CRT statement to be displayed:<ul><li>Use this -Ju option.</li><li>Append a CHAR(0) to the end of the string, as in Example 2 below.</li></ul>Note that this incurs a performance penalty and should be avoided if possible. Small terminal populations will probably not see much degradation, but large terminal populations performing lots of screen based activity will incur a significant penalty. |
| **-Jw** | Prevents the debugger being entered when warning messages are issued. By default, when a run-time error occurs and a warning message is issued, the debugger will be entered. The later section on error messages describes this more fully. This option will not affect fatal run-time errors, where the debugger will still be entered if possible. |
| **-Jx** | Causes the contents of the all variables in a program to be displayed at the end of a program. |
| **-JC** | Turns on [coverage support](./../../tools/jcover/README.md). |
| **-JP** | Turns on [profiling support](./../../tools/jprof/README.md). |

### Example 1

```
FOR Loop = 1 TO 10
    CRT @(0,23) : ”Loop “ : Loop : @(-4) :
    CALL DOTHIS
NEXT Loop
CRT “Completed”
```

### Example 2  

```
CRT @(0,23) : ”Loop “ : Loop : @(-4) : CHAR(0):
```

### Note

The use of the -J options is usually hidden from the application. Consider the following jBC program:

```
CRT DQUOTE(SENTENCE())
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
CRT DQUOTE(CHANGE(SYSTEM(1001), @AM, ” “)
```

And ran it the same way, the output would be:

```
“testprog -Jw -JP filename recordkey”.
```

Note that the reason for using the **CHANGE** function is that **SYSTEM(1000)** and **SYSTEM(1001)** return the command line with the arguments delimited by an attribute mark, whereas the **SENTENCE** function delimits the arguments with a space character.

[Back to jBC Runtime](./../README.md)

<PageFooter />
