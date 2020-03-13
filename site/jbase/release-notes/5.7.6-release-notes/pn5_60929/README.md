# PN5_60929

**Created At:** 1/13/2020 4:05:48 PM  
**Updated At:** 1/15/2020 2:04:05 PM  
**Original Doc:** [pn5_60929](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60929)  
**Original ID:** 516266  
**Internal:** No  

## Description

Add the **JBC\_INCLUDE\_PATH** and **JBC\_INCLUDE\_FILE** environment variables to the compiler.

### Previous Release Behavior

Neither of these environment variables existed. However, the environment JBC\_USER\_INCLUDE is a similar environment variable but this went "missing" when the new pre-processor was introduced and the new **JBC\_INCLUDE\_FILE** is of similar, but enhanced, functionality.

### Current Release Behavior

The **JBC\_INCLUDE\_PATH** environment variable allows you to pre-define one or more directories / folders where you can search for an INCLUDE file. The directory/folder names are delimited by **:** (colon) on Linux/AIX and by **;** (semi-colon) on Windows.

For example:

```
export JBC_INCLUDE_PATH=$HOME/include:/usr/include/myincludes
```

Means that the compiler, when a INCLUDE statement is seen, will search **$HOME/include** and then **/usr/include/myincludes** to find the INCLUDE'd file.

The **JBC\_INCLUDE\_FILE** is one or more source names that will get automatically compiled prior to the usual jBC or jabbascript being compiled. It is a list of files delimited by **:** (colon) on Linux/AIX and by **;** (semi-colon) on Windows.

For example:

```
set JBC_INCLUDE_FILE=%HOME%\COMMON;BP USERCOMMON
```

is the equivalent of adding these two lines of code to the top of every source that is compiled.

```
INCLUDE C:\Home\Greg\COMMON
INCLUDE BP USERCOMMON
```

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)
