##  Shipment Line Item Reversal Entry (SHIP.E6)

<PageHeader />

##

![](images/SHIP-E6-1.jpg)

**Shipment Number** Shipment numbers are assigned automatically by the system
when the record is filed. If you want to view or modify an existing reversal
record, enter the shipment number here, otherwise leave blank and enter the
original shipment to create a new record.  
  
**Original Shipment** Enter the number of the shipment record you want to
reverse. Only shipments with a status of "P" (posted) may be reversed.  
  
**Date** The date loaded into this field by the system is the ship date on the
original shipment record. It may be changed to another date for the reversal
if appropriate, but may not be less than the original shipment date.  
  
**Status Lit** The status field contains the current status of the shipment
record. It will display one of the following designations.  
New - The items have not been reversed.  
Shipped - The items have been reversed and restocked to inventory.  
Posted - The shipment has been posted and the accounts receivable record has
been created.  
  
The reversal shipment will be originally created as status "New" and no
inventory will be returned. When you are ready to finalize the reversal,
change the status to "Shipped". After the status has been changed to
"Shipped", no further changes will be allowed. At that time any line items
that are not reversed will be removed.  
  
**Ship Via** Contains the method of shipment or carrier called out on the
original shipment.  
  
**Waybill#** The number of the waybill which was entered on the original
shipment.  
  
**Sales Order Number** Contains the sales order number associated with the
shipment.  
  
**Customer** Contains the name of the customer assigned to the sales order.  
  
**Original Invoice** This field contains the invoice number that was created
for the original shipment.  
  
**Invoice#** This field contains the invoice number assigned to this shipment. If you have selected the option in [ MRK.CONTROL ](../../MRK-CONTROL/README.md) to assign invoices manually, the original invoice number prefaced by an "R" will be loaded into this field for you but can be changed as required. If you have opted to assign the invoice number at ship or post time, no invoice number will loaded into this field for you and you will not be able to enter a number.   
  
**Notes** The notes from the original shipment record are defaulted into this
field, but they may be changed to describe the reason for the reversal.  
  
**Lis** The line number of the part to be shipped as it appears on the
original shipment.  
  
**SO Lis** The sales order line item from the original shipment.  
  
**Reverse Line Item** Check this box to reverse this line item.  
  
**Parts** Contains the part number from the original shipment.  
  
**Li Desc**  
  
**Qtys** Contains the quantity from the original shipment shown as a negative
number.  
  
**FG Locs**  
  
**Sales Accts** Contains the sales account number from the original shipment
record to be used in the reversal transaction.  
  
**Unit Price** Contains the unit price of the items from the original
shipment.  
  
**Price Per** Contains the unit price of the items from the original shipment.  
  
**Unit Disc** Contains the unit discount of the items from the Original
shipment.  
  
**Pull Qty**  
  
**Lot No**  
  
**Bin**  
  
**Line Notes** The line notes are defaulted from the original shipment record,
but may be changed to explain the reason for the reversal if required.  
  
**Reverse All** Press this button to reverse all line items. Only line items
that have not been previously reversed will be checked.  
  
**Clear All** This button can be used to clear all line item reversal flags.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />