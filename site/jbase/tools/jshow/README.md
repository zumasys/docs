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
| -a | Display subroutine names in dll/shared object (Note that under UNIX, this must be the complete path to the shared object) |
| -c | Display compile-time and source file |
| -d | Display general information about the system {emulation \| user \| routine \| binary \| file} |
| -f | File name only search |
| -h | Display the help screen |
| -i | Ignore case insensitivity and do a case sensitive search |
| -p | Program name only search |
| -r | Search using Regular Expression.
| -s | Subroutine,function, or method name only search. |
| -v | Verbose mode |

### Info

When performing a jshow -c on a program/subroutine you may see (DUP) as the display shows multiple occurrences. This is normal for non-subroutines (program) in that programs - when cataloged - produce a binary executable and a shared library (the latter is for efficiency when executing or running a the jshell).

However, you can also see (DUP) if the program/subroutine has been cataloged into multiple bin/lib directories. (See [CATALOG](./../../../jbase-basic-%28jbc%29/catalog))

### Note  

>jshow will now also display information on PROCs, PAragraphs and Nouns in the MD/VOC which meet the search criteria, i.e.:

```
jsh Train ~ -->jshow listu
Noun:                     /data/jBCIntro/MD]D/listu (from MD/VOC )
Executable: (DUP!!)       /home/mikes/5.0_rels/development/bin/listu
Shared Object: (DUP!!)    /home/mikes/5.0_rels/development/bin/listu.so
Executable: (DUP!!)       /home/mikes/5.0_rels/development/bin/LISTU
Shared Object: (DUP!!)    /home/mikes/5.0_rels/development/bin/LISTU.so
jsh jBCIntro ~ -->
```

>Information on Nouns implemented as of jBASE 5.7.8/5.8.0

[Back to Tools](./../README.md)

<PageFooter />
