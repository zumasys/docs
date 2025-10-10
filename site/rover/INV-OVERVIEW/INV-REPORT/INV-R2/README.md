##  Inventory Availability Listing (INV.R2)

<PageHeader />

**Form Details**  
[ Form Details ](INV-R2-1/README.md)   

**Purpose**  
The INV.R2 procedure is used to produce a report which shows what parts are
and are not on hand for the assemblies and quantities specified. The procedure
can be used to determine if the parts you need for a potential work order are
on hand without creating a work order and physically pulling the parts.  
  
The report is not a cummulative "what if" process and does not consider any
current obligations for the parts.  
  
The inventory locations which are to be considered for this report are identified in the [ INV.CONTROL ](../../INV-ENTRY/INV-CONTROL/README.md) procedure. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Li#** The line item number of the bill of material record for the associated
part number.  
**Part** The part number of each component required.  
**Description** The first line of the description for the part number as it
appears on the Parts Master.  
**On.Hand** The total quantity of the part on hand in all inventory locations.  
**Qty.Required** The quantity required of the associated part number to
complete the number of units specified for the assembly.  
**Qty.Short** The quantity which would not be available if you pulled a kit
for the assembly.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />