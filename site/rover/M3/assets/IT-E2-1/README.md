## Inventory Transaction Entry (IT.E2)
<PageHeader />

##

![](./IT-E2-1.jpg)

| **Transaction ID**|  The inventory transaction number is assigned by system
and does not appear as a prompt on the screen.

-  
**Record Type**|  Enter the record type from which you are retrieving the list
of part numbers to load. Once you select a record type, you will asked to
enter a record ID in the next field, which will load the part numbers on
screen. Leave this field empty to manually enter the list of part numbers
being moved.

**Record ID**|  Enter the record ID associated with the record type entered
and the parts will be loaded onto this screen from the receipt or requisition.

**Part Number**|  Enter the part number of the item you are moving.

**Description**|  Contains the first line of the description from the PARTS
file for the associated part number. The field is for reference only and may
not be changed.

**Quantity**|  Enter the number of items being moved.

**UM**|  The part master inventory unit of measure for the associated part
number.

**Loc**|  Enter the location that the material is being moved from.

**WO**|  Enter the work order from which the item is being moved. An entry is
required in this field only if the from location is a type "WO".

**From Lot**|  If the part number entered is lot controlled then enter the
number of the lot being moved. You may leave this field blank if you are
moving items in from a non-physical location and are creating a new lot
number.

**From Bin**|  Enter the bin from which the material is being moved. This
field is only prompted when the INVLOC record is set to bin control.

**Qty**|  Check this box if you wish to have a shortage posted against the
work order for the quantity being removed. An entry in this field is required
only if a from work order number is entered.

**Loc**|  Enter the location that the material is being moved to.

**WO**|  Enter the work order into which this item is being moved. An entry is
required in this field only if the to location is a type "WO".

**To Lot**|  If the part number entered is lot controlled then enter the lot
number the parts are being moved to. This entry will be defaulted to the same
number entered in the from lot field. You may change it to another lot number
if you are splitting the lot or consolidating items from one lot into another.
If you leave this field blank it is assumed that you want the system to assign
a new lot number.

**To Bin**|  Enter the bin to which the material is being moved. This field is
only prompted when the INVLOC record is set to bin control.

**Notes**|  Enter any notes that pertain to this transaction in this field.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
