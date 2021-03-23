# Getting started with jprof (jBASE Application Profiling)

<PageHeader />

Profiling is built in, there is no external application that needs to be installed,  it’s all right there in jBASE.

A single command starts the profiling, set the `JDIAG` environment variable and profiling is started. Then you enter your application and everything you do, every process that gets started underneath is all logged and profiled. That includes subroutines, triggers, menus, it doesn’t matter what you run. Then exit the application and unset the `JDIAG` environment variable and you are ready to view the profiling.

Profiling is done with a per user-session based concept. You enable profiling for your session and then enter your application and run the portion of the app that you want to profile. You will be profiling your session and any subroutines, triggers, executes, etc. Anything that the application runs or calls during your session will be profiled. Once that portion has completed, you will want to disable profiling on your session to limit the profiling log to just the part of the app that you want to profile.

## Starting profiling

Starting the profiling is accomplished with 1 command:

`export JDIAG=profile=long:filename=fb1.txt`  <- this creates 1 file

Typically you will want to create several files, one for each process that gets exec’d or forked.

`export JDIAG=profile=long:filename=fb1_%p.txt` <- captures the process id and creates a separate file for each process that is created during the profiling.  

`export JDIAG=profile=long:filename=fb1_%p_%t.txt` <- creates multiple files with `%p` being the pid of the process and `%t` being a time stamp.

## Note

>Profiling must be started external to the jBASE environment, you need to enter jBASE with profiling already running as a result of setting `JDIAG`.  
>Changing `JDIAG` while you are already running a jBC program will not initiate the profiling, you must initially set `JDIAG`.

```bash
# export JDIAG=profile=long:filename=fb1.txt
```

This command above says we are going to start profiling and the output is going to be in a file called *fb1.txt*.

```bash
# unset JDIAG
# export JDIAG=profile=long:filename=fb1_%p.txt
```

The commands above first clear the `JDIAG` environment variable using the 'unset' command, then says we are going to start profiling and the output is going to be in files called *fb1_%p.txt* where `%p` will be the separate process numbers that are profiled.

```bash
# export JDIAG=profile=long:filename=fb1_%p_%t.txt
```

This command above says we are going to start profiling and the output is going to be in files called *fb1_%p_%.txt* where `%p` will be the separate process numbers that are profiled and `%t` will be an additional time stamp, useful when there are many processes to be profiled.

## Windows Notes

The above examples are for Linux but the concept is the same for Windows. The command to assign and unassign the `JDIAG` environment variable is slightly different using the `set` command.  

```
C:\windows\system32>cd ..

C:\Windows>cd ..

C:\>echo %JDIAG%
%JDIAG%

C:\>set JDIAG=profile=long:filename=fb1.txt

C:\>echo %JDIAG%
profile=long:filename=fb1.txt

C:\>set JDIAG=

C:\>echo %JDIAG%
%JDIAG%

C:\>
```
Note: to include the %p and %t values (process ID and timestamp) in the filename in Windows the % character needs to be escaped.  From a command line the % sign can be escaped using the caret ^ character.  From a bat file the % sign needs to be escaped using another % sign; e.g.:

Command line:
```bash
C:\>set JDIAG=profile=long:filename=fb_^%p_^%t.txt
```

.bat file:
```bash
SET JDIAG=profile=long:filename=fb_%%p_%%t.txt
```

## Start the application

Once the `JDIAG` environment variable has been set you enter a command to run the application or start a jsh and run the application. Here is a snap of the steps being used to demonstrate the sequence for this test.

```
# export JDIAG=profile=long:filename=fb1.txt
# jsh
jsh  ~ -->logto ROBERT
jsh ROBERT ~ -->make-demo-file 1000000 CUSTOMERS
File Type (JD=Dynamic=default, JP=jPlus, J4, UD=Directory, X=Exit):
[ 417 ] File CUSTOMERS]D created , type = JD
[ 417 ] File CUSTOMERS created , type = JD
1,000,000 processed
1,000,000 records created.
jsh ROBERT ~ -->exit
# unset JDIAG
```

## Examining the profile

Our profiling output is in a single file called _fb1.txt_. You can cat this file to see the contents but to make more sense of it the `jprof` command is used to parse and present the profiling information. The complete syntax and options can be displayed with the `jprof -h` command.

```bash
# jprof -h
Called as :
     jprof -kfilename {-t} profile_list
     jprof -a profile_list
     jprof -j ON|OFF portnumber | %  {filename options}
     jprof -o {-v} profile_list
     jprof -p {-v} profile_list
     jprof -s profile_list
     jprof -A {-v} profile_list
     jprof {-n{-u}} {-i} {-fFilename} {-Flistoffiles]} profile_list
     jprof portno{-portno} jprof commands
Where :
     -a           Display all ancilliary information.
     -j           Turn ON or OFF JIMI
     -fName       Name of file to extract source from.
     -FNameList   List of names of files to extract source from.
     -i           Sort by increasing ticks, rather than decreasing tick.
     -kKeyFile    Name of file to store keyboard INPUT, used by jkeyauto.
     -n           Subtotalled and sorted by source name
     -o           Display shared object usage
     -p           Display programs PERFORM'ed
     -s           Display list of subroutines called
     -t           Generate a TYPERATE statement for each INPUT statement
     -u           Sorted by CPU utilisation
     -v           Verbose mode
     -A           ALL, same as -a , -o , -p and -s
     portno       The port number to use. Some commands allow % for your current port
     profile_list One or more input files generated by profiling an application
#
```

The first use of `jprof` is to display a summary of the profiling log with `jprof -a -f. fb1.txt.`

```bash
# jprof -a -f. fb1.txt
Command line  : jsh -
Process ID    : 57
Parent pid    : 17
Start time    : 26 JUN 2020 22:01:42
End time      : 26 JUN 2020 22:01:42
CPU usage     : User 10.94 , System 2.51
Profile ticks : 2,679
Index count   : None
Trigger count : None
Page size     : 4,096
Memory        : Used 239,856 , Free 896,768
INPUT count   : 54
Keyboard speed: 54 characters in 0 secs , 0 secs per keystroke
Resource info : Maximum resident set size          : 277996  (1,138,671,616 bytes)
                Integral resident set size         : 0  (0 bytes)
                Page faults with no I/O            : 550821
                Page faults requiring physical I/O : 0
                Swaps                              : 0
                Block input operations             : 56
                Block output operations            : 4997536
                Messages sent                      : 0
                Messages received                  : 0
                Signals received                   : 0
                Voluntary context switches         : 177
                Involuntary context switches       : 276
File I/O      : READ      statement count          : 41
                WRITE     statement count          : 1000018
                DELETE    statement count          : 3
                CLEARFILE statement count          : 0
                OPEN      statement count          : 33
                PERFORM   statement count          : 2
#
```

Remove the `-a` for a report sorted by line number and CPU usage: `jprof -f. fb1.txt`

```bash
# jprof -f. fb1.txt
Profile of program jsh from profile fb1.txt
Source name          Line#  Ticks    %      Source

make-demo-file.b     361    856      32.93  attr14->$append(50 + RND(2000))
                     360    433      16.66  attr13->$append(systemtype<1+RND(csystemtype)>)
                     345    345      13.27  rec->city = city<1+RND(ccity)>
                     356    213      8.19   attr14 = new array
                     353    140      5.38   attr11 = new array
                     358    114      4.38   attr11->$append(hardware<1+RND(chardware)>)
                     354    106      4.07   attr12 = new array
                     355    83       3.19   attr13 = new array
                     362    64       2.46   NEXT x
                     363    39       1.5    rec->hardware = attr11
                     335    34       1.3    REPEAT
                     334    33       1.26   WRITE dictentry ON dm, id
                     357    32       1.23   FOR x = 1 TO cc
                     348    26       1      rec->hometel = hometel<1+RND(chometel)>
                     352    24       0.92   cc = RND(8)
                     349    21       0.8    rec->worktel = worktel<1+RND(cworktel)>
                     351    17       0.65
                     350    14       0.53   rec->email = OCONV(rec->firstname:rec->lastname[1,1],"MCL"):email<1+RND(cem
                     347    3        0.11   rec->zip = zip<1+RND(czip)>
jmainfunction.b      364    1        0.03   ??
jsh.b                153    1        0.03   ??
#
```

You can see above that the primary sort is on cpu usage by source code line number across all programs or subroutines that were run. It may be more informative to look at each program or subroutine individually so the next use of `jprof` would be to add the `-n` option, `jprof -n -f. fb1.txt`.

```bash
# jprof -n -f. fb1.txt
Profile of program jsh from profile fb1.txt
Source name                 Line#  Ticks    %      Source

make-demo-file.b             360    909      5.25   attr13->$append(systemtype<1+RND(csystemtype)>)
                             345    732      4.23   rec->city = city<1+RND(ccity)>
                             356    268      1.54   attr14 = new array
                             358    181      1.04   attr11->$append(hardware<1+RND(chardware)>)
                             353    165      0.95   attr11 = new array
                             362    152      0.87   NEXT x
                             354    118      0.68   attr12 = new array
                             361    109      0.63   attr14->$append(50 + RND(2000))
                             355    100      0.57   attr13 = new array
                             334    99       0.57   WRITE dictentry ON dm, id
                             363    84       0.48   rec->hardware = attr11
                             352    53       0.3    cc = RND(8)
                             335    46       0.26   REPEAT
                             357    30       0.17   FOR x = 1 TO cc
                             349    25       0.14   rec->worktel = worktel<1+RND(cworktel)>
                             348    24       0.13   rec->hometel = hometel<1+RND(chometel)>
                             351    11       0.06
                             347    7        0.04   rec->zip = zip<1+RND(czip)>
                                -------- --------
                                   3132     18.01

TRIGTEST                     3      5317     30.74  WRITE RECORD ON F.TEST1,RECORDKEY
                             2      4101     23.71  OPEN "TEST1" TO F.TEST1 ELSE DEBUG
                             4      35         0.2    RETURN
                                -------- ---------
                                   9453     54.65


```

In the output above you can see the display break on each separate program module that was executed during your profile run.  
To display the subroutines that were called in the profile, use just the `-s` option: `jprof -s -f. fb1.txt`

```bash
# jprof -s -f. fb1.txt
Subroutines called by program jsh from profile fb1.txt
Times       Subroutine

2000003     TRIGTEST
22          JBASECommandNext
3           JBASECommandInit
2           main()
#
```

Different combinations of options will enhance the output until you find the optimal information to allow you to move forward with your performance profiling.

Profiling is mainly used to concentrate on CPU usage per process, per user, per line number of source code. Profiling can be set to concentrate instead on memory usage for resource planning and to identify if you have introduced memory inefficiencies or memory leaks in your application. Program branches can also be profiled, which will examine the flow of your program in the context of subroutine calls and executes.
Profiling can also be set to jimi mode (jBASE independent metrics information) which provides information on transactions and file I/O. The complete range of profiling environments can be displayed with the command:  

`JDIAG=help WHO`

```bash
# JDIAG=help WHO
JDIAG=option{:option{:option ...}}
option can be one of ...
        profile={off|short|long|user|jcover|all}
        filename={stdout|stderr|tmp|pathname{,refresh_mins}
                 (%p in pathname is substituted with process id)
                 (%t in pathname is substituted with time stamp)
        memory={off|on|verify}
        branch={off|on|verbose}
        jimi={database|open|fileio|branch|call|perform|transaction|all|verbose}
        help
#
```

Look for future quick starts on profiling memory and the various other advanced features of jBASE profiling.

Back to [Reference Guides](./../README.md)  
  
<PageFooter />
