## Webcart to Sales Order Settings (WEBSO.CONTROL)
<PageHeader />

##

![](./WEBSO-CONTROL-1.jpg)

| **ID**|  The record ID of WEBSO is automatically loaded into this field.

-  
**Email Customer**|  Check here if you want an order confirmation email sent
to the customer.

**Print Picking List**|  Check here if you want to automatically print a
shipping picklist. If so, then the "Create Shipment" flag must also be checked
and the printer and batch queue below must be entered.

**Create Shipment**|  Check here if you want to automatically generate the
shipment from the sales order.

**Picklist Printer**|  Select the system printer for the shipping pick list
output. If no printer is defined, then use PRINTER.CONTROL to define the
system printer.

**Batch Queue ID**|  Select the batch queue ID to process the shipping pick
list output (such as ON.OLINE). If not available, then it must be defined
using BQ.E.

**User Id**|  Enter the ids of all the users that are to receive alert
messages.

**User Name**|  Displays the name of the associated user.

**Save**|  Click this button to save your changes.

**Cancel**|  Click this button to exit without saving your changes.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
