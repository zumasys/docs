## Shop Transaction Entry (ST.E)
<PageHeader />

**Form Details**
[Move Instructions](../ST-E-1/README.md)
[Materials Used](../ST-E-2/README.md)

**Purpose**
The ST.E procedure is used to enter individual shop transactions which record
the movement of assemblies from one routing step to another. The operator
enters the work order number and quantity being moved, the operation the
assemblies are moving from, and the operation they are moving to.

When the operator's entry is filed the system creates a record in the Shop
Transaction file (ST) which records the pertinent information about the
transaction. At the same time it updates the current balance at the from and
to operations in the work order routing stored in the work order record (WO).

If the balance on hand in the from operation will go negative as a result of
processing the transaction a message will appear to warn the operator of this
situation. The operator may still proceed with the transaction if appropriate.

The [ST.E6](../ST-E6/README.md) procedure performs the same function as this procedure
but is optomized for bar coded entry.

**Frequency of Use**
As required.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
