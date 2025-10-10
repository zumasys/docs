##  RMA Receipt Traveler (RMAREC.R1)

<PageHeader />

**Form Details**  
[ Form Details ](RMAREC-R1-1/README.md)   

**Purpose**  
The RMAREC.R1 procedure is used to create RMA receipt travelers. Receipt
travelers are used as a means of identifying materials as the are moved
through the receiving cycle. An individual page is created for each line item
received. The intent is that at least one copy for each item would accompany
the materials through the process. Other copies may be sent to other
departments such as Accounts Receivable if desired.

**Frequency of Use**  
As receipts are entered into the system or as required.

**Prerequisites**  
None.

**Data Fields**

**RMA Number** The number of the RMA against which the receipt was made.  
**Receipt Number** A sequential number assigned from the RMA record to
identify the receipt. The full receipt ID is made up of the RMA Number
followed by a dash (-), followed by a sequential number.  
**Receipt Date** The date the receipt was made as entered in the [ RMAREC.E ](../../MRK-ENTRY/RMAREC-E/README.md) or [ RMAREC.E2 ](../../MRK-ENTRY/RMAREC-E2/README.md) procedure.   
**Customer No** The number of the customer on the RMA.  
**Customer Name** The name of the RMA customer.  
**Contact** The name of the contact as entered on the RMA.  
**Item Number** The line item number on the RMA for the item received.  
**Part Number** The internal number of the part received.  
**Description** The multi-line description of the item received.  
**Return Loc** The inventory location into which the items were received.  
**Work Order** The work order, if any, created for the item.  
**Quantity** The quantity of the items received.  
**Lot Number** The lot number if any assigned to the items received.  
**Bin Number** If the location the items were returned to is bin controlled
this shows the bin number the items went into.  
**Serial No** The serial numbers, if any, associated with the items received.  
**Problem** Notes describing the problem reported and/or found with the items.  
**Corrective Action** Notes defining the corrective action taken to correct
problems.  
**Failure Date** The date on which the items failed.  
**Date Shipped** The date on which the items were originally shipped.  
**Code** Shows each of the failure codes applicable to the items on the
receipt.  
**Description** The description of each corresponding code.  
**Count** The number of items that exhibited the problem defined by the
associated code.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />