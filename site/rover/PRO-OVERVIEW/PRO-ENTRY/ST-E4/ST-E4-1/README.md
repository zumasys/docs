##  Work Order Completion Entry (ST.E4)

<PageHeader />

##

![](./ST-E4-1.jpg)

**Shop Transaction ID** The shop transaction ID does not appear on the screen
and is assigned to each item entered when it is processed after filing.  
  
**Work Order** Enter the number of the work order against which the
transaction took place.  
  
**Assembly Number** This field contains the assembly number for the work order
entered. This field is for display only and may not be changed.  
  
**Quantity** Enter the quantity of items completed or scrapped.  
  
**From Oper** Enter the operation from which the items were moved. The
operation number must match one of the operations listed in the routing for
the work order. As a convenience the last operation on the routing is loaded
into this field since completion transactions usually occur from that
operation.  
  
**From Work Center** The from work center ID is loaded in this field when a
from operation is entered. The work center ID is retrieved from the routing
for the work order based on the operation number.  
  
**To Inventory** Enter the inventory location into which the items are being
moved. If the location is defined as a scrap location the scrap dollars on the
work order will be updated, otherwise the completion dollars are updated.  
  
**To Work Order** If the inventory location entered was a "WO" type location
then enter the work order into which the items were transferred.  
  
**Lot ID** If the item being completed is lot controlled then enter the lot
number to be assigned to the parts. You may enter an existing lot number
provided it is for the same part number or you may enter a new lot number. If
you leave this field blank then the next sequential lot number will be
assigned.  
  
**Bin Number** Enter the bin number into which the product is being placed.
This field will only be used when the inventory location is set to bin
control.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />