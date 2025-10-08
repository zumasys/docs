##  Work Order Bill of Material Entry (WOBOM.E)

<PageHeader />

##

![](./WOBOM-E-1.jpg)

**Work order number** Enter the work order number which identifies this bill
of material.  
  
**Work Order Assembly** The assembly number for which the above work order was
created.  
  
**Master BOM** You may load any bill of material on file for this work order
by entering the part number identifying the record at this prompt. All of the
data that currently exists in the record will be replaced by the data in the
bill of material selected. You may then customize the bill of material for the
work order without affecting the engineering master file.  
  
**Line item** Enter the line item number for this position.  
  
**Part number** Enter the part number of the component or assembly for this
line item.  
  
**Part Description** Contains the first line of the part description from the
parts file. It may not be changed.  
  
**Code** Enter one of the following codes which defines the item being entered
for this line item.  
C - Component part from stock  
A - Completed assembly from stock  
P - Assembly whose components will be pulled  
from stock.  
L - Line stock  
* - Comment   
  
**Backflush Oper** If material backflush is used in the production process you
have the option of specifying when individual items on the bill of material
are to be consumed. Enter the letter "F" if the part number is to be consumed
when the assembly is moved from the first step in the routing. Enter "L" if it
should be consumed when items are moved from the last step in the routing
(typically when the assembly is finished). Or enter the specific operation
number in the routing from which the part number should be consumed when
assemblies are moved through it. If you leave this field blank or it is set to
something other than the codes described or a valid operation in the routing
the letter "L" will be assumed. These settings do not have any affect unless
the work order is designated as a backflush order.  
  
**Bom UM Factor** This is the BOM U/M factor from the parts master. It is
shown for reference only and may not be changed. It is used in conjunction
with the Bill of Material quantity to convert to the stocking unit of measure
quantity. The factor is divided into the BOM quantity to calculate the stock
quantity. If no factor is defined, then the stock quantity is the same as the
BOM quantity.  
  
**Bom Qty** Enter the quantity required of this item for each assembly. The
entry may contain up to 4 decimal places, and must be greater than or equal to
zero.  
If a negative number is entered the work order picking and backflush
operations will treat the associated part as a return to stock item, moving
the item from the WIP location back to stock rather than the normal stock to
WIP movement. Negative entries will also affect the standard cost rollup by
reducing their value from the total for the parent assembly.  
  
**Qty** This is the quantity in inventory unit of measure. It is for
information only and is calculated using the BOM quantity entered divided by
the BOM U/M factor as displayed from the PARTS file.  
  
**BOM U/M** Contains the bill of material unit of measure for the associated
part number. It is shown here for reference only and may not be changed.  
  
**Inv U/M** Contains the stocking unit of measure for the associated part
number. It is shown here for reference only and may not be changed.  
  
**Start Date** If the associated part number is to become effective on a
specified date then enter that date in this field, otherwise leave this field
blank. For example, if you were changing to a new part number on 6-30-2006 you
would enter 6-29-2006 in the end effectivity date field for the old part
number line and enter 6-30-2006 in the start effectivity field on the new part
number line. Procedures such as MRP and work order picklist creation will
check this date to determine if the part should be included in processing.  
  
**End Date** If the associated part number is not to be used after a specified
date then enter that date in this field, otherwise leave this field blank. For
example, if you were changing to a new part number on 6-30-2006 you would
enter 6-29-2006 in the end effectivity date field for the old part number line
and enter 6-30-2006 in the start effectivity field on the new part number
line. Procedures such as MRP and work order picklist creation will check this
date to determine if the part should be included in processing.  
  
**Reference designator** Enter any reference designation information
applicable to this part.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />