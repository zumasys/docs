# JBASECOREDUMP

<PageHeader />

## Description

This is used as a diagnostic tool for applications, and allows a snapshot of the application to be dumped to an external file for later analysis. It takes the general form:

```
JBASECOREDUMP(expression1, expression2)
```

The program variables and [CALL](./../call) /[GOSUB](./../gosub) stack will be dumped.

Where:

**expression1** shows the name of the operating system file to output the core dump to. It is possible to supply "" instead of a file name and jBASE allocates a filename of:  /JBASECOREDUMP\_nnnn\_mmmmm, where nnn is the port number and mmmmmm is the process id.

**expression2** is not used at present. Future versions will allow extra information to be selectively dumped. A null string is always returned from the function.

The output is in free style text format.

The function is called as:

```
file.Name = "jBASE_DUMP_" : TIME() : "_" : DATE() : "_" : SYSTEM(18)
CRT "Please send the file " : file.Name : " to jBASE support"
out.File = JBASECOREDUMP("" , 0 )
out.File2 = JBASECOREDUMP(file.Name, 0)
EXIT(99)
```

to output two files in the current working directory.

Go back to [jBASE BASIC](./../README.md)

Go back to [Programmers' Reference Guide](./../../reference-guides/jbc/README.md)

<PageFooter />
