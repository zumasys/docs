##  Sales Order Entry (SO.E)

<PageHeader />

**Form Details**  
[ Header ](SO-E-1/README.md)   
[ Detail Line Item ](SO-E-2/README.md)   
[ Summary Line Item ](SO-E-3/README.md)   
[ Ship/Tax/Credit ](SO-E-4/README.md)   
[ Tracking ](SO-E-5/README.md)   
[ Change History ](SO-E-6/README.md)   
[ Coupons ](SO-E-7/README.md)   
[ Attachments ](SO-E-8/README.md)   
[ Export ](SO-E-9/README.md)   

**Purpose**  
The SO.E procedure is used to enter new sales orders into the system and to change existing sales orders. Default data is loaded from [ MRK.CONTROL ](MRK-CONTROL/README.md) , and, once the customer ID is entered, from the customer master record. SO.E contains header information, such as customer information, and also line item information about what is being sold, such as part number, date, quantity, and unit price. Using the Detail Line Item Tab, the user may enter multiple ship due dates and quantities for each line item.   
  
Part numbers must exist in the Parts master. Alternatively, the user is
allowed to leave the part number field blank and use the description field if
a non-inventory line item is to be entered.  
  
There is a Ship/Tax/Credit tab to enter the shipping data, freight method, tax
data and credit card billing information. By clicking on the Seq field the
user can load a shipping address from a listing already defined in the
customer master or a new address may be entered. On this tab the freight
amount can be entered; alternatively, freight amount can be entered later in
the shipment or AR record.  
  
A separate tab is provided for tracking shipments. The shipping data is
populated from the shipment records.  
  
The Change History tab tracks changes to the sales order at the data field level if this has been setup in [ MRK.CONTROL ](MRK-CONTROL/README.md) .   
  
On the Header Tab the Status field is "N" (New) when there are no shipments
against the sales order; "C" (Closed) when sales order is shipped complete and
"B" (backordered) when there has been at least one shipment and there remains
an open quantity. Note that the "Pending Ship" flag is checked when there is
an open shipment. The sales order can be status "C" (closed) and also can
indicate a pending shipment which just means that there is no remaining
quantity but there is an open (unconfirmed) shipment. If the shipment quantity
is changed to a partial shipment the remaining quantity will display back on
the sales order and the status will be changed to "B" (backordered). To allow
partial shipments you must check the box labeled "Partial Shipments OK?" in
SO.E.  
  
To close an order and cancel any open quantity the status can be changed from
"N" or "B" to the status "C". If there are open quantities, the user will be
prompted to confirm that the remaining quantities should be cancelled.  
  
Once filed, the SOBOOK file (Sales Order Bookings) is updated for each line
item on the sales order. Also updated are the cross reference files:  
  
SOPO - Sales orders by customer purchase order  
SOCUST - Sales orders by customer  
SOPART - Sales orders by part  
  
The Hold Code field can be used to put the order on hold. This prevents a
shipment from being processed. Any user defined code can be used in this
field. If the customer is on credit hold when the order is entered the user
will get a message. A credit hold at the customer level prevents any shipment
being processed for the customer but is does not prevent new orders being
entered.  
  
Sales orders may be deleted provided that no shipments have been entered against the sales order. Tip: An un-posted shipment can be deleted in [ SHIP.E ](SHIP-E/README.md) to enable you to delete the sales order. Changes to the scheduled dates and quantities on the sales order may be made after a shipment, provided that the quantity is not reduced below the amount shipped.   

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the marketing control record ( [ MRK.CONTROL ](MRK-CONTROL/README.md) ), and entry of the customer and terms records to be referenced. If the orders are for inventoried parts, the part number must exist on the Parts file and the inventory locations must exist on the Invloc file. Also optional are the Rep and Price files. All valid sales tax codes must be entered via the [ STAX.E ](STAX-E/README.md) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />