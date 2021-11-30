##  Bill of Material Listing (BOM.R1)

<PageHeader />

**Form Details**  
[ Form Details ](BOM-R1-1/README.md)   

**Purpose**  
The BOM.R1 procedure is used to create bill of material listings. The user may
specify each bill of material he would like to see by entering the part number
which identifies it. The user may also enter any of the parts file cross-
reference items which include model number, category, and manufacturer part
number. If these are entered the system will automatically substitute the
corresponding part number, or display a list of possible part numbers which
can be chosen.

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of the selected Bill of Material records ( [ BOM.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E/BOM-E) ). 

**Data Fields**

**Li#** The line item number.  
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