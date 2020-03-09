# Invoking the jBC Debugger

**Created At:** 12/13/2017 10:21:27 PM  
**Updated At:** 2/22/2019 6:12:52 PM  
**Original Doc:** [291164-invoking-the-debugger](https://docs.jbase.com/41693-debugger/291164-invoking-the-debugger)  
**Original ID:** 291164  
**Internal:** No  

## Description

The jBC debugger is invoked in a number of ways:

Once the debugger is entered, an identification message is displayed and the debug shell prompt is displayed. The message gives the reason for the program entering into debug, the line number about to be executed, and the source file name. The final line is the debug prompt, after which the user is expected to enter a debug command.

The following examples show the display after entering the debugger in various ways.

- **Using the -Jd Option at Runtime**

```
ExampleProg -Jd
Option -Jd seen on command line
Source ExampleProg.b,Line 1, Level 2
jBASE debugger..
```

- **A DEBUG Statement in the Program**

```
ExamleProg
DEBUG statement seen
Source ExampleProg.b, Line 39, Level 2
jBASE debugger..
```

- **Using &lt;Ctrl-C&gt; Key from the User Terminal**

```
Interrupt Signal
Line 157, Source ExampleProg.b
jBASE debugger ..
```

- **Receiving a kill -16 Command from another Terminal (Unix only)**

```
Signal 16 seen from signal handler
Line 73, Source ExampeProg.b
jBASE debugger ..
```

- **Run Time Error**

For example, when a variable containing a string is used as if it contained a number, the following is seen:

```
Non-numeric value -- ZERO USED ,
Variable "XFER.ID", Line 78, Source ExampleProg.b
jBASE debugger ..
```

Back to [jBC Debugger](./../introduction-to-the-jbc-debugger)
