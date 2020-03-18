# SP-SHUTDOWN

**Created At:** 4/4/2018 1:20:19 PM  
**Updated At:** 1/24/2019 8:13:18 AM  
**Original Doc:** [306261-sp-shutdown](https://docs.jbase.com/44205-spooler/306261-sp-shutdown)  
**Original ID:** 306261  
**Internal:** No  

## Description

This command shuts down all the jBASE printer daemons. This command requires Administrator privileges on Windows or root privileges on UNIX. The command is as:

```
SP-SHUTDOWN
```

After typing the command, the response may be as:

```
*****All spooler Daemons are already shut down*****
```

This means that there are no jspprint daemons running to shut down.

Alternatively, a list of queues with their PID numbers shown will be displayed, and the option to shut them down e.g.:

```
295 - NETWORK1
212 - LETTER1
261 - LABEL1
Do you wish to stop the above daemons? (Y/N): _
```

If return or type N the following message appears and the program will exit:

```
*** Aborted ***
```

If Y,  then the program will try to tidy shut the processes down and then will sleep for 30 seconds to allow the daemons to shut themselves down e.g.:

```
Do you wish to stop the above daemons? (Y/N): Y
Waiting for 30 Seconds to allow Daemons to shut down _
```

If this was successful then a message appears and the program will exit:

```
Waiting for 30 Seconds to allow Daemons to shut down
All spooler Daemons have now shut down.
```

If this process was not successful then the remaining daemons will be displayed and you will be asked if you want to kill the daemons e.g.:

```
Waiting for 30 Seconds to allow Daemons to shut down.
261 - LABEL1
The above daemons have not shut down.
Do you wish to kill them? (Y/N): _
```

If return or N then you will get the following message and the program will exit.

```
*** Aborted ***
```

If you type Y then the program will try to kill the processes. The program will tell you whether the kill was successful:

```
The above daemons have not shut down.
Do you wish to kill them? (Y/N): Y
Printers have been successfully shut down
```

Alternatively, if it is unsuccessful you will then get some type of error message followed by:

```
Kill was not successful errors occurred during shutdown
```

When the kill fails, the error message generated prior to the above should be reported to support so it can be investigated further

Back to [Spooler.](./../jbase-spooler)
