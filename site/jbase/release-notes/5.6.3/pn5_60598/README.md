# PN5_60598

<PageHeader />

## Description

File cache not getting rebuilt when changing directories

### Previous Release Behavior

The  problem occurred when JEDIFILEPATH had a relative path in it. When a  program started, and the first file opened, we would create a file cache  of all files in the directories specified by JEDIFILEPATH.

The  problem was, if you changed directory and there was a relative path in  JEDIFILEPATH, it wouldn't pick up the NEW files that were in the  relative directory.

This problem occurred using the CHDIR() function in jBC -- but was actually found using the **cd** command in the jShell.

### Current Release Behavior

All **cd** and CHDIR() now clears and rebuilds the file cache.

Back to [5.6.2 release Notes](./../README.md)

  
<PageFooter />
