# jkeyauto Profiling

**Created At:** 8/31/2018 1:39:16 PM  
**Updated At:** 5/16/2019 6:28:02 PM  

**Tags:**
<badge text='program profiling' vertical='middle' />

## Creating a Profiling Statistic File 

Profiling statistics for a jBC program can be created using the -JP option. For example, the program below will capture statistics about database I/O , keyboard input, subroutine calls and where the program spends its CPU time, then store the results in a file called jprof.

```
% MYPROG -JP BP ITEM1
```

This provides a "long" profile of the program MYPROG and stores the result in file the Unix file ./jprof. The capturing of where the program spends its CPU time is done by setting an alarm to go off every clock tick. This can be quite an overhead (up to 20%) so although it is useful to find where an application is spending its time, it is bad news for benchmarking. A "short" profile of an application can be generated with the -JPS option as:

```
% MYPROG -JPS BP ITEM1
```

This provides a "short" profile of the program MYPROG and stores the result in the Unix file ./jprof. Statistics about database I/O , keyboard I/O , subroutine calls will be captured, but not about where the application spent its CPU time. This option has very little performance impact on the application itself.

Instead of the -JPS, setting the environment variable JBCPROFILE to enable profiling is another option. Use a value of 1 for long profiling or 2 for short profiling. The file name created is not jprof, but is jprof\_nnnnn\_mm where nnnnn is the process id and mm is the numeric value JBCPROFILE was set to. Using this environment variable means one profiling statistic file is created for each program loaded and there is no need to modify the application or command line to initiate profiling. The bad news is you could get a considerable number of jprof\_nnnnn\_mm files created and you should clean these files up as necessary. For example

```
% export JBCPROFILE=2
% MYAPPLICATION
% jsh
jsh . LIST MD TOTAL *A1
jsh.exit
```

In the above example a profiling file will be created for MYAPPLICATION , jsh and LIST , and as the value of JBCPROFILE is set to 2, it will be a short profile.



## Using the Profiling Statistic File 

Once the jprof file (or jprof\_nnnnn\_mm) has been created it can be manipulated. This is done by the command jprof, which has a number of options to support different functionality.

One of the uses of jprof is to create a jkeyauto script from a jprof profiling file. Consider:

```
% MYAPPLICATION -JPS FILENAME ITEMNAME
% jprof -k script1
% jkeyauto script1
```

which runs an application with the -JPS option. This causes short profiling to be enabled and the statistics generated to be written to Unix file ./jprof when the application terminates. During this process all keyboard input is captured and timed (amongst many other things).

The second command , jprof, will take the Unix file ./jprof (as created by MYAPPLICATION) and will create another Unix file called ./script1. This script file will contain details of how MYAPPLICATION was loaded, what keyboard speed was used, other timings, keyboard input and so on.

The third command , jkeyauto, will now execute the script "script1". The upshot of the jprof and jkeyauto programs is that MYAPPLICATION will now be re-run exactly as it was originally, with the same timings and the same keyboard speed.

The file script1 may be edited with any Unix or jBASE editor and amendments made as required. The command "jprof -k script1" simply provides a template that best matches what was done originally.

There are more options to jprof than described here, again the Advanced Programmers Reference Manual describes them, or use "jprof -h" for a summary. Options include displaying profiling lines and sources, ancillary information such as CPU usage, database I/O etc., options to display subroutines called and so on.





### Full example

Below is a full example of a jkeyauto script complete with comments. It shows a program being executed on a remote machine complete with timings.

```
*
* Program to call test1 on machine "jacboy1"
*
progname = "BIGPROGRAM"
TYPEDELAY 0.50 ;* Become a slow keyboard block
T1 = $TIME ;* Store the time we started
*
* Begin a program using telnet. Allow the stdout and stderr
* to be re-directed also to this screen
*
PROGRAM "telnet jacboy1" STDOUT "-" STDERR "-"
pipeno = $PIPE ;* Get pipe number it started as
*
* Wait for the login prompt from the remote machine
*
PIPEREAD PIPE pipeno FOR 30 SETTING rc UNTIL "login:"
IF rc lt 0 THEN CRT "Error ":rc:" on PIPEREAD" ; EXIT 1
*
* Add our account name and wait for the password prompt
*
INPUT "jbasedev"
PIPEREAD PIPE pipeno FOR 30 SETTING rc UNTIL "Password:"
IF rc lt 0 THEN CRT "Error ":rc:" on PIPEREAD" ; EXIT 1
*
* Add the password and wait until the shell prompt is seen
*
INPUT "not-telling-you"
PIPEREAD PIPE pipeno FOR 30 SETTING rc UNTIL "jbasedev:"
IF rc lt 0 THEN CRT "Error ":rc:" on PIPEREAD" ; EXIT 1


*
* Change to my own directory.
*
INPUT "cd greg"
PIPEREAD PIPE pipeno FOR 30 SETTING rc UNTIL "greg:"
IF rc lt 0 THEN CRT "Error ":rc:" on PIPEREAD" ; EXIT 1
*
* Start off the program running.
*
INPUT progname
loop = 0
PRINT
*
* We are logged onto the remote machine and the program has now
* been started. We want to pause at this point and wait for
* the UNLOCK command to be executed. Then go in a loop and wait
* for the operator to reset this lock giving a message every 20
* seconds we wait.
*
SYNC LOCK 0 ;* Ensure lock is taken
waitagain:
PRINT "Process ":$PID:" waiting for sync signal ..."
SYNC WAIT 0 FOR 20 SETTING rc
IF rc EQ 1 THEN GOTO waitagain
IF rc NE 0 THEN PRINT "Error ":rc:" doing the sync" ; EXIT 1


*
* Lock now unset. The application has started . We can
* begin writing to the application. Wait for the program
* to send us a "Enter your name :" prompt.
*
PRINT "Process ":$PID:" started test"
PIPEREAD PIPE pipeno FOR 30 UNTIL "Enter your name :" SETTING rc
IF rc GT 0 THEN GOTO okay1
PRINTERR "Fatal error ":rc:" while executing ":progname
PRINTERR "Now exiting"
EXIT 2
okay1:
*
* We will let the application know our name and then start
* a timer by seting variable "time1" to the number of seconds
* since machine was booted. This is accurate usually to the
* nearest 1/100th or 1/50th of a second.
*
INPUT "GREG"
time1 = $UBOOT
*
* Wait until the program has done its work. When it has done it,
* it will send some stuff to the terminal , the first part
* of which is "nnn records processed". At this point we complete
* the PIPEREAD command. If we get no response within 100 seconds
* we will time out and report an error.
*
PIPEREAD PIPE pipeno FOR 100 UNTIL "records processed" SETTING rc
time2 = $UBOOT
IF rc GT 0 THEN GOTO okay2
PRINTERR "100 second timeout-- fatal error"
EXIT 2


okay2:
*
* Display to stdout the response time to execute this
* bit of a program. This output can be captured by whatever
* invoked jkeyauto and analyzed later.
*
CRT "TIMER1 ":time2-time1:" seconds"
*
* We could go on for ever, but I don"t want to.
* We will now just wait for our test program to complete,
* if it hasn't done so already.
*
WAIT PIPE pipeno
*
* Seems to have worked okay.
*
EXIT 0
```
