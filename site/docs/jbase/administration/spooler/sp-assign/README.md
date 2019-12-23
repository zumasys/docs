# SP-ASSIGN

**Created At:** 4/4/2018 9:49:37 AM  
**Updated At:** 7/17/2019 9:18:05 AM  
**Original Doc:** [306225-sp-assign](https://docs.jbase.com/44205-spooler/306225-sp-assign)  


## Description 

Defines a formqueue, spooler options and number of copies to be used by subsequent print reports. It takes the general form:

```
SP-ASSIGN {{n}=formqueue} {options} {copies}
```

where:

- n defines the print report channel to be assigned in the range 0 to 127. The default value for n is zero. If a print report channel is specified a formqueue must also be specified.
Zero is the default print report channel number. jBASE processors such as jQL and jCL produce print reports on print channel zero. The default PRINT statement will also direct output to print report channel zero.
The **SP-ASSIGN** command can assign print report channels 1-127 for use within jBASE programs to direct output to separate print reports simultaneously by using the PRINT ON statement.
Print report channels 128-254 are reserved.
- formqueue defines the name of the formqueue to which print jobs are queued. The default formqueue is STANDARD.
- options define the spooler assignment options, which will be assigned to the subsequent print jobs when queued to the formqueue. Available options include:





| Option<br> | Description<br> |
| --- | --- |
| ?<br> | Displays current assignment.<br> |
| A<br> | Align. Suspends despooling from the formqueue, so that the print job can be aligned for special forms. For example, printing checks. Each subsequent print job will exhibit the ALIGN status. Use the [SP-ALIGN](./../sp-align) command or the align option on the SP-JOBS menu.<br> |
| C<br> | Choke. For LPTR and TAPE, type formqueues only. Limits the amount of buffered data created before output to the device. The "I" option is automatically invoked.<br> |
| Fn<br> | Assigns specific form queue number **n**, which is only valid if an equals sign (=), is not present in the command line, e.g.<br>**SP-ASSIGN F2**<br> |
| H<br> | Hold. The H option retains a copy of the spooled print job, which can be re-output later. This option can be used with the S option to produce a report for output when demand for a printing resource is not so high. Use [SP-EDIT](./../sp-edit) with the SP or the SPA commands, or the edit option on the **SP-JOBS** menu to output the hold file.<br> |
| I<br> | Instant. For LPTR and TAPE, type formqueues only. The print job will be despooled without waiting for the print job to be closed first. The [SP-SUSPEND](./../sp-suspend) command can be used to suspend despooling of a job which was invoked with the I option but will not be able to recover any previously output data.<br> |
| M<br> | Suppresses the “Entry # message” when a Hold job is generated.<br> |
| O<br> |  Open a global print job. Keeps the print job open when exiting to the shell or jCL. This option enables several print reports to be grouped as one print job.<br> |
| P<br> | Protected (default). The P option protects the print job from being moved, edited, deleted or cleared, except by root or a user with the same user id as the user who created the print job.<br>Once assigned this option cannot be changed.<br> |
| Qn | This is functionally equivalent to **SP-ASSIGN****Fn**, e.g.<br>**SP-ASSIGN Q2** |
| Rn<br> | Assigns specific report number n, which is only valid if an equals sign (=) is not present in the command line.<br> |
| S<br> | Suppress. Defeats automatic output when the job is closed. If you only specify the S option, no print job is created.<br> |
| U<br> | Unprotected. Allows print jobs to be moved, edited, deleted or cleared by any user. Once assigned this option cannot be changed.<br> |
| Copies<br> | Defines the number of copies of the print report data to be output.<br> |
| E<br> | Displays the entry number for every job created instead of just held entries.<br> |






### Restrictions on options 

The following combinations of spooler options are incompatible.


| Option<br> | Incompatible with<br> |
| --- | --- |
| C<br> | H , S<br> |
| F<br> |  “=” modifier<br> |
| Q | "=" modifier |
| I<br> | S and copies<br> |
| R<br> | “=” modifier<br> |
| S<br> | I and C<br> |
| Copies<br> | I<br> |


Options “C” or “I” cannot be assigned to logical PROG device type formqueues. An error message will be displayed if any illegal combinations are attempted:

```
INCOMPATIBLE OPTIONS: I S, C NOT I, COPIES I
```




> ### Note: 
> 
> The default spooler assignment takes effect if the **SP-ASSIGN** command is executed without parameters.  The default assignment is printing report channel zero, formqueue STANDARD, spooler options P and number of copies set to one. This is also the default spooler assignment after log on.
> The options assigned using the **SP-ASSIGN** command remain in effect until the **SP-ASSIGN**command is re-executed for the same print report channel or the user logs off.
> Assignment information about each print report channel is held in the spooler assignment table and can be displayed by using the [SP-LOOK](./../sp-look) command.
> **SP-ASSIGN** will close any previously open global print jobs.




Back to [Spooler.](./../jbase-spooler)
