## Work Order Completion Entry (ST.E3)
<PageHeader />

**Form Details**
[Move Instructions](../ST-E3-1/README.md)
[Materials Used](../ST-E3-2/README.md)

**Purpose**
The ST.E3 procedure is used to enter individual work order completion
transactions from an operation in the routing to another work order or
inventory location. The operator enters the work order number and quantity
being completed, the operation the assemblies are moving from, and the
inventory location they are moving to. If they are being moved into a work in
process inventory location the operator also enters the work order number the
items are being sent to.

When the operator's entry is filed the system creates a record in the shop
transaction file (ST) which records the pertinent information about the
transaction. At the same time it updates the current balance for the from
operation in the work order routing stored in the work order record (WO) along
with the dollar value of the items completed. The inventory file (INV) is also
updated to reflect the quantity moved into the location specified unless the
target location is another work order in which case the work order inventory
file (WOINV) is updated, and material dollars added to the associated work
order record.

If the balance on hand in the from operation will go negative as a result of
processing the transaction a message will appear to warn the operator of this
situation. The operator may still proceed with the transaction if appropriate.

**Frequency of Use**
As required.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
