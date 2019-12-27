# jstart

**Created At:** 6/14/2018 1:51:45 PM  
**Updated At:** 10/25/2018 8:29:10 AM  
**Original Doc:** [321810-jstart](https://docs.jbase.com/46465-background-processing/321810-jstart)  
**Original ID:** 321810  
**Internal:** No  


## Description 

The jstart utility was originally provided to circumvent a problem with the Win95 CreateProcess API. The API fails to set the standard input handle to the new console if the standard input handle of the parent process is not a console device, i.e. a DATA statement has been used. However, jstart can be used to start up a process in the same window, in a new window or in the background. *Not available on UNIX platforms*.

The command is as:

```
jstart -Options Command
```

where:

- command is an executable program
- option may be:



| Option<br> | Description<br> |
| --- | --- |
| -v<br> | verbose<br> |
| -w<br> | initiating process waits for the process launched by jstart to complete<br> |
| -m<br> | run with window minimized<br> |
| -b<br> | run as a background job, i.e. no console<br> |
| -i<br> | inherit current window<br> |
| -t*Title*<br> | specify the window title (not applicable to background jobs)<br> |
| -p*class*<br> | priority class; 0 - Normal; 1 - Idle; 2 - High<br> |




### EXAMPLES

```
EXECUTE "jstart jsh -s jsh -"
```

This will start up the jSHELL in a new window, with a different port number.

```
jstart -b jpq C:\CODE\PROCLIB\RUNBATCH
```

Runs the proc RUNBATCH as a background process.


