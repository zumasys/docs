# Converting from UNIX to Windows

**Created At:** 10/18/2018 3:51:58 PM  
**Updated At:** 11/26/2019 5:32:46 PM  
**Original Doc:** [converting-from-unix-to-windows](https://docs.jbase.com/converting-from-unix-to-windows)  
**Original ID:** 344783  
**Internal:** Yes  

## Document Scope

Discuss differences from converting from UNIX to Windows platforms.

[bd] Someone who knows how to do this should recommend solutions and not just identify issues.

[bd] I think we should look at whether something like CYGWIN could be an approach that could solve a number of the issues below.   I realize that later Windows releases have some of this 'built-in' but CYGWIN is fairly straight forward.  I see no references to it in any discussion.

## Details

links to child documents are encouraged to be placed here so we don't' have an extremely long document that will overload the user. The child document must be to the point, and must deal with ideally one topic. ideally the links should be in point form.

## 99% of jBASE remains intact

[bd] someone should add some prose here to make a developer feel better

[dk] Unless the application utilizes Linux-specific features (as indicated in the bullet points below), jQL, Proc, jBC (BASIC), indexes, etc. will (should) work the same on both platforms.

There are a few jBASE commands on Linux that don't exist on Windows, i.e.

```
jkeyauto
keys [I have a program that does the same thing on Windows]
rm_jbase_ipc
encrypt
```

There are several jBASE commands (in 'JBCRELEASEDIR\bin') on Windows that don't exist on Linux, but many of them are internal and match Linux functionality. Some commands on Windows that don't exist on Linux, some of which attempt to emulate UNIX commands, i.e.

```
jdir
jnmnt
jservcontrol
jstrings
telnetd
jstart
transcmd
jextract
jrm
jshmd
jfind
jmsgbox
jmv
lp
```

## cron Jobs -&gt; Windows scheduled tasks

[bd] Someone who knows how to do this should provide some common examples and show an example of how to move a cron job to a Windows task  #CYGWIN

[dk] No we shouldn't. There are **way too many permutations**. If the user is going to be on Windows then they had better get some training on it.

## SSH (not available on Windows versions except Windows 10, Windows Server 2019)

[bd] Someone who know how to do this should describe other ways that a Windows system can create scripted SSH callouts to another system.  #CYGWIN

## Regular expressions - @IM:'k' for jQL statements, escaping something that will cause a problem with windows

[bd] Someone with experience in this should describe a process they would use to detect these instances within code and further describe the problem and the solution. #CYGWIN

[dk] A manual search in all program files for:

```
@IM
CHAR(255)
|
>>
<<
> and < (in combination with @IM/CHAR(255)
```

However, the code may do something like:

```
shellout = @IM:"k"
...code...
EXECUTE shellout:cmd
```

in which case you would need to find all of the EXECUTE statements that use **shellout**.

You should also search for pipe and redirect symbols in any scripts.

## Carriage return line feeds different on Windows (not a major issue )

[bd] Someone should describe the issue and provide some recommended approaches for programs that read and write external CF/LF delimited files.  There should probably also be some description of functions used to write/read data to O/S files, a brief description of jBASE file handling and IOCTL and best practices and examples for detecting these practices in code.

## Executing OS commands: convert as many as possible to use variables supplied by JBC.h (e.g. CP\_CMD, MV\_CMD). This also includes DIR\_DELIM\_CH ( \ instead of  /) and DIR\_SEP\_CH ( ; instead of : )

[bd] Should describe approaches for detecting these, for writing wrappers, and how to implement the most common O/S callouts in Windows. #CYGWIN

## Explicit file/directory pathing: directory delimiters (see above: DIR\_DELIM\_CH)

[bd]] Someone with knowledge of this should provide some examples of coding techniques that are not portable and how your can write code that is multi-platform.  Examples are worth a thousand words.

## Printing (underlying print system, scripts for creating printers, printer drivers possibly written in bash script)

[bd] Someone should describe common printer script techniques used in Linux and how these could be translated to Windows equivalents.  Examples are worth a thousand words. #CYGWIN

## Bash profiles (convert to remote.cmd) and other utility scripts (possibly install cygwin tools to handle Linux commands)

[bd] Someone should describe this issue in more detail which will go into how Linux/UNIX calls initialization scripts and how these techniques are the same and different than Windows.  Examples of how to move a .profile or .bash\_profile into a Windows realm would be helpful to the reader.  i Think later versions of Windows supports BASH.  Also #CYGWIN

[mjs] Also WSL now.

## Different jBASE releases are harder to set up on Windows due to the Windows registry

[bd] Should create and link an article

[dk] There wouldn't be much to this 'article'. You simply remove all jBASE references from the Windows registry and create scripts that set up the environment, e.g.

```
001 @echo off
002 title Development
003 set JBCRELEASEDIR=C:\development
004 set JBCGLOBALDIR=%JBCRELEASEDIR%
005 set JBCEMULATE=jbase
006 set HOME=C:\home
007 set JEDIFILENAME_SYSTEM=%HOME\SYSTEM]D
008 set JEDIFILENAME_MD=%HOME%\MD]D
009 set JBASE_DYNAMIC_MULTISESSION=1
010 set JBCDEV_BIN=%HOME%\bin
011 set JBCDEV_LIB=%HOME%\lib
012 set PATH=%JBCDEV_BIN%;%JBCRELEASEDIR%\bin;C:\Windows\system32;C:\Windows;C:\Windows\System32\Wbem;C:\WINDOWS\SysWOW64
013 REM ===Compiler===
014 set PATH=%PATH%;C:\Program Files (x86)\Microsoft Visual Studio\2017\BuildTools\VC\Tools\MSVC\14.14.26428\bin\HostX64\x64;...
015 REM ==============
016 set JBCOBJECTLIST=%JBCDEV_LIB%
017 set JEDIFILEPATH=%HOME%
018 cd %HOME%
019 jsh.exe
020 exit
```

The main problem is that, when you upgrade, the installer will add back registry entries which you will have to remember to remove.

## Creating new users

[bd] Should explain how this is commonly done on Linux and the equivalent technique on Windows.  One should explain how environment variables are set and how profiles are called in both environments then show an example of how Linux techniques could be migrated to Windows techniques.

## The 'copy' command on Windows conflicts with the 'copy' command in jBASE. There is no 'copy' command on UNIX so no conflict

[bd] This one is pretty straight forward but should provide a technique for detecting this in code so that the user feels like they have been given some help.

[dk] This really should not be a problem. If they are EXECUTE'ing **COPY** in code then it will automatically use the jBASE one.

[dk] The real issue is if they use **COPY**at a Windows prompt and are expecting it to use the jBASE one. They have to remember to use **JCOPY**instead.

## Windows equivalents of Linux 3rd party software

[dk] For example, if they are using the Sublime Text editor then they would probably have to re-license this on Windows

[mjs] But now there is VS Code!
