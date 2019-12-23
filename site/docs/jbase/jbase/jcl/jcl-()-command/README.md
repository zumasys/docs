# JCL () Command

**Created At:** 5/28/2018 9:52:30 AM  
**Updated At:** 6/11/2018 4:28:32 AM  
**Original Doc:** [318584-jcl-command](https://docs.jbase.com/45792-jcl/318584-jcl-command)  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description 

The () command terminates the current jCL  program and begins execution of (chains to) another jCL program. It takes the general form:

```
({DICT} file-name{, data-section-name} {key}) {label}
```

Where:

##### 


- DICT specifies the dictionary section of file-name, if required.
- file-name is the name of the file that contains the jCL  program to be executed. Can be a literal, or a direct or indirect reference to a buffer or select register.
- data-section-name specifies an alternative data section of the file. Can be a literal, or a direct or indirect reference to a buffer or select register.
- key is the name of the jCL  program to be executed. Can be a literal, or a direct or indirect reference to a buffer or select register. If key is not specified, the current parameter in the active input buffer will be used.
- label specifies a label in the target jCL  program from which to start execution.


The ( ) command is often used in the MD to "point" to another jCL  program, which contains the main body of code. See example 1. The ( ) command can also be used to divide large jCL  programs into smaller units, minimizing the search time for labels. Using the ( ) command (or the [ ] command), will ensure that the contents of all buffers are available to the target program. If this is not a consideration, you can execute another jCL  program with the P command (see later).



## Note: 


> The ( ) command terminates the current jCL  program and begins execution of another jCL program, of the same type. The input buffers, output buffers, and file buffers are all passed to the second program, and all open files stay open.




EXAMPLE 1

```
MENU
001 PQN
002 (JCL MENU2)
```

Immediately executes another jCL  program called MENU2 in the file called JCL.



EXAMPLE 2

```
MENU
001 PQN
002 (JCLFILE)
```

When the word MENU is entered from the shell, it will be placed in parameter 1 of the primary input buffer - %1. The program will then unconditionally pass control to the MENU program in file JCLFILE.



EXAMPLE 3

```
DOIT
001 PQ
002 IP?
003 (JCL)
```

This example will prompt for the name of another jCL  program and continue execution with the named jCL program in the file called JCL.



EXAMPLE 4

```
MENU
001 PQN
002 (JCL MENU2) 300
```

Immediately executes another jCL  program called MENU2 in the file called JCL. Execution of MENU2 will begin at label 300.



Back to [JCL Commands](./../jcl-commands).
