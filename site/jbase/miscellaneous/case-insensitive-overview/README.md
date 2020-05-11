# Case Insensitive Overview

<PageHeader />

## Create Case Sensitivity Control

Because jBASE already has many customers who rely on their applications running as they currently do we have the ability to switch any new behavior on and off. Within jBASE there is a config file that lets users tailor how jBASE behaves. Although many of the changes are aimed at supporting case sensitivity, much of the new behavior is generic enough to be of use to existing users. A good example is that jQL verbs no longer have to be all upper case.

To enable this behavior you would to simply set **case\_insensitive\_queries = true** in the **Config\_EMULATE** configuration file.

New config flags currently are:

- **case\_insensitive\_md = true** - Ignore the case of cmmands entered in a jShell
- **case\_insensitive\_file\_ids = true** - Ignore the case of file names
- **case\_insensitive\_queries = true** - Ignore the case of jQL syntax
- **case\_insensitive\_runtime\_strings = true** - Ignore the case of strings in jBC and jQL

These are described in more detail below.

## jBASE Executables (jSH only)

When running in a jShell, all jBASE commands can be accessed in any case, this behavior can be controlled by setting **case\_insensitive\_md = true**.

For example to run jdiag from within a jsh you should now be able to do:

- jDIAG jdiag JDIag

However this new behavior does not extend to your application program names and things outside of jBASE, like UNIX/Windows commands and C functions which are still case sensitive.

## jBC

jBASE BASIC has been changed in the following area's.

### Basic Source Code

New utility: **jFormatCode**

| <!----> | <!----> |
| --- | --- |
| Format existing code | jFormatCode -f myfile source\_name.b |
| Reformat older code so it can be compiled in jBASE | jFormatCode -p -f myfile source\_name.b |
| Get some help | jFormatCode -? |

Code reformatting follows the these simple rules

- Reserved words are converted to UPPERCASE.
- Strings and comments are ignored.
- Everything else, i.e. variables, statement labels, function and subroutine names, are converted to lowercase.

This is intended for use when porting source into jBASE, the idea being simply that if everything has been through the same process then renaming variables and subroutines should not be an issue.

A good example to consider is that in some implementations of PICK, variables can be in any case, e.g.

abc = 1 Abc = 2 ABC = 3

Within jBASE you would end up with 3 versions of [abc]. After conversion, all instances of **abc** will be in the same case so jBASE will now work as expected. This will also apply to subroutine names, arrays and COMMON. It will also try and fix common issues like reserved words being used as variables, no spaces after GOTO, etc...

However it is not necessary to change anything. For example, if you want leave the source code as it is then the BASIC command as a new option **(T)** that will translate the code on-the-fly during the compilation stage.

```
BASIC myfile source_name.b (T
```

There is no emulation option to control this, it is always available regardless of which emulation options are / are not set. IOW, you can use the **(T)** option or **jFormatCode** at any time.

There is also a 't' option in the **jed** editor, e.g.

- fibct

will 'fi'le, 'b'asic, 'c'atalog and call the code 't'ranslator.

### Runtime Strings (String comparison within a jBC process and jQL)

At first glance this will look pretty straight forward, as you could do something like:

- my\_id = "abc" then
- if my\_id = "ABC" then

With case sensitivity enabled the case of a string should not matter, **abc** is **ABC**. In jBASE currently, case does matter, it uses standard C libraries for pattern matching, in-fact for almost everything.

To get around this issue, whenever a string is assigned, an upper case version of the string is also created. This version is used for all pattern matching, however when strings are to be displayed we use the original version.

A simple example in jBASE could be as follows:

```
name = "Corwin"
LOCATE name IN employees SETTING pos THEN
   PRINT "found employee", name
```

When looking for "Corwin" in the list of names, we use "CORWIN", the list of names will also be in upper case so if it's in there we can easily find it. This additional version of the string should only be generated once and should have minimal impact on performance. Once enabled this behavior should be global, jQL should also behave the same way. This new behavior is controlled with the **case\_insensitive\_runtime\_strings** emulation option.

## Files

### Filename case

All files listed on JEDIFILEPATH get added to an internal lookup, although this may seem like overkill. Internally, whenever you try to open a file, jBASE will search all locations listed on JEDIFILEPATH until it opens the requested file. This will happen for every OPEN. Because the cacheing of filenames is only done when a new jBASE process starts, for most processes it should end up being a little more efficient as the internal cache of available files is also used by all child processes.

Typically, most users may start by opening a jShell or some form of menu, any new processes started will always check cached names first.

There are exceptions, things like a new file is created by another user. In these cases, files are opened using the existing mechanisms and the cache is updated.

This new behavior is controlled with the **case\_insensitive\_file\_ids** emulation option.

### Record ids

All files should now support case-less record IDs. For example,

```
READ data FROM file, "abc" ELSE NULL READ data FROM file, “ABC” ELSE NULL
```

will return the same record.

In order to be able to work with case insensitive record IDs, the files need to be created as case insensitive via the CASE=YES/NO option of [CREATE-FILE](./../../files/create-file/README.md).

If necessary, [jrf](./../../files/jrf/README.md) can be used to revise the case-sensitivity of a file.

You can list which files currently support casing via LISTF.

| FILENAME | TYPE | MODULO | SEP | BCKUP | CASING |
| ---      | ---  | ---    | --- | ---   | --- |
| MYFILE]D | J4 | 3 | 1 | yes | no |
| MYFILE | J4 | 691 | 1 | yes | yes |
| CUSTOMERS | J4 | 691 | 1 | yes | no |

Any files that support casing will be shown in the CASING column.

## jQL

### Queries and Verbs

All jQL statements and verbs should now work in any case. The following 2 jQL statements will function identically with no need to create redundant dictionary records:

```
list myfile with account_balance gt "0" firstname lastname account_balance
LIST MYFILE WITH ACCOUNT_BALANCE GT "0" FIRSTNAME LASTNAME ACCOUNMT_BALANCE
```

Commands, verbs and dictionary's should be usable in any case. This behavior is controlled with the **case\_insensitive\_queries** emulation option. Note that **case\_insensitive\_file\_ids** must also be set in order for the file name to be used in a case independent manner.

Setting the **case\_insensitive\_runtime\_strings** emulation option will cause string comparisons to be case independent. For example, the following 2 jQL statements should list the same records:

```
list myfile lastname WITH with lastname = 'smith'
list myfile lastname WITH with lastname = 'SMITH'
```

### Dictionary Items

Fields within the dictionary items are not yet full implemented. Attribute 1 and many conversions have been addressed and some formats currently work.

## New commands

### config-strings

This command displays the emulation options for a given emulation, the current emulation being the default if not specified.

```
cmd:     config-strings
desc:    Displays jBASE Config_EMULATE settings for a given emulation.
usage:   config-strings <<options>>
options: -help -emulation -list -@

where:
        -l -list, list sections in config_EMULATE
        -e -emulation <<mode>>, display section for a given emulation
           e.g. -e prime
        -@, show @ values
        -h -help, this page

e.g.    config-strings            - display setting for JBCEMULATE or default if not set.
        config-strings -e r83     - display setting for r83
        config-strings -e r83 -@  - display setting for r83, also show @ values
        config-strings -l         - list sections in config_emulate
        config-strings -h         - this page
```

### jFormatCode

This command reformats and parses jBC (BASIC) code to conform to the jBASE compiler.

```
cmd:     jFormatCode
desc:    formats existing code and ports BASIC code to jBASE.
usage:   jFormatCode filename
options: -file, -tabs, -parse, -diffs, -pause -replace, -quiet, -stamp, -confirm, -no_backup, -no_line_numbers, LPTR, -help

where:   -f -file, name of the file to read source from, default [.].
            -file /home/data/bp
         -t -tabs, number of spaces to pad and indent formatted source.
            -tabs 2,2
         -p -parse, call pre-parser to force code to conform to the jBASE compiler.
         -d -diffs, display line by line comparison of source during pre-parser.
         -pg pause output for each page. (q to quit)
         -r -replace, Overwrite original source with parsed source.
         -q -quiet, dont output source to screen.
         -s -stamp, add a time stamp to end of source.
         -c -confirm, dont ask if you really want to replace the file.
         -n -no_backup, dont create a backup of original version.
         -l -no_line_numbers, dont display line numbers in preview.
         LPTR, send to printer. (must be on end)
         -?, -h, -help, this page.

e.g:     jFormatCode -file /home/account1 -quiet -replace -no_backup my_prog.b
         jFormatCode my_prog.b LPTR
```

### CASE

New command to control case sensitivity at runtime.

One issue within jBASE is that some commands and functions will behave differently if strings are case insensitive. It may be that 99% of the time its not an issue but when it is you can do:

To disable:

```
CASE OFF
```

after issuing command case sensitivity will be disabled.

To enable it again simply do:

```
CASE ON
```

## Updated Commands

| <!----> | <!----> |
| --- | --- |
| LISTF | Changed to support case sensitive files. |
| jchmod | Changed to support case sensitive files. |
| BASIC | Changed to allow code formatting at runtime. |
| jcompile | Changed to allow code formatting at runtime. |

## New jBC statements

### CASING

Just like the new CASE command, within a jBC program you may need to disable case insensitivity. This new jBC statement will simply disable **case\_insensitive\_runtime\_strings** from within a jBC program, e.g.

```
x = 'HELLO'
CASING ON
IF x = 'hello' THEN CRT 'match' ELSE CRT 'no match'
CASING OFF
IF x = 'hello' THEN CRT 'match' ELSE CRT 'no match'
```

Program output:

```
no match
match
```

## Miscellaneous

For new users to jBASE there is now Pick style command stack in the jShell, .L, .X, .C.

Just enough to help with the transition.

Back to [Miscellaneous](./../README.md)  

<PageFooter />
