# jkeyauto Variables

**Created At:** 8/31/2018 1:26:07 PM  
**Updated At:** 5/16/2019 6:32:35 PM  
**Original Doc:** [jkeyauto-variables](https://docs.jbase.com/48575-jkeyauto/jkeyauto-variables)  
**Original ID:** 337406  
**Internal:** No  

**Tags:**
<badge text='program profiling' vertical='middle' />

When a variable is referenced in a jkeyauto script, it can be an internal variable in which case it has a value assigned by jkeyauto. These names are defined by having a $ character as the first character. This is a full description of all those available.

| Internal name | Description |
| --- | --- |
| $? | This evaluates to the completion code of the last PROGRAM, PERFORM, or EXECUTE statement executed. |
| $AM | Evaluates to an attribute, CHAR(254) |
| $CPU | The total CPU time used by the jkeyauto program, both user and system time. You can also used $CPU\_UTIME for just the user CPU time. |
| $CPU\_STIME | for just the system CPU time, $CPU\_CUTIME for the user time used by all the child processes so far and CPU\_CSTIME for all the system time used by all the child processes so far. |
| $DATE | The current date expressed as the number of days since 31 DEC 1967. This variable is the equivalent of the DATE() function in jBC code. |
| $MEM | The total data space used by the jkeyauto program. This is normally the memory allocated using the malloc() library call or sbrk() system call. It won't include how much space jkeyauto is using in stack , program text, file cache, memory maps etc. |
| $MV or $VM | Evaluates to a multi-value, CHAR(253) |
| $PID | Evaluates to the process ID of the last program loaded using the PROGRAM statement. |
| $PIPE | Evaluates to the relative pipe number (from 0 upwards) that was allocated during the execution of a PROGRAM statement. Normally this would mean 0 being returned the first time a PROGRAM statement is executed, 1 the next time and so on. You can use this later in the INPUT statement to send data to an individual program instead of all the loaded programs. |
| $RND | Returns a random number as a positive 32 bit integer. If necessary. use the % (modulo) operator to scale the number between a range. |
| $SM | Evaluates to a segment mark, CHAR(255) |
| $SVM or $SV | Evaluates to a sub value, CHAR(252) |
| $TIME | The current time of day expressed as seconds since midnight. Accurate to the nearest second only. This variable is the equivalent of the TIME() function in jBC code. |
| $UBOOT | The number of seconds since the machine was last booted. This variable is accurate to the accuracy of the hardware clock. This variable is therefore very useful in determining accurate elapsed times (unlike $TIME which is only to the nearest second) and doesn't have the problem that if the test goes past midnight it doesn"t reset itself (unlike $TIME which wraps back to 0). |
| $UTIME | The time in Unix format, the number of seconds since 01 JAN 1970. This variable is the equivalent of the time() function in a C program. |
| $nn | Evaluates to the nn'th position in the command line arguments |

[Back to jKeyAuto](./../README.md)

  
<PageFooter />
