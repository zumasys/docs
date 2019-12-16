# SPOOLER

**Created At:** 9/28/2017 10:27:49 AM  
**Updated At:** 4/13/2018 5:23:16 PM  


# Description

The **SPOOLER** function returns information from the jBASE spooler. It takes the general form:

```
SPOOLER(n{, Port|User})
```

Where:

n may take any of the following values:


| n<br> | Description<br> |
| --- | --- |
| 1<br> | returns formqueue information<br> |
| 2<br> | returns job information<br> |
| 3<br> | formqueue assignment<br> |
| 4<br> | returns status information<br> |


Port limits the information returned to the specified port User limits the information returned to the specified user.

**SPOOLER**(1) returns information about formqueues. The information is returned in a dynamic array, which contains an attribute for each formqueue. Each formqueue is structured as follows:


| Multivalue<br> | Description<br> |
| --- | --- |
| 1<br> | Formqueue name<br> |
| 2<br> | Form type<br> |
| 3<br> | Device<br> |
| 4<br> | Device type<br> |
| 5<br> | Status<br> |
| 6<br> | Number of jobs on the formqueue<br> |
| 7<br> | Page skip<br> |


**SPOOLER**(2) returns information about print jobs. The information is returned in a dynamic array, which contains an attribute for each print job.


| Multivalue<br> | Description<br> |
| --- | --- |
| 1<br> | Formqueue name<br> |
| 2<br> | Print job number<br> |
| 3<br> | Effective user id<br> |
| 4<br> | Port number job was generated on<br> |
| 5<br> | Creation date in internal format<br> |
| 6<br> | Creation time in internal format<br> |
| 7<br> | Job status<br> |
| 8<br> | Options<br> |
| 9<br> | Print job size (pages)<br> |
| 10<br> | Copies<br> |
| 11<br> | Reserved<br> |
| 12<br> | Reserved<br> |
| 13<br> | Reserved<br> |
| 14<br> | Effective user id<br> |
| 15<br> | Real user id<br> |
| 16<br> | Application id as set by @APPLICATION.ID<br> |
| 17<br> | JBASICLOGNAMEid<br> |


**SPOOLER**(3) returns information about current formqueue assignments. The information is returned in a dynamic array, which contains an attribute for each assignment. Each attribute is structured as follows:


| Multivalue<br> |  Description<br> |
| --- | --- |
| 1<br> | Report (channel) number<br> |
| 2<br> | Formqueue name<br> |
| 3<br> | Options<br> |
| 4<br> | Copies<br> |


**SPOOLER**(4) returns information about current print jobs. The information is returned in a dynamic array, which contains an attribute for each job being generated. Each attribute is structured as follows:


| Multivalue<br> | Description<br> |
| --- | --- |
| 1<br> | Report (channel) number<br> |
| 2<br> | Print Job number<br> |
| 3<br> | Print job size (pages)<br> |
| 4<br> | Creation date in internal format<br> |
| 5<br> | Creation time in internal format<br> |
| 6<br> | Job status<br> |
| 7<br> | Effective user id<br> |
| 8<br> | Real user id<br> |
| 9<br> | JBASICLOGNAME id<br> |
| 10<br> | Banner test from SETPTR BANNER text command<br> |




The values for Job Status are:


| Status<br> | Description<br> |
| --- | --- |
| 1<br> | Queued<br> |
| 2<br> | Printing<br> |
| 3<br> | Finished<br> |
| 4<br> | Open<br> |
| 5<br> | Hold<br> |
| 6<br> | Edited<br> |




Back to [jBASE BASIC](263498-jbase-basic).


