# Spooler Initialization

**Created At:** 9/20/2018 8:28:10 AM  
**Updated At:** 1/24/2019 8:03:06 AM  

**Tags:**
<badge text='spooler' vertical='middle' />

## Description 

The spooler must be initialized before any of the spooler commands can be executed. This is usually done at installation time, but can be done whenever need arises to reinitialize the spooler. When reinitializing the spooler, all the spooler tables and data are completely reset.

**Unix**

To reinitialize the spooler, use the following commands as root user:

```
PATH=$PATH:$JBCRELEASEDIR/bin
LD_LIBRARY_PATH=$JBCRELEASEDIR/lib
export PATH LD_LIBRARY_PATH
:SP-NEWTAB
```



## Note:


> AIX users need to use LIBPATH instead of LD\_LIBRARY\_PATH.




**Windows**

To initialize the spooler, use the following command as a user with administrator privileges from the jSHELL.

```
 SP-NEWTAB
```

A prompt to change four defaults will come up, the group names to use, the directory to put the spooler in and so on. For most installations the defaults will provide the optimum configuration, and simply entering C at the prompt will suffice.

The procedure will create the spooler tables and data in any desired directory - the default being **$JBCDATADIR/jspooler** on Unix and **%JBASEDATADIR%\jspooler**on Windows. Choosing a directory other than the default, will necessitate a change to the **JBCSPOOLERDIR**variable to reflect the new directory.



**Unix**

The procedure will create a default form queue named STANDARD, whose device name is /dev/lp. It will also initialize the queue to be active, so that printing may be started straight away. If a device already exists on /dev/lp, use option 4 from the SP-STATUS menu immediately after spooler installation to configure the spooler device name to another device.

If the UNIX supplied spooler is and has been the primary spooler on the system, the two can live in harmony by sending all the jBASE spooler output to the UNIX spooler. This is done by using option 4 from the SP-STATUS menu. Change the device type to PROG and the device name to lp. Any data in a jBASE application that is sent to the STANDARD queue, will then be re-printed via the UNIX spooler program lp.

```
PROG lp
PROG rsh RemoteHost -l spooler lp
```



**Windows**

The procedure will create a default form queue named STANDARD, whose device name is NT. It will also initialize the queue to be active, so that printing can start straight away. A device name of NT means that the printer output will be sent direct to the system default printer, and will not be spooled to the jBASE spooler, and therefore not require despooling by a jspprint despooler. If printer output is required to be spooled first to the jBASE despooler then the device type needs to be changed to type PROG and the devicename configured as follows:


| Command  | Description |
| --- | --- |
| `PROG lp -d LocalPrinter`<br> | Spooled output to local printer<br> |
| `PROG lp -d "My Local Printer"`<br> | Spooled output to local printer<br> |
| `PROG lp -d \\ServerName\ShareName`<br> | Spooled output to network printer<br> |
| `NT`<br> | Direct output to default printer<br> |
| `NT -d PrinterName`<br> | Direct output to named printer<br> |
| `NT -d \\ServerName\ShareName`<br> | Direct output to network printer<br> |




The jBASE spooler form queues and print jobs can be manipulated by using the jBASE spooler commands directly or by using the SP-STATUS and SP-JOBS menus.

Back to [Spooler](jbase-spooler).


