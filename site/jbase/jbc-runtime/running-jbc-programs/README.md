# Running jBC Programs

<PageHeader />

## Description

Before a jBC program can be run it **must** be cataloged after it is compiled with the **BASIC** command. This is the preferred way to run a jBC program (excluding subroutines, functions and methods).

The **CATALOG** command creates an executable file that can be launched in the same way as any other executable:

- from the command line
- from a Unix script file (e.g. **.profile**)
- from a Windows **.cmd** or **.bat** file
- from a Windows shortcut
- from a **PROC**
- from a **PARAGRAPH**
- using the jBC **EXECUTE**/ **PERFORM** statements
- using the jBC **ENTER** or **CHAIN** statements

### The RUN command

jBASE also provides the **RUN** command to launch an executable.

This exists solely for compatibility with older systems. Because there is a resource overhead in using **RUN**, we recommend **RUN** is not used.

Note that using **RUN** does not remove the requirement to **CATALOG** jBC programs.

**RUN** can be used as :

```
RUN SourceFileName ProgramName (options
```

The SourceFileName is used as a place holder only, so specifying a different source file does not change the version of the program that is run.

## Note

>If your program file is a directory, does not have an OBJECT data level and the program name does not end in ".b", then the RUN operation will attempt to catalog "on-the-fly" if the catalogued routine is not already available.

Back to [jBC Runtime](./../README.md)

<PageFooter />
