# jBTP

**Created At:** 6/14/2018 1:50:25 PM  
**Updated At:** 7/19/2018 12:02:45 PM  
**Original Doc:** [jbtp](https://docs.jbase.com/46465-background-processing/jbtp)  
**Original ID:** 321809  
**Internal:** No  

## Description

jBTP is an acronym for jBASE Background Task Processor. Several jBASE commands can be used to interface with the jBTP in order to start, stop or suspend and resume jBASE background processes.

A background process can be used to execute a specific list of jobs or tasks. jBTP passes the background process the next task or job from the specified task list, as and when each task needs to be executed. jBTP also logs the current status of each background process as it completes each task.

The following commands are used for jBTP control.

| Command | Function |
| --- | --- |
| [PH-ALLOCATE](./../ph-allocate) | Allocate port numbers for jBASE background processes |
| [PH-CLEAR](./../ph-clear) | Clear the jBASE background task history log file |
| [PH-DELETE](./../ph-delete) | Deallocate port numbers for jBASE background processes |
| [PH-KILL](./../ph-kill) | Stop a jBASE background process |
| [PH-LINES](./../ph-lines) | Displays all allocated background task port numbers |
| [PH-RESUME](./../ph-resume) | Resume a jBASE background process |
| [PH-START](./../ph-start) | Start a jBASE background process |
| [PH-STATUS](./../ph-status) | Display the jBASE background tasks history log file |
| [PH-SUSPEND](./../ph-suspend) | Suspend a jBASE background process |
| [Z](./../z) | Same functionality as PH-START |
| [ZH](./../zh) | As Z except direct output to hold file |

Back to [Background Processing](./../README.md)
