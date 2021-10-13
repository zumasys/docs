## Labor Entry (LABOR.E)
<PageHeader />

**Form Details**
[Form Details](../LABOR-E-1/README.md)

**Purpose**
The LABOR.E procedure is used to enter individual labor transactions which
record the number of labor hours and labor dollars posted to a work order. The
operator enters the number of the employee, work order number, number of hours
and type of hours being posted (regular, overtime etc.). The user may also
enter the start and stop time worked and have the system calculate the hours
worked.

When the operator's entry is filed the system creates a record in the Labor
file (LABOR) which records the pertinent information about the transaction. At
the same time it updates the work order record (WO) with the hours and dollars
posted. To record the financial effect of the transaction, work order register
(WOREG) records are created when the record is filed.

**Frequency of Use**
As required.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
