# PN5_60631

**Created At:** 10/3/2017 7:35:33 AM  
**Updated At:** 11/22/2017 11:47:49 PM  
**Original Doc:** [pn5_60631](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60631)  
**Original ID:** 279157  
**Internal:** No  


### Description

Case Independence: Correct a number of functions that failed if an argument was not a string



### Current Release Behavior

Prior  to this patch, the DCOUNT(), COUNT() and INDEX() functions would give  the wrong answer if the argument passed was not a string and **case\_insensitive\_runtime\_strings = true** configuration option is used.
