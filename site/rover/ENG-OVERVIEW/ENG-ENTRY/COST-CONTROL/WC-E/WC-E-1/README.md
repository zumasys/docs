##  Work Center Entry (WC.E)

<PageHeader />

##

![](./WC-E-1.jpg)

**Work Center ID** Enter the ID of the work center you want to add or update.
Work center IDs may be defined using any convention the user feels is
appropriate.  
  
**Outside Processing** Check this box, if the work center should be flagged as
an outside processing step on the routing. The qty received for these work
centers are tracked in the WO record.  
  
**Inactive** Check this box if the work center is considered inactive and
should not be added to any new routings or labor entries. If you are unable to
delete a work center because it exists on routing and/or work orders records,
you can select this option until the routing and/or work order records have
been updated.  
  
**Description** Enter a description of the work center being defined and any
standard instructions.  
  
**Department** Enter the name of the department to which this work center
associated.  
  
**Daily Hours** Enter the number of hours each day that the work center is in
operation. The maximum entry is 24 hours.  
  
**Pre-Operation Hours** Enter the number of hours for which materials are
usually queued at the work center before work is started.  
  
**Post-Operation Hours** Enter the number of hours that the materials wait
and/or take to moved from the work center after completion.  
  
**Setup Hours** Enter the number of hours that are normally needed for setup
at this operation.  
  
**Crew Size** Enter the number of workers or machines in this work center
which are normally applied to a single job. This is used as the default during
routing entry.  
  
**Indirect Function** Enter the function code to be used for recording any time that is not accounted for during the day. This must be an indirect function (e.g. one that is associated with an account number as defined in [ LABOR.CONTROL ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/LABOR-CONTROL) ). For example, if the employee had clocked in at 8:00 and clocked out at 17:00, but had only accounted for 6 hours (including breaks and lunch) using the [ EMPTIME.E1 ](EMPTIME-E1/README.md) and [ EMPTIME.E2 ](EMPTIME-E2/README.md) procedures, the system would post a labor entry for the remaining two hours using the indirect function specified in this field.   
  
**Auto Restart** Enter the letter "Y" if employees associated with this work center are to be automatically logged back into the same job they were on, when they last clocked out. If this field is left blank, the default entry defined in [ LABOR.CONTROL ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/LABOR-CONTROL) will be used. If the restart field in the employee file ( [ EMP.E ](EMP-E/README.md) ) is set then it will take precedence over the entry in this field.   
  
**Standard Labor Rate** Enter the standard labor rate associated with the work
center. This rate is used in the cost rollup procedure when calculating labor
costs for an assembly. The data in this field is what is used by the system
during labor posting if no rate is found in the employee file.  
  
**Labor Account** Enter the general ledger account number to be used when labor is posted to a work order from this work center. If an account is entered here, it will be used for labor posting instead of the labor account specified in [ WO.CONTROL ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL) . If no account is entered, the labor account in [ WO.CONTROL ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL) is used. The offset account is defined by the WIP location for the work order.   
  
**Fixed Overhead Percent** Enter the percentage to be used for calculating
fixed overhead for the work center. The standard labor rate is multiplied by
this percentage in the cost rollup procedure to obtain the fixed overhead
amount for the assembly. This data is used as the fixed overhead percent
during labor posting.  
  
**FOH Account** Enter the general ledger account number to be used when fixed overhead is posted to a work order from this work center. If an account is entered here, it will be used instead of the fixed overhead account specified in [ WO.CONTROL ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL) . If no account is entered, the fixed overhead account in [ WO.CONTROL ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL) is used. The offset account is defined by the WIP location for the work order.   
  
**Variable Overhead Percent** Enter the percentage to be used for calculating
variable overhead for the work center. The standard labor rate is multiplied
by this percentage in the cost rollup procedure to obtain the variable
overhead amount for the assembly. This is the data used to calculate the
variable overhead amount during labor posting.  
  
**VOH Account** Enter the general ledger account number to be used when variable overhead is posted to a work order from this work center. If an account is entered here, it will be used instead of the variable overhead account specified in [ WO.CONTROL ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL) . If no account is entered, the variable overhead account in [ WO.CONTROL ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL) is used. The offset account is defined by the WIP location for the work order.   
  
**Current Labor Rate** Enter the current labor rate associated with the work
center. This rate is used in the cost rollup procedure when calculating labor
costs for an assembly.  
  
**Current FOH%** Enter the percentage to be used for calculating fixed
overhead for the work center. The current labor rate is multiplied by this
percentage in the cost rollup procedure to obtain the fixed overhead amount
for the assembly.  
  
**Current VOH%** Enter the percentage to be used for calculating variable
overhead for the work center. The current labor rate is multiplied by this
percentage in the cost rollup procedure to obtain the variable overhead amount
for the assembly.  
  
**Use Employee Capacity** Check this box if the capacity available for the
work center is calculated based on the scheduled hours for each employee. If
checked the capacity dates and hours fields will be automatically updated
using the employee information and may not be changed.  
  
**Capacity Date** Enter the date on which the associated capacity hours become effective. You may enter multiple date and hour combinations to specify what the daily capacity of the work center will be for a period of time. The hours entered are used as the work center capacity until the next date. Note: If you are using Capacity Requirements Planning (i.e. CRP), a date and hours entry is required for the work center capacity to be included in CRP. If you decide to change any of the dates and associated hours, you must run the [ CRP.P1 ](CRP-P1/README.md) process to reset the capacity files.   
  
**Capacity Hours** Enter the daily hours of capacity available for the work
center beginning on the associated date and ending on the next date present,
if any. The hours should represent the net total for all shifts and all
employees in a 24-hours period with breaks deducted. Note: Crew Size does not
affect this figure in Capacity Requirements Planning (i.e. CRP).  
  
**Shift Start** Enter the start times for each shift in the work center. These times are used by the time tracking system to determine if employees have clocked in on time. If there is a start time entry in the employee file, it will be used instead of this entry. If the entry in the employee file is blank and this field is also blank, the default entries defined in [ LABOR.CONTROL ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/LABOR-CONTROL) are used.   
  
**Shift End** Enter the end times for each shift in the work center. These times are used by the time tracking system to determine if employees have clocked out on time. If there is a start time entry in the employee file, it will be used instead of this entry. If the entry in the employee file is blank and this field is also blank, the default entries defined in [ LABOR.CONTROL ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/LABOR-CONTROL) are used.   
  
**Break Start** Enter the start times for each break period. The dates must be
entered in 24 hour format. For example, 8:00 A.M. would be entered as 8:00 and
8:00 P.M. would be entered as 20:00.  
  
**Break End** Enter the end times for each break period. The dates must be
entered in 24 hour format. For example, 8:00 A.M. would be entered as 8:00 and
8:00 P.M. would be entered as 20:00.  
  
**Break Function** Enter a break function if the associated break period is to
be charged to overhead. If a break function is not present and the period
falls within the start and end times entered for labor posting then the
calculated hours are simply reduced by the time within the period. If a break
function is present then the hours within the period are charged to the
account number associated with the function.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />