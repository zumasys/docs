## Work Order Entry (WO.E)
<PageHeader />

**Form Details**
[General](../WO-E-1/README.md)
[Routing and Schedule](../WO-E-2/README.md)
[Capacity Requirements](../WO-E-3/README.md)
[Costs](../WO-E-4/README.md)
[Materials](../WO-E-5/README.md)
[Labor](../WO-E-6/README.md)
[Shop Transactions](../WO-E-7/README.md)
[Part Images](../WO-E-8/README.md)
[Change History](../WO-E-9/README.md)
[Picker History](../WO-E-10/README.md)
[Attachments](../WO-E-11/README.md)

**Purpose**
The WO.E procedure is used to enter new work orders into the system and to
change existing work orders. The procedure consists of eight screens. The
first tab contains the information which describes what is to be built, how
many, and what the start and completion dates are to be. The second contains
the routing to be used in processing the order and the start and end dates for
each operation. This work order specific routing need only be changed as
required. All other screens are included for reference and to help determine
the status of the work order. For example, the materials tab will display the
materials issued to the job, even if the issue was done via [IT.E](../IT-E/README.md)
and not [PICKER.E2](../PICKER-E2/README.md). Other screens display the history of labor
and shop transactions for the work order. The final tab contains the part
images that were defined in the [PARTS.E](../PARTS-E/README.md) procedure.

The work order may be entered with one of four different initial status codes
which may be changed with this same procedure to one of the other codes when
appropriate. The primary effect of the different codes is to change the way in
which demand for the work order components is determined by the MRP process.
Setting the status to "N" (new) merely sets up the work order with component
demand driven based on the engineering bill of material. Setting the status to
"O" (open) causes a work order bill of material to be created which may be
changed with the [WOBOM.E](../WOBOM-E/README.md) procedure. In this case the component
demand is driven based on the work order specific bill of material rather than
the engineering bill of material. The third status is "R" (released) and will
cause a picking list to be created based upon the work order bill of material
if present, or the engineering bill of material if it is not. The fourth
status is "P" (pulled) and is normally set automatically by the system when
the picking list is processed. However, it may be set manually to this status
if no materials are to be pulled through the normal picking process.

Work orders may be created using planned orders, master schedule items, and
independent demand items. Upon entering the part number, WO.E will check if
any demand exists, and will display a selection list of items. If an item is
chosen, then the WO information will be defaulted from the demand item. More
than one item may be chosen. Upon saving the WO, the WO will be tied to the
demand item(s).

Work orders may be deleted up until the time they are pulled (status = "P").
The status may be set to closed "C" at any time.

**Frequency of Use**
As required.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
