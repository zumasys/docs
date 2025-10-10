##  Enter/Confirm RMA Receipts (RMAREC.E2)

<PageHeader />

**Form Details**  
[ Header ](RMAREC-E2-1/README.md)   
[ Line Items ](RMAREC-E2-2/README.md)   
[ Components ](RMAREC-E2-3/README.md)   
[ FSO Operations ](RMAREC-E2-4/README.md)   
[ Charges ](RMAREC-E2-5/README.md)   
[ Attachments ](RMAREC-E2-6/README.md)   
[ Change History ](RMAREC-E2-7/README.md)   

**Purpose**  
The [ RMAREC.E ](../RMAREC-E/README.md) procedure is used to receive items previously identified on an RMA with the [ RMA.E ](../RMA-E/README.md) procedure and/or to confirm receipts already entered with [ RMAREC.E ](../RMAREC-E/README.md) . You have the option of performing the RMA receipt process in one or two steps. With the two step process you enter the initial receipt information using [ RMAREC.E ](../RMAREC-E/README.md) which limits the user to defining only basic information about what was received, specifically quantity and optionally lot number. Inventory is not moved with [ RMAREC.E ](../RMAREC-E/README.md) . The second step uses RMAREC.E2 to verify the receipt and add additional information such as failure codes. The one step process skips the [ RMAREC.E ](../RMAREC-E/README.md) procedure using RMAREC.E2 for both steps. You still have the option of using RMAREC.E2 in two steps by setting the status code to "R" (received) and then changing it later to "C" (confirmed).   
  
You enter the RMA number for the items being received and enter the quantity
of each item received. You do not have to receive all of the items in one
receipt. Items that were not received or were partially received will show as
backordered on the RMA.  
  
The RMAREC.E2 procedure can be used to generate a credit memo back to the
customer for items that are being returned. It can also be used to capture the
cost of repairing a item that was returned, and billing the customer for those
repairs. In addition to these options, it can be linked to the Field Service
module, if desired.  
  
There are five (5) tabs in the RMAREC.E2 procedure. The first tab contains the
basic RMA and customer information. Additionally, there is an area where
miscellaneous charges can be applied, to either offset the charges from a
previous shipment, or to charge back the customer with fees such as a
restocking fee.  
  
The second tab contains information about the item(s) being returned,
including restocking inventory locations and the credit amounts the customer
will receive, if any.  
  
The third tab has component information for phantom parts being received on the line item tab. These phantom components will be generated based on a setting in [ RMA.E ](../RMA-E/README.md) line item called "Explode Phantoms?". If this is checked then when a quantity is entered for a line item in either [ RMAREC.E ](../RMAREC-E/README.md) or RMAREC.E2, then the phantom components will be generated with the appropriate quantities based on the bill of material for the phantom. The component quantities can be manually adjusted as necessary. When the receipt is confirmed the component parts will be received into inventory instead of the phantom.   
  
Tab four contains information relating to field service labor operations that would be loaded from a field service order that was entered in [ RMA.E ](../RMA-E/README.md) and may generate credits. Field service parts are loaded as line items in tab 2.   
  
Tab five contains information about repair steps that were taken. Both labor
and material can be applied to the RMAREC record, and each item can be flagged
as chargeable and non-chargeable. When posted, chargeable items will generate
an invoice in Accounts Receivable.

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of an RMA with the [ RMA.E ](../RMA-E/README.md) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />