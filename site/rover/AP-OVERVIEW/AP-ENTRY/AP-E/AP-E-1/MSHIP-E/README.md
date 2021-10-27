##  Miscellaneous Shipment (MSHIP.E)

<PageHeader />

**Form Details**  
[ Header ](MSHIP-E-1/README.md)   
[ Line Items ](MSHIP-E-2/README.md)   
[ Packages ](MSHIP-E-3/README.md)   
[ Change History ](MSHIP-E-4/README.md)   
[ Attachments ](MSHIP-E-5/README.md)   

**Purpose**  
The MSHIP.E procedure is used to enter miscellaneous shipments in the system. This procedure can both create new records and update existing records. Data can be defaulted into the header and line items by entering a document type and document number. Quantities, inventory locations, lots, and bin numbers can be entered. The status of the record defaults to "N"ew and can be changed to "S"hipped. When the status is changed to Shipped, if there are any line items with from and to locations, an inventory transaction will be done for those items. Also when the status is changed to Shipped, the data will be interfaced to the appropriate freight carrier, if so designated on the [ SHIP.CONTROL ](SHIP-CONTROL/README.md) record.   
  
If an MSHIP record was created automatically through a debit receipt ( [ RECEIPTS.E2 ](RECEIPTS-E2/README.md) ), then the "debit receipt" flag will be checked, and this record cannot have any of it's line item data changed through MSHIP.E. When it's status is changed to "S", then the normal debit receipt update process will occur the same as it would through [ RECEIPTS.E2 ](RECEIPTS-E2/README.md) . If the debit receipt is subsequently reversed, then the MSHIP record will be updated to status "C"ancelled.   
  
There is no financial impact from this shipment transaction, except if inventory transactions occur. It is mainly a method of recording material being shipped for reasons other than sales orders and to generate paperwork (packing slip) for the items. The [ MSHIP.F1 ](MSHIP-F1/README.md) can be used to print a packing slip. 

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the Ship control record ( [ SHIP.CONTROL ](SHIP-CONTROL/README.md) ), if desired. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />