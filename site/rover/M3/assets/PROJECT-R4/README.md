## Project Detail Report (PROJECT.R4)
<PageHeader />

**Form Details**
[Form Details](../PROJECT-R4-1/README.md)

**Purpose**
PROJECT.R4 provides a detailed report of an individual project. The report
includes the same information as the [PROJECT.R3](../PROJECT-R3/README.md) report but
also includes detailed information about the transactions related to the costs
and revenue of the project.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Date Entered** | The date on which the project was entered.                   |
| ---------------- | ------------------------------------------------------------ |
| **Date Posted**  | The date on which the current information in the project was |
updated with the [PROJECT.P1](../PROJECT-P1/README.md) procedure.
**Customer**|  The name of the customer, if any, associated with the project.
**Description**|  The description of the project.
**Task ID**|  The number or name assigned to each task in the project.
**Title**|  The title of the task.
**Sub Project**|  The number of the sub project, if any, associated with the
task.
**Description**|  The description of the task.
**Notes**|  Notes associated with the task.
**Planned Start Date**|  The date the task was planned to start.
**Projected Start Date**|  The current date projected as the start date for
the task.
**Actual Start Date**|  The date on which the task was actually started.
**Planned End Date**|  The date on which the task was originally planned to be
completed.
**Projected End Date**|  The current projection as to when the task will be
completed.
**Actual End Date**|  The date on which the task was actually completed.
**Budget Costs**|  The amount budgeted as a cost for the task.
**Scheduled Costs**|  Any costs associated with the task that are scheduled
but not actually posted, such as a purchase order.
**Actual Costs**|  The total cost currently posted to the task.
**Budget Revenue**|  The revenue budgeted for the task.
**Scheduled Revenue**|  The revenue for a task that is scheduled but not yet
posted, such as a sales order.
**Actual Revenue**|  The revenue currently posted for the task.
**Type**|  A code defining what the associated document ID is referring to.
For example, PO indocates the Doc ID is a purchase order number, SO a sales
order etc.
**Doc ID**|  The identification number assigned to the document.
**LI**|  The line item number on the document, if any, on which the associated
cost or revenue is found. For example, a purchase order or sales order will
have a line item number while a labor or inventory transaction will not.
**Amount**|  The amount associated with the document and line item that is
posted to the project.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
