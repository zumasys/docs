# jshow

**Created At:** 8/30/2018 2:21:31 PM  
**Updated At:** 6/6/2019 4:24:08 PM  
**Original Doc:** [jshow](https://docs.jbase.com/48399-tools/jshow)  
**Original ID:** 336942  
**Internal:** No  

## Description

The jshow command can be used to find jBASE files or programs. The command takes the general form:

```
jshow {Options} Name {Name ...}
```

Where:

- **Name** is the Name of file, subroutine, program or dll/shared object,
- **Options** can be:

| Option | Explanation |
| --- | --- |
| -a | display subroutine names in dll/shared object (Note that under UNIX, this must be the complete path to the shared object) |
| -c | display compile-time and source file |
| -d | display general information about the system |
| -f | file name only search |
| -h | display this help screen |
| -i | ignore case insensitivity and do a case sensitive search |
| -p | program name only search |
| -s | subroutine name only search |
| -v | verbose mode |

### Info

When performing a jshow -c on a program/subroutine you may see (DUP) as the display shows multiple occurrences. This is normal for non-subroutines (program) in that programs - when cataloged - produce a binary executable and a shared library (the latter is for efficiency when executing or running a the jshell).

However, you can also see (DUP) if the program/subroutine has bee cataloged into multiple bin/lib directories. (See [CATALOG](./../../../jbase-basic-%28jbc%29/catalog))

[Back to Tools](./../README.md)
