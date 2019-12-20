# 
PN5_60924

**Created At:** 10/28/2019 12:33:46 PM  
**Updated At:** 12/4/2019 9:31:38 AM  
**Original Doc:** [pn5_60924](https://docs.jbase.com/79141-5-7-5-release-notes/pn5_60924)  


### Description

New environment variable to control the location of jagent.lockfile&lt;port&gt; files.



### Previous Release Behavior

On UNIX/Linux when you performed **jbase\_agent ... start** it would write a file - jagent.lockfile*port* to **/tmp**. However, on some platforms the **/tmp** directory is occasionally cleared causing **jbase\_agent ... stop** to fail.



### Current Release Behavior

By setting **JAGENT\_TMP\_PATH** (either in the shell environment or in the**jagent\_config** file) the **jagent.lockfile** entries are instead written to the specified path.
