#  Start Job (EMPTIME.E3)

<PageHeader />

**Form Details**  
[ Start Time Data ](EMPTIME-E3-1/README.md)   

**Purpose**  
This procedure is used for logging employees onto a job. It is usually used in conjuction with a bar code wedge device for reading bar coded employee badges, but data can also be keyed by hand. The employee enters or scans their employee number and specifies the job code and work order number if required. The employee clocks out of the job when finished using the [ EMPTIME.E4 ](../EMPTIME-E4/README.md) procedure. The employee must log out of one job before starting another unless they have setup with multi-job capability through a setting in the [ EMP.E ](../EMP-E/README.md) procedure. 

**Frequency of Use**  
As required.

**Prerequisites**  
Employee information must be entered using the [ EMP.E ](../EMP-E/README.md) procedure and control parameters must be defined in the [ LABOR.CONTROL ](../LABOR-CONTROL/README.md) and [ BAR.CONTROL ](../BAR-CONTROL/README.md) procedures. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />