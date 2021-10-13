## Project Labor Entry (LABOR.E4)
<PageHeader />

**Form Details**
[Form Details](../LABOR-E4-1/README.md)

**Purpose**
This procedure is used to enter individual labor transactions which record the
number of labor hours and labor dollars posted to a project. The operator
enters the number of the employee, work order number, number of hours and type
of hours being posted (regular, overtime etc.). The user may also enter the
start and stop time worked and have the system calculate the hours worked.

When the operator's entry is filed the system creates a record in the Labor
file (LABOR) which records the pertinent information about the transaction. To
record the financial effect of the transaction, work order register (WOREG)
records are created when the record is filed. The labor record is posted to
the project record by the [PROJECT.P1](../PROJECT-P1/README.md) procedure.

Note: When posting labor to a work order, even if is associated with a
project, the [LABOR.E](../LABOR-E/README.md) or [LABOR.E2](../LABOR-E2/README.md) procedures
should be utilized.

**Frequency of Use**
As required.

**Prerequisites**
Entry of the project record with [PROJECT.E](../PROJECT-E/README.md).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
