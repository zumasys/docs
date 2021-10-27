##  Bill of Material Mass Change Report (BOM.R5)

<PageHeader />

**Form Details**  
[ Form Details ](BOM-R5-1/README.md)   

**Purpose**  
The BOM.R5 procedure is used to create a report of the items that will be affected if a mass change update ( [ BOM.P3 ](../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E/BOM-E/ECN-E/BOM-P3) ) were to be performed using the same parameters.   
  
The procedure determines which bills of material to list based on the part
number and/or reference designator you specify. You may also limit the items
selected by specifying a pre-defined save-list of the eligible bill of
material IDs. The procedure searches the line items of each bill of material
on file, or in the save-list specified, for a match on the part number and/or
reference designator.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**BOM.ID** The part number that identifies the bill of material.  
**Description** The first line of the description from the Parts file.  
**Li#** The line item number that was found matching the specifications.  
**Part Number** The part number of the component.  
**Description** The first line of the description for the associated part
number.  
**Code** One of the following four codes defining the part. C - Component part
A - Assembly P - Phantom assembly L - Line  
**Quantity** The quantity required of the part to make one unit of the
assembly defined by the bill of material.  
**Unit Meas** The unit of measure associated to the quantity.  
**Start Eff** The date on which the associated part will become effective for
use.  
**End Eff** The date on which the associated part is no longer in effect.  
**Reference Designator** Reference designator information for the associated
part number.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />