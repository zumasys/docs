# Options

**Created At:** 8/30/2018 1:12:32 PM  
**Updated At:** 5/16/2019 6:29:48 PM  
**Original Doc:** [options](https://docs.jbase.com/48575-jkeyauto/options)  
**Original ID:** 336872  
**Internal:** No  

**Tags:**
<badge text='program profiling' vertical='middle' />

Normally jkeyauto is run simply as "jkeyauto scriptname" but more options are available. The options available are

| Option | Description |
| --- | --- |
| -ftimeout | Set the timeout value for Waiting on a sync. lock. |
| -h or -? | Display the help screen. |
| -i | ignore any extranous INPUT statements. |
| -s | Default to ignore any SLEEP statements in the script. This can subsequently be over-ridden by the SLEEP ON and SLEEP OFF statements within a script. |
| -t | Turn on statement tracing. Every time a new line of script begins execution, jkeyauto will display the source line. Useful for tracing and debugging large scripts. See also the TRACE ON and TRACE OFF statements. |
| -x | When jkeyauto exits, display to the terminal all the values of the variables created within the script. |
| -S | Manipulate the sync. lock |

The -S option can also be used which changes the functionality of jkeyauto. When the -S option is used, then instead of executing the named script, we do the sync. functionality using jkeyauto scripts. This is similar to the SYNC statement described earlier. When the -S option is used, the syntax for the jkeyauto command becomes:

```
jkeyauto -S LOCK|UNLOCK|WAIT|TEST locknumber {-ftimeout}
```

See the description of the [SYNC](./../sync) statement for the operation of this syntax.

[Back to jKeyAuto](./../README.md)

  
<PageFooter />
