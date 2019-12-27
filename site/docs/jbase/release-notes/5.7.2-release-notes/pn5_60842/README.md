# PN5_60842

**Created At:** 3/8/2019 10:58:57 AM  
**Updated At:** 3/8/2019 10:59:37 AM  
**Original Doc:** [pn5_60842](https://docs.jbase.com/5-7-2-release-notes/pn5_60842)  
**Original ID:** 370729  
**Internal:** No  


### Description

Spooler: SP-LIST does not pause between Queue and Job reports



### Previous Release Behavior

Running SP-LIST with no options had the following issues:

a) did not pause (wait for user input) between the Queue and Job reports.

b) produced 2 spooler entries



### Current Release Behavior

If no options are specified to SP-LIST (or if both the Q and J options are specified):

a) SP-LIST now waits for user input after the Queue listing if no option are specified.

b) Only 1 spooler report is produced
