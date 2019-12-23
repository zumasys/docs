# Welcome to jBASE: Universe Edition

**Created At:** 6/14/2017 9:55:27 PM  
**Updated At:** 2/11/2019 11:38:15 PM  
**Original Doc:** [259094-welcome-to-jbase-universe-edition](https://docs.jbase.com/34463-mv-migration-station/259094-welcome-to-jbase-universe-edition)  


[‎6/‎14/‎2017 12:42 PM] Bruce Decker:

I always tried to put common unix admin tools in place to do common tasks such as:

1) Printer setup/admin and management - Webmin, CUPS printer page, etc

2) User and group admin -- which is why I pounded my fist demanding a proper graphical user manager

[‎6/‎14/‎2017 12:43 PM] Bruce Decker:

3) Spooler management (we do have spooler menus but these could be annotated for those coming from uniVerse)

File type comparisons

Methods to analyze and resize files

Listing users

Managing locks

Logging off ports



# Overview

This document describes the various technical and architectural differences between Rocket’s D3 MultiValue Database and Zumasys jBASE. It is designed to be high-level enough to be understood by non-technical business managers looking to understand the benefits of jBASE over D3. It is also designed to address technical issues at a fairly low level so that the technical reader may understand potential technical challenges that may be encountered during a D3 to jBASE migration, along with potential solutions.

# Common Characteristics

jBASE shares many common characteristics with D3. jBASE’s remarkable compatibility with D3 is owed to these similarities. The casual application user will notice no differences, other than improved performance, between D3 and jBASE. However, administrators and software developers will see remarkable advances in how data and code are organized within jBASE.

## Elements of jBASE vs. D3

The following diagram shows the elements of a D3 system and contrasts it with the jBASE equivalents


| **Element**<br> | **D3**<br> | **jBASE**<br> |
| --- | --- | --- |
| Language: BASIC<br> | BASIC<br> | JBC<br> |
| Language: PROC<br> | PROC<br> | JPQ<br> |
| Language: Paragraph<br> | N Type<br> | PA Type<br> |
| Language: Assembler<br> | Assembler<br> | *Not supported*<br> |
| Language: Query<br> | Access<br> | JQL<br> |
| Data storage (files)<br> | D3 Hashed Files<br> | jBASE Hashed Files<br> |
| Dictionary<br> | 10 Attribute Pick<br> | 10 Attribute Pick and 7 Attribute Prime<br> |
| Spooler<br> | SP-COMMANDS<br> | SP-COMMANDS<br> |
| Master Dictionary<br> | MD<br> | MD (not required)<br> |
| Local File Pointers<br> | D-Pointers<br> | F-Pointers<br> |
| Remote Account Pointers<br> | Q-Pointers<br> | Q-Pointers<br> |
| Remote Server Pointers<br> | R-Pointers<br> | jRFS pointers<br> |
| Execute process<br> | EXECUTE / CHAIN / RUN<br> | EXECUTE / CHAIN / RUN<br> |




## Code Development

D3 Developers may transition their current development skill sets to jBASE with very little change. Like D3, jBASE organizes BASIC code into PROGRAMS and SUBROUTINES. The code is compiled exactly the as in D3.

![259094-welcome-to-jbase-universe-edition: d3vjbase](./d3vjbase.jpg)



# Common Issues when converting from D3

## Config\_EMULATE

jBASE provides a configuration file called config\_EMULATE which exists in the jBASE "config" directory. This configuration file contains a series of switches that can be set to alter the behaviour of various features and functions of jBASE. Another file within the same directory called config\_EMULATE.txt provides expanded documentation for each switch setting. Within this file, you will see named headers describing various multi-value platforms. D3 is one of these named platforms. The settings that Zumasys recommends for systems that are migrated from D3 can be found under this header within the file. jBASE will apply these settings on process start-up by first examining the environment variable JBCEMULATE and then using the value of this environment variable to find the correct heading within the config\_EMULATE file to apply. Setting JBCEMULATE is vital in order to allow jBASE to properly emulate D3 behaviour.

## Case Insensitivity

Most computer systems operate in a mode called “Case Sensitive”. In Case Sensitive mode, the letter “A” is different than the letter “a” (upper case). Applications that are written so that upper case “A” is considered the same as lower case “a” are considered to be “Case Insensitive”. D3, by default, is a case insensitive system.

jBASE, by default, is a case sensitive system so some preparation work must be performed to configure your jBASE installation so that it will behave like D3 (case insensitive). Failure to properly configure jBASE to be case insensitive can lead to application behavioural differences that can range from minor to major.

D3 developers are encouraged to spend a few minutes reviewing the installation and configuration advisories and notes prior to migrating their D3 data and/or code to jBASE. A few minutes spent up front can save a lot of effort during the migration and testing.

## SYSTEM() Function

The SYSTEM() function is used within BASIC programs to expose various system properties. A number (vector) is passed to the SYSTEM() function and each vector will return a specific property of the system. For example, on most MultiValue systems, SYSTEM(7) will return the current terminal type like this:

```
TerminalType = SYSTEM(7)
```

There are hundreds of vectors that can be called to return a wide variety of system information. Unfortunately, the vector numbers used on D3 may not be the same number as used on jBASE. So, code that is written to reference a specific vector on D3 may need to be changed to a different vector number on jBASE.

*[editor’s note] Bruce Decker has a utility which scans source code and changes SYSTEM() vector numbers automatically. It also perform other expansions in cases where a SYSTEM() vector on D3 has to be changed to another function call on jBASE.*

# Expected differences between D3 and jBASE:

## jBASE Environment

- All jBASE files are native operating system files. jBASE files may have a suffix as: 
    - ]D suffix indicates a dictionary,
    - ]I suffix indicates index and/or trigger definitions,
    - ]M suffix indicates a multi-level file, i.e. the PGM file may have an associated OBJECT data section, which would have the name “PGM]MOBJECT”.
- MD is optional, but jBASE does have a default in the “src” sub-folder of the jBASE install folder. Which MD is used for a specific account is determined by the JEDIFILENAME\_MD environment variable. After you have restored or created an MD, i.e.:


```
CREATE-FILE DICT MD 7
```

then run the “UpdateMD” program to populate it with the standard jBASE verbs.

- There are no “verb” entries created when you compile and catalogue a program or subroutine. The “jshow” utility allows to you to find programs and subroutines and provides information on the original source code file. You must use BASIC and CATALOG on a program or subroutine in order to be able to execute it or call it. “RUN” is redundant, as you can just use the program name as a verb, but is supported for backwards compatibility.
- When a file is created, there is no MD entry created for that file. The “LISTFILES” utility will show all available files. The command:


```
jshow -f CUSTOMER
```

will find the location of the CUSTOMER file.

Whether a file is available in a particular account is mainly determined by the setting of the [JEDIFILEPATH](jedifilepath) environment variable, which defines a list of directories in which to search for jBASE data files. Although no MD entries are created when a file is created, “F” and “Q” pointers are still supported and there is a knowledgebase page devoted to “F” and “Q” pointer resolution to be found [here](http://www.jbase.com/r5/knowledgebase/manuals/3.0/30manpages/man/sup22_QPOINTERS.htm).  If there are instances of “Q” pointers “pointing to” “Q” pointers, then the [JEDIENABLEQTOQ](jedienableq2q) environment variable may need to be set.

- To change the properties of a file, so that it is not backed up, for instance, use the “[jchmod](jchmod)” utility and +/- with the appropriate flag to add/subtract. The flags are as: 
    - B     add/remove Backup option,
    - M     add/remove auditing,
    - L     add/remove logging (transaction journaling) for a file.
- The following standard D3 accounts are redundant:
    - account
    - dm
    - sysprog
    - users




## SYSTEM

- The default SYSTEM file is found in the “src” sub-folder of the jBASE install folder, and is normally a single-level file.
- It is advisable to create a global SYSTEM account which can then be used to facilitate Q-pointers and LOGTO’s. Which SYSTEM file is used is determined by the JEDIFILENAME\_SYSTEM environment variable.
- A record in the SYSTEM file must contain two fields. Field 1 contains the character "D" to specify a local account, and field 2 contains the absolute path of the account directory. Fields 7, 11 and 20 through 37, of a SYSTEM record are used by the jBASE LOGTO and PASSWORD commands. Further information can be found [here](317964-system-file).


## Compiling and Cataloguing (Cataloging)

- All jBASE BASIC code is compiled directly to C code.
- BASIC compiles the code into object form.
- CATALOG generates an executable or shared library from that object code.
- Executables are stored in a “bin” folder
- Subroutines/shared libraries are stored in a “lib” folder.
- The default locations for programs and subroutines can be changed by setting the following environment variables:
    - JBCDEV\_BIN for program/executables
    - JBCDEV\_LIB for subroutines/shared libraries
- Custom C code routines can be combined with BASIC code using the “jcompile” utility. jcompile can also be used to compile/catalogue BASIC code.
- It is recommended that BASIC source code files be created as folders (TYPE=UD), so that they can be accessed via text editors and also to facilitate ease of movement.
- Depending on platform, object code with a “$” or “!” prefix or a “.o” or “.obj” suffix may be created during the compilation process. To keep these items from cluttering up your source code, you should create an “OBJECT” file, for instance:


```
CREATE-FILE DICT BP 3 
CREATE-FILE DATA BP,OBJECT 7 
CREATE-FILE DATA BP TYPE=UD
```



## Select Lists

- There are two types of select list
    1. Default or numbered select lists – these are temporary
    2. Named select lists
- Depending upon the [JBCLISTFILE](326531-jbclistfile)environment variable and existence of a POINTER-FILE, select lists are stored in one of three possible places:
    - If the environment file JBCLISTFILE is configured and is valid then the save list is stored with an identifier of the list name. If [JBCLISTID](jbclistid) is set then the identifier is **SEL\*AccountName\*ListName**.
    - If JBCLISTFILE is not defined or is not valid, and a POINTER-FILE exists, then the list is stored as named in the POINTER-FILE.
    - If JBCLISTFILE is not set and the POINTER-FILE does not exist, then the list is saved in the jBASEWORK file as **SEL\*AccountName\*ListName**.
- To store lists in the jBASEWORK file with an id of just the list name, set a Q-pointer or F-pointer called POINTER-FILE to jBASEWORK.




## Ports

- There is no concept of “nailed ports” in jBASE.
- You can define what port number will be used by setting the environment variable [JBCPORTNO](jbcportno). This must be done before a connection to jBASE is made.
- If JBCPORTNO is explicitly set then jBASE will assign the lowest available port number from the list or range specified. If all port numbers specified by JBCPORTNO are already in use then the user will be denied access and the user will encounter the following error message: "No ports free in the specified range".
- Under normal circumstances, a single port number should suffice. However, if the user is invoking other programs that spawn a new jBASE process (e.g. BASIC or EXECUTE CHAR(255):'k') then it would be necessary to assign at least 2 port numbers for the user, so that the secondary process can obtain a port number.
- If required, there are solutions available which should ensure that each user always gets the same port number.




## Debugger

- The jBASE debugger is very different than that for D3, but very flexible.
- Whether a program drops into the debugger on encountering an error is controlled by the following environment variables:
    - [JBASE\_ERRMSG\_ZERO\_USED](jbase_errmsg_zero_used)
    - [JBASE\_ERRMSG\_NON\_NUMERIC](jbase_errmsg_non_numeric)
    - [JBASE\_ERRMSG\_DIVIDE\_ZERO](jbase_errmsg_divide_zero)
- To configure these environment variables, you use a bit-mapped numeric value, where the available behaviours are:
    - 0     Raise an error and drop into the debugger (default).
    - 1     Don’t display an error message.
    - 2     Don’t enter the debugger.
    - 16    Caller to place 0 in the target variable after operation.
    - 32    Called to place “” (null) in the target variable after operation.
    - 64    Caller to leave the target variable alone after operation.
    - 128   Caller to place the source variable in the target variable after operation.
- It is also possible to define whether jBASE error messages are logged to the jbase\_error\_trace file via the environment variable: [JBASE\_ERRMSG\_TRACE](jbase_errmsg_trace)
- Further details about the jBASE debugger can be found [here](jbase-debugger).




## Devices

- jBASE is quite flexible in allowing the definition of devices to be used with tape commands.
- All device definitions can be found in the “dev” sub-folder of the jBASE install directory.
- There is a “DEVICE\_NOTES.txt” file which provides information on how you can configure/customise the provided device definitions.
- Each definition of a physical device will need to be customised so that it “points” to the correct device for your operating system.
- It is possible to read a D3 pseudo-floppy or pseudo-tape. These should be in uncompressed format.




## Backup and Restore

- Instead of performing individual account-saves, it is recommended that you use the jbackup/jrestore utilities.
- Both utilities will handle all jBASE file types, including directories and will respect any record locks that exist on jBASE files.
- jrestore does allow selective restores to be performed. A BASIC program can be supplied on request to assist with all the options.
- The jbackup utility has an option to provide file statistics, should they be required.
- Further information on jbackup can be found [here](jbackup) and  [here](jrestore).




## TCL commands

- [**WHO**](who) Unlike D3, “WHO \*” will not produce a list of all ports in use. The WHO command will provide the port number and either the [JBCLOGNAME](jbclogname) or the user name for the current login.
- **[LISTU](listu)**Options available are “P”, which directs output to the printer, “N”, which prevents the listing from paging. The output of the LISTU command can be customized by calling the [JBCUserCustomiseDisplay](customizing-the-output-of-commands) subroutine.
- **[WHERE](where)**The WHERE utility can be used to display information on processes executing jBASE programs. Usage: **WHERE** Ports (Options Ports can be one or a range of ports. The verbose option can be useful, providing information about the jBASE process stack, including line numbers for the currently active process.
- **FIND**There is no FIND command in jBASE. There are, however, two replacements:  
    1. [jgreb](jgreb), which will search for strings in jBASE files or directories.
    2. [ESEARCH](esearch), which generates an implicit list of records in a file if they contain (or do not contain) one or more occurrences of specified character strings.
- **POVF** Although there is a POVF command in jBASE, it only lists the available space on the mounted file systems. On \*NIX, you may need “root” privileges in order to be able to run the command.
- [**CREATE-FILE**](create-file) When you create a file in the current account/directory, the MD does not get updated to reflect that fact. A PROC wrapper can be provided on request if you wish to continue to have this “feature” available.
- **jshelltype**This is a jBASE specific command which allows changes to the jBASE command shell ([jshell](jshell) or “jsh”). Usage: **jshelltype** *shell ,*where *shell*is one of **jsh**, **sh** or **msh***. In normal usage, “jsh” behave much like a standard TCL prompt and parses the syntax of command accordingly. Other “jshelltype” options are “sh” and “msh”:*
    1. “sh” behaves like a normal UNIX or Windows shell and can be used for running platform specific commands.
    2. “msh” or “mixed shell”, which tries to interpret shell meta characters so that they are correctly interpreted based on context.


Switching between the three can be accomplished by the use of function keys (F1 for jsh, F2 for sh, F3 for msh), or Esc OP for jsh, Esc OQ for sh, Esc OR for msh.



## BASIC

- The jBASE compiler now supports [case-insensitivity](320473-case-insensitive-overview). This does not imply that the jBASE compiler will understand every nuance of the D3 BASIC syntax
- In D3, to execute an operating system command, you needed to precede it with an exclamation mark. With jBASE, that is no longer necessary. By default, the command will be executed using the same shell as your original program, but it is possible to tell jBASE which shell to use as follows:
    - CHAR(255):”k” - Korn shell on UNIX, command shell on Windows.
    - CHAR(255):”c” – C shell (not commonly used), command shell on Windows.
    - CHAR(255):”s” – Bourne shell (on Linux, this would be the Bash shell in “sh” compatibility mode), again command shell on Windows.
- The jBASE user has the same permissions as the user you are logged in as. On UNIX, by convention, a “jbase” group would be defined and each user of jBASE would be a member of that group. On Windows, it may sometimes be necessary to provide “User – Modify” permissions on an account folder so that all users can access files in the account.
- D3 has a set of functions which allow you to read from and write to sequential files (%OPEN(), %READ(), %WRITE(), %CLOSE()). The jBASE equivalents are [OPENSEQ](277543-openseq), [READSEQ](278773-readseq)/[READBLK](277637-readblk), [WRITESEQ](279570-writeseq) and [CLOSSEQ](278851-closeseq) .The difference between the [READSEQ](278773-readseq) statement and the [READBLK](277637-readblk) statement is that the READBLK statement reads a block of data of a specified length, whereas the [READSEQ](278773-readseq) statement reads a single line of data.


jBASE also provides a set of [Extensions](sequential-file-extensions) which can be used to manipulate sequential files.

- All jBASE file operations allow you to set a variable if something should go wrong. The variable will contain a number which can provide an indication of the type of failure. These are consistent across all file operations:
    - 128         No such file or directory
    - 4096        Network error
    - 24576       Permission denied
    - 32768       Physical i/o error or unknown error


Optional ON ERROR and LOCKED clauses are also provided along with required THEN/ELSE clauses. Existing BASIC code without any ELSE/THEN/LOCKED syntax will not compile.



## Indexes

- jBASE supports secondary indexes on hashed files.
- The main difference with D3 is that jBASE indexes have a name.
- Programmatically, indexes can be manipulated in a forward or a backward direction as :


```
OPENINDEX  filename,indexname TO index.var {SETTING error.var} THEN / ELSE
```

```
SELECT {ATKEY}  indexvariable {TO select-def} {ATKEY index-key {, record-key{,vmcount}}}
```

```
READNEXT KEY index.key{, record.key{,vmcount}} {FROM select-def} THEN / ELSE
```

```
READPREV KEY index.key{, record.key{,vmcount}} {FROM select-def} THEN / ELSE
```

As an alternative to SELECT, It is possible to populate a dynamic array with the results of your query on the index:

```
SELECTINDEX index-name{, index-key} FROM file-var {TO select-var}
```



## Function Keys

- jBASE provides an alternative to programming the function keys on a terminal emulator
- Further details [here](keyboard-independence).




## Compile/run-time differences

- Some differences in SYSTEM() functions.
- Some differences in @(-) functions.
- More robust indexes in jBASE. Root and Key concept in D3 will need to be converted to jBASE methods.
- Triggers handled differently.
- MD entries for referencing catalogued programs don’t exist. Need to use jshow lookups instead.
- MD entries for referencing files optional rather that automatic. Need to use jshow lookups instead.
- Name of routine on SUBROUTINE line is important.
- Name of variable on NEXT must match the name on FOR.
- WHO is R83 format without master dictionary name.
- Debugger is significantly different.
- Subroutine calls from dictionaries are supported but each routine will need to have a named common included.
- Default dictionary items for file ids have different sizing and justification.
- Programs must be catalogued before being able to a RUN filename progname, but RUN is essentially redundant.
- D3 default Annn dictionaries are \*Annn in jBASE.
- D3 file pathing in the account,filename, format is not supported in jBASE.
- PROCWRITE to a PQ proc using a space as the delimiter is not supported in jBASE. All procs use the PQN format of an @AM as the delimiter.
- Initialization of variables is different, so ASSIGNED() function can give different results.
- FOLD() function is different.
- jBASE doesn’t support % functions.
- jBASE doesn’t support the IMPORT and EXPORT commands.
- Not all user exits are supported, see the list [here](324980-supported-user-exits), but you can write your own in [jBC](user-exits)

