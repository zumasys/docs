# PN5_60781

**Created At:** 8/28/2018 9:39:10 AM  
**Updated At:** 10/24/2018 8:46:11 PM  
**Original Doc:** [pn5_60781](https://docs.jbase.com/48420-5-7-1-release-notes/pn5_60781)  


### Description

The jRF command, with no arguments, should not process all files in the current directory



### Previous Release Behavior

The jRF command would process all files in the current directory if no arguments were given. This was dangerous if the command was inadvertently run while files were opened by another process.

Most, if not all, jBASE tools and utilities do not have any effect on the database when they are run with no arguments so this had to change for jRF to be consistent.



### Current Release Behavior

If the jRF command is run without arguments then it shows the help page.

In order to process all files in the current directory, you now have to specify the jRF command as:

```
jrf *
```
