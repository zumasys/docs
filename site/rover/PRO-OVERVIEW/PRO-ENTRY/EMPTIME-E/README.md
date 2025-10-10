##  Clock In/Clock Out (EMPTIME.E)

<PageHeader />

**Form Details**  
[ Employee Clock-In/Out ](EMPTIME-E-1/README.md)   

**Purpose**  
This procedure is essentially a time clock. It is usually used in conjuction
with a bar code wedge device for reading bar coded employee badges, but data
can also be keyed by hand. When the employee number is entered or scanned the
system checks the current login status of the employee. If the employee is not
already clocked in then the system will clock the employee in. If the employee
is already clocked in, they will be clocked out.

**Frequency of Use**  
When employees report for work and leave at the end of their shift.

**Prerequisites**  
Employee information must be entered using the [ EMP.E ](../EMP-E/README.md) procedure and control parameters must be defined in the [ LABOR.CONTROL ](../LABOR-CONTROL/README.md) and [ BAR.CONTROL ](BAR-CONTROL/README.md) procedures. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />