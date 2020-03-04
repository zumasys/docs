# PN5_60604

**Created At:** 10/2/2017 12:54:42 PM  
**Updated At:** 11/26/2017 7:26:25 PM  
**Original Doc:** [pn5_60604](https://docs.jbase.com/36526-5-6-2-release-notes/pn5_60604)  
**Original ID:** 279058  
**Internal:** No  


### Description

jBC: Allow compiler directives to be used as variables



### Previous Release Behavior

Using compiler directives as variables would not compile. For example:

```
WINDOWS = 1
LINUX = 2
AIX = 3
SUN = 4
SOLARIS = SUN
```

None of those statements were valid, they could only be used with compiler directives, e.g.

```
#ifdef WINDOWS
```



### Current Release Behavior

The following is valid code:

```
#ifdef WINDOWS
    PRINT "This is windows"
#endif
#ifdef LINUX
    PRINT "This is linux"
#endif
    WINDOWS = 1
    CRT "WINDOWS = ":WINDOWS
    LINUX = 2
    CRT "LINUX = ":LINUX
```
