##  Slow Moving Inventory Listing (USAGE.R1)

<PageHeader />

**Form Details**  
[ Form Details ](USAGE-R1-1/)   

**Purpose**  
The USAGE.R1 procedure is used to print a slow moving inventory report. The
procedure checks the usage figures for the number of months selected, then
reports those items with less usage than entered by the user. In addition, the
report will not consider a part slow moving if it has MRP demand even though
it may have had no prior usage at all.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part Number** The number of the part identified.  
**Description** The description as is appears in the Parts file.  
**Balance** The inventory balance as it appears in the Inv file, for all
inventory locations.  
**Unit Cost** The unit cost of this part, either average or standard,
depending upon which was requested.  
**Ext.Cost** The extended value of this part in inventory.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />