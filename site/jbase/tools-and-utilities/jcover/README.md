# jcover

<PageHeader />  

**Tags:**
<badge text='statistical information' vertical='middle' />

## Description

jcover programs provide a mechanism to generate statistical information on the coverage of an application during a test run. It can be used to calculate the percentage of code that was executed, percentage not executed, what sources were not used in files and so on.

The usage of jcover depends upon much of the existing profiling tools. Therefore this document should be used in conjunction with existing documentation available for profiling tools. The jcover utility can be used to great advantage with the [jkeyauto](./../jkeyauto/jkeyauto) utility. Using both of them together it is possible to build up highly automated scripts that will automatically test new releases of software and ensure that a known percentage of the entire application gets executed as well as ensuring that all paths through the application are executed and tested.

Using jcover involves these 3 key steps:

1. Run the application and record the information.
2. Collating the recorded information.
3. Reporting the jcover information.

* * *

### Recording the information

This phase involves running an application in a certain manner and allowing jBASE to record the statistics about the lines of code that were executed whilst the application was run. There are two ways of telling jBASE to record this information

- **Use the -JC option to run the program.**

For example:

```
% MYAPPLICATION -JC COMMANDARG ETC ETC
```

In the above example, when the application ‘MYAPPLICATION’ terminates a file called ‘jprof’ will be written to the current working directory which contains all the profiling information for this application.

- **Set the JBCPROFILE environment variable to 3.**

For example:

```
% JBCPROFILE=3
% export JBCPROFILE
% MYAPPLICATION COMMANDARG ETC ETC
```

In this second invocation jBASE will create a file in the format **jprof\_mmmmm\_nnn**, one file for each program that is executed where **mmmm** is the process id and **nnn** is the PERFORM/EXECUTE level. In this way you can generate multiple copies of profiling information which will automatically include all executed procs and programs. Each file will be stored in the current working directory as of when the application was loaded.

Remember to unset the JBCPROFILE environment variable when you are finished otherwise you will find a very large number of the profiling files cluttering up your directory.

It might be useful to run the application in question through a jkeyauto script. In this way, a test case can be more accurately repeated, and repeatedly use the jcover tools to ensure as much as possible percentage of an application is executed.

At the end of the recording phase one or more profiling files would have been generated. These profiling files can then be used in the second stage of jcover profiling. Remember that as Unix files they can be easily moved and renamed, particularly useful in cases where a number of test cases are run using the -JC option, and each time renaming the generated ‘jprof’ file to something else, such as jprof\_a , jprof\_b and so on, then in the next phase only specify multiple file names to be manipulated.

* * *

### Collating the information

Once one or more profiling files have been recorded, collation of the information is possible. This is the function of the jcover program. The jcover program may be run as:

```
jcover {-fFilename {-fFileName ...}} {-oOutputFile} {-ddelim} {-e} {-h|?} {-u} {-x} {jprof {jprof ...}}
```

where:

- -ddelim -  changes the delimiter in output records from '\*'
- -e - writes out verbose details of all lines of code executed
- -fName - name of file to extract source from
- -h|-?  - help screen output
- -oOutputFile  - is the output file name
- -u -  writes out details of unused source code in the supplied input files
- -x - writes out verbose details of all lines of code NOT executed
- prof - profile name

By default it will take the input Unix file ‘jprof’, extract some statistical information about it, and write it back out to a newly-created file called **jcover\_nnn** where **nnn** is your port number. It will also create suitable dictionary items.

The default information stored will be a summary of the percentages of all source items executed. You can use the **-e**, **-u** and **-x** options to create additional statistical information.

The **-oOutputFile** option allows for specifying an alternative output file to jcover\_nnn (where nnn is the port number in use ). If this option is not used, defaults to jcover\_nnn and create the file if necessary. Whatever file name chosen, both the DICT and the DATA section will be cleared and suitable DICT items written away for later usage.

Once this phase is complete, an output file ready for use with the final phase.

* * *

### Reporting the information

This third phase requires the use of the file created in the second phase. For the discussion at hand, the file will be called jcover\_23 , but in fact it can be any file name used as the output of the jcover program.

There are basically 3 ways of using the information created in file jcover\_23

1. Using jQL with the default DICT macros

To show a summary of percentages of coverage use:

```
LIST jcover_23 STATS
```

To show a summary of general information, such as times, dates, files used and so on. Use:

```
LIST jcover_23 GENINFO
```

If the -e option was used, you can display a list of all the lines of source code executed with:

```
LIST jcover_23 EXEC
```

If the -x option was used, you can display a list of all the lines of source code not executed with:

```
LIST jcover_23 NOTEXEC
```

If the -u option was used, you can display a list of all source items that didn’t have any code executed during the application execution

```
LIST jcover_23 NOTUSED
```

2. Using jQL with your own command line

This involves simply using a jQL statement with something other than the supplied macros. For example you could:

```
LIST jcover_23 WITH S.ITEMID EQ “MAR]” S.ITEMID
```

3. Using a jBC program

Refer to the [layout](./../layout-of-the-jcover-output-file) of the output file and the dictionaries to write your own jBC program to further report on the information available.

* * *

## Caveats

**1.** At present, jcover is available on Unix platforms only.

**2.** When you are running profiling for jcover your application will run at 2-20 times slower, so this type of profiling isn't suitable for performance measurement at all. If you use this against batch jobs, you may find this performance degradation is too much. You will additionally use around 0.5 to 5 Mb extra memory per application while running this jcover profiling.

**3.** The profiling can only detect whole lines of code executed , or not executed. In the following line of code:

```
READ record FROM filevar, itemid ELSE record = "xxx" ; GOSUB subname
```

the jcover profiling will only record the fact the READ statement was executed -- it cannot be used to determine if the code following the ELSE was executed or not. If you want to test for this, then the application will need to be changed so that the ELSE code is on a separate line. This isn't bad programming practice anyway.

**4.** There are problems with the debugger information generated with jBC that have been mostly fixed on jBASE release 3.1 . This work is on-going. In the meantime to get the most accurate representations of your application you should re-compile and re-catalog all of your application under jBASE 3.1.

**5.** Some jBC code is not really executable. These statements will be treated as comment lines and so not recorded in the statistics about lines of executable code and code not executed. These include:

- Code labels with no source code e.g. "EXITPROG: \* Comment"
- NULL
- EQUATE
- INCLUDE
- $INCLUDE
- SUBROUTINE
- BEGIN {CASE}
- END {IF} {CASE}

Back to [Tools and Utilities](./../README.md)

<PageFooter />
