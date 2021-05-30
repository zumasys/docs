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

The jBASE command **jlp** can also be used to print files directly or from stdin. e.g.

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


```
[SP-NEWTAB](../sp-newtab/README.md) - Creates a new spooler.
[REST-SPOOLER](../restarting-the-spooler/README.md) - Restart all spooler queues.
```

## Note

>As of jBASE 5.8.2, any action that creates a new form queue or changes an existing form queue, updates a script that can be used to regenerated the spooler configuration.
>   
>The name of the script is `create-form-queues` on Linux/AIX and `create-form-queues.bat` on Windows and is stored under the [jspooler](../sp-newtab/README.md) directory.
>  
>The script:
>* does not set any [spooler security](../sp-security/README.md) settings.  
>* can be edited to ensure that the spooler queues are created as desired. 
>* can be generated manually with the [sp-fqscript](../sp-fqscript/README.md) command.

Back to [Spooler](./../jbase-spooler).

  
<PageFooter />
