##  Clock Out (EMPTIME.E2)

<PageHeader />

**Form Details**  
[ Form Details ](EMPTIME-E2-1/README.md)   

**Purpose**  
This procedure is used for clocking employees out of the system. It is usually used in conjuction with a bar code wedge device for reading bar coded employee badges, but data can also be keyed by hand. When the employee number is entered or scanned the system checks the current login status of the employee. If the employee is already clocked in, they will be clocked out. The [ EMPTIME.E1 ](../EMPTIME-E1/README.md) procedure is used to clock employees in. The [ EMPTIME.E ](EMPTIME-E/README.md) procedure is also available and provides both clock in and clock out capabilities. 

**Frequency of Use**  
When employees start their shift.

**Prerequisites**  
Employee information must be entered using the [ EMP.E ](EMP-E/README.md) procedure and control parameters must be defined in the [ LABOR.CONTROL ](../LABOR-CONTROL/README.md) and [ BAR.CONTROL ](BAR-CONTROL/README.md) procedures. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />