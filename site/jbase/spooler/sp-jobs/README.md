# SP-JOBS

<PageHeader />

## Description

This command manipulates and displays status of print jobs. It takes the general form:

```
SP-JOBS
```

The **SP-JOBS** screen displays a list of print jobs together with their status and formqueue assignment. Displayed at the base of the screen are 14 action codes where each action code, except code 99, corresponds to a jBASE command that performs the same function.

> ### Note
>
> The **SP-JOBS** command displays only the print jobs associated with the jBASE spooler. The command does not display information about the UNIX spooler.

## Selecting a Menu Option

To select a menu option, enter the appropriate option number at the Prompt. For example, to move print jobs from one formqueue to another, enter “1” at the Prompt, as:

```
Action Code / Options (P#; PT#; A acctname ; Q queuename; S status) : 1
```

The selected option will prompt the necessary parameters to enable command execution. In this case, the Prompt is:

```
FROM-FORM-QUEUE TO-FORM-QUEUE:
```

Enter the formqueue to move print jobs from, a space, and the formqueue to move the print jobs. The user is prompted for any missing parameters.

## Selecting a Display Page

The **SP-JOBS** display may contain more than one page of print job information. The number of pages available and the current page number are displayed in the top right hand corner of the screen. To display the next page enter RETURN. To skip to a specific page, enter P followed by the page number.

## Display Print Jobs for a Specific Port Number

Print jobs can be filtered to display only those jobs generated from a specific port number. At the Action Code / Options Prompt, enter PT followed by a port number. For example;

```
Action Code / Options (P#; PT#; A acctname; Q queuename; S status) : PT 42
```

will display the first page of print jobs generated from port 42.

## Display Print Jobs for a Specific FormQueue

Print jobs can be filtered to display only those jobs belonging to a specific form queue. At the Action Code / Options Prompt, enter Q followed by a name of a formqueue. For example;

```
Action Code / Options (P#; PT#; A acctname; Q queuename; S status) : Q INVOICES
```

will display the first page of print jobs belonging to the INVOICES form queue

## Display Print Jobs for a Specific Status

Print jobs can be filtered to display only those jobs with a specific STATUS. At the Action Code / Options Prompt, enter S followed by a status of QUEUED, PRINT, FINISH, OPEN, HOLD, KILLED or EDIT. For example;

```
Action Code / Options (P#; PT#; A acctname; Q queuename; S status) : S FINISH
```

Will display the first page of print jobs whose status is FINISH indicating which jobs have been completely despooled

## Executing an Equivalent jBASE Command

Equivalent jBASE commands can be executed by entering the command at the shell Prompt. For example,  to move print jobs:

```
SP-MOVEQ formqueue formqueue
```

The user is prompted for any missing parameters.

## Exiting the SP-JOBS Menu

To exit the **SP-JOBS** menu select option 99.

## SP-JOBS Screen Display

The screen display contains the following fields:

| Field    | Description |
| ---      | --- |
| JOB      |  Print job number |
| QUEUE    | The formqueue to where the print job is queued |
| LINE     |  The jBASE port number of the process which generated the print job |
| ACCOUNT  | The jBASE LOGNAME of the process which generated the print job |
| CREATED  |  The date and time the print job was generated |
| STATUS   |  The current status of the print job |
| ALIGN    |  Despooling is waiting for alignment |
| EDIT     |  The print job is being edited by SP -EDIT. N is the editing port |
| FINISHED |  The print job has been despooled and the H option is assigned |
| HOLD     | The print job has not been despooled and the H option is assigned |
| KILLED   |  Despooling has been killed |
| OPEN     | The print job is being created |
| PRINT    | The print job is being despooled |
| QUEUED   | The print job is queued waiting to be despooled |
| STOPPED  | Despooling has been stopped |
| SUSPEND  | Despooling has been suspended |
| SIZE     | The size of the print job expressed in 1k blocks |
| PRNTD    | The amount of the print job despooled expressed in 1k blocks |
| OP       | The options assigned to the print job |
| CP       | The number of copies to be despooled |

Back to [Spooler.](./../jbase-spooler)

<PageFooter />
