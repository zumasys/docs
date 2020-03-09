# Run-time jBC Debugger Arguments

**Created At:** 12/13/2017 10:22:19 PM  
**Updated At:** 4/19/2018 11:21:53 PM  
**Original Doc:** [291165-run-time-debugger-arguments](https://docs.jbase.com/41693-debugger/291165-run-time-debugger-arguments)  
**Original ID:** 291165  
**Internal:** No  

When a jBC source program is executed, there are a number of command arguments that can be passed to the run-time libraries, some of which relate to the operation of jBC debug. These are as follows:

| Option | Description |
| --- | --- |
| -Jd | The debugger is entered at the start of the program, immediately prior to executing the first jBC command. |
| -JD | The debugger is entered at the start of the program, immediately prior to executing the first jBC command. The debug session remains active, even if a new program is EXECUTEd or CHAINed. |
| -Jp{:Path...}    -Jp{;Path...} | This specifies to the debugger where it can find the necessary sources it needs at run time. Path can comprise multiple jBC filenames or jBC filenames, as long as they are each delimited by a colon (UNIX) or semicolon (Windows). When the debugger attempts to open the source, it will start looking in the leftmost filename specified. If this argument is not given, the default is the current directory. This option can be overridden from the debug prompt using the "p" command. |
| -JrDeviceName | The debugger output is redirected to device DeviceName rather than standard output. This allows debug to send its output to a file, pipe or a terminal other than the current one in use by the program.For example, -Jr/dev/tty8b will redirect output to device tty8b |

## Note
>
> If the application performs a CHDIR() function, and the debugger needs to access a file in the "current" directory by default, then it will attempt to access it in the directory specified by the CHDIR() function and not the one from which the program was executed.  
>

## Example

menu -Jd
This command will start up the menu program and enter the debugger before executing the first command with a message similar to:

```
Option -Jd seen on command line
Source MENU.PROCESSOR.b, Line 1, Level 2 jBASE debugger..
```

Normal debugging operations can now be carried out.
menu -Jd -Jpinvoices:inv.routines:mainlib

This command executes the menu program and enters debug. Any debug commands requiring reference to the source, such as "w", will then look for it in a directory other than the current one.

The directories searched are listed after the -Jp option, and they are searched in order starting from the leftmost directory given. If a required source for the main program or an external subroutine is not in the invoices directory/file, then the directory/file inv.routines followed by mainlib will be searched in turn. If the source file is not found, an error message is returned specifying the source required.

As the executable code and libraries are usually held in separate directories from the original sources, this is a very useful option.

Back to [jBC Debugger](./../introduction-to-the-jbc-debugger)
