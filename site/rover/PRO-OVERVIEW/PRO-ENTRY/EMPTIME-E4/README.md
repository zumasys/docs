##  End Job (EMPTIME.E4)

<PageHeader />

**Form Details**  
[ End Time Data ](EMPTIME-E4-1/README.md)   

**Purpose**  
This procedure is used for logging employees out of a job. It is usually used in conjuction with a bar code wedge device for reading bar coded employee badges, but data can also be keyed by hand. The employee enters or scans their employee number. If the employee is logged into only one job no further entry is required. Otherwise they must identify which job they are loggin out of. The employee logs onto a job using the [ EMPTIME.E3 ](../EMPTIME-E3/README.md) procedure. If the employee clocks out for the day using either [ EMPTIME.E ](../EMPTIME-E/README.md) or [ EMPTIME.E2 ](../EMPTIME-E2/README.md) they will be logged off all jobs. 

**Frequency of Use**  
As required.

**Prerequisites**  
Employee information must be entered using the [ EMP.E ](../EMP-E/README.md) procedure and control parameters must be defined in the [ LABOR.CONTROL ](../LABOR-CONTROL/README.md) and [ BAR.CONTROL ](../BAR-CONTROL/README.md) procedures. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />