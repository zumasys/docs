#  READL

Description The READL statement allows a process to read a record from a previously opened file into a variable and takes a read-only shared lock on the record. It respects all records locked with theREADU statement but allows other processes using READL to share the same lock. It takes the general form:  READL variable1 FROM {variable2,} expression  

**Created At:** 9/27/2017 2:18:28 PM  
**Updated At:** 11/27/2018 9:28:31 AM  

**Tags:**
<badge text='record handling' vertical='middle' />
