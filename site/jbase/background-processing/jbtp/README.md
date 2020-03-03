# jBTP

**Created At:** 6/14/2018 1:50:25 PM  
**Updated At:** 7/19/2018 12:02:45 PM  
**Original Doc:** [jbtp](https://docs.jbase.com/46465-background-processing/jbtp)  
**Original ID:** 321809  
**Internal:** No  


# Description

jBTP is an acronym for jBASE Background Task Processor. Several jBASE commands can be used to interface with the jBTP in order to start, stop or suspend and resume jBASE background processes.

A background process can be used to execute a specific list of jobs or tasks. jBTP passes the background process the next task or job from the specified task list, as and when each task needs to be executed. jBTP also logs the current status of each background process as it completes each task.



The following commands are used for jBTP control.


| Command<br> | Function<br> |
| --- | --- |
| [PH-ALLOCATE](./../ph-allocate)<br> | Allocate port numbers for jBASE background processes<br> |
| [PH-CLEAR](./../ph-clear)<br> | Clear the jBASE background task history log file<br> |
| [PH-DELETE](./../ph-delete)<br> | Deallocate port numbers for jBASE background processes<br> |
| [PH-KILL](./../ph-kill)<br> | Stop a jBASE background process<br> |
| [PH-LINES](./../ph-lines)<br> | Displays all allocated background task port numbers<br> |
| [PH-RESUME](./../ph-resume)<br> | Resume a jBASE background process<br> |
| [PH-START](./../ph-start)<br> | Start a jBASE background process<br> |
| [PH-STATUS](./../ph-status)<br> | Display the jBASE background tasks history log file<br> |
| [PH-SUSPEND](./../ph-suspend)<br> | Suspend a jBASE background process<br> |
| [Z](./../z)<br> | Same functionality as PH-START<br> |
| [ZH](./../zh)<br> | As Z except direct output to hold file<br> |

