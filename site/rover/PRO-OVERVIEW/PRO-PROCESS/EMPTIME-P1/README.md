##  Clock Out All Employees (EMPTIME.P1)

<PageHeader />

**Form Details**  
[ Form Details ](EMPTIME-P1-1/README.md)   

**Purpose**  
This procedure is used for clocking out all employees or a group of employees that are currently clocked. This would replace the use of [ EMPTIME.E2 ](../../PRO-ENTRY/EMPTIME-E2/README.md) and could be used in situations such as fire-drills, a power outage that suspends all work, or sudden plant closure. It produces a report of all employees and jobs that were clocked out.   
  
If you wish to clock out a group of employees and not all employees that are
currently clocked in, enter the employee numbers in the employee id field.
However, if you wish to clock out most but not all employees, enter the
employee numbers that should not be clocked out and check the "exclude
employees" box. If you wish to clock out all employees do not enter any
employee numbers in the employee id field.

**Frequency of Use**  
As required.

**Prerequisites**  
Employee information must be entered using the [ EMP.E ](../../PRO-ENTRY/EMP-E/README.md) procedure and control parameters must be defined in the [ LABOR.CONTROL ](../../PRO-ENTRY/LABOR-CONTROL/README.md) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />