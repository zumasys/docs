## Where Used Listing (WU.R1)
<PageHeader />

**Form Details**
[Form Details](../WU-R1-1/README.md)

**Purpose**
The WU.R1 procedure is used to create where used listings. The user may
specify each part number to be included in the report or he may leave the part
number prompt blank to obtain a complete where used listing sorted in category
and part number sequence.

**Frequency of Use**
As required.

**Prerequisites**
Building the Where Used file ([WU.P1](../WU-P1/README.md)).

**Data Fields**

| **Part**            | The part number of the component.                                 |
| ------------------- | ----------------------------------------------------------------- |
| **Desc**            | The first line of the description for the associated part number. |
| **Assembly Number** | The part numbers of all the assemblies on which the               |
associated component part number is referenced.
**Assembly Description**|  The first line of the description for each of the
assemblies listed.
**Li**|  The line item numbers on the associated assembly bill of material
which reference the component part number.
**Qty**|  The quantity found on the associated assembly bill of material for
the line item number.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
