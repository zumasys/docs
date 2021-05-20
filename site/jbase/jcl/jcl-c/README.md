# jCL Comments

<PageHeader />

**Tags:**
<badge text='debugging' vertical='middle' />
<badge text='jcl' vertical='middle' />

## Description

Comments can be specified in a number of ways:

```
C {text}
```

```
* {text}
```

```
# {text}
```

```
// {text}
```

```
/* {text} */
```
```
/*
{text}
{text}
...
{text}
*/
```

All comments are ignored at run-time.

The last comment type is a block comment where any number of comment lines can exist between `/*` and `*/`.

Comments are useful to improve the readability of a program or help with debugging. Typically, the first few lines of a jCL program are used to describe the program, identify the programmer and record the date it was last modified.

## Note

> Comments can be used within grouped commands (more than one command on a single line) but care must be taken though to ensure they will not conflict with normal command syntax.

### Example

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

Back to [jCL Commands](./../README.md)
  
<PageFooter />