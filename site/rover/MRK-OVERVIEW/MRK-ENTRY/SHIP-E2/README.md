##  Shipment Confirmation (SHIP.E2)

<PageHeader />

**Form Details**  
[ Shipment Header ](SHIP-E2-1/README.md)   
[ Shipment Line Items ](SHIP-E2-2/README.md)   
[ Picking List ](SHIP-E2-3/README.md)   
[ Summary Line Items ](SHIP-E2-4/README.md)   
[ Packages ](SHIP-E2-5/README.md)   
[ Change History ](SHIP-E2-6/README.md)   

**Purpose**  
The SHIP.E2 procedure is used to confirm shipments. A shipment could emanate from three (3) possible places. First, the [ SHIP.E ](../SHIP-E/README.md) procedure can create the original shipment record. Second, the [ SO.P1 ](../../MRK-PROCESS/SO-P1/README.md) process could have created the shipment, and the [ SHIP.E ](../SHIP-E/README.md) procedure could be bypassed. Lastly, SHIP.E2 can be used to both create and confirm shipments, directly from a sales order, without necessitating the use of [ SHIP.E ](../SHIP-E/README.md) . This may be used for entering "after-the-fact" shipments (those which have already been shipped without paperwork in case of emergency). It is, however, more common to first execute the [ SHIP.E ](../SHIP-E/README.md) procedure in conjunction with the shipping pick list.   
  
A shipment with the status "N" (New) is an unconfirmed shipment. In SHIP.E2 it
is possible to make changes to the freight, shipping address, ship date, line
items, quantity shipped, etc., before confirming.  
  
Inventory is not updated until the shipment is confirmed by changing the status code to "S" (Shipped). After confirming it is still possible to change the quantity shipped, or the quantity can be changed to zero on a line item but line items can no longer be removed entirely. Any changes to quantities will result in adjusting inventory transactions. Once the shipment has been posted ( [ SHIP.P1 ](../../MRK-PROCESS/SHIP-P1/README.md) ) it can no longer be changed in SHIP.E2. However, the entire shipment can be reversed using [ SHIP.E3 ](../SHIP-E3/README.md) .   
  
SHIP.E2 consists of five screens. The first contains header information such
as ship via, shipping address and freight charges. The second screen contains
detail information about the products being requested for shipment; this is
where the ship quantity must be entered against each line item. The third
screen shows the pick list for the part including scanning information if
barcode scanning is implemented. The fourth screen is a summary of part
numbers and quantity to be pulled from inventory. This tab will show all
component parts to be pulled against a phantom assembly/part number. The fifth
tab contains the detailed shipping data such as tracking number, weight,
dimensions, etc. per package. This tab is populated when data is being
imported from the software used by the freight carrier such as UPS but
tracking data can also be manually entered by the user.  
  
The sales order will be updated when quantities are changed in SHIP.E2 and the
record is saved.  
  

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the marketing control record ( [ MRK.CONTROL ](../MRK-CONTROL/README.md) ), entry of the required inventory locations and creation of sales orders. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />