## RMA Receipts Entry (RMAREC.E)
<PageHeader />

## Line Items

![](./RMAREC-E-1.jpg)

| **Receipt ID**|  This field is automatically skipped for each new entry.
When the record is saved the system assigns the record ID.

-  
**RMA Number**|  Enter the RMA number against which the items are being
received.

**Date Received**|  Enter the date on which the items were received. The
system will default the current date.

**Customer**|  Displays the customer for this rma.

**Li No**|  When the RMA number is entered all of the line items defined on
the RMA are loaded onto the form. Lines that identify a phantom part number
will show the line item number from the RMA and sub-level items will be shown
with the parent line number, followed by a dash and a sequential number. For
example, if line 2 were a phantom with two sub-level parts, the parent item
would be shown with the line item 2 and the sub-level parts would be shown as
line items 2-1 and 2-2.

**Part Number**|  Contains the part number as identified on the RMA record. It
may not be changed.

**Part Description**|  The description for each item is loaded from the
information on the RMA record. It may not be changed.

**Qty Received**|  Enter the quantity received of the item. If there are
multiple lot numbers then enter the quantity of each lot number separately. If
there was nothing received against the item then leave this field blank or
enter zero. All line items that are zero or blank will be removed when the
record is saved.

**Lot Number**|  Enter each of the lot numbers received for the associated
line item.

**Bin Number**|  If the location into which the item is being moved is bin
controlled then enter the bin number into which it will be placed.

**Serial Number**|  If the items being returned are serialized, enter the
serial number of each item received.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
