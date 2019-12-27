# Spooler Structure

**Created At:** 9/20/2018 8:18:22 AM  
**Updated At:** 1/24/2019 9:04:14 AM  
**Original Doc:** [spooler-structure](https://docs.jbase.com/44205-spooler/spooler-structure)  
**Original ID:** 339936  
**Internal:** No  

**Tags:**
<badge text='spooler' vertical='middle' />

## Description 

The spooler on jBASE is a fairly straight-forward process.  The actual print processes are jspprint programs that pipe the stdout of a report into whatever is specified in the [SP-DEVICE](./../sp-device) command for that queue.

## 


## Typical directory structure

**spooler**-- default directory name for spooler
            **jobs** -- Directory Holds "formqueue\_"# directory for each queue
                   **formqueue\_0** -- Directory Holds actual print jobs form formqueue "0"
                                       **1** -- \*nix/Windows item of print job "1"
                                       **2** -- \*nix/Windows item of print job "2"
                                       **4** -- \*nix/Windows item of print job "4"
                   **formqueue\_1** -- Directory Holds actual print jobs form formqueue "0"
                                       **3** -- \*nix/Windows item of print job "3"
                                       **5** -- \*nix/Windows item of print job "5"
             **jobs]D** -- Empty DICT level of jobs file
**jspool\_log --**jBASE hashed file.  See typical items listed below
             **jspool\_log]D --**jBASE DICT file with dictionary defining items

## 


## Typical jspool\_log file items


| File item<br> | Description<br> |
| --- | --- |
| **DEVCONFIG\*0**<br> | -- Holds definition of device 0<br> |
| **DEVCONFIG\*1**<br> | -- Holds definition of device 1<br> |
| **NextJobNumber**<br> | -- Holds DATE() in attribute 1 and next job number in attribute 2<br> |
| **DEVLOCK\*0**<br> | -- Holds PID of jspprint program for device 0<br> |
| **DEVLOCK\*1**<br> | **--**Holds PID of jspprint program for device 1<br> |
| **DEVJOBS\*1**<br> | -- Holds information on job number 1 (same format for all 5 jobs)<br> |
| **DEVFORMQUEUE\*laserjet**<br> | -- Holds number of device for queue named "laserjet"<br> |
| **DEVFORMQUEUE\*lineprinter**<br> | -- Holds number of device for queue named "lineprinter"<br> |
| **OwnerGroupSpooler**<br> | -- Holds queue ownership information<br> |


## 


## DICT jspool\_log

The jspool\_log is a standard jBASE hash file and can be LISTed and reported on using the dictionaries in the jspool\_log file.


| Field Name<br> | Attribute<br> | Dict Heading<br> | Conversion<br> |
| --- | --- | --- | --- |
| JNUM<br> | 0<br> | Job #<br> | G1\*1<br> |
| QNUM<br> | 0<br> | Q Num<br> | G1\*1<br> |
| JQNUM<br> | 1<br> | Q Num<br> |  <br> |
| QNAME<br> | 1<br> | Queue Name<br> |  <br> |
| JSTATUS<br> | 2<br> | Stat<br> |  <br> |
| QSTATUS<br> | 2<br> | Stat<br> |  <br> |
| JCOPIES<br> | 3<br> | Copies<br> |  <br> |
| QTYPE<br> | 3<br> | Type<br> |  <br> |
| JSIZE<br> | 4<br> | Size<br> |  <br> |
| QDEV<br> | 4<br> | Device Name<br> |  <br> |
| JPOS<br> | 5<br> | Curr Pos<br> |  <br> |
| JUSERNAME<br> | 6<br> | Owner<br> |  <br> |
| JPORT<br> | 7<br> | Port<br> |  <br> |
| QCURRJOB<br> | 7<br> | Curr.Job<br> |  <br> |
| QSKIP<br> | 8<br> | Skip<br> |  <br> |
| JTIME<br> | 9<br> | Time<br> | MTS<br> |
| QJOBS<br> | 9<br> | Job List<br> |  <br> |
| JDATE<br> | 10<br> | Date<br> | D2<br> |
| QXLATE<br> | 11<br> | Xlate<br> |  <br> |
| JREPORT<br> | 12<br> | Report<br> |  <br> |
| QCR\_DATE<br> | 13<br> | Create Date<br> | D2<br> |
| QCR\_TIME<br> | 14<br> | Create Time<br> | MT<br> |
| QCR\_PORT<br> | 15<br> | Create Port<br> |  <br> |
| JSECURITY<br> | 16<br> | Job Security<br> |  <br> |
| QCR\_USERNAME<br> | 16<br> | Create User<br> |  <br> |
| QOWNER<br> | 16<br> | Queue owner<br> |  <br> |
| QMOD\_DATE<br> | 17<br> | Modify Date<br> | D2<br> |
| QMOD\_TIME<br> | 18<br> | Modify Time<br> | MT<br> |
| QMOD\_PORT<br> | 19<br> | Modify Port<br> |  <br> |
| QMOD\_USERNAME<br> | 20<br> | Modify User<br> |  <br> |
| QSTOP\_REASON<br> | 21<br> | STOP explanation<br> |  <br> |
| QSTOP\_DATE<br> | 22<br> | STOP Date<br> | D2<br> |
| QSTOP\_TIME<br> | 23<br> | STOP Time<br> | MTS<br> |
| SEC\_QUEUE<br> | 26<br> | Queue Security<br> |  <br> |
| SEC\_JOBS<br> | 27<br> | Job Security<br> |  <br> |
| SEC\_OWNERS<br> | 28<br> | Other Queue Owners<br> |  <br> |


## 


## The route of a typical print job

**Print queue settings derived from SP-ASSIGN and TERM**

The typical print job will begin with an SP-ASSIGN statement and possibly TERM statement to assign the form queue and printer depth and width. Note that assignment will default to STANDARD if no SP-ASSIGN is executed.

```
SP-ASSIGN =laserjet
TERM ,,,,,,112,30
```

### 


**Banner / Form Width and Depth set from jspform item**

The default jspform item located in**$JBCRELEASEDIR/config/jspform\_deflt** will set printer width to 132 and depth to 64 regardless of the TERM setting specified and on LINUX will specify a banner to be used.  This item is self documented and can be altered.  Be aware that this item would be overlayed if jBASE were upgraded. SP-TYPE can be used to assign other than this default formtype.

### 


**Translation occurs based on jspxl item**

Translation item as defined in [SP-TRANSLATE](./../sp-translate) or $JBCRELEASEDIR/config/jspxl\_deflt is read to determine what translations are to take place. Note that [SP-TRANSLATE](./../sp-translate) item read only when printer is initialized.

### 


**The item is passed via stdout to the device specified**

SP-DEVICE defines the device/program used for printing.  This is typically the local printer program lp, but with the PROG device type any program that can read from stdin (INPUT) can be used.



Back to [Spooler](./../jbase-spooler).
