# Terminal Independence

**Created At:** 11/3/2017 3:18:13 PM  
**Updated At:** 2/22/2018 5:37:39 PM  


jBASE uses the standard terminfo database supplied on all Unix platforms. For Windows, jBASE provides a terminfo database for several popular terminal.



### Unix

Terminal I/O is handled via terminfo database, which is usually found in /usr/lib/terminfo or /usr/share/terminfo. The terminfo database is a directory structure containing compiled versions of all available terminal definitions.

jBASE for Unix includes terminfo definitions for several popular terminals and terminal emulators in the $JBCRELEASEDIR/src/terminfo.src directory. These are *not*compiled into the terminfo database when jBASE is installed, but you are welcome to use them if the standard Unix terminfo is not satisfactory.

To obtain the terminfo source for a particular terminal, use the "infocmp" command:

```
infocmp vt220

infocmp vt220 > MyNewTermDef
```



Use any text editor (vim, nano, etc.) to modify or create a new terminfo definition, then use the "tic" command to compile the terminal definition:

```
tic MyNewTermDef
```



### Windows 

jBASE for Windows includes terminfo definitions for many common terminals. The source definitions are supplied in the %JBCRELEASEDIR%\src\terminfo.src directory. The standard terminal definitions are compiled from %JBCRELEASEDIR%\src\jbase\_nt.ti into a Unix-like terminfo database located at %JBCRELEASEDIR%\misc.

It is possible to import terminal definitions from a Unix system using the "infocmp" command (see above). The output of the infocmp command can be redirected to a text file containing the terminal definition source. Save the terminal definition file in a directory on the Windows system, and use the "jtic" command to compile it into the jBASE terminfo database:

```
jtic MyNewTermDef
```



### Setting the terminal type

To configure jBASE to use the required terminal definition, set the TERM environment variable or use the jBASE TERM command.

```
export TERM=vt220 (Unix)
set TERM=vt220 (Windows)
TERM vt220 (jBASE)
```

Note: in Unix, the backspace character defined by the stty "erase" setting will override the backspace character specified in the terminal definition.

The jtic utility also provides the ability to add extra terminal and printer independent control characters to the @() function in BASIC. It can also be used to extend terminal definitions beyond the normal terminfo capabilities.
