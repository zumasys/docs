# PN5_60634

**Created At:** 10/3/2017 8:21:59 AM  
**Updated At:** 10/16/2017 9:54:26 PM  
**Original Doc:** [pn5_60634](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60634)  


### Description

Distributed files give a "DISTRIB: Reentrant call to Jedi Distributed file driver" message.



### Current Release Behavior

Prior  to this patch, when a program exited the message "DISTRIB: Reentrant  call to Jedi Distributed file drive" would be seen on the screen.

This occurred when:

1. more than one distributed files was opened
2. the program exited
3. the file cache closed

