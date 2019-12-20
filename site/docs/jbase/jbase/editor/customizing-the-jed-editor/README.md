# Customizing the JED Editor

**Created At:** 3/4/2019 7:04:27 AM  
**Updated At:** 3/4/2019 8:46:22 AM  
**Original Doc:** [customizing-the-jed-editor](https://docs.jbase.com/46994-editor/customizing-the-jed-editor)  


## Description 

The **.jedrc** file can be configured in the HOME directory or the current directory to override the default command definitions.  Generally, the syntax is as:

```
#comment line
set opt
set noopt
set opt=value{:value{:value...}}
```

Where:

- **set opt** sets option opt to true,
- **set****noopt**sets option opt to false
- **setopt**= value{:value{:value.....}} sets the command option to a specific value.




The options are as:


| Option | Description |
| --- | --- |
| back\_tab | moves the cursor to the previous tab position on the current line |
| backspace | issues a destructive backspace |
| carriage\_return | inserts at new line at the current cursor position |
| change\_case | reverse the case of the character at the current cursor position then move cursor 1 position to the right |
| clear\_end\_line | clears all characters from the current cursor position to the end of line |
| copy\_character | inserts at the current cursor position the character from the same position on the preceding line |
| cursor\_down | moves the cursor down one line |
| cursor\_left | moves the cursor left one position |
| cursor\_right | moves the cursor right one position |
| cursor\_up | moves the cursor up one line |
| delete\_char | deletes the characters at the current cursor position |
| delete\_line | deletes the entire line specified by the current cursor position |
| delete\_word | deletes text from the cursor position to the end of the word |
| end\_line | moves the cursor to the end of the current line |
| escape | invokes the jed command line |
| exit\_record | exits the current record |
| forward\_tab | moves the cursor to the next tab position on the current line |
| indent\_screen | apply jBC code formatting to the lines displayed on the current screen |
| insert\_line | inserts a blank line below the current line and positions the cursor on it |
| insert\_space | inserts a space to the right of the cursor position |
| insert\_sub\_value | inserts a value mark (ASCII 253) |
| insert\_value | inserts a sub-value mark (ASCII 254) |
| mark\_line | sets the start or end position for marking a block of text |
| next\_indent | places the cursor at the next line which matches the indentation to the current line |
| next\_locate | locates the next occurrence of a earlier located string |
| prev\_indent | places the cursor at the previous line which matches the indentation to the current line |
| prev\_locate | locates the previous occurrence of a earlier located string |
| repaint | redisplays the screen and discards the changes since the last carriage return |
| scroll\_bottom | moves the cursor to the last line of the record or file |
| scroll\_down\_line | scrolls the screen down one line |
| scroll\_down\_page | scrolls the screen down one page |
| scroll\_top | moves the cursor to the first line of the record or file |
| scroll\_up\_half | scrolls the screen up half a page |
| scroll\_up\_line | scrolls the screen up one line |
| scroll\_up\_page | scrolls the screen up one page |
| start\_line | moves the cursor to the start of the current line |
| toggle\_insert | toggles between the Overwrite and Insert data entry modes |





| Value | Description |
| --- | --- |
| key\_xxx | constant that corresponds to user's current terminfo definition |
| ^X | ctrl&lt;A&gt; through ctrl&lt;Z&gt; |
| \nnn | 3 digit octal number |




An example of use may be as:


| File . , Record .jedrc                                       Insert   17:17:17<br>Command-&gt;<br>001 set delete\_line = ^D<br>002 set noexit\_record<br>003 set toggle\_insert = \006<br>004 set escape = \033:\117:\101<br>-------------------------------- End Of Record -------------------------------<br> |


where:

Line 1 sets the delete line command to control-D. By default, control-D must be pressed twice to delete a line.
Line 2 removes the exit record command. The default is control-X. The user may still exit the record the log way - go to the command line and type **ex**.
Line 3 sets the command to toggle between insert and overwrite modes to octal 6 (control-F).
Line 4 specifies that the jed command line will be invoked when the octal characters 33, 117 and 101 are sent. This is the sequence issued by the F12 key from the jSHELL console on Windows.

## Note:


> **Note:** In order to remap any of the command options, you may **first** need to "unmap" the current function.  Failure to unmap a command option that is already mapped will result in the new mapping being ignored.  For instance to set the delete command to Octal 31:
> 
> - set noback\_tab
> - set delete\_line = \031
> 
> 
> (the "set noback\_tab" is needed because \031 is already mapped to the value "noback\_tab")

