## Non-Clocked in Employee Listing (EMP.R3)
<PageHeader />

**Form Details**
[Form Details](../EMP-R3-1/README.md)

**Purpose**
EMP.R3 is used to list all employees that have not been clocked into the
system via the [EMPTIME.E](../EMPTIME-E/README.md) procedure.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Employee#**          | The number assigned to the employee record.          |
| ---------------------- | ---------------------------------------------------- |
| **Name**               | The name of the employee.                            |
| **Last Clock In Date** | The date the employee was last clocked in. Data will |
not always appear in this column. For example, if the employee is new or
she/he was on a leave of absence the EMPTIME record which tracks this
information may have been cleared/purged.
**Last Clock In Time**|  The military time the employee was last clocked in.
Data will not always appear in this column. For example, if the employee is
new or she/he was on a leave of absence the EMPTIME record which tracks this
information may have been cleared/purged.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
