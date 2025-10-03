##  Clock In (EMPTIME.E1)

<PageHeader />

**Form Details**  
[ Form Details ](EMPTIME-E1-1/README.md)   

**Purpose**  
This procedure is used for clocking employees into the system. It is usually used in conjuction with a bar code wedge device for reading bar coded employee badges, but data can also be keyed by hand. When the employee number is entered or scanned the system checks the current login status of the employee. If the employee is not already clocked in, they will be clocked in. The [ EMPTIME.E2 ](EMPTIME-E2/README.md) procedure is used to clock employees out. The [ EMPTIME.E ](EMPTIME-E/README.md) procedure is also available and provides both clock in and clock out capabilities. 

**Frequency of Use**  
When employees end their shift.

**Prerequisites**  
Employee information must be entered using the [ EMP.E ](EMP-E/README.md) procedure and control parameters must be defined in the [ LABOR.CONTROL ](../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/LABOR-CONTROL) and [ BAR.CONTROL ](BAR-CONTROL/README.md) procedures. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />