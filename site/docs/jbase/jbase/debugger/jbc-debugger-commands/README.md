# jBC Debugger Commands

**Created At:** 12/13/2017 10:26:27 PM  
**Updated At:** 11/27/2018 12:13:37 AM  
**Original Doc:** [291166-debugger-commands](https://docs.jbase.com/41693-debugger/291166-debugger-commands)  


This section details all the commands available to the user from the jBC debug prompt.

References to *expr* refer to an evaluated expression. Expressions are detailed after the command table. The current file name and current line number are internal debugger variables. On entry to the debugger these are set at the current program file name and line number about to be executed.

Many of the commands detailed here are not available when a program has been compiled with the limited debugger. The limited debugger is linked to the program when the -J04 argument is used on the jbc command line. The -JO4 options is normally only used on production release applications. The ? command will list all commands available. All commands are available when the full debugger is in use.



## **Restrictions**

If you have a Command Level or Break/End Restart feature in effect, or the break key is disabled, the available options are restricted to:




| **a**<br> | Abort program<br> |
| **q**<br> | Quit program<br> |
| **c**<br> | Continue (may be allowed, depends on reason debug was entered) end     Terminate debugger<br> |
| **o**<br> | Log off<br> |



> Note:  There are several ways in which the break key can be disabled. You can use commands such as INHIBIT-BREAK-KEY or BREAK- KEY-OFF. In these cases, the debugger is never entered. Another way is to execute a BREAK OFF statement within the program. In this case, the debugger will still be invoked if a run-time error occurs - such as trying to read a record from a non-file variable.


## **Command List**




| **?**<br> | Display a help screen showing all available debug commands and the program status.<br> |
| **&gt;filename**<br> | Open and truncate the file *filename*and send it the current breakpoints and trace table entries. This can be used in future to replicate the current environment by the use of the command. Not all commands are supported.<br>Note that you may write debugger scripts yourself with an editor rather than use the &gt; command.<br>You can also use &gt; *filename* after any debug command that would display something to the terminal output and redirect it to *filename*. |
| **&lt;filename**<br> | Open the file filename, then read and execute each line as if it has been entered at the keyboard. Any current trace or breakpoint table entries are deleted then replaced by those recorded in filename.<br> |
| **!command**<br> | Spawn another process and execute the command. The previous command thus used can also be recalled and executed by the !! command.<br> |
| **&lt;Ctrl&gt;+D**<br> | Display the next 11 lines of source in the current file.<br> |
| **nn**<br> | Set the current display line to line *nn* in the current file and then display the line. Note that the program execution counter remains unchanged, it is only the display pointer that is changed. A command such as s (see later) will correctly execute the next line in the programmed sequence, not the newly displayed line.<br> |
| **#text**<br> | Ignored, and so can be used as a comment line in debugger scripts later executed with the command.<br> |
| **a{-nn} {mm}**<br> | Kills the program and any parent process or program that called it. The program aborts with an exit code of 203, and the kill signal is sent to any parent process. The *nn* value is used to change the exit code, whilst the *mm* value changes the signal number sent with the kill command. Operation of this command can be altered by setting the Command Level Restart option - see the Systems Housekeeping chapter of the System Administrators Reference Manual for more details.<br> |
| **b**<br> | Display all currently active breakpoints.<br> |
| **b {-t} nn{,file}**<br> | Set a breakpoint at line *nn* in the current file or that specified by the file modifier. If the **-t** option is specified, then the breakpoint will cause a display of all the trace variables rather than halting the program.<br> |
| **b {-t} varname**<br> | This form of the **b**command will cause the debugger to be entered whenever the contents of the specified variable are changed.<br> |
| **b {-t} ex1 op ex2 {AND|OR .....}**<br> | Set a breakpoint at the line whose value is obtained by performing the operation **op** on expressions *ex1* and *ex2*.<br>See later for a full description of expressions. The **-t** option will cause the debugger to display all the trace points rather than halting program execution.<br>See the following table for value **op** values. |


**op**


| EQ | = | equal to |
| NE | #, !=, &lt;&gt; | not equal to |
| AE | ~ | like |
| LT | <br>*note &lt; cannot be used as it is interpreted as 'input from'* | less than |
| LE | &lt;= | less than or equal |
| GT | *note &gt; cannot be used as it is interpreted as 'redirect to'*<br> | greater than |
| GE | &gt;= | greater than or equal |


**For example:**

```
0001     PROGRAM break_point_test
0002     x = 0
0003     DEBUG; * Set a break point: b x = 5
0004     LOOP UNTIL x = 10
0005         x++
0006         CRT x
0007     REPEAT

jsh home ~ -->break_point_test
jBASE debugger->b x = 5
b0: x = 5
jBASE debugger->g
1
2
3
4
jBASE debugger->/x
  x                         : 5
jBASE debugger->d b
b 0: x = 5 - delete (Y/N) Y
b 0: x = 5 - deleted
jBASE debugger->g
5
6
7
8
9
10
jsh home ~ -->
```




| **c**<br> | Continue execution of the program.<br> |
| **d {-tbed} {\*nn}**<br> | Delete breakpoint and/or trace table entries and will normally prompt for confirmation. The **t**and **b**switches refer to trace and breakpoints respectively. The **\***switch deletes all of the specified entries without prompting. The *nn* switch deletes the entry *nn* in the given trace or breakpoint table, also without prompting. The **d**and **e**switches respectively disable or enable the given entry without removing it from the table.<br> |
| **e name**<br> | Edit the file specified by name. This file is then the file used by other debug commands such as **&lt;Ctrl&gt;+D**.<br>*See also the **l** command.* |
| **end**<br> | Synonym for "quit".<br> |
| **f {on|off}**<br> | A debug breakpoint is set for a filename change. This break can be set to *on*or *off*. If the program is continued (C command) the debugger will be entered the next time the source file changes.<br> |
| **h {-rs{n}} {nn|on|off }**<br> | Displays a history of the source lines executed, and current status of the debugger commands used. The *on*and *off*switches toggle the recording of lines executed, and when on, the *nn*value gives the number of executed lines to display (1024 maximum). The **-r** switch displays in reverse order, and **-s{*n*}** shows *n*source lines.<br> |
| **j {-g}**<br> | The **j**command displays a complete history of both GOSUB and external subroutine calls. When issued without options the command will only display information about the current program or subroutine. The **-g** (global) option will show a breakdown of the entire application.<br> |
| **l {-acf{nn}} text**<br> | Locate the string text in the current file. The switches used are:<br>**a** to look for every occurrence; *c* to make the search case insensitive<br>*nn* to limit the search to the next *nn* lines<br>**f** to start the search from the start of the file.<br>The command ***l/*** will execute the previous locate.<br>*See also the **e**command.* |
| **m**<br> | Displays the current memory status. Shows space allocated by the function malloc().<br> |
| **n {nn}**<br> | Displays the next *nn*lines of source from the current file, which is automatically loaded by the debugger if the **p**command has been used or it resides in the current working directory.<br> |
| **off**<br> | Enter **o**or **off**to log off. If you enter **off**(or **OFF**), the effect is immediate. If you enter **o**(or **O**), you will be prompted for confirmation. The same restrictions apply as for the OFF command; if there are non-jBASE programs active, OFF will only terminate jBASE programs until it encounters the first non-jBASE program (usually the login shell).<br> |
| **p {pathlist}**<br> | Defines the list of directories and path names (delimited by :) that the debugger will then search to find source codes. p without a path list displays the current Path.<br> |
| **q {nn}**<br> | Quit the program. *nn*is the termination status returned to any calling program.<br> |
| **r device**<br> | The debugger will take all input from, and send all output to, the specified device. Note that if the device is another terminal (or Xterm shell), that you will need to prevent the target shell from interfering with the input stream by issuing the sleep command to it. A large value should be used, or the sleep should be issued repeatedly in a loop.<br> |
| **s {-td{m}} {nn}**<br> | Continue execution of jBC code in single line steps before returning to debug. The value *nn*changes the number of lines executed before returning to debug.<br>***t*** is used to display the trace table after every line executed, rather than wait for entry to debug.<br>**d**displays each line of code before executing each line of code and the optional *m* is used to set the delay in seconds (default is 5 deci-seconds).<br> |
| **S {-td{m}} {nn}**<br> | Same as **s**except this will 'step over' gosub/subroutine calls, the code within the gosub/subroutine will not be displayed.<br> |
| **t**<br> | Display the current trace table.<br> |
| **t {-fg} expr**<br> | Add the value specified by *expr*to the trace table. When debug is entered, all the values in the table are displayed.<br>**f** is used to fully evaluate *expr.*<br>**g** extends the display of *expr*to all levels.<br> |
| **v {-gmsrv} {expr}**<br> | Evaluate *expr*(variable) and display the result. With no switches this is the equivalent of /{*expr*}<br>The effects of the switches are:<br>***g*** to extend the display of *expr*to all data areas.<br>***m*** to allow variable modification within *expr*. When a variable is modified with the m option binary characters may be entered using the octal sequence \*nnn*. The sequence \010 would therefore be replaced by CHAR(8) in the modified variable. The sequence \\ evaluates to the single character \ and a sequence such as \x evaluates to the single character x (i.e. the \ will be lost).  To set a variable to null assign it the value: \0<br>***s{limit}***to set a display limit (useful of the variable contains a large string).<br>***r***to just display the raw value (no screen formatting or re-displaying the variable).<br>***v***to show the jBASE VAR memory address and type.<br> |




**For Example:**

```
jBASE debugger->v -m COLOR
  COLOR                                : GREEN = \0
jBASE debugger->V COLOR
  COLOR                                :
jBASE debugger->
```

To set a variable to character zero, i.e. CHAR(0), assign it the value: \00


| **w nn**<br> | Display a window of source code. The default is 9 lines with 4 before and after the current one. The value *nn*is used to change this parameter.<br> |




### Debugger Redirection and Pipes

The debugger provides the ability to redirect the results of its internal command set to a file or through a pipe to a command. This is a very powerful feature of the debugger.

The following commands allow this feature:


| **v**<br> | Display Variable(s)<br> |
| **h**<br> | Display History Trace<br> |
| **b**<br> | Display Breakpoints<br> |
| **t**<br> | Display Trace Table<br> |




**For Example:**


| **v | pg**<br> | Pipe through the **pg** filter<br> |
| **v X&lt;3&gt; | hd**<br> | Show field 3 in hex mode<br> |
| **t *var* &gt;&gt; *file***<br> | Set trace for *var*(redirect to ***file***)<br> |
| **s -t 999**<br> | Assuming trace above, each step will display the value of *var* and append the output to file ***file***<br> |
| **t &gt; *file***<br> | redirect trace points to ***file***<br> |
| **v *var* &gt; *file***<br> | Display *var* contents to a ***file***<br> |


### 


### Modifying Trace and Breakpoint Tables

```
d {-bdet} {nn|*}
```




| **-b**<br> | refers the command to the breakpoint table only<br> |
| **-d**<br> | disable or un-set the table entry referred to<br> |
| **-e**<br> | re-enable the table entry referred to<br> |
| **-t**<br> | refers the command to the trace-variable table only<br> |
| **nn**<br> | the trace or breakpoint entry number to delete, enable or disable<br> |
| **\***<br> | refers to all the trace or breakpoint entries<br> |


This command is used to delete entries in the variable trace table and the breakpoint table. Unless the \* switch is used, table entries can only be deleted one at a time. Used on its own, this command lists each variable in the trace table and each entry in the breakpoint table in turn and prompts the user for deletion.

**Examples:**


| **d -t**<br> | The command deletes all the entries in the variable trace table. This is done immediately without asking for confirmation.<br> |
| **d -b**<br> | The command deletes all the entries in the breakpoint table. This is done immediately without asking for confirmation.<br> |
| **d -bd**<br> | The d switch is used to disable the entries referred to. In this case, all of the breakpoints are disabled. As a result, the execution of the code will continue as if there were no breakpoints set. The complementary e switch can be used to re-enable the entries.<br> |
| **d \***<br> | This deletes all trace and breakpoint table entries without asking for confirmation. Care should be taken with this, as the system generated t0 entry is also deleted.<br> |
| **d -t 4**<br> | This command deletes the fourth entry, **t4**, in the variable trace table. No confirmation is asked for, and the later entries do not shuffle up the table, i.e. entry **t5**will remain as **t5**.<br> |
| **d -b 2**<br> | This deletes the second entry in the breakpoint table. No confirmation is asked for.<br> |
| **d -b \***<br> | This will delete all the breakpoint table entries without asking for confirmation.<br> |




### Execution History

```
h {-rs{n}}{nn|on|off}
```




| **-r**<br> | display lines in reverse order<br> |
| **-s**<br> | display *n*lines of source (default is 1)<br> |
| **nn**<br> | limit the history buffer to *nn*lines of source<br> |
| **on/off**<br> | toggle the saving of source lines executed<br> |


This command keeps track of the source command lines executed during a debug session. The last 1024 lines are held in a circular buffer, and when full, the most recent command line displaces the oldest. It can be toggled on or off, and it is normally switched off by default. The command and switches have no effect unless activated by switching on. Commands executed from subroutines and CHAINed programs will also be displayed.

**Examples:**


| **h on**<br> | This will switch on the command line audit, and every line of code subsequently executed during the debug session will be logged for reference, until the command is switched off or the debug session ends. The following commands assume the command line history is switched on.<br> |
| **h 20**<br> | This sets the number of lines of code to display at 20 lines. The default, and maximum value is 1024.<br> |
| **h**<br> | Used in its simplest form, the command displays all the entries in the buffer to the maximum number set.<br> |
| **h -s3**<br> | This displays the last three lines of code executed.<br> |
| **h -rs10**<br> | The last 10 lines of code executed are displayed in reverse order, i.e. the command last executed is shown first.<br> |
| **h off**<br> | This switches off the history trace.<br> |




### Locating Strings

```
l{-acf}{nn}text
```




| **-a**<br> | show all occurrences (defaults to the first occurrence)<br> |
| **-c**<br> | ignore the case of any text<br> |
| **-f**<br> | start the search from the first line of the source<br> |
| **-nn**<br> | limit the search to the next *nn*lines of source<br> |
| **text**<br> | text to locate<br> |


This command locates text in the source file currently being executed and displays the line or lines of code containing it. The file to be searched may be changed by using other debug commands such as *e*.

**Examples:**


| **l Heading**<br> | Used in its simplest form, the command will search the source from the current line position, to the end of the file, for the first occurrence of the text "Heading". If an exact match is found, then the line is displayed.<br> |
| **l -c Heading**<br> | The -c switch is used to ignore the case of the text. In this case, the first line found with the "Heading" text in any variety of upper- and lower-case letters will be displayed.<br> |
| **l -a NAME**<br> | The -a switch is used to locate and display ALL the source lines containing the text "NAME" in upper-case letters only.<br> |
| **l -ac name**<br> | This command will display all lines of source code that contain the text name, with the characters being in any combination of upper- or lower-case letters.<br> |
| **l -a22 NAME**<br> | The character's NAME will be searched for, and if located in the next 22 lines starting from the current one, each line where it is found will be displayed.<br> |
| **l -f INVOICE.b NAME**<br> | The -f switch is used to search from the beginning and display the first line found containing the character's NAME from the file INVOICE.b held in the /usr/tutor/BP directory.<br> |
| **l -acf ./PAYMENTS.b money**<br> | <br>The most complex form of the command as shown will search the PAYMENTS.b source, held in the current directory, and display every line from it that has the text money in any variation of upper- or lower-case letters.<br><br> |




### Execution - Single Stepping

```
s{-tcgd{n}}{nn}
```




| **-t**<br> | display trace table after each source line executed<br> |
| **-c**<br> | only count the lines of source in the same CALL level<br> |
| **-g**<br> | only count the lines of source in the same GOSUB level<br> |
| **-d{n}**<br> | enter a delay in increments of 100 milliseconds between executing lines of source. This is incremented by the *n*value entered.<br> |
| **nn**<br> | execute the next *nn*lines of source before re-entering debug<br> |


This command is used to execute the program in steps and to re-enter debug after the execution of a given number of lines of code. Traced variables are displayed after debug is re-entered, and any screen display within the executed code is shown as normal.

**Examples:**


| **s**<br> | The simplest form of the command executes the next line of the code and then re-enters debug.<br> |
| **s -t**<br> | The next line of code is executed and the contents of all entries in the trace table are shown.<br> |
| **s -t4**<br> | The next four lines of code are executed displaying the trace table entries before re-entering debug.<br> |
| **s 20**<br> | This command executes the next 20 lines of code before re-entering debug.<br> |
| **s -td5 200**<br> | The command executes the next 200 lines of code.<br>***d*** sets a delay in increments of 100 milliseconds between each line executed. The **5** denotes that a 500 millisecond, or half second delay is set before executing the next line. The default value is 1, or 100 milliseconds.<br>***t*** ensures that the trace commands are shown after the execution of every line. While this process is continuing, debug can be entered by breaking into the program as normal. This is a very useful command to use when a run-time error occurs in a program, and the area of code responsible needs to be found quickly. With the ***-d*** switch set, it is also possible to speed up or slow down the execution of the code if the initial value chosen is too fast or slow. This is done by entering a number from the keyboard in the range *0-9*, which alters the delay to the given number of 100 milliseconds increments.<br> |
| **s -d3t 500**<br> | The command will execute the next 500 lines of code with a delay factor of 300 milliseconds between each line. The speed of execution can be increased or decreased by pressing the numbers *0-9*on the keyboard during execution. In addition to this, the ***-t*** switch means that the contents of the variables trace table will be displayed after **every** line of code executed.<br> |






### Variable Display

```
V{-gvmrs}
```

**v ANS**The simplest form of the command will display the contents of the variable next to the variable name, in this case ANS. This will only produce a display if the source is at level 1, or in the home directory. If the variable has not been assigned, the value (NULL) is displayed. If the value assigned happens to be null, however, then a blank (null) will be displayed next to the variable name.

**v -g ANS**If the variable in question resides in a different data area to the local level (COMMON or NAMED COMMON), then the -g switch should be used to display the variable contents. This extends the display of the variable to data levels and is particularly useful when executing a subroutine in a sub-directory or library.

**v -m ANS**The -m switch displays the variable and contents, but in addition allows the user to modify the contents. An equal sign is shown after the variable contents, and any characters or numbers entered followed by a carriage return are taken to be the new value of the variable. Entering a carriage return leaves the variable contents unchanged. The character sequence \nnn is replaced by the binary character defined by the octal number nnn. Therefore the sequence \376 would be
replaced by a field mark.

**v -gv ANS**This command displays the value held in variable ANS no matter what the current level of the source. In addition, the -v switch shows the type of variable (string or numeric), its memory location, and size.

**v -r NAME**This command displays the contents of the variable NAME at the start of the next line. The -r switch provides a raw character view of the variable name and value.

**v -s NAME**The -s switch shows a short view of the variable being the first 128 bytes.
The \* and ? characters can also be used within the variable name as wild card characters. The ? denoting a single occurrence of any character, and the \* denoting any number of occurrences of any character.

**Examples:**


| v A\*<br> | displays all variables beginning with the letter A<br> |
| v A???<br> | displays all four letter variables beginning with the letter A<br> |
| v \*-INV<br> | displays all variables ending with the characters -INV<br> |
| v \*ENP\*<br> | displays all variables with the characters ENP within their name<br> |
| v LIS(2,\*)<br> | displays every element in the second row of the dimensioned array LIS<br> |


### 


### Internal Debugger Variables

The jBASE debugger supports a set of internal variables.




| Variable<br> | Description<br> |
| --- | --- |
| $c<br> | CALL level<br> |
| $f<br> | current source file name<br> |
| $g<br> | GOSUB level<br> |
| $m<br> | memory usage (not available on all platforms)<br> |
| $n<br> | current source line number<br> |
| $r<br> | reason the debugger was invoked<br> |
| $s{n}<br> | display the current source line (in a window on n lines)<br> |
| $u<br> | display the variable memory usage<br> |


These can be treated as normal program variables. So, the command:

```
v $f
test1.bjBASE debugger->
```

shows the program source name is test1.b. The absence of a new line is intentional. The elements \n and \r can be used to build up more complex expressions such as:

```
jBASE debugger->/"Line "$n" in program "$f\n
```

Text literals are enclosed in double or single quotes.

The internal variables can also be used as part of trace table variables:

```
jBASE debugger->t "I am currently in line number " $n " from source file " $f \n
t 3: "I am currently in line number " $n " from source file " $f \n
jBASE debugger->s
0003 K = J : "x"
I am currently in line number 3 from source file test1.b
jBASE debugger->
```

### 


### Breaking in different code files

In some situations, it is beneficial to single step through code but not through the entire operation of a given program. There are two easier ways to work through the process of getting to the critical debug point.

```
f {on|off}
```

As mention previously this will cause a break whenever the source code changes (be it an INCLUDE, a CALL, a RETURN).

### Breaking in a specific SUBROUTINE or PROGRAM

A possible better method than the **f** option - if you know your application - is to set a break-point using the **$f** variable.

```
b $f = {filename}
```

This will cause a break when the above condition is true. The caveat is that you need to know the source (which may not be the same as the program/subroutine). Use [jshow](./../../tools/jshow) if you are unsure:

```
!jshow -c {subroutine/program}
```

Note that once you have successfully caused a break on the **$f** you may want to disable that break-condition to stop it breaking on every line in that source. You can either delete or disable using the ***d*** command described earlier in this document.

### 


### Invoking the debugger upon execution of a program

jBASE supports two run-time options to cause a break at the first executable line in a program:

```
{program} -J{D|d} {additional options, arguments....}
```

The lower-case **d**will cause this action on the initial *program* preceding the **-****Jd**.

The upper-case **D**will behave like **-Jd** but will include any additional EXECUTEs that occur. This includes if a program is run from a proc which is executed from a program.



### Remote Debugging (non-Windows platforms)

```
r {device}
```

It can be difficult/confusing to debug a program that has a lot of terminal I/O. In this situation debugging to another *tty*device is an easier route:

1. First start or switch to a new session on the jBASE server and get to a shell prompt.
2. Enter "tty" to get the device name of your terminal.
3. Enter "sleep 999999"
4. Switch back to the jBC program to be debugged.
5. In the debugger -&gt; enter "r *tty\_device*" (where *tty\_device* is the result from step 2).
6. Switch back to the other session to continue debugging.


*Note: the process running the jBC program will need to have permissions to write to the tty device. You may need to chmod +w the tty on tty's session.*

### 

