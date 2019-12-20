# JCL C

**Created At:** 6/8/2018 9:48:49 AM  
**Updated At:** 6/11/2018 4:16:33 AM  

**Tags:**
<badge text='debugging' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description 

The command defines a comment. It indicates that the following text is a comment. All comments are ignored at run-time.  It takes the general form:

```
C 
```

or

```
*
```



Comments are useful to improve the readability of a program or help with debugging. Typically, the first few lines of a jCL program are used to describe the program, identify the programmer and record the date it was last modified.

## 


## Note: 


> Comments can be used within grouped commands (more than one command on a single line) but  care must be taken though to ensure they will not conflict with normal command syntax.




### EXAMPLE

```
001 PQN
002 C This program will...
003 C Created by A. Programmer, dd/mm/yy
004 C Last modified by:...
005 RI
006 RO
007 10 T C, (5, 10), "Password :",+
008 HECHO OFF
009 P
010 IP %1 \C Input password
011 HECHO ON
012 P
.
.
```

Lines 2 to 4 are comment lines. Line 10 has a comment after an input command (the "\" is a subvalue mark &lt;ctrl \&gt;).



Back to [JCL Commands](jcl-commands)
