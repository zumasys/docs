## Labor Transaction Listing (LABOR.R1)
<PageHeader />

**Form Details**
[Form Details](../LABOR-R1-1/README.md)

**Purpose**
The LABOR.R1 procedure is used to create a labor transaction listing for a
specified date range, and optionally work center or department. The records
included in the report are sorted by transaction date and transaction number.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Trans#**     | The number of the labor transaction.                       |
| -------------- | ---------------------------------------------------------- |
| **Date**       | The date on which the labor was incurred.                  |
| **Employee**   | The number and name of the employee who chraged the hours. |
| **Work Order** | The number of the work order against which the labor was   |
charged.
**Oper**|  The number of the operation in the routing at which the labor was
charged.
**Work Center**|  The name of the work center corresponding to the operation.
**Type**|  The code which defines the what multiple of the rate was charged. R
= Regular O = Overtime D = Double Time T = Triple
**Func**|  The code which defines the function performed with the labor hours.
S = Setup P = Production R =
**Hours**|  The actual hours posted.
**Rate**|  The dollar rate at which the hours are multiplied to obtain the
extended amount. The rate reflects any premium paid for overtime double time
and triple time.
**Ext Amount**|  The actual dollar amount posted (Hours x Rate).
**Fixed Overhead**|  The dollar amount of fixed overhead calculated and
charged to the work order.
**Variable Overh**|  ead The dollar amount of variable overhead calculated and
charged to the work order.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
