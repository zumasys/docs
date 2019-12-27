# Keyboard Independence

**Created At:** 11/3/2017 3:21:04 PM  
**Updated At:** 1/12/2018 4:26:28 PM  
**Original Doc:** [keyboard-independence](https://docs.jbase.com/41717-environment-variables/keyboard-independence)  
**Original ID:** 284159  
**Internal:** No  


Keyboard input can be handled independently of the current terminal type within end user coded routines by using the jBASE Command Key subroutines supplied in the jBASE libutils library.

The jBASE supplied includes, JBC.h and jCmdKeys.h, and the subroutines JBASECommandInit and JBASECommandNext (jBASE 4.1 and later) or CommandInit and  CommandNext (jBASE 3.x) are integral to using this feature. The JBASECommandInit subroutine initializes the keyboard mappings while the JBASEComandNext subroutine would be used in place of the [INPUT](https://https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/jbc2_INPUT.htm) statement to return the actual command (i.e. Page Up, Insert Line, Cursor Left, etc). It is then up to the application to provide the appropriate functionality for each command.

Many of the commands returned by the JBASECommandNext subroutine are taken from default command keys used with the JED editor. The .jedrc file can be configured to alter the default definitions. Be aware that modifying **.jedrc**will also change the corresponding behavior in **JED**.

Required Includes:
    JBC.h
    jCmdKeys.h

On jBASE 3.x the required subroutines are:
    CommandInit
    CommandNext(KeyDescriptionCode, KeyData, Timeout)

On jBASE 4.x (and later) the required subroutines are:
    JBASECommandInit
    JBASECommandNext(KeyDescriptionCode, KeyData, Timeout)

###  

### PROCEDURE

First add the following lines to the initialization of your program:

```
$INCLUDE JBC.h
$INCLUDE jCmdKeys.h
* Initialize keyboard mappings
CALL JBASECommandInit
* CALL CommandInit on jBASE 3.x
```

Then to check the keyboard for input (or window resizing etc.):

```
CALL JBASECommandNext(KeyDescriptionCode,KeyData,Timeout)
* CALL CommandNext(KeyDescriptionCode,KeyData,Timeout)  on jBASE 3.x
```

Where:

**KeyDescriptionCode**This variable is returned by the JBASECommandNext subroutine. The jCmdKeys.h file contains a list of equates for this description e.g. if Page Up was pressed the code returned will be 30 (i.e. cmd\_scroll\_up\_page) and if a Alpha/Numeric key was pressed then the code returned will be 101 (i.e. cmd\_alpha\_numeric). If the timeout occurs before a key is pressed then the code returned will be 102 (i.e. cmd\_timeout). Refer to jCmdKeys.h for a complete list of codes and their descriptions.

**KeyData**
This is the actual code sequence that has been typed as defined in jCmdKeys.h or the ASCII code of the Alpha/Numeric key pressed. Note that all keyboard input is echoed to the screen. For this reason it is advisable to use ECHO OFF before the CALL to the JBASECommandNext routine and ECHO ON after (see EXAMPLE below).

**Timeout**
This is a variable that is passed to the JBASECommandNext subroutine. It must be an integer indicating the number of tenths of seconds to wait until the JBASECommandNext subroutine terminates, so 150 will be a 15 second timeout. To inhibit the timeout feature initialize this variable to zero (ie Timeout = 0).



### EXAMPLES

This code shows how to use the timeout capability:

```
$INCLUDE JBC.h
$INCLUDE jCmdKeys.h
EQU Timeout TO 100 ;* 10 seconds
CALL JBASECommandInit
* Accept keyboard input until ESC is pressed or the Timeout limit has been reached     
LOOP
     ECHO OFF
     CALL JBASECommandNext(RtnNo, KeyData, Timeout)
     ECHO ON
     CRT @(0):@(-4):'KeyDescriptionCode=':RtnNo:' KeyData=':KeyData:
UNTIL RtnNo = cmd_escape OR RtnNo = cmd_timeout DO
REPEAT
CRT 
```

The following program can be used to determine the exact KeyDescriptionCode and KeyData returned for various keyboard commands:

```
$INCLUDE JBC.h
$INCLUDE jCmdKeys.h
EQU Timeout TO 300; * 30 Seconds
CALL JBASECommandInit

Line = ""
LOOP
 ECHO OFF
 CALL JBASECommandNext(RtnNo, KeyData, Timeout)
 ECHO ON
UNTIL RtnNo = cmd_escape DO
 BEGIN CASE
 CASE RtnNo = cmd_alpha_numeric ;* Simple alpha-numeric
 Line := KeyData
 GOSUB CursorRight
 CASE RtnNo = cmd_carriage_return ;* Enter key pressed
 GOSUB ProcessLine
 CASE RtnNo = cmd_clear_end_line ;* Clear to end of line
 CRT @(-4):
 CASE RtnNo = cmd_insert_value ;* Insert a char(253)
 Line := @VM
 GOSUB CursorRight
 CASE RtnNo = cmd_cursor_up ;* Move cursor up a line
 GOSUB CursorUp
 CASE RtnNo = cmd_cursor_down ;* Move cursor down a line
 GOSUB CursorDown
 CASE RtnNo = cmd_cursor_right ;* Move cursor to the right
 GOSUB CursorRight
 CASE RtnNo = cmd_cursor_left ;* Move cursor to the left
 GOSUB CursorLeft
 CASE RtnNo = cmd_error ;* Unknown command string
 GOSUB InputError
 CASE RtnNo = cmd_timeout ;* The input timed out
 GOSUB CheckStatus
 CASE RtnNo = cmd_winsize ;* Size of the X window changed.
 GOSUB RefreshScreen
 CASE 1
 GOSUB InputError
 END CASE
REPEAT
```
