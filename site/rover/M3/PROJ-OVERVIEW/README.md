## Project Management Overview
<PageHeader />

[Data Entry Procedures](../assets/PROJ-ENTRY/README.md) | [Reports and Inquiries](../assets/PROJ-REPORT/README.md) | [Update Processes](../assets/PROJ-PROCESS/README.md)

**Purpose**
The project module provides the ability to plan and track the activities of a
project. Within a project you can define tasks with budgets for both cost and
revenue. Each task can be assigned planned, projected and actual completion
dates as well as descriptive information regarding the task. An individual
task can reference another project to provide a multi-level project structure.
Projects may optionally be associated with a specific customer.

Several types of information can be attached to a project by referencing the
project and task number in procedures such as order entry, purchasing, work
orders, inventory, labor, accounts payable and accounts receivable. This
information is associated as revenue or cost depending on the source. Projects
may also be adjusted using the [PROJADJ.E](../assets/PROJADJ-E/README.md) procedure.

**Prerequisites**
Entry of the customer record in [CUST.E](../assets/CUST-E/README.md) if you choose to
associate the project with a customer.

**Data Files**
There are only two files explicitly associated with the project system.

PROJECT contains all of the information defining the project as well as
references to each transaction or order that has been associated with the
project.

PROJADJ stores information about transactions created to manually adjust the
information in the project.

Other files that may be related to a project include sales orders (SO),
purchase orders (PO), work orders (WO), Labor (LABOR), accounts payable (AP),
and accounts receivable (AR).

**System Interface**
This module interfaces with other modules in the system based on associations
created by the user. These associations are created within the other modules,
not from within the project. For example, a sales order is associated with a
project by entering the project number and task on the sales order, not by
entering the sales order number in the project. The
[PROJECT.P1](../assets/PROJECT-P1/README.md) procedure loads this information into the
appropriate project record when it is run.

**User Interface**
The user interface to the module consists of data entry procedures to define
projects, make project adjustments and reports and inquiries, and batch update
procedures. Other modules allow for the entry of project and task numbers on
orders and transactions. Access to these procedures is controlled by the
user's security profile. For example, some users may be allowed to enter new
projects while others may only be allowed to make changes to existing
projects. Some users may only be allowed to look at the data without the
ability to change it, and some may not even be able to access the procedure.
Access to batch procedures is usually restricted to use by only the system
administrator since these are usually run overnight.

**Setup Procedures**
There are no setup procedures required for the project module.

**Flow of Activities**
The flow of activites in the project midule begins wth the defintion of the
project with [PROJECT.E](../assets/PROJECT-E/README.md). One or more projects may be defined
in a parent child relationship. Once the projects are defined orders and
transactions from other modules may reference the projects by entering the
project and task number in procedures assciated with the module. On a periodic
basis the [PROJECT.P1](../assets/PROJECT-P1/README.md) procedure may be run to gather the
information from all of the orders and transactions that reference a project,
and post this information to the project record. Each time this is done the
previous data is replaced.

When a project is completed its status should be set to closed. This prevents
subsequent executions of [PROJECT.P1](../assets/PROJECT-P1/README.md) from overwriting the
data that has been captured.


(C) Copyright 2015, Rover Data Systems, Inc.
All rights reserved.<br>
<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
