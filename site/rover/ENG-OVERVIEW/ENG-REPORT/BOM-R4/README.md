##  Costed Multi-Level Bill of Material Listing (BOM.R4)

<PageHeader />

**Form Details**  
[ Form Details ](BOM-R4-1/README.md)   

**Purpose**  
The BOM.R4 procedure is used to create costed indented bill of material
listings. The user may specify each bill of material he would like to see by
entering the part number which identifies it. The user may also enter any of
the Parts file cross-reference items which include model number, category, and
manufacturer part number. If these are entered the system will automatically
substitute the corresponding part number, or display a list of possible part
numbers which can be chosen.  
  
The user must also specify if standard or average costs are to be used and
which of the standard costs (Current, Standard, Previous) are to be used. Even
if the cost method chosen is average you will want to specify the standard
cost type to be used since any part which does not have an average associated
with it will use the standard cost specified. An asterisk (*) will appear next
to the costs in these cases.  
  
The difference between this indented bill of material listing and a standard
bill of material listing is that the indented listing shows not only the parts
called out on the specified assembly, but also all of the parts called out on
each sub-assembly referenced through all levels of the product structure. The
report denotes the level of the part by placing one period (.) in front of the
part number for each level.

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of the specified Bill of Material records ( [ BOM.E ](../../ENG-ENTRY/BOM-E/README.md) ). 

**Data Fields**

**Item** The line item number.  
**Part** The part number of the component.  
**Desc** The first line of the description for the associated part number.  
**Code** One of the following four codes defining the part. C - Component part
A - Assembly P - Phantom assembly L - Line  
**Qty** The quantity required of the part to make one unit of the assembly
defined by the bill of material. Please note that the quantities shown for
sub-assembly components have been multiplied by the quantity shown for that
sub-assembly. This is done so the quantity will indicate the full amount
required to make one unit of the top assembly rather than just one unit of the
associated sub-assembly.  
**UM** The unit of measure associated to the quantity.  
**Material** The material cost for the associated part.  
**Labor** The labor cost for the associated part.  
**Outside Processing** The outside processing cost for the associated part.  
**Fixed Overhead** The fixed overhead cost for the associated part.  
**Variable Overh** ead The variable overhead for the associated part.  
**Material Overh** ead The material overhead for the associated part.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />