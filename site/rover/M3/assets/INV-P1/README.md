## Assign Cycle Dates (INV.P1)
<PageHeader />

**Form Details**
[Form Details](../INV-P1-1/README.md)

**Purpose**
The INV.P1 procedure is used to assign cycle dates to the inventory records.
Inventory records are sorted by ABC code and assigned dates based upon the
start date entered, the number of days between counts entered in the
[INV.CONTROL](../INV-CONTROL/README.md) record and the work days specified in the
[MC.CONTROL](../MC-CONTROL/README.md) record.

**Frequency of Use**
This procedure should be run when first setting up the system, after all parts
have been entered into the system. It can be re-run at any time, with all
cycle dates for the specified plan group being reset based upon the then-
current data.

**Prerequisites**
Stratification of the ABC codes into the Parts file
([PARTS.P1](../PARTS-P1/README.md)), entry of the cycle parameters ([INV.CONTROL](../INV-
CONTROL/README.md)) and entry of the shop calendar ([MC.CONTROL](../MC-CONTROL/README.md)).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
