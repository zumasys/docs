# PN5_60932

**Created At:** 1/14/2020 9:23:06 AM  
**Updated At:** 1/15/2020 2:04:05 PM  
**Original Doc:** [pn5_60932](https://docs.jbase.com/88391-5-7-6-release-notes/pn5_60932)  
**Original ID:** 516400  
**Internal:** No  

## Description

jBTP: Behavior of **PH-START** using **T** option misleading on Windows

### Previous Release Behavior

Using the **T** option with **PH-START** on Windows gave the impression that the job was being run in the background.

The reality is that Windows does not have the ability to run a process in the background and display the output in the foreground.

Additionally, the message that **PH-START** displayed indicated that the job was run on a line number (port) from the pool of **PH-LINES** line numbers. But, in fact, it actually runs on the same port number.

### Current Release Behavior

1) The online documentation for the **PH-START T** option has been updated to reflect the actual behavior on Windows.

2) When **PH-START** is run with the **T** option on Windows, the TASK statement that displays has been changed to show the actual port number that it runs on rather than the line number from **PH-LINES**. So, for example, instead of:

```
TASK STARTED ON LINE 1000 FOR ACCOUNT Administrator Id 1893932350LHJF
```

now displays:

```
TASK STARTED ON LINE 6 FOR ACCOUNT Administrator Id 1893932350LHJF
```

In this case, it was port number 6 that the process ran on when the **T** option was used.

Back to [5.7.6 release Notes](../jbase-5.7.6-release-notes/README.md)
