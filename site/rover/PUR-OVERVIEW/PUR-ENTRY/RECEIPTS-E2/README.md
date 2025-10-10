##  Debit Entry (RECEIPTS.E2)

<PageHeader />

**Form Details**  
[ Line Items ](RECEIPTS-E2-1/README.md)   
[ Components ](RECEIPTS-E2-2/README.md)   
[ DMR Data ](RECEIPTS-E2-3/README.md)   

**Purpose**  
The RECEIPTS.E2 procedure provides the ability to post debit memos against
previously entered receipts. The operator enters the number of the receipt to
be debited which causes the original receipt data to be loaded onto the
screen. If the entire receipt is to be debited the user does not need to make
any further entries. If only some of the line items or partial quantities need
to be debited then the user must change each line item to reflect the correct
quantity or remove the line item entirely. The record is set to status "N"
upon initial entry. When the debit receipt is changed to status "R" inventory
transactions are created to remove the parts from inventory unless the "create
Mship" flag has been checked. In this case, the status "R" will trigger a
creation of an MSHIP record to provide a shipping document for sending the
parts back to the vendor.  
  
If the debit receipt is tied to an MSHIP record, then [ MSHIP.E ](../../../MRK-OVERVIEW/MRK-ENTRY/MSHIP-E/README.md) must be used to trigger the inventory update by setting the status to "S" in [ MSHIP.E ](../../../MRK-OVERVIEW/MRK-ENTRY/MSHIP-E/README.md) , which will cause the parts to be removed from inventory. The status of the debit receipt then will be automatically updated to "S"hipped.   
  
A debit receipt record can be modified or deleted using RECEIPTS.E2 while it is in a "N"ew status, but after the inventory has been updated, if an entry was made in error it can be reversed using [ RECEIPTS.E3 ](RECEIPTS-E3/README.md) . A debit/Mship record can also be deleted before it has been shipped (Status "R"). 

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of the receipt record to be debited ( [ RECEIPTS.E ](../RECEIPTS-E/README.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />