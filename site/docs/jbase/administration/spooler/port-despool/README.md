# PORT-DESPOOL

**Created At:** 4/4/2018 9:47:38 AM  
**Updated At:** 3/12/2019 12:27:22 PM  
**Original Doc:** [306224-port-despool](https://docs.jbase.com/44205-spooler/306224-port-despool)  


## Description 

**PORT-DESPOOL** command Despools a print job to a printer or terminal attached to the current port. It takes the general form:

```
PORT-DESPOOL {formqueue} {(X)}
```

where:

- Formqueue is the formqueue assigned to the logical device type PORT where the output is to be despooled.
If formqueue is omitted, the print queue is despooled from the first formqueue in the spooler tables that has the same logical device type, (PORT), and port number of the process which executed the**PORT-DESPOOL**command.
- X stops the despooler after output of all queued print jobs. If omitted, pressing ctrl &lt;BREAK&gt; must terminate the port despooler and then entering quit to the jBASE debugger Prompt.


The **PORT-DESPOOL** command is a synonym for the PORTOUT command.



### Usage Examples

To use the **PORT-DESPOOL**command, first create a formqueue with a Device Type of ‘PORT’. For this example, it is assumed the name of the formqueue is ‘SCREEN’.

There are two ways to accomplish this:

1. From Option 1 on the [SP-STATUS](./../sp-status) menu, when prompted enter SCREEN PORT
2. Or from the jShell command line type:


```
SP-CREATE SCREEN PORT
```

In both cases, press &lt;Enter&gt; when you are prompted for ‘Device Name’.

Secondly, assign this queue using the [SP-ASSIGN](./../sp-assign) command, e.g.

```
SP-ASSIGN =SCREEN
```

Now the print job can be created. For this type

```
 LIST . (P)
```

to send the contents of the current directory to the spooler, specifically to the formqueue SCREEN. This can be despooled as:

```
PORT-DESPOOL SCREEN (X)
```




> ### Note:
> 
> The spooler assignment (SP-ASSIGN = SCREEN) will remain in effect until execution of another [SP-ASSIGN](./../sp-assign) or termination of  the current connection to jBASE.


A common use for this is to send spooled output through an **AUX** (serial) port of a local pc to a **slave** printer. The trouble is that **slave-on** and **slave-off** sequences are not generated automatically. Not to  worry though, jBASE has a solution. To auto generate slave-on/slave-off sequences you need to defined these in a spooler form-type that is assigned to the form queue. Continuing with our example of using the form queue SCREEN:

First, assign a form-type with defines **STARTJOB**and ENDJOB. **STARTJOB**will send a ‘slave on’ message at the start of each job and ENDJOB will send a ‘slave off’ message. For these two actions, you need to create two BASIC programs called **slave\_on** and **slave\_off** respectively:

```
PROGRAM slave_on
PRINT @(-17):
```

```
PROGRAM slave_off
PRINT @(-18):
```

Now compile and catalog these two programs, and ensure they can be seen from the **PATH**environment variable.

Next, create the new form-type by copying the ‘jspform\_deflt’ file to a new name. This file is located in %JBCRELEASEDIR%\config directory. For example, on Windows, at a jShell prompt type:

```
COPY C:\JJBASE30\config jspform_deflt
TO: jspform_port
```

This assumes that jBASE was installed in the default location on Windows.

```
TO: jspform_port
```

Edit the new **jspform\_port** file, locate the **STARTJOB**and **ENDJOB**commands and enter the following two lines:

```
STARTJOB slave_on
ENDJOB slave_off
```




> ### Note: 
> 
> Other form-type settings you might want to set at this time are WIDTH and DEPTH so that you do not have to issue these as TERM commands.




Finally, assign the new form-type to the **SCREEN**form queue by enter the following command at a jShell command Prompt:

```
SP-TYPE SCREEN port
```

We’re now ready to test this with the **PORT-DESPOOL** command...

```
SP-ASSIGN =SCREEN
LIST . LPTR
PORT-DESPOOL (X)
```




> ### Note:
> 
> When issuing a **PORT-DESPOOL** command under BASIC control, issuing  ‘capture’ output will not allow the job to be despooled.




Back to [Spooler.](./../jbase-spooler)


