##  Parts Listing by ABC with On-hand and Cost (PARTS.R3)

<PageHeader />

**Form Details**  
[ Form Details ](PARTS-R3-1/README.md)   

**Purpose**  
This report provides a listing of the items in the parts master by ABC code.
The report is useful in determining the number and value of items identified
in each of the classes. This can be helpful when detemining cycle count
requirements. A summary of the number of items and total cost in each category
appears at the end of the report. The report detail can be suppressed to show
only these totals.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part Number** Each part number included in the listing.  
**Description** The description of the associated part number from the parts
master file.  
**Rev** The current revision of the part number as defined in the parts
master.  
**UM** The stocking unit of measure for the part.  
**Cat** The category the part is a member of.  
**Type** The type code associated with the part number. C = component, A =
Assembly, P = Phantom Assembly, L = Line Stock Item.  
**Status** The current status of the part number. P = Preliminary, A =
Approved, C = Change in process, I = Inactive, D = Set for deletion.  
**ABC Code** The current ABC code assigned to the part number.  
**Make/Buy** Shows "M" for make parts and "B" for buy parts.  
**Unit Cost** The current unit cost of the part number.  
**On Hand** The current quantity on hand of the item in the locations
specified.  
**Ext Cost** The extended cost of the item (Unit Cost x On Hand).  
**n Mos Usage** The usage for the number of months specified by the user where
n displays this number.  
**Average Usage** The average monthly usage of the part number.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />