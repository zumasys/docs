# jshow

**Created At:** 8/30/2018 2:21:31 PM  
**Updated At:** 6/6/2019 4:24:08 PM  
**Original Doc:** [jshow](https://docs.jbase.com/48399-tools/jshow)  


## Description 

The jshow command can be used to find jBASE files or programs. The command takes the general form:

```
jshow {Options} Name {Name ...}
```

Where:

- **Name** is the Name of file, subroutine, program or dll/shared object,
- **Options** can be:



| Option<br> | Explanation<br> |
| --- | --- |
| -a<br> | display subroutine names in dll/shared object (Note that under Unix, this must be the complete path to the shared object)<br> |
| -c<br> | display compile-time and source file<br> |
| -d<br> | display general information about the system<br> |
| -f<br> | file name only search<br> |
| -h<br> | display this help screen<br> |
| -i<br> | ignore case insensitivity and do a case sensitive search<br> |
| -p<br> | program name only search<br> |
| -s<br> | subroutine name only search<br> |
| -v<br> | verbose mode<br> |


####  

### Info

When performing a jshow -c on a program/subroutine you may see (DUP) as the display shows multiple occurrences. This is normal for non-subroutines (program) in that programs - when cataloged - produce a binary executable and a shared library (the latter is for efficiency when executing or running a the jshell).

However, you can also see (DUP) if the program/subroutine has bee cataloged into multiple bin/lib directories. (See [CATALOG](/36868-jbase-basic/264320-catalog))

#### 





