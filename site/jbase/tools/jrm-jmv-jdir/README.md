# jrm jmv jdir

<PageHeader />  

## Description

Many commands are built-in to the Windows command shell and so can be executed like other executables.  

The following commands have been provided to use in either [jsh](./../../jshell) or cmd shell.  

As they are executables to use in place of **cmd.exe** functionality, the commands are provided **only on Windows**.

| Command | Description |
| --- | --- |
| jrm file | jrm -r directory | remove file or directory, recursively |
| jmv oldfile newfile | move oldfile to newfile |
| jdir {directory|file} | list directory |

## Note

> If [Transaction Journaling](../../transactions/README.md) is active, the actions performed by jrm and jmv are **not** logged.

[Back to Tools](./../README.md)

<PageFooter />
