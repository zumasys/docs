# jCL Commands 

**Created At:** 5/28/2018 9:27:45 AM  
**Updated At:** 10/25/2018 6:39:49 PM  
**Original Doc:** [jcl-commands](https://docs.jbase.com/45792-jcl/jcl-commands)  

**Tags:**
<badge text='debugger' vertical='middle' />
<badge text='proc' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Overview

This section is a brief summary of the jCL  commands, organized by function.



## Input Buffer Commands 


| Command<br> | Description<br> |
| --- | --- |
| [B](318616-jcl-b)<br> | Moves the buffer pointer back to the previous parameter.<br> |
| [F](318626-jcl-f)<br> | Moves the buffer pointer forward to the next parameter.<br> |
| [IBH](318689-jcl-ibh)<br> | Inserts a text string containing embedded blanks into the active input buffer.<br> |
| [IH](318945-jcl-ih)<br> | Inserts a text string, creates a new null parameter, or nulls an existing parameter in the active input buffer.<br> |
| [RI](318736-jcl-ri)<br> | Clears all or part of the primary input buffer, and can be used to clear the secondary input buffer.<br> |
| [S](318874-jcl-s)<br> | Moves the input buffer pointer to a specified parameter or column.<br> |




## Output Buffer Commands 


| Command<br> | Description<br> |
| --- | --- |
| [BO](318617-jcl-bo)<br> | Moves the active output buffer pointer back one parameter.<br> |
| [H](318683-jcl-h)<br> | Inserts a literal into the active output buffer.<br> |
| [RO](318737-jcl-ro)<br> | Clears both output buffers and selects the primary as active.<br> |
| [STOFF](318875-jcl-stoff)<br> | Selects the primary as the active output buffer.<br> |
| [STON](318876-jcl-ston)<br> | Selects the secondary (stack) as the active output buffer.<br> |




## Data Movement Commands 


| Command<br> | Description<br> |
| --- | --- |
| [A](318615-jcl-a)<br> | Copies a parameter from the active input buffer to the active output buffer.<br> |
| [MS](318729-jcl-ms)<br> | Move the secondary input buffer contents to the primary input buffer.<br> |
| [MV](318730-jcl-mv)<br> | Copies data between primary input buffer, active output buffer, file buffers and select registers.<br> |
| [MVA](318731-jcl-mva)<br> | Copies the specified source into the destination buffer and stores it as a multivalue.<br> |
| [MVD](318732-jcl-mvd)<br> | deletes data from a multivalued parameter in the destination buffer.<br> |




## Input/output Buffer Operations 


| Command<br> | Description<br> |
| --- | --- |
| [IBN](318691-jcl-ibn)<br> | Accepts input from the terminal as a single parameter with all blanks intact and places it in the secondary input buffer.<br> |
| [IBP](318696-jcl-ibp)<br> | Accepts input from the terminal as a single parameter with all blanks intact and places it in the specified buffer or the active input buffer.<br> |
| [IN](321165-jcl-in)<br> | Accepts input from the terminal and places it in the secondary input buffer.<br> |
| [IP](321166-jcl-ip)<br> | Accepts input from the terminal and places it in the specified buffer or the active input buffer.<br> |
| [IT](318726-jcl-it)<br> | Transfers a tape record to the primary input buffer.<br> |




## Jump and Branch Operations 


| Operator<br> | Description<br> |
| --- | --- |
| [( )](318584-jcl-command)<br> | Terminates the current jCL  program and begins execution of (chains to) another jCL program.<br> |
| [\[ \]](318585-jcl-command)<br> | Calls an external jCL  program routine.<br> |
| [G, GO , GOTO](318682-jcl-g-go-goto)<br> | Transfers control to the jCL  program statement with the specified label.<br> |
| [GO  B](318679-jcl-go-b)<br> | Transfers control backward to the previous M (mark) command and continue execution from that point.<br> |
| [GO  F](318680-jcl-go-f)<br> | Transfers control forward to the next M (mark) command and continue execution from that point.<br> |
| [GOSUB](318681-jcl-gosub)<br> | Transfers control to the local subroutine with the specified label.<br> |
| [M](318728-jcl-m)<br> | Marks a location to which a GO  F or a GO B command transfers control.<br> |
| [RSUB](318725-jcl-rsub)<br> | terminates execution of the local subroutine and returns control to the statement following the GOSUB  that called the subroutine.<br> |
| [RTN](318873-jcl-rtn)<br> | Returns control from an external jCL  program subroutine to the jCL program that called the subroutine.<br> |


## 


## Conditional Operations


| Operator<br> | Description<br> |
| --- | --- |
| [IF](318698-jcl-if)<br> | Allows conditional execution of jCL  program commands.<br> |
| [IF E](318697-jcl-if-e)<br> | Tests for presence of an error condition after processing a shell command.<br> |
| [IFN](318702-jcl-ifn)<br> | Performs numeric comparisons and allows conditional execution of jCL program commands.<br> |




## File Operations


| Operator<br> | Description<br> |
| --- | --- |
| [F-CLEAR, F-C](318628-jcl-f-clear)<br> | Clears the specified file buffer.<br> |
| [F-DELETE, F-D](318629-jcl-f-delete)<br> | Deletes an record from a file opened by an F-OPEN  command.<br> |
| [F-FREE, F-F](318630-jcl-f-free)<br> | Releases an record lock set by the F-UREAD command.<br> |
| [F-KLOSE , F-K](318663-jcl-f-klose)<br> | Closes the specified file buffer.<br> |
| [F-OPEN , F-O](318664-jcl-f-open)<br> | Clears and opens a file buffer to allow reads and writes.<br> |
| [F-READ , F-R](318670-jcl-f-read)<br> | Reads a record from a file into a file buffer.<br> |
| [F-UREAD, F-UR](318671-jcl-f-uread)<br> | Reads a record from a file into a file buffer and locks the record.<br> |
| [F-WRITE , F-W](318672-jcl-f-write)<br> | Writes the contents of the specified file buffer to a file.<br> |
| [FB](318673-jcl-fb)<br> | Reads an record into a special "fast buffer" without first opening the file.<br> |




## Arithmetic Operators


| Operator<br> | Description<br> |
| --- | --- |
| [+](318586-jcl-command)<br> | Adds an integer to the current parameter in the active input buffer.<br> |
| [-](318587-jcl-command)<br> | Subtracts an integer from the current parameter in the active input buffer.<br> |
| [F;](318627-jcl-f)<br> | Performs arithmetic functions on constants and buffer parameters.<br> |




## Processing  


| Command | Descritption |
| --- | --- |
| [P](318735-jcl-p)<br> | Executes the shell command in the primary output buffer.<br> |
| PU<br> | Executes the UNIX command in the primary output buffer, using the UNIX shell.<br> |




## Terminal and Printer Output 


| Command | Description |
| --- | --- |
| [L](318727-jcl-l)<br> | Formats output to the printer.<br> |
| [O](318733-jcl-o)<br> | Outputs a text string to the terminal.<br> |
| [T](318877-jcl-t)<br> | Produces complex, formatted terminal output and display buffer values.<br> |
| D | Output from current input buffer |




## Debugging  


| Command | Description |
| --- | --- |
| [C or \*](321276-jcl-c)<br> | Includes a comment in a jCL  program.<br> |
| [D](318618-jcl-d)<br> | Displays all or part of the active input buffer.<br> |
| [DEBUG](318625-jcl-debug)<br> | Turns debug on or off.<br> |
| [TR](321277-jcl-tr)<br> | Invokes a trace for a jCL  program and displays each command on the terminal before it is executed.<br> |
| PP<br> | Displays the command in the output buffer and prompts to continue.<br> |
| PW<br> | Displays the command in the output buffer and prompts to continue.<br> |




## Exiting 


| [( )](318584-jcl-command)<br> | Terminates the current jCL  program and begins execution of another jCL program.<br> |
| [X](318944-jcl-x)<br> | Halts execution of a jCL  program and returns control to the shell.<br> |




Back to [jCL](318022-jcl)








