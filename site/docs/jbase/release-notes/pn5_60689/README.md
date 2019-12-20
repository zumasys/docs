# PN5_60689

**Created At:** 1/3/2018 2:49:48 PM  
**Updated At:** 2/16/2018 7:10:05 PM  
**Original Doc:** [pn5_60689](https://docs.jbase.com/release-notes/pn5_60689)  


### Description

Setting the **log\_runtime\_errors = true** configuration option causes all messages from the **jbcmessages** file to be logged



### Previous Release Behavior

As soon as a 'real' runtime error occurs (like a 'variable not assigned; zero used') then jBASE starts logging all messages from the **jbcmessages** file.

This behavior would only occur if **log\_runtime\_errors** is active within a jShell.



### Current Release Behavior

Only 'real' runtime errors (those marked as **^LOGERROR^** in the **jbcmessages** file) are logged.
