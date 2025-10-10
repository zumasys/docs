##  Shipment Entry (SHIP.E)

<PageHeader />

**Form Details**  
[ Line Items ](SHIP-E-1/README.md)   
[ Ship To Data ](SHIP-E-2/README.md)   

**Purpose**  
The SHIP.E procedure is used to enter shipments against existing sales orders in the system. This procedure can both create new shipments from a sales order, or update existing shipment records created by either this SHIP.E procedure or the [ SO.P1 ](SO-P1/README.md) procedure which creates shipment records for all sales orders with ship due dates in a requested range.   
  
Typically, the requested ship quantity will be entered in this screen, the shipping picklist printed, and then the actual quantity shipped would be entered in the [ SHIP.E2 ](../SHIP-E2/README.md) procedure which confirms shipments. Ship records may be deleted in this procedure, provided no line items have been updated through the [ SHIP.E2 ](../SHIP-E2/README.md) procedure.   
  
No inventory movements occur as a result of this procedure.

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the marketing control record ( [ MRK.CONTROL ](../MRK-CONTROL/README.md) ), entry of the required inventory locations and creation of sales orders. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />