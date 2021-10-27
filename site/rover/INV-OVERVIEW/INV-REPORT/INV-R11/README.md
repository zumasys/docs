##  Negative On Hand Listing per Bin Location (INV.R11)

<PageHeader />

**Form Details**  
[ Form Details ](INV-R11-1/README.md)   

**Purpose**  
The INV.R11 procedure is used to produce a negative on hand inventory listing
per bin location for specified part numbers. The report only includes those
part numbers which have a negative bin qty. If a negative bin qty is found all
bin locations for this part number will be listed.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part Number** The part number.  
**Description** The part description as read from the Parts file.  
**Invloc** The inventory location which has a bin location with a negative on
hand quantity.  
**Quantity** The total quantity of the part on hand for the location.  
**Bin Loc** The bin location(s) for this part number.  
**Bin Qty** The quantity located in a particular bin.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />