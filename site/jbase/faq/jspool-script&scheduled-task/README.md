# jSPOOL Script and Scheduled Task

<PageHeader />

Script to restart the jBASE Spooler on Windows:

``` cmd
@echo off
set JBCRELEASEDIR=C:\jbase55
set JBCGLOBALDIR=%JBCRELEASEDIR%
set PATH=%JBCRELEASEDIR%\bin;%PATH%
set JBCSPOOLERDIR=D:\jbase\jspooler
set JBCPORTNO=500-999
set JBC_DESPOOLSLEEP=10
%JBCRELEASEDIR%\bin\rest-spooler.exe >nul 2>&1
```

## Configuration of the Scheduled Task

Everything must be just right in order for this to work correctly. It may be necessart to un-check some of the defaults that Windows provides.

### Navigate to the Task Scheduler and Create a New Task

![Step#1](./jspoolerprops_0.png)

### Add/Edit a new task

![Step#2](./jspoolerprops_2.png)

### Define the Trigger

![Step#3](./jspoolerprops_3.png)

### Define the Action

![Step#4](./jspoolerprops_4.png)

### Provide details of the action to be performed

![Step#5](./jspoolerprops_5.png)

### Define the conditions

![Step#6](./jspoolerprops_6.png)

### Define any specific settings

![Step#7](./jspoolerprops_7.png)

### Add User credentials for the Task

![Step#8](./jspoolerprops_8.png)

### Note

> It is also possible to start a phantom process in much the same way  
> Define the environment that the process needs; essentially:

```
JBCRELEASEDIR
HOME
JBCEMULATE
PATH
JBCOBJECTIST
JEDIFILEPATH
```

> and then run the PROC using the jBASE 'jpq' command, i.e.

```
jpq MD\<procname>
```

> Note procs are not directly executable so they need to be invoked using the 'jpq' PROC processor.

[Back to FAQ](./../README.md)

  
<PageFooter />
