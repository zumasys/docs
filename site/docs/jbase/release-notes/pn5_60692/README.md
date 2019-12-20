# PN5_60692

**Created At:** 1/4/2018 10:37:17 AM  
**Updated At:** 2/16/2018 7:10:18 PM  
**Original Doc:** [pn5_60692](https://docs.jbase.com/release-notes/pn5_60692)  


### Description

jQL: Segmentation Violation scenario with a dictionary subroutine call [Ticket# 915542]



### Previous Release Behavior

Under certain conditions, a jQL dictionary subroutine would crash when you exited from the debugger.



### Current Release Behavior

jQL now exits with an error message.
