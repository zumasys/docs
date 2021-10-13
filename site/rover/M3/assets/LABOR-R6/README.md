## Labor Efficiency by Work Center (LABOR.R6)
<PageHeader />

**Form Details**
[Form Details](../LABOR-R6-1/README.md)

**Purpose**
The LABOR.R6 procedure is used to create a labor efficiency report by work
center for specified date range. The hours earned and hours applied are
summarized by work center. All work centers may be reported or just those
specified by the user.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Work Center**  | The work center id.                                      |
| ---------------- | -------------------------------------------------------- |
| **Name**         | The work center name.                                    |
| **Hours Earned** | The sum of all hours earned for that work center for the |
date range specified. This is calculated by finding all the shop transactions
that occurred from that work center and multiplying the operation hours from
the work order's routing by the quantity of the shop transaction divided by
the total work order quantity.
**Hours Applied**|  The sum of all hours charged to this work center for the
date range specified. This is calculated by finding all the LABOR records for
the date and work center.
**Efficency %**|  Calculated as the Hours Earned / Hours Applied.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
