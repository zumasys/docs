## Routing Mass Update Procedure (ROUTING.P2)
<PageHeader />

**Form Details**
[Form Details](../ROUTING-P2-1/README.md)

**Purpose**
The ROUTING.P2 procedure is used to perform a mass delete or add on all
routings for specified work centers.

**Frequency of Use**
As needed.

**Prerequisites**
The correct information must be present in the work center file.

**Data Fields**

| **WORK.CENTER** | Enter the specified work centers to be added or deleted. |
| --------------- | -------------------------------------------------------- |
| **DESCRIPTION** | Description of the work center as defined in             |
[WC.E](../WC-E/README.md).
**OPER**|  If you will be adding work centers, to the routing then enter the
operation number you wish to use. You can leave this field blank if you want
the system to automatically re-assign all operation numbers for you. If you do
not want the system to re-assign the operations for you this is a required
field. ****** WARNING ******** If the operation number already exists in the
routing, the work center will not be loaded in.
**POS**|  If adding work centers, enter the position in the routing that this
work center should be placed. For example, if you enter "3", this work center
will become the third operation. If left blank, the work center will be added
to the end of the list. This procedure updates all routings. Therefore, if you
are adding more than one work center and enter the same position for all of
them, the last one in the list will become stored on the specified position.
For example, if you are adding two work centers and have specified
position 2, the first work center listed will become the third operation and
the 2nd work center list will become the second operation.
**FUNCTION**|  Enter an "A" to add the specified work centers to all routings.
If the work center already exists it will not be re-loaded or added a second
time to the routing.
Enter a "D" to delete the specified work centers from all routings that
contain the specified work centers. All occurences of the work center will be
deleted from the routing.
**REASSIGN.OPER.NO**|  Enter a "Y" if you wish the program to automatically,
re-assign the operation numbers. The existing operation numbers will be over-
written and numerically re-assigned as 1, 2,
3, etc. depending on their position in the routing. This program does not
attempt to update the routings on existing work orders. Enter a "N" or leave
blank to not re-assign the operation numbers. If this field is left blank than
an operation must be specified for each routing.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
