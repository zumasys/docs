## Sales Order Inquiry (SO.Q)
<PageHeader />

**Form Details**
[Form Details](../SO-Q-1/README.md)

**Purpose**
The SO.Q procedure will display a list all open sales orders. This will
include any sales order with a status of "N" or "B". All open line items,
including the schedule date and open quantities for each date will be
displayed.

The On Hand Inventory figure that is displayed is for all inventory locations
that are in the same plan group as the location identified on the sales order
line, and that have a "Use in Planning" flag set in the
[INVLOC.E](../INVLOC-E/README.md). This will allow all inventory to be displayed, in
the event it is being stored in a different location than the SO is expecting.
In addition, use of the Use in Planning flag allows this procedure to not
display inventory that is not generally available. This may include return or
inspection locations.

There is an inquiry button on the far right, next to the On Hand Inventory
field that will display the detailed inventory status of the part number on
the line.

The [SHIP.E](../SHIP-E/README.md) button on the left will invoke the
[SHIP.E](../SHIP-E/README.md) procedure and the data to be auto-loaded.

**Frequency of Use**
As required.

**Prerequisites**
A sales order must be on file and not on hold.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
