##  Purchase Requisition Listing (POREQ.R1)

<PageHeader />

**Form Details**  
[ Form Details ](POREQ-R1-1/README.md)   

**Purpose**  
The POREQ.R1 procedure is used to create reports of requisitions based on
parameters entered by the user. These parameters include a cut-off date
compared to the origination date on the requisition, a planning group, order
status (open or closed), and the name of the requestor. All of the parameters
are optional.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Requisition Id** The number of the requisition.  
**Date** The date on which the requisition was generated.  
**Status** The status (Open or Closed) of the requisition.  
**Vendor** The name and number of the vendor selected, if any.  
**Li#** Each of the line numbers on the requisition.  
**Part No** The part number requested.  
**Description** The description of the item requested.  
**UM** The unit of measure in which the parts will be delivered by the vendor.  
**Factor** The number by which the quanitities on order are to be multiplied
to obtain the number of parts in the internal unit of measure. For example, if
the vendor sells us eggs by the dozen, but we stock eggs individually this
number would be twelve.  
**Req Date** The dates on which the items are required.  
**Quantity** The quantities required on the associated dates.  
**Unit Price** The unit price quoted by the vendor for the item.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />