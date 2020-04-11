# Performance

<PageHeader />

The majority of legacy applications tend to be launched from a "logon" proc and usually also require a certain amount of initialization before launching the application. For example setting the terminal type and assigning spooler queues.

Once these applications have been ported the application launch procedure should be reviewed with a view to reducing the number of resources required to simply start the application.

For Example:

Imported application "logon" procedure:

| <!----> | <!----> |
| --- | --- |
| Process1 | Login-&gt;exec ksh Login and execute ksh |
| Process2 | jsh - Start jSHELL and launch logon proc |
| Process3 | Logon Proc Initialize and launch main menu |
| Process4 | Main Menu Call menu options |

As can be seen from the above that four processes are required just to start the menu. Also in the above scenario it maybe possible if to secured that the user can exit the main program then they can gain access to the jsh and or ksh, which may not be desirable.

The number of processes can usually be reduced and in doing so also provide better protection from ksh or jsh.

For Example:

Modified "logon" procedure :
Process1   login-&gt;exec ksh-&gt;exec MainMenu Login, exec ksh, exec Main.

Now the application is only using one process to execute the main program therefore reducing the resource requirement of the machine. Any initialization required can usually be handled in the .profile before executing the MainMenu. In addition if the user attempts to exit to ksh or jsh the user is disconnected as there is no ksh or jsh process available, thus securing the application.

## BASIC

The BASIC command is provided as a front end program to the jBASE jbc compiler. The jbc compiler converts the BASIC code into "C" and envokes the native "C" compiler to convert the "C" source code into a machine native object file.

Basic syntax and options

```
BASIC -v -wn -Ipath FileName Itemlist (On En Wn Ipath
```

| Option | Description |
| --- | --- |
| -v | Verbose mode. |
| -wn | Set the warning level to 0, 1, 2 or 3. See later. |
| -Ipath | Path for include files. |
| (On | Optimize the code. No debugging information generated. |
| (En | Optimize the code. As the (O) option. |
| (Wn | Set warning level to 0, 1, 2 or 3. See later |
| (Ipath | Path for include files. |
| (V | Allow persistent variables in subroutines. |

If the record key selection is omitted, BASIC will use any preceding select list. If the BASIC command has no select list, it will use all records in the specified file.When processing the list of record keys, the BASIC command will ignore any $ prefixes and .o or .obj suffixes and build up a list of source names. Using this mechanism, you can safely use BASIC on all records in a file, and it will only process the sources you intended. The jbc and BASIC commands allows 4 levels of warning to be generated.

The "O" option should be invoked when compiling programs for final release. The default for this option is optimization level 3, which still provides debug information but the C code is optimized. Level 4 "O4" provides full optimization. The default level for the BASIC command is level 2.

**Note** To copy binary object files such as $PROG or PROG.o from Hash files to directories or vice versa use the B option of the jBASE [COPY](./../../../files/copy) command. This will ensure conversion of attribute mark characters to new line and vice versa is suppressed thus invalidating the binary object.

## CATALOG

The CATALOG command can be used to improve the memory efficiency of the machine by grouping regularly used subroutines into the same or adjacent shared libraries. Also redundant subroutines should not be cataloged.

For example, an application making regular calls to subroutine "OFTEN", which was initially catalogued directly before or between or after subroutines "NEVER" and "BLUEMOON" may well reside in the same shared library as the other two little used subroutines. When a library function is required the whole shared library is loaded into memory. i.e. When the subroutine "OFTEN" is first called the shared library containing that subroutine is loaded into memory along with any other library routines it contains like "NEVER" and "BLUEMOON".

Therefore if regularly used subroutines can be identified then system resources can be maximized by initially cataloging each subroutine by order of use. This can easily be achieved via a preset select list.

## PATH

When first starting or executing an application program the system uses the environment variable "PATH" to find the required executable. The "PATH" is searched in order from right to left, the search is complete when the first matching executable is located. To optimize executable lookup ensure that the executable path for the application is the directory after the jBASE release directory. The "PATH" environment variable is also a useful tool, which can be manipulated to force users to find customized or development executables before the default or originals.

When searching for shared libraries the environment variable "LD\_LIBRARY\_PATH", "LIBPATH", "SHLIB\_PATH" or "LIB" is used dependent upon the platform. This environment variable is usually only used to find jBASE or system shared libraries.

Shared libraries containing application subroutines are located using the JBCOBJECTLIST environment variable or by default the "lib"
subdirectory in HOME directory. The JBCOBJECTLIST library path can also be used to force users to locate customized or development subroutines like the "PATH" variable.

## Profiler

The jBASE profiling tools jprof enables developers to analyze applications to determine potential bottlenecks or trouble spots within the application code.

By default, no profiling is done in the program. Programs do not have to be compiled in any special manner to enable profiling for that program. All that is required is that the programs were not compiled with optimization, as this discards the debug information which is required for profiling.

The mechanism works by receiving a signal at every clock tick and keeping note of where the program was when the signal arrived. Thus, for the profiling to be accurate, the application must be run for a relatively long time. It will not show particularly good results if, for example, a program executes in less than a second. Several minutes or longer is preferred.

## Enabling Profiling

Profiling can either be enabled using the \_JP option on program execution or via the JBCPROFILE environment variable. e.g.
MAINPROG -JP

This command generates a profiling file called "jprof" in the current directory. When the application stops or chains to another program
profiling is terminated.
JBCPROFILE=1 MAINPROG

This command generates a different profiling file for each process executed in the form "jprof\_pid\_n", where pid is the process id and n is an incrementing number starting at the number set be JBCPROFILE.

The profiling file generated will only contain information about user CPU time. The time spent in system calls is not included. Therefore, doing a lot of file I/O means that this time will not be included in the profiling statistics.

## Profile Reporting

The jprof command is used to provide profile analysis of the jprof files generated by a program executed with the -JP option.

Called as :
**jprof -kfilename {jprof{\_nnn}}
jprof -a {jprof{\_nnn}}
jprof -o {-v} {jprof{\_nnn}}
jprof -s {jprof{\_nnn}}
jprof {-n{-u}} {-i} {-fFilename}} {jprof{\_nnn}}**

| Option | Description |
| --- | --- |
| -a | Display all ancillary information. |
| -fName | Name of file to extract source from. |
| -i | Sort by increasing ticks, rather than decreasing tick. |
| -kKeyFile | Name of file to store keyboard INPUT, used by jkeyauto. |
| -n | Subtotaled and sorted by source name |
| -o | Display shared object usage |
| -s | Display list of subroutines called |
| -u | Sorted by CPU utilization |
| -v | Verbose mode |

jprof{\_nnn} Profile name (default "jprof")

## Example of Profiling

Imagine the source "test1.b" below has been edited into file BP, where BP is a directory. Notice the INCLUDE of another source file "test2.b".

```
OPEN "fb1" TO DSCB ELSE STOP 201,"fb1"
PRINT "Phase 1 -- start"
S1 = SYSTEM(9)
FOR Id = 1 TO 100
   Rec = "
   FOR I = 1 TO 100
      Line = "
      FOR J = 1 TO 20
         Line := CHAR(SEQ("A")+RND(26))
      NEXT J
      Rec = Line
   NEXT I
   WRITE Rec ON DSCB,Id
   NEXT Id
CRT "Phase 1 -- end, CPU = ":SYSTEM(9)-S1
INCLUDE test2.b
CRT C1:" records in file fb1"
CRT "End"
```

The program can be created normally with the following command:

```
cd BP
jbc test1.b -o ../test1
cd ..
```

or it can be created with BASIC and CATALOG:

```
BASIC BP test1.b
CATALOG BP test1.b
```

By default, when the program is run, no profiling will take place. Now run the program with the -JP switch to create a file "jprof":

```
test1 -JP
```

We can now examine the profile file with the "jprof" command, using the -f option to generate optional source code listings from the file BP.

```
jprof -f BP jprof
```

## Profile Report

```
Profile of program test1 from profile jprof Page 1
Source Line Ticks % Source
test2.b 8 166 32.93 READ Rec FROM DSCB,Key EL
test1.b 9 160 31.74 Line := CHAR(SEQ("A")+RND(
test1.b 11 128 25.39 Rec = Line
test2.b 7 28 5.55 WHILE READNEXT Key DO
test1.b 10 9 1.78 NEXT J
test2.b 9 5 0.99 C1++
test1.b 13 3 0.59 WRITE Rec ON DSCB,Id
test2.b 5 2 0.39 SELECT DSCB
test1.b 7 2 0.39 Line = "
test2.b 10 1 0.19 REPEAT
```

The -i option would sort the output with incrementing Ticks counts. The -n option would additionally sort it by file name, so the
"test1.b" entries will be displayed separately to the "test2.b" entries.

[Back to Artciles](./../README.md)

  
<PageFooter />
