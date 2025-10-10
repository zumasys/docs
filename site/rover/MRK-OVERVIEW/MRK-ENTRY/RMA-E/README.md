##  RMA Entry (RMA.E)

<PageHeader />

**Form Details**  
[ Header ](RMA-E-1/README.md)   
[ Line Items ](RMA-E-2/README.md)   
[ FSO Operations ](RMA-E-3/README.md)   
[ Change History ](RMA-E-4/README.md)   
[ Attachments ](RMA-E-5/README.md)   

**Purpose**  
The RMA.E procedure is used to enter new RMAs into the system. An RMA
identifies items that are scheduled to be returned by a customer. Several
items of information concerning the items being returned may be entered in
this procedure or may be deferred until the items are actually received using
the RMAREC procedures. If the original shipment or sales order numbers are
available they may be entered and optionally backordered. You also have the
option of creating a credit memo based on receipt of the items.  
  
The procedure contains two screens. One contains the header information which
describes the terms and conditions of the RMA and which customer is involved.
It also maintains information such as the original sales order and shipment
numbers if these are available. The other contains the information about what
is being returned and the reason for the return as well as the action to be
taken. The system allows you to enter multiple sets of the data (line items)
on the second screen.

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the marketing control record ( [ MRK.CONTROL ](../MRK-CONTROL/README.md) ), and entry of the customer and terms records to be referenced. If the orders are for inventoried parts, the part number must exist on the Parts file and the inventory locations must exist on the Invloc file. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />