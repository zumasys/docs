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

## Typical directory structure

```
spooler-- default directory name for spooler  
            jobs -- Directory Holds "formqueue\_"# directory for each queue  
                   formqueue\_0 -- Directory Holds actual print jobs form formqueue "0"  
                                       1 -- \*NIX/Windows item of print job "1"  
                                       2 -- \*NIX/Windows item of print job "2"  
                                       4 -- \*NIX/Windows item of print job "4"  
                   formqueue\_1 -- Directory Holds actual print jobs form formqueue "0"  
                                       3 -- \*NIX/Windows item of print job "3"  
                                       5 -- \*NIX/Windows item of print job "5"  
            jobs]D -- Empty DICT level of jobs file  
            jspool\_log --jBASE hashed file.  See typical items listed below  
            jspool\_log]D --jBASE DICT file with dictionary defining items  
```

## Typical jspool\_log file items

| File item | Description |
| --- | --- |
| **DEVCONFIG\*0** | -- Holds definition of device 0 |
| **DEVCONFIG\*1** | -- Holds definition of device 1 |
| **NextJobNumber** | -- Holds DATE() in attribute 1 and next job number in attribute 2 |
| **DEVLOCK\*0** | -- Holds PID of jspprint program for device 0 |
| **DEVLOCK\*1** | -- Holds PID of jspprint program for device 1 |
| **DEVJOBS\*1** | -- Holds information on job number 1 (same format for all 5 jobs) |
| **DEVFORMQUEUE\*laserjet** | -- Holds number of device for queue named "laserjet" |
| **DEVFORMQUEUE\*lineprinter** | -- Holds number of device for queue named "lineprinter" |
| **OwnerGroupSpooler** | -- Holds queue ownership information |

## DICT jspool\_log

The jspool\_log is a standard jBASE hash file and can be LISTed and reported on using the dictionaries in the jspool\_log file.

| Field Name | Attribute | Dict Heading | Conversion |
| --- | --- | --- | --- |
| JNUM | 0 | Job # | G1\*1 |
| QNUM | 0 | Q Num | G1\*1 |
| JQNUM | 1 | Q Num |   |
| QNAME | 1 | Queue Name |   |
| JSTATUS | 2 | Stat |   |
| QSTATUS | 2 | Stat |   |
| JCOPIES | 3 | Copies |   |
| QTYPE | 3 | Type |   |
| JSIZE | 4 | Size |   |
| QDEV | 4 | Device Name |   |
| JPOS | 5 | Curr Pos |   |
| JUSERNAME | 6 | Owner |   |
| JPORT | 7 | Port |   |
| QCURRJOB | 7 | Curr.Job |   |
| QSKIP | 8 | Skip |   |
| JTIME | 9 | Time | MTS |
| QJOBS | 9 | Job List |   |
| JDATE | 10 | Date | D2 |
| QXLATE | 11 | Xlate |   |
| JREPORT | 12 | Report |   |
| QCR\_DATE | 13 | Create Date | D2 |
| QCR\_TIME | 14 | Create Time | MT |
| QCR\_PORT | 15 | Create Port |   |
| JSECURITY | 16 | Job Security |   |
| QCR\_USERNAME | 16 | Create User |   |
| QOWNER | 16 | Queue owner |   |
| QMOD\_DATE | 17 | Modify Date | D2 |
| QMOD\_TIME | 18 | Modify Time | MT |
| QMOD\_PORT | 19 | Modify Port |   |
| QMOD\_USERNAME | 20 | Modify User |   |
| QSTOP\_REASON | 21 | STOP explanation |   |
| QSTOP\_DATE | 22 | STOP Date | D2 |
| QSTOP\_TIME | 23 | STOP Time | MTS |
| SEC\_QUEUE | 26 | Queue Security |   |
| SEC\_JOBS | 27 | Job Security |   |
| SEC\_OWNERS | 28 | Other Queue Owners |   |

## The route of a typical print job

### Print queue settings derived from SP-ASSIGN and TERM

The typical print job will begin with an SP-ASSIGN statement and possibly TERM statement to assign the form queue and printer depth and width. Note that assignment will default to STANDARD if no SP-ASSIGN is executed.

```
SP-ASSIGN =laserjet
TERM ,,,,,,112,30
```

### Banner / Form Width and Depth set from jspform item

The default jspform item located in **$JBCRELEASEDIR/config/jspform\_deflt** will set printer width to 132 and depth to 64 regardless of the TERM setting specified and on LINUX will specify a banner to be used.  This item is self documented and can be altered.  Be aware that this item would be overlayed if jBASE were upgraded. SP-TYPE can be used to assign other than this default formtype.

## Translation occurs based on jspxl item

Translation item as defined in [SP-TRANSLATE](./../sp-translate) or $JBCRELEASEDIR/config/jspxl\_deflt is read to determine what translations are to take place. Note that [SP-TRANSLATE](./../sp-translate) item read only when printer is initialized.

### The item is passed via stdout to the device specified

SP-DEVICE defines the device/program used for printing.  This is typically the local printer program lp, but with the PROG device type any program that can read from stdin (INPUT) can be used.

Back to [Spooler](./../jbase-spooler).
