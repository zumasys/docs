## Sales Orders Available to Ship (SO.R10)
<PageHeader />

**Form Details**
[Form Details](../SO-R10-1/README.md)

**Purpose**
This report is used to determine which items in inventory are available for
shipment. It checks the avialability of inventory for each open sales order on
file. You have the option of limiting the list to only those sales orders with
shipment due dates within a specified period of time. You may also limit the
listing to include only certain inventory locations.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **SO**|  The sales order numbers that have an open balance for which the
there is inventory on hand.
-  
**Cust#**|  The customer number associated with the sales order.
**Customer Name**|  The name of the customer.
**Part?**|  Shows the letter "Y" if the item on the sales order references a
part number.
**Li#**|  The line item number on the sales order for which there is inventory
available.
**Part**|  The part number specified on the sales order line item.
**Description**|  The description the item available to ship.
**Sch Date**|  The sheduled ship date for the item.
**Sch Qty**|  The quantity scheduled to ship.
**On Hand**|  The quantity of inventory on hand for the associated part
number.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
