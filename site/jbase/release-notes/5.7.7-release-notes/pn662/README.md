# PN662

<PageHeader />

## Description

**jshow** on Windows returns null if the directory path has a ")" character in it

## Previous Release Behavior

The **jshow** command, which uses the jBC **OPEN** statement, could not find files on Windows when there was a **)** in the directory path, e.g.

This could be demonstrated on Windows by doing:

```
jshow cl
```

which would return null because **cl.exe** is in a path that includes **C:\Program Files (x86)**.

## Current Release Behavior

The **jshow** commmand can now find files that include a **)** in the path.

Back to [5.7.7 release Notes](../jbase-5.7.7-release-notes/README.md)

<PageFooter />