##  Receipts Entry (RECEIPTS.E)

<PageHeader />

**Form Details**  
[ Line Items ](RECEIPTS-E-1/README.md)   
[ Components ](RECEIPTS-E-2/README.md)   

**Purpose**  
The RECEIPTS.E procedure provides the ability to post receipts against
purchase orders. The operator enters the number of the purchase order to be
received, the receipt date, and the packing slip number. The system
automatically loads all of the line items from the purchase order onto the
screen so that all the user must do is enter the quantity received for the
applicable line items. The receipt is set to status "N" upon initial entry.
When the receipt is changed to status "R", all of the items without a quantity
entered are removed and inventory transactions are created for the remaining
inventory items.  
  
When a quantity is entered for a line item, if that line item part number is a
phantom part and the "explode phantoms" option has been entered on the
purchase order, then that line item will have it's component parts loaded into
the second tab of RECEIPTS.E. Any necessary bin numbers or lot numbers must be
entered on the component parts and the inventory transactions will be done for
the component parts, not the phantom.  
  
A receipt record can be modified or deleted using RECEIPTS.E while it is in a "N"ew status, but after the inventory has been updated, if an entry was made in error it can be reversed using [ RECEIPTS.E3 ](../RECEIPTS-E3/RECEIPTS-E3/README.md) . 

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of the purchase order to be received ( [ PO.E ](../PO-E/README.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />