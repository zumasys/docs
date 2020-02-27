# jCL Commands

**Created At:** 5/28/2018 9:27:45 AM  
**Updated At:** 10/25/2018 6:39:49 PM  
**Original Doc:** [jcl-commands](https://docs.jbase.com/45792-jcl/jcl-commands)  
**Original ID:** 318556  
**Internal:** No  

**Tags:**
<badge text='debugger' vertical='middle' />
<badge text='proc' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Overview

This section is a brief summary of the jCL  commands, organized by function.

## Input Buffer Commands


| Command | Description |
| --- | --- |
| [B](./../jcl-b) | Moves the buffer pointer back to the previous parameter. |
| [F](./../jcl-f) | Moves the buffer pointer forward to the next parameter. |
| [IBH](./../jcl-ibh) | Inserts a text string containing embedded blanks into the active input buffer. |
| [IH](./../jcl-ih) | Inserts a text string, creates a new null parameter, or nulls an existing parameter in the active input buffer. |
| [RI](./../jcl-ri) | Clears all or part of the primary input buffer, and can be used to clear the secondary input buffer. |
| [S](./../jcl-s) | Moves the input buffer pointer to a specified parameter or column. |

## Output Buffer Commands

| Command | Description |
| --- | --- |
| [BO](./../jcl-bo) | Moves the active output buffer pointer back one parameter. |
| [H](./../jcl-h) | Inserts a literal into the active output buffer. |
| [RO](./../jcl-ro) | Clears both output buffers and selects the primary as active. |
| [STOFF](./../jcl-stoff) | Selects the primary as the active output buffer. |
| [STON](./../jcl-ston) | Selects the secondary (stack) as the active output buffer. |

## Data Movement Commands

| Command | Description |
| --- | --- |
| [A](./../jcl-a) | Copies a parameter from the active input buffer to the active output buffer. |
| [MS](./../jcl-ms) | Move the secondary input buffer contents to the primary input buffer. |
| [MV](./../jcl-mv) | Copies data between primary input buffer, active output buffer, file buffers and select registers. |
| [MVA](./../jcl-mva) | Copies the specified source into the destination buffer and stores it as a multivalue. |
| [MVD](./../jcl-mvd) | deletes data from a multivalued parameter in the destination buffer. |

## Input/output Buffer Operations 

| Command | Description |
| --- | --- |
| [IBN](./../jcl-ibn) | Accepts input from the terminal as a single parameter with all blanks intact and places it in the secondary input buffer. |
| [IBP](./../jcl-ibp) | Accepts input from the terminal as a single parameter with all blanks intact and places it in the specified buffer or the active input buffer. |
| [IN](./../jcl-in) | Accepts input from the terminal and places it in the secondary input buffer. |
| [IP](./../jcl-ip) | Accepts input from the terminal and places it in the specified buffer or the active input buffer. |
| [IT](./../jcl-it) | Transfers a tape record to the primary input buffer. |

## Jump and Branch Operations

| Operator | Description |
| --- | --- |
| [( )](./../jcl-%28%29-command) | Terminates the current jCL  program and begins execution of (chains to) another jCL program. |
| [\[ \]](./../jcl-[]-command) | Calls an external jCL  program routine. |
| [G, GO , GOTO](./../jcl-g-&-go--&-goto) | Transfers control to the jCL  program statement with the specified label. |
| [GO  B](./../jcl-go--b) | Transfers control backward to the previous M (mark) command and continue execution from that point. |
| [GO  F](./../jcl-go--f) | Transfers control forward to the next M (mark) command and continue execution from that point. |
| [GOSUB](./../jcl-gosub) | Transfers control to the local subroutine with the specified label. |
| [M](./../jcl-m) | Marks a location to which a GO  F or a GO B command transfers control. |
| [RSUB](./../jcl-rsub) | terminates execution of the local subroutine and returns control to the statement following the GOSUB  that called the subroutine. |
| [RTN](./../jcl-rtn) | Returns control from an external jCL  program subroutine to the jCL program that called the subroutine. |

## Conditional Operations

| Operator | Description |
| --- | --- |
| [IF](./../jcl-if) | Allows conditional execution of jCL  program commands. |
| [IF E](./../jcl-if--e) | Tests for presence of an error condition after processing a shell command. |
| [IFN](./../jcl-ifn) | Performs numeric comparisons and allows conditional execution of jCL program commands. |

## File Operations

| Operator | Description |
| --- | --- |
| [F-CLEAR, F-C](./../jcl-f--clear) | Clears the specified file buffer. |
| [F-DELETE, F-D](./../jcl-f--delete) | Deletes an record from a file opened by an F-OPEN  command. |
| [F-FREE, F-F](./../jcl-f--free) | Releases an record lock set by the F-UREAD command. |
| [F-KLOSE , F-K](./../jcl-f--klose) | Closes the specified file buffer. |
| [F-OPEN , F-O](./../jcl-f--open) | Clears and opens a file buffer to allow reads and writes. |
| [F-READ , F-R](./../jcl-f--read) | Reads a record from a file into a file buffer. |
| [F-UREAD, F-UR](./../jcl-f--uread) | Reads a record from a file into a file buffer and locks the record. |
| [F-WRITE , F-W](./../jcl-f--write) | Writes the contents of the specified file buffer to a file. |
| [FB](./../jcl-fb) | Reads an record into a special "fast buffer" without first opening the file. |

## Arithmetic Operators

| Operator | Description |
| --- | --- |
| [+](./../jcl-+-command) | Adds an integer to the current parameter in the active input buffer. |
| [-](./../jcl---command) | Subtracts an integer from the current parameter in the active input buffer. |
| [F;](./../jcl.f-;) | Performs arithmetic functions on constants and buffer parameters. |

## Processing  

| Command | Descritption |
| --- | --- |
| [P](./../jcl-p) | Executes the shell command in the primary output buffer. |
| PU | Executes the UNIX command in the primary output buffer, using the UNIX shell. |

## Terminal and Printer Output

| Command | Description |
| --- | --- |
| [L](./../jcl-l) | Formats output to the printer. |
| [O](./../jcl-o) | Outputs a text string to the terminal. |
| [T](./../jcl-t) | Produces complex, formatted terminal output and display buffer values. |
| D | Output from current input buffer |

## Debugging  

| Command | Description |
| --- | --- |
| [C or \*](./../jcl-c) | Includes a comment in a jCL  program. |
| [D](./../jcl-d) | Displays all or part of the active input buffer. |
| [DEBUG](./../jcl-debug) | Turns debug on or off. |
| [TR](./../jcl-tr) | Invokes a trace for a jCL  program and displays each command on the terminal before it is executed. |
| PP | Displays the command in the output buffer and prompts to continue. |
| PW | Displays the command in the output buffer and prompts to continue. |

## Exiting

| Command | Description |
| --- | --- |
| [( )](./../jcl-%28%29-command) | Terminates the current jCL  program and begins execution of another jCL program. |
| [X](./../jcl-x) | Halts execution of a jCL  program and returns control to the shell. |

Back to [jCL.](./../README.md)
