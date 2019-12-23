# JCL TR

**Created At:** 6/8/2018 10:10:00 AM  
**Updated At:** 6/11/2018 4:19:25 AM  
**Original Doc:** [321277-jcl-tr](https://docs.jbase.com/45792-jcl/321277-jcl-tr)  

**Tags:**
<badge text='jcl' vertical='middle' />

## Description 

The command traces jCL program execution and displays each command (source line) before it is executed.

```
TR {ON}
TR OFF
```

The TR command will help you to test and debug your jCL programs.A general purpose trace program may be provided by creating a jCL program called TRACE in the file defined by the JEDIFILENAME\_MD environment variable. The TRACE program should look like this:

```
TRACE
001 PQN
002 TR ON
003 (%1 %2)
```

Run the TRACE program like this:

```
TRACE jcl_file jcl_program
```

If the target program relies on the initial content of the PIB, the following line will have to be inserted into the program like this:

```
002 MV %1 %2,*
```

to move the PIB parameters to their required positions - otherwise the word TRACE will appear in %1 and the jCL program name (normally in %1) will be in %2.



### EXAMPLE

```
001 PQN
002 TR
003 MV %21 ","," "
004 MV %98 1,A
005 S21
006 U147F
007 T MTS
008 S23
009 U147F
010 D D2
011 T "Today"s date is ", %23
012 T "the time is ",%21
013 TR OFF
```

will output:

```
MV %21 ","," "
MV %98 1,A
S21
U147F
S23
U147F
T "Today"s date is ", %23
Today"s date is 01/01/95
T "the time is ",%21
the time is 19:30:32
```

Line 2 turns the trace on. Line 13 turns it off.



Back to [JCL Commands](./../jcl-commands)
