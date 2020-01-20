# JCL

**Created At:** 5/23/2018 2:32:57 PM  
**Updated At:** 10/25/2018 7:33:04 PM  
**Original Doc:** [318022-jcl](https://docs.jbase.com/45792-jcl/318022-jcl)  
**Original ID:** 318022  
**Internal:** No  

# jcl 

**Created At:** 9/11/2018 2:37:28 PM  
**Updated At:** 1/21/2019 2:01:35 PM  
**Original Doc:** [jcl](https://docs.jbase.com/45792-jcl/jcl)  
**Original ID:** 339022  
**Internal:** No  



| [Introduction](./.) | Introduction to the jBASE command language. |
| --- | --- |
| [PQ/PQN Differences](./../pq-and-pqn--differences) | Functionality differences between PQ and PQN procs. |
| [A](./../jcl-a) | Copies a parameter from the active input buffer to the active output buffer. |
| [B](./../jcl-b) | Moves the active input buffer pointer back to the previous parameter. |
| [BO](./../jcl-bo) | Moves the active output buffer pointer back by one parameter. |
| [C](./../jcl-c) | Defines a comment. |
| [D](./../jcl-d) | Displays parameters from the active input buffer. |
| [DE](https://https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/jcl2_JCL.DE.htm) | Displays the current value of LastError. |
| [DEBUG](./../jcl-debug) | Turns the jCL debug function on or off. |
| [F](./../jcl-f) | Moves the active input buffer pointer forward to the next parameter. |
| [F;](./../jcl.f-;) | Provides a range of arithmetic functions. |
| [F-CLEAR](./../jcl-f--clear) | Clears the specified buffer. |
| [F-DELETE](./../jcl-f--delete) | Deletes a record from a file. |
| [F-FREE](./../jcl-f--free) | Releases a record lock. |
| [F-KLOSE](./../jcl-f--klose) | Closes a specified file buffer. |
| [F-OPEN](./../jcl-f--open) | Opens a file for reading and writing. |
| [F-READ](./../jcl-f--read) | Reads a record from an open file into a file buffer. |
| [F-UREAD](./../jcl-f--uread) | Reads and locks a record from an open file into a file buffer. |
| [F-WRITE](./../jcl-f--write) | Writes the contents of a file buffer as a record. |
| [FB](./../jcl-fb) | Reads a record from a file into the special "fast" buffer without having to open the file first. |
| [G/GO/GOTO](./../jcl-g-&-go--&-goto) | Transfers control unconditionally to another location in the program. |
| [GO B](./../jcl-go--b) | Transfers control to the statement following the most recent mark command executed. |
| [GO F](./../jcl-go--f) | Transfers control to the statement containing the next mark command. |
| [GOSUB](./../jcl-gosub) | Transfers control to a specific subroutine. |
| [H](./../jcl-h) | Places a text string in the active output buffer. |
| [IBH](./../jcl-ibh) | Places text in the active input buffer whilst retaining embedded spaces. |
| [IBN](./../jcl-ibn) | Prompts for input and places the entered data in the secondary input buffer. |
| [IBP](./../jcl-ibp) | Prompts for input from the terminal. |
| [IF](./../jcl-if) | Allows conditional execution of jCL commands based on the evaluation of an expression. |
| [IF E](./../jcl-if--e) | Conditionally executes a command depending on the presence or absence of an error message. |
| [IF S](./../jcl-if--s) | Conditionally executes a command depending on the presence or absence of an active select list. |
| [IFN](./../jcl-ifn) | Allows conditional execution of commands depending on the result of numeric comparisons. |
| [IH](./../jcl-ih) | Places a text string in the active input buffer. |
| [IN](./../jcl-in) | Prompts for input and places it in the secondary input buffer. |
| [IP](./../jcl-ip) | Prompts for input and places it into the active input buffer or a nominated buffer. |
| [IT](./../jcl-it) | Reads a tape record into the primary input buffer. |
| [L](./../jcl-l) | Formats printed output. |
| [M](./../jcl-m) | Marks a destination for a GO F or GO B command |
| [MS](./../jcl-ms) | Move the entire content of the secondary input buffer to the primary input buffer. |
| [MV](./../jcl-mv) | Copies data between buffers or between buffers and select registers. |
| [MVA](./../jcl-mva) | Copies a value from the source to the destination buffer and stores it as a multivalue. |
| [MVD](./../jcl-mvd) | Deletes a value from a multivalued parameter in the target buffer. |
| [O](./../jcl-o) | Outputs a text string to the terminal. |
| [P](./../jcl-p) | Submits the shell command created in the primary output buffer for execution. |
| [PQ-RESELECT](./../jcl-pq-reselect) | Executed from a jCL program, resets the pointer of a select register to the beginning of the list of keys. |
| [PQ-SELECT](./../jcl-pq-select) | Executed from a jCL program, loads a list of keys into a select register |
| [RI](./../jcl-ri) | Resets (clears) the primary and secondary input buffers. |
| [RO](./../jcl-ro) | Resets (clears) the active output buffer. |
| [RSUB](./../jcl-rsub) | Terminates execution of a local subroutine. |
| [RTN](./../jcl-rtn) | Terminates execution of an external subroutine. |
| [S](./../jcl-s) | Positions the primary input buffer pointer to a specified parameter or column. |
| [STOFF](./../jcl-stoff) | Selects the primary output buffer as the active output buffer. |
| [STON](./../jcl-ston) | Selects the secondary output buffer as the active output buffer. |
| [T](./../jcl-t) | Produces formatted terminal output. |
| [TR](./../jcl-tr) | Traces jCL program execution and displays each command before it is executed. |
| [U](./../jcl-u) | Executes a user exit from a jCL program. |
| [X](./../jcl-x) | Halts execution of the program and returns control to the shell. |
| [PARAGRAPHS](./../paragraphs) | Paragraph support in jBASE. |


## Overview 

This section shows how to write and execute jCL  (jBASE Command Language) programs. It also discusses how jCL manipulates data in the various buffers and selects registers. More information on JCL Commands can be found here.



## jCL Program structure

A jCL  program is stored as a text record in a file. The first line of a jCL  program is PQ or PQN.



## Note:


> On jBASE 3, a jCL program can be run as a UNIX executable script by replacing the first line with:
> 
> ```
> #!usr/jbc/bin/jpq 
> ```
> 
> or
> 
> ```
> #!usr/jbc/bin/jpqn
> ```
> 
> This functionality has been deprecated on jBASE 4 (and later) due to the fact that the thread model must run this as a new process, thus acquiring a new port number and license token.


Subsequent lines contain jCL  statements that can execute other programs, manipulate data in the buffers, and control the flow of program execution and so on.

jCL  program statements comprise a numeric label (optional), a command and any command arguments.

There are many facilities, which enable  control of program flow and to call (and return) or jump to other jCL  programs. Internal and external subroutines are also possible .



## Labels

Labels appear at the start of a line and are always numeric (1, 330, 1000, etc.). You should always put at least one space between the label and the statement.



## Grouping Commands 

You can place more than one command on a line by separating each command with a subvalue mark character (x"FC" - entered by typing &lt;ctrl \&gt;). The commands will be executed sequentially, left to right.

Some commands cannot be grouped on the same line because they require one or more dedicated lines in the program. These commands are:

( ), [ ], B, BO, F, F;

FB, F-CLEAR, F-FREE, F-KLOSE , F-OPEN , F-READ

F-UREAD, F-WRITE , GOSUB , H, IBH, IH

MVA, MVD, O, P, RI, RO

RSUB, RTN, U, X,

Lines, which are a continuation of a T or L command from a previous line, are also not suitable for grouping.

The M (Mark) command can be followed by other commands on the same line, but it must be the first command on a line. Commands following the M command, on the same line must be separated by a subvalue mark rather than a space (unlike numeric labels).

An example is as:

```
002 10T "Enter file name :",+
003 IBP %1
004 F-O 1 %1
005 T "Cannot open ", %1, "..."\ GO  10
006 T "File ", %1, " opened OK"
```

In this example, if the file cannot be opened by the F-O command, the line immediately following the command will be executed (see the F-O command for details). If the file is opened, the next but one line will be executed. By grouping an error message and a branch on the "error" line (005), you will avoid the necessity of creating a separate subroutine to handle the error condition.

Note that you cannot use grouping like this where a command relies on a particular line structure - the F-O command for example.

You can use a mark with the ctrl \&gt; but it must be the first jCL  command on the line. For example, use:

```
M \ IBP:%1 \ IF # %1 X
```

not:

```
IBP %1 \ M \ IF # %1 X
```

More information on JCL commands can be found here.



## Comment Lines  

Command line which start with a "C" or an "\*" are treated as comments. If a comment spans multiple lines, anything between the "C" or "\*" and a following a subvalue mark (or the end of the line) will be ignored. A label will remain active if the "C" or "\*" is placed after it on the line.



## Readability

To increase readability and make it easier to edit and debug a jCL  program, indent lines by using leading blanks. The incorporation of useful comments, using the C or \* commands, will help with the future maintenance of your programs.



## Long Statements 

To help with program clarity, you can construct long statements by using several H commands. Make sure there is a space at the end the first H command or before the second (and subsequent) commands. For example:

```
001 PQN
002 HGET-LIST listname
003 STON
004 P
005 HSORT filename WITH ...
006 H HEADING "..."
007 P
```

Older systems required you to use a line continuation symbol (two less- than characters "&lt;&lt;" the buffer. Although this functionality is still supported, you do not need to use the line continuation symbol in jBASE.



## Concatenation 

Use an asterisk (\*) to concatenate (join) a series of values. For example:

```
001 PQN
002 MV %2 "string"
003 MV %1 "Text "*%2*" has been concatenated"
004 T %1
```

will display "Text string has been concatenated".



## Processing command results 

When a command is executed the resulting return codes are returned in the secondary input buffer. To work these you need to move then to the primary input buffer

```
001 PQN
002 HCOUNT MD WITH *A1 = "PQ]"
003 PH
004 MS
005 OI found +
006 D2+
007 O procs in the MD.
```



will display "I found *{resulting count}* procs in the MD".

Detecting if a command resulted in an active select.

```
001 PQN
002 HSELECT MD WITH *A1 = "PQ]"
003 PH
004 IF #S GO 99
005 OI found +
006 D2+
007 O procs in the MD.
008 HCLEARSELECT
009 PH
010 X
011 99 OI was expecting to find some procs...oh well
012 X
```



will display "I found *{resulting count}* procs in the MD" or "I was expecting to find some procs...oh well" (if there weren't any).



## Spooler Hold File Numbers 

If a hold file is generated while a jCL  program is executing, the hold file number is returned as an error message number in the secondary input buffer.

Hold file numbers are returned as Entry #n, where "n" is the hold file number, so that you can distinguish them from "real" error message numbers.



## Conditional branching 

There are two methods of branching (...) and [...]. The (....) method is non returning whereas the [...] method will continue on to the next logical statement.

```
001 PQN
002 HCOUNT MD WITH *A1 = "PQ]"
003 PH
004 MS
005 C If we find some PQ{N} items then run the MD_REPORT proc (which is not provided with jBASE)
006 C and start at label "20"
007 IF A2 > 0 (MD MD_REPORT) 20
008 ONothing to see here...
```



will either branch off to MD MD\_REPORT starting at label 20 or display "Nothing to see here...".
