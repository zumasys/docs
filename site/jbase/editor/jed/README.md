# jED

<PageHeader />

**Tags:**
<badge text='jedrc' vertical='middle' />

## Description

**jED** is a robust, terminal independent screen editing tool. It is a full screen, context sensitive, screen editor. It has been specifically designed so that users will find it easy to learn and use and is the preferred editing tool for the jBASE-operating environment.

The features provided in **jED** will be familiar to users of many other editors. It incorporates many powerful facilities for manipulating text and data, and contains all the features that programmers have come to expect of a good editor.

**jED** has full screen access to jBASE file records and UNIX files - a feature not provided by other editors.

The Command keystrokes are fully configurable by each user, as is the keyboard. jED can therefore be customized to mimic many operations of other editors and provide a familiar environment for new users. Keyboard and Command independence make jED the most versatile and powerful editing tool available for all jBASE-editing requirements

## Invoking jED

Call the **jED** editor from the UNIX or Windows command line as :

```
jed Filename Item (Options JED Item )
```

or

```
jed pathname {pathname..}
```

or

```
jed {DICT} filename{,filesection} {record-list} {(options)}}
```

where options may be:

| Option | Description |
| --- | --- |
| Bnn{,mm} | Indent "nn" spaces, with "mm" as multiple for initial indent. |
| L | Skip setting default item lock on record. |
| R | Allow read only |

If simply **jED** is issued as a command, the editor will open at the last file in use. The cursor will be positioned wherever it was when the last edit session was closed. In other words, continue from where the previous edit session left off. If the file referenced by pathname does not exist the Command, jed pathname, will either open an existing file or create a new one . The contents of the file will be displayed in the edit window. If list files are specified, the editor will present the next file successively at the end of an edit session of each one.

When the editor is supplied with the name of a file resident in a database (such as a j-file), it scans the rest of the Command line looking for a list of records keys. If no record keys were specified, the jED editor will prompt for a list. Otherwise the list of record keys will be edited one after the other.

## Note #1

> Because the editor uses the jEDI interface to access the records, it can be used to edit records in any file system that jEDI recognizes.

A typical jED editor session might look like this:

```
*File PROGS, Record cust_rep.b Insert 10:45:17
Command->
001
002
003
-------------------------------- End Of Record --------------------------------
```

The screen is divided into three sections; the editor status line at the top, followed by the Command line and then the data editing area which fills the rest of the screen.

## Command Elements for Database resident Files

- DICT This modifier is only required if you wish to edit records in the DICTionary of a j-file.
- filename This is the name of the "file" containing the records.
- filesection This is the file section name, as used in a j-file.
- record-list It is possible to furnish a list of records to be successively edited. This can be a list of records separated by a space, or "\\*" to indicate all records in the file. Note that the '\\' is the shell escape character to stop the '\*' being treated as a wild card that would otherwise be expanded. Additionally, the record-list can be fed to this command by preceding the **jed** command with a jBASE list generating command such as **SELECT** or **SSELECT**. In this case, the record-list is ignored.

## Command Line Options

Options available when executing the jED Command are as :

| Option | Explanation |
| --- | --- |
| Bnn{,mm} | performs automatic indentation on the record to be edited. This will be of use when creating jBC programs. |
| nn | parameter specifies the number of spaces to indent by for each indentation level (default is 4 spaces). |
| mm | this optional parameter is the number of times the nn indent value should be applied at the start of each line. If mm is 2 and nn is 3, each line will be indented initially by 6 spaces and each subsequent indent level will be 3 further spaces. |
| E | uses the default keyboard command set-up at installation, rather than that which may have been set up exclusively for the port. |
| L | does not lock the file or record being edited. This allows simultaneous edit access from elsewhere. |
| R | allows READ ONLY access to the record or file. |
| S | space characters not trimmed from end of line |
| Tnn | sets tab stops every nn spaces for use within the editor. |

Examples of use may be :

```
jed test.b
```

Opens the test.b file for editing, initially in insert mode with automatic indentation turned on. If the file does not exist, it is created and the text New Record is shown at the top of the screen.

```
jed test.b (B5,2
```

The jBC program test.b is edited with automatic indentation set. The initial indent is set at 10 spaces for all lines, and each additional indentation level is set at 5 spaces.

```
jed invoices.b subs.c
```

The jBC program invoices.b will be edited, followed by the "C" program subs.c.

```
jed BP menu1.b menu1.1.b
```

The jBASE file records menu1.b and menu1.1.b are successively edited. Record locks are taken on the records as they are edited to prevent multiple edits on the same record.

```
jed ORDERS 0012753 0032779 (R
```

The records 0012753 and 0032779 from the file ORDERS will be successively edited in read-only mode.

```
:SSELECT ORDERS WITH CUST.NAME = "UPA"
>JED ORDERS
```

The orders of the customer UPA will be successively edited in sorted order. Record locks will be automatically set during the editing period to prevent simultaneous updates by other users.

```
jed -F BP \*
```

All the records in the jBASE file BP are set up to be edited one after the other. Note the use of the shell escape character (\\) before the \*.

```
jed -F BP STXFER.b \(T10
```

The record STXFER.b in file BP is opened for editing. A tab stop is set at column 10 for use in this session.

## Using The jED Editor

The jED editor is used in two different modes:

1. Command Mode

When the editor is invoked, the record or text file is displayed, and the user is placed in input mode with the cursor at the input position.

To change to command mode simply press the &lt;Esc&gt; key on the keyboard. The cursor now moves to the top portion of the screen and the editor awaits input of a command. Once a valid command has been executed, control passes back to the Edit mode if appropriate.  

2. Edit Mode

Edit mode is used when entering or modify data. This is the default mode for an editor session.

Keyboard control sequences are available to perform a variety of functions such as cursor positioning, scrolling and marking text for a subsequent action.

Some command line operations are also available from keyboard control sequences.

The current mode is displayed at the top of the screen.

## Keyboard Personalization

The jED editor allows a considerable number of functions and commands to be performed whilst in edit mode, mostly by combining the &lt;Ctrl&gt;  key and one other key.

Most keys have a default value (which can be reset using the E option when invoking jED). These can be reconfigured for each command. The keystroke sequence can be chosen to suit the keyboard, the installation environment or personal preference.

The keystroke environment is usually be set up by modifying the UNIX terminfo file parameters. The default editor commands can also be overriden by configuring the [.jedrc](./../customizing-the-jed-editor) entry.

### jED Default Key Commands

The default keystroke sequences available from jED are shown below. If the system administrator has reconfigured these for a particular port, they can be re-assigned by using the E option when starting a jED session. The execution of a command is relative to the current cursor position.

| Key | Function |
| --- | --- |
| &lt;F1&gt; | scrolls the screen up one line. |
| &lt;F2&gt; | scrolls the screen down one line. |
| &lt;F3&gt; | scrolls the screen up half a page. |
| &lt;F4&gt; | scrolls the screen down half a page. |
| &lt;F5&gt; | scrolls the screen up one page. |
| &lt;F6&gt; | scrolls the screen down one page. |
| &lt;F7&gt; | displays the first page of the record or file. |
| &lt;F8&gt; | displays the last page of the record or file. |
| &lt;F9&gt; | pressing &lt;F9&gt; when the cursor is positioned on a line of source code that begins a structured statement (IF, BEGIN CASE etc.), will cause the editor to locate the closing statement for the structure. If the cursor line is an IF statement then the editor will attempt to find the END statement that closes this structure. If there is no matching END statement then the editor will display a message to this effect. |
| &lt;F10&gt; | the &lt;F10&gt; key is complement of the &lt;F9&gt; key. Therefore if the cursor is positioned on an END statement, then the editor will attempt to find the start of the structure that it is currently terminating. If the END has been orphaned (it matches no structure), then the editor will display a message to this effect. |
| &lt;Ctrl A&gt;/&lt;Home&gt; | moves cursor to start of the current line. |
| &lt;Ctrl E&gt;/&lt;End&gt; | moves the cursor to the end of the current line. |
| Left Arrow | moves the cursor one character position to the left. |
| Right arrow | moves the cursor one character position to the right. |
| Up arrow | moves the cursor to the previous line. |
| Down arrow | moves the cursor to the following line. |
| &lt;Tab&gt; | moves the cursor to the start of the next tab position on the line. |
| &lt;Shift Tab&gt; | moves the cursor to the previous tab position on the line. |
| &lt;Esc&gt; | moves the cursor to the COMMAND LINE. |
| &lt;Ctrl W&gt; | deletes from the cursor to the end of the word, including the following whitespace characters. |
| &lt;Ctrl K&gt; | clears text to the end of the line. If the cursor is situated at the end of the text line, then this command will join the following line with the current line. |
| &lt;Back Space&gt; | performs a destructive backspace. |
| &lt;Delete&gt; | deletes the character under the current cursor position. |
| &lt;Ctrl D&gt; | deletes the current line. By default, this key must be pressed twice to delete the line. This is to avoid accidental deletion by users familiar with vi. To override, place "set delete-line = ^D" in the [.jedrc file](https://static.zumasys.com/jbase/r99/knowledgebase/manuals/3.0/30manpages/man/ed2_jedrc.htm). |
| &lt;Ctrl G&gt; | sets the start or end position for marking a block of text. The first &lt;Ctrl G&gt; will mark the start of a block or mark a single line. The second &lt;Ctrl G&gt; with the cursor on a different line will mark a complete block. The block can be unmarked by pressing &lt;Ctrl G&gt; a third time. |
| &lt;Ctrl L&gt; | inserts a blank line below the current line and positions the cursor on it. |
| &lt;Ctrl N&gt; | locates the next occurrence of a earlier located string. |
| &lt;Ctrl O&gt;/&lt;Insert&gt; | toggles between the Overwrite and Insert data entry modes. |
| &lt;Ctrl P&gt; | locates the previous occurrence of a earlier located string. |
| &lt;Ctrl R&gt; | redisplays the screen and discards the most recent updates (since the last carriage return). |
| &lt;Ctrl T&gt; | copies the character at the corresponding cursor position on the line above the current line. |
| &lt;Ctrl V&gt; | performs jBC program indentations on the current screen window. |
| &lt;Ctrl X&gt; | exits the current record without writing away any updates. If the record has been changed within the current editing session then the editor will ask for confirmation to exit the modified record. |
| &lt;Ctrl ]&gt; | inserts the field value delimiter character. |
| &lt;Ctrl \&gt; | inserts the field sub-value delimiter character. |
| &lt;Enter&gt; | opens a new line. Any characters on the current line after the current cursor position are moved to the start of the new line. |

## Command Line Operations  

To enter the command line from the jED edit mode, press the &lt;Esc&gt; key, or one that has been reconfigured to perform the same action.

### Leaving the editor

There are several options available for exiting a file or record being edited. It can be deleted, stored in its latest form, keeping all the changes made in the current editing session, or it can be stored as it existed before the edit session began.

### Abandon Edit and Start a new Session

The E command will abandon the current edit (you will be asked to verify leaving a changed record) and edit the specified record(s). The command is as :

```
E unixfile
```

or

```
E filename record
```

If the form filename record is used, then the filename should be the name of a jBASE file. You can also specify the pathname of a standard UNIX file with the unixfile form. It should be noted that wildcard characters such as asterisks (\*) are not expanded by the E Command, and thus the  the jBASE file name must be specified again, even if the current editing session involves a record from within that file.

### Delete the File or Record

The command is as:

```
FD {options}
```

where **options** can be:

- R - specifies that, after the file has been written to disk, it should be executed. Additional parameters can be added to this option and passed to the program. The editor issues the command filename {parameters} to execute the program. Note that the .b suffix is removed.
- K or T option - specifies that if the editor was working from a list of records, the list should be discarded and that the editor should exit directly to the shell (or to the calling process).
- O -  specifies that the confirmation request normally issued with the FD and EX commands should be suppressed.

The R option is particularly useful to jBC programmers.

This command deletes the file or record and releases any lock set. Before it does so, the user is prompted for confirmation. The edit session then terminates, or continues with the next record if this choice is in effect.

### Exit and Update

The command is as :

```
FI {options} {unixcommand}
```

where:

- **options** are B, K, R and T, as with the delete command.
- **unixcommand** specifies a UNIX command to ,be executed on exiting the editor.

FI writes the updated version of the file or record back to disk and releases any lock set. The edit session then terminates, or continues with the next record, if this choice is in effect.

### Exit and Discard

The command is as:

```
EX {options}
```

where **options** are K, T and O, as with the delete command.

EX leaves the file or record as it was at the start of the session, and releases any lock set. If updates have been made you will be prompted for confirmation before the updates are discarded. The edit session then terminates, or continues with the next record, if this choice is in effect.

### Update Without Exit

The command is as:

```
FS {options} {unixcommand}
```

where:

- **options** are B and R, as with the delete command
- **unixcommand** specifies a UNIX command to be executed on exiting the editor.

This command writes the updated file or record to disk, then returns to the editing session at the point where it left off.

### Display Record in Hexadecimal

The Command is as :

```
HX
```

or

```
HEX
```

This Command acts as a toggle such that each iteration of the Command turns the hexadecimal display on or off depending on its previous state. The HX (or HEX) Command is only used for display, the record is not stored as it appears in hexadecimal.

### Locating Strings

The editor allows the user to search and locate any string held in the body of the text being edited.

There is also a keystroke command sequence (default &lt;Ctrl N&gt;) to allow the user to find the next occurrence of the string used in the previous locate command. The command is as:

```
L{nnn}dstring{doption}
```

where :

- **nnn** is the numeric value of the number of lines to search from the cursor position. If omitted, the search continues to the end of the file or record. If this optional parameter has been specified then all occurrences of the string will be located over the specified number of lines. If only a single occurrence is found then the cursor is placed at this point in the file. If multiple occurrences of the string are found then each one is listed below the editing screen.
- **d** is the delimiter used to enclose the string to be located. It can be any character that does not form part of the string.
- **string** is the string to locate.
- **option** can be:
  - *F* specifies that the search is to begin at the start of the file or record.
  - *C* performs a case insensitive search. Otherwise the search defaults to match the cases as provided in the string.

Examples of use may be as:

```
L/report
```

Searches the record from the current position for the string "report" and halts at the first occurrence found, with the cursor at the start.

```
L9 FORM
```

Search the next 9 lines and locate all occurrences of the string "FORM".

```
L/STARS/F
```

Searches from the first line of the file to find the first occurrence of the string "STARS". This line is placed at the top of the screen.

```
L/acropolis/C
```

Locates the first occurrence of the string "acropolis" with the letters in upper or lower case.

### Replacing Strings

The editor allows the user to replace any occurrence of a string on any line with another from the command line. This is in addition to the overwrite mode.

The command is as:

```
R{U}{nnn}dstring1dstring2{doption}
```

where:

- **U** replaces ALL occurrences of string1 with string2 on the current line only.
- **nnn** is a numeric value for the number of lines, starting from the current one, over which to perform the replace operation. If this optional parameter is specified and more than a single occurrence of string1 is found then all replacements are listed beneath the current editing screen. d is the delimiter character used to separate the string values. It can be any character not in either of the strings.
- **string1** is the string that is to be replaced.
- **string2** is the replacement string. This can be shorter or longer than the original.
- **option** can be one or more of :
  - *F* executes the replace command from the first line of the file or record.
  - *\** replaces ALL occurrences of string1 with string2 on the current line.
  - *nnn* numeric value for the number of times to repeat the replace operation on the current line.

Examples of use may be as:

```
R/ABC/DEF
```

Replaces the first occurrence (reading from the left) of ABC in the current line with DEF.

```
R9/*/!
```

Replace on the next 9 lines, the first occurrence on the line of "\*" with a "!". The changed lines are displayed before moving on.

```
RU9/*/!
```

Replace any occurrence of "\*" with "!" over 9 lines (the current line and the next 8).

```
R999//*/F
```

Place a "\*" character at the start of every line starting from the first. All lines changed are shown before returning to the original line.

```
R/^/AM/*
```

All occurrences of the "^" character on the line are replaced with "AM".

```
R9/*//
```

Removes (replaces with null) the first occurrence of "\*" on the next 9 lines.

```
R/x//10
```

Removes the first 10 "x" characters on the current line.

### Copying, Pasting and Cutting Blocks of Text

The editor allows the user to copy or move blocks of text from one location to another within the current record being edited. It is also possible to copy from another UNIX file or jBASE record. Before a block can be moved or copied, it has to be marked or highlighted. Marked lines have their line numbers replaced by the characters **++++**.

### Marking Text

Text can be marked whilst in edit mode by using the appropriate keystroke command (default &lt;Ctrl G&gt;) to mark the start and end of the block.

To highlight a block, move the cursor to the first line to be highlighted and press &lt;Ctrl G&gt;  (or the reassigned ones). Then move the cursor to the last line to be highlighted and again press the &lt;Ctrl G&gt; The start and end lines can be marked in any order.

To cancel the marked text, simply press &lt;Ctrl G&gt; again, which will remove the markers.

Once the text is marked the cursor should be positioned on the line to which the text is to be copied or moved before invoking the command line or key sequence required.

### Copying Marked Text

Once marked, text can be copied by moving the cursor to the target line, entering command mode, then using the copy commands provided. To copy text to the line before the current one, use the **CB** command.

To copy to the line following the current one, use the **CA** command.

The syntax for both commands is the same:

```
CB{nn}
```

or

```
CA{nn}
```

The optional **nn** parameter is a numeric value that gives the number of copies of the marked text to transfer. This is particularly useful for the creation of a large quantity of repetitive text.

### Moving Highlighted Text

Commands used to move highlighted text are **MB** to move to the line before the current one, and **MA** to move to the line following the current one.

The syntax for both commands is the same:

```
MB
```

or

```
MA
```

The text will be physically deleted from the original position. It is not valid to move text within the highlighted block.

### Merging Text From Another Record

Using the jED editor it is possible to merge data from any file or record into the current one.

The command to is as:

```
MERGE
```

This is achieved by the following command sequence:

1. Position the cursor one line above the desired position of the merged text.
2. Spawn a new editor session using the ! command . For example, "!jed record", or any other valid jed syntax. This will execute another editing session, placing the current one in the background.
3. Mark the block of text to be merged, then from the command line, issue the MERGE command.
4. The newly spawned editing session will be exited and control will be passed back to the original edit session. The merged text will then be copied into the record before the current line.

### Deleting Marked Text

The command **DB** deletes the marked text. The position of the cursor or portion of the record being displayed has no effect on the action.

### jBC Line Indentation

The jED editor has the capability of formatting lines of jBC program code with appropriate indentation and so make it more readable. The commands available and their syntax are as:

```
BI{nn}
```

Formats the entire record as jBC code by adding indentations in appropriate places. The value nn gives the number of space characters per indentation (maximum 20), and defaults to 3 if omitted.

```
BION{nn}
```

Turns on the automatic indentation for jBC source code. Equivalent to using the **B** option with the jED command. The value nn gives the number of space characters per indentation, and defaults to the value used with the **B** option, or the value used in the last **BI** command.

```
BIONA{nn}
```

This command is the same as the **BION** command, except that an alternative form of indentation is used for the CASE statement. It is equivalent to using the **A** option with the jed command when opening an editing session.

```
BIOF{F}
```

Turns off the automatic indentation for jBC source code. It is equivalent to not using an indent option when opening an editing session.

### Miscellaneous Commands

```
DE{nnn}
```

Deletes the number of lines specified by nnn, starting from the current cursor position. If nnn is omitted it defaults to a value of one line.

```
S?
```

Displays the size of the record being edited in bytes. It includes field delimiter marks in the body of the record.

```
!{command}
```

Executes command. Can be any valid UNIX or jBASE command.

```
!!
```

Re-executes the command specified in the most recent ! command executed.

```
U{nn}
```

Scrolls the screen up by nn lines. If omitted, nn defaults to one line.

```
D{nn}
```

Scrolls the screen down by nn lines. If omitted, nn defaults to one line.

```
I{nn}
```

Inserts nn blank lines after the line holding the cursor. If omitted, nn defaults to one line.

```
nn
```

Positions the cursor on line nn, which is positioned at the top of the screen if the number of remaining lines still allows a screen"s worth of data to be displayed.

```
IN
```

Equivalent to the &lt;F10&gt; key.

```
IP
```

Equivalent to the &lt;F9&gt; key.

```
?
```

Displays the main help screen menu.

### Changing jED Command Keys

The keystrokes used for jED editor commands are configured using the UNIX terminfo terminal characteristic database.

## Terminfo For Altering jED Keystrokes

Terminfo is a UNIX database that describes the capabilities of terminals and their keyboards. Terminal capabilities are defined for how operations are performed, any padding requirements, and the initialization sequences required for each function. The terminfo system is comprehensively documented within the standard UNIX documentation.

The terminfo data is used by utilities such as vi and jED to allow them to work on entirely different terminals without needing to set up or change parameters for each one.

The terminfo data can usually be found in the /usr/lib/terminfo directory.

Terminfo entries consist of a number of fields delimited by a comma.

Embedded whitespace characters are ignored.

The first line of each description gives one or more names (separated by a | character) by which the terminal is known. Names should not contain space characters and at least the first 14 characters should be unique. The first name in the list is normally the shortest and is used when defining the terminal to UNIX, e.g. in setting the TERM environment variable.

The terminal name is followed by a list of capabilities that describe the functionality available with it.

There are three types of terminfo definitions:

- Booleans to indicate what features of the terminfo system the particular terminal supports such as: margin; color; erase; tabs.
- Numerics to indicate magnitudes such as numbers of columns per line,numbers of lines in the display.
- Strings For example, cursor, italics, carriage return, keyboard definitions.

The jED editor is affected mainly by the definitions of key strokes in the strings section. If the terminfo definition for a  terminal does not define the keyboard sequences for the jED editor (F1 - F10 keys, Cursor keys, etc.),  the definition may be customized as:

```
# TERM=myterm ; export TERM
# infocmp >termdef.myterm
# vi termdef.myterm
........add the new keystrokes and write back the new record
# tic termdef.myterm
```

## Note #2

> On many systems, executing the tic command requires super user permissions.

Although terminfo is documented extensively it can become quite complex. [jBASE Software](mailto:devsup@jbase.com) would be pleased to help with definition of terminfo entries for terminals. However, in most circumstances, the jkeys program will provide all functionality required.

## Execution Commands

| Command | Description |
| --- | --- |
| HOME/Ctrl A | Move to start of current line |
| END/Ctrl E | Move to end of current line |
| Ctrl W | Delete word |
| Ctrl K | Clear to end of line or join. |
| Ctrl D | Delete current line |
| Ctrl G | Mark block. 1st Start Blk, 2nd End Blk, 3rd Remove Mark |
| Ctrl L | Insert line below current line |
| Ctrl N | Locate next occurrence |
| Ctrl O | Toggle overwrite and insert. default insert |
| Ctrl R | Redisplay screen |
| Ctrl T | Copy the character from the corresponding cursor position on the line above |
| Ctrl V | Indent for BASIC |
| Ctrl ] | Insert ] |
| Ctrl \ | Insert \ |

## Command Line

From Edit mode, press &lt;Esc&gt; to invoke the command line.

| Command | Description |
| --- | --- |
| CBn | Copy Marked block before current line, n times |
| Can | Copy Marked block after current line. n times |
| /string | Locate the next occurrence of "string" |
| MB | Move Marked block before current line |
| MA | Move Marked block after current line |
| BI | Format BASIC code |
| BION | Turn on Format indentation |
| ! Cmd | Execute command |
| !! | Re-execute last ! Cmd |
| HX or HEX | Toggle the display of the record in Hexadecimal |

Back to [Editors](./../editors/README.md)

  
<PageFooter />
