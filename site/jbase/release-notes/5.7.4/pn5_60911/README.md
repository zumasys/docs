# PN5_60911

<PageHeader />

## Description

Prevent a program aborting due to a SIGTERM being sent to the process while doing a **SELECT** through a dynamic file. The select can be any method, for example using the jQL **SELECT** command, or in jBC use **OPEN**/**SELECT**/**READNEXT**.

### Previous Release Behavior

When selecting a dynamic file, due to timing considerations, we could very occasionally have a SIGTERM sent to the process causing the process to terminate prematurely.

You would typically see this on a terminal

```
Process ID 2202 , port 1 , process killed by operator
  Program source name test2.jabba , line 11
```

This was a very rare occurence, and the only time we have seen it (and been able to reproduce it) is when you have a large dynamic file (e.g. 500MB) where most of the items have been deleted but the file remains large.

### Current Release Behavior

The same test program now runs to completion error free.

Back to [5.7.4 Release Notes](./../jbase-5.7.4-release-notes/README.md)
  
<PageFooter />
