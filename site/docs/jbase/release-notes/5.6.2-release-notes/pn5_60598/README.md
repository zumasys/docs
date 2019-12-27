# PN5_60598

**Created At:** 10/2/2017 11:14:12 AM  
**Updated At:** 11/24/2017 7:40:58 AM  
**Original Doc:** [pn5_60598](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60598)  
**Original ID:** 279040  
**Internal:** No  


### Description

File cache not getting rebuilt when changing directories



### Previous Release Behavior

The  problem occurred when JEDIFILEPATH had a relative path in it. When a  program started, and the first file opened, we would create a file cache  of all files in the directories specified by JEDIFILEPATH.

The  problem was, if you changed directory and there was a relative path in  JEDIFILEPATH, it wouldn't pick up the NEW files that were in the  relative directory.

This problem occurred using the CHDIR() function in jBC -- but was actually found using the **cd** command in the jShell.



### Current Release Behavior

All **cd** and CHDIR() now clears and rebuilds the file cache.
