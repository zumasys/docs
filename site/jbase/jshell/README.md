# jSHELL

<PageHeader />

**Tags:**
<badge text='commands' vertical='middle' />
<badge text='jshell' vertical='middle' />
<badge text='shell' vertical='middle' />

The jsh command invokes jShell - the jBASE shell. It can be invoked as your login shell by using the normal system administration software supplied with the platform. Either via .bat files (Windows) or .profiles (Unix).

jShell has been designed to ease migration from other MV platforms, and to overcome some of the differences between various platform command line environments. The more primitive features seen on some older platforms (such as the "dot" command stacker) have been replaced or augmented with easier to use and more functional equivalents.

The most noticeable difference between jShell and other command line shells, such as the Unix Korn shell (ksh), is that command line arguments such as "\*" and "?" are not expanded by the shell but passed directly to the command that has been invoked. In same manner, quoted strings (such as "quoted string") are passed directly to the command with quotes intact. This enables query language statements such as:

```
SSELECT file = "[SPROUT]" BY *A1
```

to be issued directly from jShell. If the same command was issued from the ksh prompt, it would have to be issued as:

```
SSELECT file = \"[SPROUT]\" BY \*A1
```

to avoid the quotes being removed and the "\*" being expanded by the Korn shell.

Beyond this convenient feature, jShell also offers many significant advantages over traditional shells and is easier to use. Some of the main features of the jsh are:

- Customizable prompt
- Alternate shell/command line invocation
- Command search and recall
- Active select list prompt
- [PROC](../jcl/README.md) and paragraph detection and execution
- Type-ahead is supported

The command is as:

```
jsh - -a account -c command -s shell -p prompt
```

where option may be:

| Option                    | Description                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -                         | Execute proc from MD/VOC file with same name as user login. (on Unix the .profile and .jshrc files are processed)                                                                                                                                                                                                                                                                                        |
| -a account                | Log in to the specified account. Usually used in conjunction with the -c option to run a command in the context of a particular account. If the account requires a password, append it to the account with a comma separator. _The -a option may only be used when jsh is invoked from an external process such as bash or cron, not from within jBASE._ <badge text='version-5.8+' vertical='middle' /> |
| -c command                | Specifies that a jsh process should be spawned to execute command. When the command terminates, the jsh process will also terminate. If the command to be executed requires arguments, enclose the command and it's arguments in double-quotes. If any arguments require double-quotes, use a backslash (\\) to escape the argument quotes.                                                              |
| -s shell                  | Specifies which shell emulation to use when executing jsh. The jsh will default to the previous emulation used by the current port.                                                                                                                                                                                                                                                                      |
| -p prompt                 | Specifies the prompt to be used while executing jsh. This option can take up to 3 fields in the same format as the [JSH_PROMPT](#jsh_prompt) environment varialble described below.                                                                                                                                                                                                                                                                                                                                                    |
| -t                        | Opens the tty device and accepts commands from the keyboard when the jShell has been invoked to process a command input file. The default action is to exit the shell once the processing of the input file has been completed.                                                                                                                                                                          |
| -z foreground, background | Select foreground and background screen colors (e.g. jsh -z foreground,background). Colors can be WHITE, YELLOW, MAGENTA, RED, CYAN, GREEN, BLUE or BLACK. Defaults will be BLUE foreground on WHITE background. Colors can also be set in the Properties of the jShell shortcut.                                                                                                                        |

If the jsh command is issued without arguments, a jsh process is spawned and this process becomes the command shell. The jsh process will replace the current shell if it is invoked through the UNIX exec command.

## Environment Variables

All jShell environment variables must be set prior to invoking the jShell.

### JSH\_COMMAND\_STACK

The **JSH\_COMMAND\_STACK** environment variable can be used to:

* configure the number of commands in the jShell command history
* specify that the command stack is username based

The command history can be set to any number greater or equal to 50.

The command stack can optionally be username based with the literal **USERNAME** (see examples below).

For a command stack that has a maximum command history of 500 entries and is port number based:

```
JSH_COMMAND_STACK=500
```

For a command stack that is username based and has a default stack size of 50 entries:

```
JSH_COMMAND_STACK=USERNAME
```

For a command stack that is both username based and has a maximum stack size of 1000 entries:

```
JSH_COMMAND_STACK=USERNAME,1000
```

The *value* of the environment variable is case insensitive, e.g.

```
JSH_COMMAND_STACK=UserName
```

If the environment variable is unassigned or any part of the value is invalid:

* the stack will be port number based
* the maximum stack size will be 50

If stack size is less than 50 then the default (minimum) stack size will be set to 50 entries.

If the stack is *username* based and the user is logged in to more than one port then the stack will be shared.

### JSH_PROMPT

The **JSH_PROMPT** environment variable can be used to customize the jShell prompt characters. It can contain up to 3 comma-delimited fields as in:

```
export JSH_PROMPT="$%s $%a $%c -->","$%>>>",msh        [Unix/Linux]
set JSH_PROMPT="$%%s $%%a $%%c -->","$%%>>>",msh       [Windows]
```

* The first field shown in the example is the primary prompt (jsh, msh or sh).
* The second field shown is the secondary prompt when a select list is present.
* The third field shown is the mode of operation: **jsh**, **msh** or **sh**

> On Windows, because **%** is a meta-character, it must be *escaped*.

The above example will display the jShell prompt as:

```
msh obiwan ~ 1 -->
```

where:

**msh** is the shell type  
**obiwan** is the account name  
**~** indicates that you are in your home directory  
**1** is the port number  

Fields 2 and 3 are optional and will take the usual defaults if not specified.

Fields 1 and 2 can accept values from the following table:

| Value | Replaced With |
| ----- | ----------------------------------------------- |
| EnvVal |the value of the specified environment variable |
| %a | the user account name |
| %m | the phrase "(Cmd)" if the shell is in command mode |
| %n | the new line sequence |
| %C | the current working directory |
| %c | the current working directory with any portion matching the home directory replaced with ~ |
| %p | the port number |
| %e | the entry number in the stack currently being edited |
| %d | the current date in **dd mmm yyyy** format |
| %t | the time of day in **hh:mm:ss** format |
| %u | the host name as defined by the UNIX command uname (UNIX only) |
| %y | the tty name (UNIX only) |
| %s | the name of the jshelltype that will execute the commands at the prompt |
| chars |all other characters are taken as literals and included in the prompt |

## Using jsh

To use this tutorial, the user should be logged in and positioned at the shell prompt. If the user account has not been configured to run jShell by default, execute it now like this:

## UNIX/Linux

```
exec jsh
```

## Windows

```
jsh.exe
```

The default jShell prompt should now appear:

```
jsh user cwd -->
```

Where user is the user's login name and cwd is the current working directory. For this exercise it is assumed login name is *jbase* and current working directory is the home directory for jBASE. In this case the prompt will appear as:

```
jsh jbase ~ -->
```

The tilde character (~) is a short-hand method of referring to the user's home directory. The shell expands this character to the full path name of the login home directory before executing commands. If changed to a sub-directory called *source* using **cd**, the prompt would appear as:

```
jsh jbase ~ --> cd source
jsh jbase ~/source -->
```

It is possible to change the primary and/or secondary default prompts by using the following commands:

```
jsh jbase ~ -->set jps1 newprompt
jsh jbase ~ -->set jps2 newprompt
```

Note that the secondary prompt is only displayed for an active select-list, i.e. after a SELECT, GET-LIST, QSELECT, BSELECT, etc.

Where **newprompt** is a string defining the new prompt. The string can contain terminal control characters such as a bell character by specifying special character sequences in the **newprompt** string. The character sequences allowed are:

| Sequence | Replaced With                                                                              |
| -------- | ------------------------------------------------------------------------------------------ |
| $EnvVar  | the value of the specified environment variable                                            |
| $%a      | the user account name                                                                      |
| $%m      | the phrase "(Cmd)" if the shell is in command mode                                         |
| $%n      | the new line sequence                                                                      |
| $%C      | the current working directory                                                              |
| $%c      | the current working directory with any portion matching the home directory replaced with ~ |
| $%p      | the port number                                                                            |
| $%e      | the entry number in the stack currently being edited                                       |
| $%d      | the current date in dd mmm yyyy format                                                     |
| $%t      | the time of day in hh:mm:ss format                                                         |
| $%u      | the host name as defined by the UNIX command uname (UNIX only)                             |
| $%y      | the tty name (UNIX only)                                                                   |
| $%s      | the name of the jshelltype that will execute the commands at the prompt                    |
| chars    | all other characters are taken as literals and included in the prompt                      |

The shell operates in two distinct modes, command mode and operating mode. Operating mode is the usual mode and is used to issue all commands to the system. Command mode is used to issue commands to jsh itself.

At the jShell prompt, the / command introduces a search string to jsh. The search string is compared against every command in your command history and if a match is found, the command is recalled as the current command, just as if you had typed it in again. Command mode is normally entered by hitting the escape key on your keyboard.

If you include the **$%m** sequence when you configure the prompt, the prompt will change to indicate whether or not you are in the shell command mode. For example, if the prompt has otherwise been left in its default state, the following sequence will locate the last **cd** command in your command history. Note the appearance of the **(Cmd)** string as part of the prompt on the middle line:

```
jsh ~ --><Esc>
jsh ~ (Cmnd) -->/cd
jsh ~ -->cd source
```

Two other keystrokes within jsh allow you to recall up to 50 previous commands. They are:

```
<Ctrl>+P Goto previous command
<Ctrl>+N Goto next command
```

Using these two keystrokes it is possible to retrace commands by stepping backwards or forwards one command at a time. jsh supports command line editing by using a subset of the jED editor keys, which can be useful if a command needs to be changed. In particular, using the right and left arrow keys to move the cursor to any position in the current command string. The jsh is configured for editing in insert mode by default. This means that any characters typed will be inserted just before the current cursor position. Use the backspace key to delete the previous character and the `<Delete>` key to delete the character directly under the cursor.

The jsh can be placed into overwrite editing mode by pressing `<Ctrl>`+`O`. In this mode all characters typed will replace the character under the cursor.

All the editing commands are shown in the following table:

| Keystroke                  | Command                                               |
| -------------------------- | ----------------------------------------------------- |
| `<Right>`                  | move the cursor right by one character                |
| `<Left>`                   | move the cursor left by one character                 |
| `<Home>` or `<Ctrl>`+`A`   | move the cursor to the start of the command line      |
| `<End>` or `<Ctrl>`+`E`    | move the cursor to the end of the command line        |
| `<Down>` or `<Ctrl>`+`N`   | recall the next command in your history               |
| `<Insert>` or `<Ctrl>`+`O` | toggle Overwrite/Insert mode, default is Insert       |
| `<Up>` or `<Ctrl>`+`P`     | recall the previous command in your command history   |
| `<Ctrl>`+`L`               | list the command history maintained by the shell      |
| `<Ctrl>`+`K`               | delete from the cursor to the end of the command line |
| `<Ctrl>`+`W`               | delete from the cursor to the end of the current word |
| `<Tab>`                    | move to the start of the next word                    |
| `<Backtab>`                | move to the start of the previous word                |

## Pick Mode TCL Stack

| Keystroke    | Command                                                     |
| ------------ | ----------------------------------------------------------- |
| .? or .H     | Show help                                                   |
| .a# text     | Append 'text' to entry '#'                                  |
| .c#/s1/s2/\* | Change 's1' to 's2' in entry '#', \* = change all           |
| .d#          | Delete entry number '#'                                     |
| .f text      | Find first occurrence of 'text', move to top of stack       |
| .l           | List first page                                             |
| .ln          | List first 'n' lines                                        |
| .lm-n        | List entries 'm' through 'n' inclusive                      |
| .m#          | Move entry number '#' to top of stack                       |
| .p# text     | Prepend 'text' to entry '#'                                 |
| .r#/s1/s2/\* | Replace 's1' with 's2' in entry '#', \* = replace all       |
| .s text      | Search and display all entries with 'text'                  |
| .{x}#        | Execute entry '#' [if 'x' is omitted then '#'  is required] |

## jShell Emulation Modes

If the user is familiar with operating UNIX under other shells, jsh may be made to work in the environment with which the user is most comfortable. Switching between the various emulation modes in jsh by using the function keys:

| Function Key | Emulation Mode                                    |
| ------------ | ------------------------------------------------- |
| F1           | jShell (jsh)                                      |
| F2           | native Platform Shell. ( CMD.exe, ksh, csh, etc ) |
| F3           | mixed shell (msh)                                 |

## Note

> Some terminals may not support these function keys. If the terminal does not support the F1, F2 and F3 function keys, the emulation mode can be modified by the jsh internal command, jshelltype. The command syntax is as:
>
```
jshelltype shell
 ```
>
> Where shell can be :
>
> - **jsh** pre-processes meta characters like the asterisk (\*), as expected by legacy multi-value systems. Note that only in jsh mode is **JEDIFILENAME\_MD** examined for Q-pointers, Procs and Paragraphs.
> - **sh** native system shell. On Unix depends of SHELL, on Windows CMD.exe.
> - **msh** mixed shell. pre-processes meta characters as a combination of jsh and sh.

## msh Mapped Sequences

Options specified on the command line will have the leading parenthesis escaped. For example:

```
CT File1 Record1 (X becomes CT File1 Record1 \(X
```

Any asterisk used as part of a record specification is escaped. For example:

```
CT File1 * becomes CT File1 \*
```

Quotes used in a selection criteria specification are escaped.

```
LIST File1 WITH A1 = "XYZ]" becomes LIST File1 WITH \*A1 = \"XYZ]\"
```

Other meta characters are untouched so that pipes, etc. can be invoked:

```
cmd | cmd cmd & vi *.c
```

[Back to Knowledgebase](./../README.md)

<PageFooter />
