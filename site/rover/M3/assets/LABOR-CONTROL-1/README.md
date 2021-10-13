## Labor Control Entry (LABOR.CONTROL)
<PageHeader />

##

![](./LABOR-CONTROL-1.jpg)

| **Control ID**|  The ID to the control record is assigned as "LABOR" by the
system. No entry is required.

-  
**Auto Restart**|  This field defines to default for the auto restart option.
If automatic restart is checked then, when the employee clocks-in he will
automatically be restarted on the same job function and, if applicable, work
order that he was logged into when he last clocked out. If the job was a work
order that has since been closed, he will be placed into the default overhead
function defined in his work center. The auto restart field in the work center
([WC.E](../WC-E/README.md)) takes precedence over this field, and the restart field in
the employee file ([EMP.E](../EMP-E/README.md)) takes precedence over that.

**Shift Start**|  Enter the start time for each shift. This is used by the
time keeping system to determine if employees have clocked in on time.

**Shift End**|  Enter the end time for each shift. This is used by the time
keeping system to determine if employees have clocked out early.

**In Early Grace**|  Enter the number of minutes to be used in determining if
the clock-in time of an employee is within the early grace period for a shift
start time. For example, if the shift start time is defined as 8:00 A.M. and
you set the early grace to 30 minutes, any employee that clocks-in between
7:30 and 8:00 will automatically have his clock-in time moved forward to 8:00.

**In Late Grace**|  Enter the number of minutes to be used in determining if
the clock-in time of an employee is within the late grace period for a shift
start time. For example, if the shift start time is defined as 8:00 A.M. and
you set the Late Grace to 5 minutes, any employee that clocks-in between 8:00
and 8:05 will automatically have his clock-in time moved back to 8:00.

**In Early Round**|  Enter the number of minutes to be used as the interval
for adjusting the clock-in time when an employee clocks-in early. For example,
assume the shift start time is 8:00 A.M. with an early grace period of 30
minutes, and an early round of 15 minutes. If an employee clocks-in at 7:20,
the clock-in time will be moved forward to 7:30 which is the next 15 minute
interval. Note: The round must divide evenly into 60.

**In Late Round**|  Enter the number of minutes to be used as the interval for
adjusting the clock-in time when an employee clocks-in late. For example,
assume the shift start time is 8:00 A.M. with an late grace period of 5
minutes, and a late round of 15 minutes. If an employee clocks-in at 8:10, the
clock-in time will be moved forward to 8:15 which is the next 15 minute
interval. Note: The round must divide evenly into 60.

**Out Early Grace**|  Enter the number of minutes to be used in determining if
the clock-out time of an employee is within the early grace period for a shift
end time. For example, if the shift end time is defined as 5:00 P.M. and you
set the Early Grace to 5 minutes, any employee that clocks-out between 4:55
and 5:00 will automatically have his clock-in time moved forward to 5:00.

**Out Late Grace**|  Enter the number of minutes to be used in determining if
the clock-out time of an employee is within the late grace period for a shift
end time. For example, if the shift end is defined as 5:00 P.M. and you set
the late grace to 15 minutes, any employee that clocks-out between 5:00 and
5:15 will automatically have his time moved back to 5:00.

**Out Early Round**|  Enter the number of minutes to be used as the interval
for adjusting the clock-out time when an employee clocks-out early. For
example, assume the shift end is 5:00 P.M. with an early grace period of 5
minutes, and an early round of 15 minutes. If an employee clocks-out at 4:50,
the clock-out time will be moved back to 4:45 which is the prior 15 minute
interval. Note: The round must divide evenly into 60.

**Out Late Round**|  Enter the number of minutes to be used as the interval
for adjusting the clock-out time when an employee clocks-out late. For
example, assume the shift end time is 5:00 P.M. with an late grace period of
30 minutes, and a late round of 15 minutes. If an employee clocks-out at 5:35,
the clock-out time will be moved back to 5:30 which is the prior 15 minute
interval. Note: The round must divide evenly into 60.

**No GL impact**|  If you check this box, then use of the EMPTIME procedures
is only for time and attendance and does not have any G/L interface
transaction generated via the WOREG file. This is most common when using Time
and Attendance, but not labor collection to work orders.

**Break Start**|  Enter the start time for each break or lunch period.

**Break End**|  Enter the end time for each break or lunch period.

**Function**|  Enter the function code to be used with the associated start
and end time when posting labor transactions. The functions are defined in
this procedure. If a function code is entered, a labor transaction will be
created for the time period, and posted to the overhead account associated
with the function code. If you do not want a labor transaction posted for the
associated time period, then leave this field blank. This method is used for
periods such as an unpaid lunch period.

**Rate Type**|  Define each rate type code available for use in the labor
entry procedures. These may include types such as "R" for regular, "O" for
overtime and "D" for double time etc.

**Rate Description**|  Enter a description of the associated rate type.

**Rate Multiplier**|  Enter the multiplier to be applied to the base rate for
the associated rate type. For example, you would enter "1.00" for regular
hours, "1.50" for time-and-half and "2.00" for double-time etc.

**Function Type**|  Define each function type code available for use in the
labor entry procedures. These may include types such as "P" for production,
"V" for vacation and "R" for rework etc.

**Function Description**|  Enter a description of the associated function.

**Function Account Number**|  If associated function is for indirect labor
(e.g. not posted to a work order) then enter the general ledger account number
to which the labor amount is to be posted. Leave this field blank for
production related functions which are posted to work orders. The amounts for
these functions will be posted to the work-in-process account associated with
the work order.

**FOH**|  Check this box if you want labor posted with the associated function
code to have fixed overhead applied.

**VOH**|  Check this box if you want labor posted with the associated function
code to have variable overhead applied.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
