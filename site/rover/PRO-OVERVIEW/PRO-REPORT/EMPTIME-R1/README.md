##  Employees Clocked-In (EMPTIME.R1)

<PageHeader />

**Form Details**  
[ Form Details ](EMPTIME-R1-1/README.md)   

**Purpose**  
This report provides a listing of all employees that are currently clocked in
through the time and attendance system. This report can be useful when trying
to determine if an employee is on site, or if an employee failed to clock out
at the end of the day. You may limit the report to specified work centers.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Home Center** The employees home work center as defined in the [ EMP.E ](../../PRO-ENTRY/EMP-E/README.md) procedure for the employee. This may be different than the work center of the job the employee is currently working in.   
**Employee#** The employee number.  
**Name** The employee's name.  
**Clock-In Date** The date on which the employee clocked in.  
**Clock-In Time** The time at which the employee clocked in shown in 24 hours
format (i.e. 1:00 P.M. is 13:00).  
**Func Start Date** The date on which each job the employee is currently
working on was started.  
**Func Start Time** The time at which each job the employee is currently
working on was started.  
**Func** The function codes the employee is currently working in. These are defined in the [ LABOR.CONTROL ](../../PRO-ENTRY/LABOR-CONTROL/README.md) procedure.   
**WO.ID** If the function code defines a direct labor function (i.e. no account number is associated with it in [ LABOR.CONTROL ](../../PRO-ENTRY/LABOR-CONTROL/README.md) ) the work order number the employee is logged into will be displayed.   
**Oper** If a work order is present this column contains the operation number
the employee is logged into.  
**Work Center** If a work order is present this column contains the work
center associated with the operation the employee is logged into.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />