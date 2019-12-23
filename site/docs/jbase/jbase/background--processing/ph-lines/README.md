# PH-LINES

**Created At:** 6/14/2018 2:12:17 PM  
**Updated At:** 7/19/2018 12:04:46 PM  
**Original Doc:** [ph-lines](https://docs.jbase.com/46465-background-processing/ph-lines)  


## Description 

The jBASE PH-LINES command displays all allocated jBASE background task port numbers. The command takes the general form:

```
PH-LINES port {Options}
```

where:

- port specifies a port number to be displayed.
- options may be as:



| Option<br> | Description<br> |
| --- | --- |
| C<br> | compress display to only active ports<br> |
| V<br> | verbose display<br> |
| P<br> | direct output to spooler<br> |
| N<br> | no pagination<br> |
| F<br> | delete port numbers for foreground processes<br> |
| B<br> | delete port numbers for background processes. (default)<br> |






### EXAMPLE

```
PH-LINES
LINES AVAILABLE FOR USE
100
103
```

Shows that ports 100 and 103 are available for jBASE background task processes.



Back to [jBTP](./../jbtp)


