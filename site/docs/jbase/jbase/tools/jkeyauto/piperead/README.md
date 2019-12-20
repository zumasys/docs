# PIPEREAD

**Created At:** 8/30/2018 1:33:07 PM  
**Updated At:** 5/16/2019 6:32:38 PM  
**Original Doc:** [piperead](https://docs.jbase.com/48575-jkeyauto/piperead)  

**Tags:**
<badge text='program profiling' vertical='middle' />

## Description

The PIPEREAD statement allows for reading terminal data from the pipes created with the [PROGRAM](program) statement since the last PIPEREAD statement was executed. This is useful to ensure jkeyauto doesn't get ahead of the application, and to provide accurate timings.

It's general form is as:

```
PIPEREAD {PIPE expression_pipe} {TO variable_to} {FOR expression_for} {SETTING variable_setting} 
{UNTIL expression_until {UNTIL expression_until}}
```

- **expression\_pipe** shows the pipe number to read. This is the value returned in the $PIPE variable following a PROGRAM execution. If omitted, then we default to pipe number 0, which is the pipe number of the first PROGRAM execution.
- **variable\_to** optionally allows you to return all the terminal data sent back from the program since the last PIPEREAD statement was executed to the defined variable name.
- **expression\_for** is a timeout option and shows how long jkeyauto will wait before timing out. You can use the value of the 'SETTING variable\_setting' to determine if you timed out or if one of the 'UNTIL' expressions was satisfied. A value of 0 means we don't wait at all - we perform a non-blocking statement and return immediately. If you don't specify the FOR clause then PIPEREAD will block indefinitely as do the [SYNC](sync) and [WAIT](wait) statements.
- **variable\_setting** allows you to check the reason for the completion of the PIPEREAD statement and can be one of:



| Variable  | Explanation |
| --- | --- |
| 0 or ""<br> | Normal return, usually because FOR or UNTIL expressions were used.<br> |
| &gt; 0<br> | returned when the UNTIL expression is used and PIPEREAD returned because the value in expression was sent by the program. The value is the relative number of the UNTIL statement, starting at 1. This allows multiple UNTIL statements to be coded, and your script to detect which of the UNTIL's were found to be true.<br> |
| -1<br> | means the timeout value in the FOR statement was exceeded.<br> |
| -2<br> | means the pipe number given by expression\_pipe was invalid.<br> |
| -3<br> | means the application has completed, so there is no more data to return.<br> |


- **expression\_until** allows you to wait until the application transmits the regular expression. This is very useful to allow jkeyauto to suspend itself until the program has responded with a certain character pattern to the terminal, thus preventing jkeyauto getting ahead of itself. It also allows program response times to be accurately measured. For details about regular expressions, see "man regexp" from the Unix command line. More than one "UNTIL expression" can be coded up to a maximum of 32, allowing a choice of expressions
to be tested against. The SETTING clause will show which of these expressions were satisifed.


If you use the variable\_setting and/or expression\_for statements, then PIPEREAD will only return when one of these is true i.e. the string is seen or the timeout occurs. If neither of these are used, then PIPEREAD will return immediately.

Once the PIPEREAD completes, then all data sent to jkeyauto will be discarded (once it has been echoed and copied to "expression\_to" if necessary). If you are using the UNTIL option, then only the data sent to satisfy the UNTIL options will be discarded. For example, if your application does this:

```
PRINT "Hello world"
PRINT "My name is Greg"
```

and you jkeyauto script does this

```
PIPEREAD UNTIL "Hello" SETTING var TO tovar
```

then assuming we capture the output correctly, the variable "tovar" will have "Hello" in it, and the remainder of the data , which could be either "world" or "world\nMy name is Greg", will remain in jkeyauto read for the next PIPEREAD command.

If multiple UNTIL statements are coded, then they be tested in the order of the command line. For example, if your application does this

```
PRINT "Not enough overtime"
and your script looked like this
PIPEREAD UNTIL "enough" UNTIL "Not" SETTING rval
```

Then the value in "rval" will be 1, as although "Not" was transmitted first, we will test the string for "enough" before we test for "Not". To complicate matters, if the PRINT statement was sent over a busy
network, then the "Not" might arrive sufficiently before "enough" and so the PIPEREAD will return with "rval" set to 2 because the "Not" was seen before the "enough" , even though we tested for "enough" first of all.

As the UNTIL expressions use Unix regular expressions, remember that if you want to search for a character string that contains meta-characters such as \* , [ or $, then they must be "escaped" with a backslash.



### Example

```
PROGRAM "test1"
pipeno = $PIPE
PIPEREAD PIPE pipeno FOR 100 UNTIL "Enter name: " SETTING rc
IF rc LE 0 THEN PRINTERR "Fatal error" ; STOP
INPUT "GREG"
time1 = $UBOOT
PIPEREAD PIPE pipeno FOR 100 UNTIL "Press RETURN" SETTING rc
time2 = $UBOOT
IF rc LE 0 THEN PRINTERR "Fatal error" ; STOP
PRINT "Response time was ":time2-time1:" seconds"
INPUT ""
WAIT
```

This example shows us loading program "test1" and waiting until the program sends the prompt "Enter name:". If the program doesn"t send it within 100 seconds we give an error. We then send TO the program the string GREG followed by a line feed. The timer is then started in variable time1. We then wait until the program sends a "Press RETURN" string to its terminal output, again with a 100 second timeout. This then gives us the elapsed time, in seconds, that it took "test1" to process the name GREG and return to us. Finally send a null string to the application and then we issue a WAIT so we wait for program "test1" to complete.
