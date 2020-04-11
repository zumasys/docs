# jBASE Spooler Introduction

<PageHeader />

**Tags:**
<badge text='spooler' vertical='middle' />

## Description

The following commands are provided by the jBASE spooler, all menu options are also provided as separate executables for command line execution.

| Command | Description |
| --- | --- |
| SP-ASSIGN =F0 | Assign to formqueue name F0 |
| SP-ASSIGN F0 | Assign to formqueue zero as queuename F0 |
| SP-ASSIGN Q0 | Assign to formqueue zero as queuename Q0 |
| LISTPTR | Display status of all printer numbers/queues. |
| LISTPEQS | Display status of all print jobs |
| SP-JOBS | Display status of all print jobs |
| SP-EDIT | Edit print job for despooling |
| SP-OPEN | Open print job |
| SP-CLOSE | Close print job |
| SP-PURGE | Clear jobs when all else fails |
| SP-STATUS | Display status of all printer queues |

A jspprint despooler dequeues print jobs from each assigned queuename.

The jBASE command jlp can also be used to print files directly or from stdin. e.g.

```
jlp FileName
echo Output | jlp
```

Spooler information can also be obtained directly using the following jspstatus functions :

|<!-- -->| <!-- --> |
| --- | --- |
| jspstatus 1 | Display device information. Option (R displays real user ids ) |
| jspstatus 2 | Display print job information |
| jspstatus 3 | Display assignment information |
| jspstatus 4 | Display open job information |

## UNIX

```
:SP-NEWTAB - Clear all spooler entries.
:REST-SPOOLER - Restart all spooler queues.
```

## Windows

```
SP-NEWTAB - Clear all spooler entries.
REST-SPOOLER - Restart all spooler queues.
```

Back to [Spooler](./../jbase-spooler).

  
<PageFooter />
