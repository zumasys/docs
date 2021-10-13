## Labor Control Entry (LABOR.CONTROL)
<PageHeader />

**Form Details**
[Form Details](../LABOR-CONTROL-1/README.md)

**Purpose**
The LABOR.CONTROL procedure is used to define all of the valid function and
rate codes available for use by the labor posting procedures, and the default
parameters used by the time keeping system.

Function codes define the types of labor which may be applied. These typically
include Direct, Rework, Setup and various indirect types. You may define a
code for each of these functions and a corresponding title. Functions for
direct labor posted to a work order should not have an account number
associated with them since the posting account will always be the work in
process account for the work order. Indirect type codes must have a General
Ledger account number associated with them since they are not used in posting
to a work order.

Rate codes define the factor used to modify the employee's rate of pay. For
example, you may have three different wage rates; regular, overtime and double
time. You would define a type code for each of these and enter the factors 1.0
for regular, 1.5 for overtime, and 2.0 for double time. When the code is used
in labor posting the employee's hourly rate will be multiplied by the factor.

If you are using the EMPTIME procedures to track only Time and Attendance and
not labor dollars to work orders, then check the "No EMPTIME labor to G/L"
box.

The shift start and end times, grace periods and round points are all used by
the time keeping system to control the logging of labor hours into the system.

**Frequency of Use**
The entries in this procedure must be loaded prior to using any of the labor
posting procedures. This is usually done as part of setting up the system. The
entries may be changed after that time as required.

**Prerequisites**
Entry of any account numbers to be used in the General Ledger chart of
accounts.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
