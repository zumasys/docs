## Enter Cycle Inventory Counts (CYCLE.E)
<PageHeader />

##

![](./CYCLE-E-1.jpg)

| **Control**|  Normally, the tag number is the key to the CYCLE file. For the
purposes of this entry screen, the tag number is being prompted below so that
multiple tags can be entered on a single screen for faster data entry. No
entry is allowed for this field in this procedure.

-  
**Tag**|  Enter the control number assigned to the tag which you are entering.
If you wish to create a new tag, enter "N" into this field. When the record is
saved, the system will check to see if any existing tags already exist for the
part number, location, lot and bin number. If an existing tag is found, a new
tag will not be created for you. If a new tag/cycle record is created, the
beginning balance for the location/lot/bin number that existed in inventory at
the time record was created will be used in the posting process. Therefore, no
inventory transactions for the associated part should be made until the tag
itself has been created.

**Cycle Date**|  If you are creating a new tag, you will need to assign a
cycle date to the record. The current date will be defaulted in for you but
can be changed as required.

**Part Number**|  The part number counted on this tag.

**Invloc**|  The inventory location where this part was counted.

**St**|  This is the current status of this tag. N = New C = Counted V = Void
Entering a status of "V" is the same as entering a status of "C" with a
quantity of zero.

**Quantity**|  Enter the actual quantity counted for this part at the
specified inventory location, as written on the tag by the counter.

**Lot No**|  Displays the lot number, if any, associated with the count
entered. An entry can be made into this field for new records but existing
records cannot be changed.

**Bin.No**|  This field contains the bin number for the associated cycle tag.
An entry can be made into this field on new records but existing records
cannot be changed.

**Date**|  Enter the date on which this part was counted. This will default to
the count date entered on the previous tag.

**Init**|  Enter the initials of the person who performed the count for this
tag. This will default to the initials entered for the previous tag.

**Part Description**|  The first line of description for this part number.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
