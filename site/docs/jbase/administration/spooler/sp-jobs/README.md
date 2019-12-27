# SP-JOBS 

**Created At:** 4/4/2018 2:56:10 PM  
**Updated At:** 1/24/2019 8:15:43 AM  
**Original Doc:** [306301-sp-jobs](https://docs.jbase.com/44205-spooler/306301-sp-jobs)  
**Original ID:** 306301  
**Internal:** No  


## Description 

This command manipulates and displays status of print jobs. It takes the general form:

```
SP-JOBS
```

The **SP-JOBS** screen displays a list of print jobs together with their status and formqueue assignment. Displayed at the base of the screen are14 action codes each action code, except code 99, corresponds to a jBASE command that performs the same function.


> ### Note: 
> 
> The **SP-JOBS** command displays only the print jobs associated with the jBASE spooler. The command does not display information about the UNIX spooler.


### 


### SELECTING A MENU OPTION

To select a menu option, enter the appropriate option number at the Prompt. For example, to move print jobs from one formqueue to another, enter “1” at the Prompt, as:

```
Action Code / Options (P#; PT#; A acctname ; Q queuename; S status) : 1
```

The selected option will prompt the necessary parameters to enable command execution. In this case, the Prompt is:

```
FROM-FORM-QUEUE TO-FORM-QUEUE:
```

Enter the formqueue to move print jobs from, a space, and the formqueue to move the print jobs. The user is prompted for any missing parameters.

### 


### SELECTING A DISPLAY PAGE

The **SP-JOBS**display may contain more than one page of print job information. The number of pages available and the current page number are displayed in the top right hand corner of the screen. To display the next page enter RETURN. To skip to a specific page, enter P followed by the page number.

### 
DISPLAY PRINT JOBS FOR A SPECIFIC PORT NUMBER

Print jobs can be filtered to display only those jobs generated from a specific port number. At the Action Code / Options Prompt, enter PT followed by a port number. For example;

```
Action Code / Options (P#; PT#; A acctname; Q queuename; S status) : PT 42
```

will display the first page of print jobs generated from port 42.

### 
DISPLAY PRINT JOBS FOR A SPECIFIC FORMQUEUE

Print jobs can be filtered to display only those jobs belonging to a specific form queue. At the Action Code / Options Prompt, enter Q followed by a name of a formqueue. For example;

```
Action Code / Options (P#; PT#; A acctname; Q queuename; S status) : Q INVOICES
```

will display the first page of print jobs belonging to the INVOICES form queue



### DISPLAY PRINT JOBS FOR A SPECIFIC STATUS

Print jobs can be filtered to display only those jobs with a specific STATUS. At the Action Code / Options Prompt, enter S followed by a status of QUEUED, PRINT, FINISH, OPEN, HOLD, KILLED or EDIT. For example;

```
Action Code / Options (P#; PT#; A acctname; Q queuename; S status) : S FINISH
```

Will display the first page of print jobs whose status is FINISH indicating which jobs have been completely despooled

### 
EXECUTING AN EQUIVALENT jBASE COMMAND

Equivalent jBASE commands can be executed by entering the command at the shell Prompt. For example,  to move print jobs:

```
SP-MOVEQ formqueue formqueue
```

The user is prompted for any missing parameters.

### 
EXITING THE SP-JOBS MENU

To exit the **SP-JOBS** menu select option 99.

### 
SP-JOBS SCREEN DISPLAY

The screen display contains the following fields:


| Field<br> | Description<br> |
| --- | --- |
| JOB<br> |  Print job number<br> |
| QUEUE<br> | The formqueue to where the print job is queued<br> |
| LINE<br> |  The jBASE port number of the process which generated the print job<br> |
| ACCOUNT<br> | The jBASE LOGNAME of the process which generated the print job<br> |
| CREATED<br> |  The date and time the print job was generated<br> |
| STATUS<br> |  The current status of the print job<br> |
| ALIGN<br> |  Despooling is waiting for alignment<br> |
| EDIT<br> |  The print job is being edited by SP -EDIT. N is the editing port<br> |
| FINISHED<br> |  The print job has been despooled and the H option is assigned<br> |
| HOLD<br> | The print job has not been despooled and the H option is assigned<br> |
| KILLED<br> |  Despooling has been killed<br> |
| OPEN<br> | The print job is being created<br> |
| PRINT<br> | The print job is being despooled<br> |
| QUEUED<br> | The print job is queued waiting to be despooled<br> |
| STOPPED<br> | Despooling has been stopped<br> |
| SUSPEND<br> | Despooling has been suspended<br> |
| SIZE<br> | The size of the print job expressed in 1k blocks<br> |
| PRNTD<br> | The amount of the print job despooled expressed in 1k blocks<br> |
| OP<br> | The options assigned to the print job<br> |
| CP<br> | The number of copies to be despooled<br> |




Back to [Spooler.](./../jbase-spooler)
