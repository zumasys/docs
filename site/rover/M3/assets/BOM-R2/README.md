## Costed Bill of Material Listing (BOM.R2)
<PageHeader />

**Form Details**
[Form Details](../BOM-R2-1/README.md)

**Purpose**
The BOM.R2 procedure is used to create costed bill of material listings. The
user may specify each bill of material he would like to see by entering the
part number which identifies it. The user may also enter any of the parts file
cross-reference items which include model number, category, and manufacturer
part number. If these are entered the system will automatically substitute the
corresponding part number, or display a list of possible part numbers which
can be chosen.

The user must also specify which set of standard costs to use for output. The
options are Current, Standard and Previous.

**Frequency of Use**
As

**Prerequisites**
Entry of the specified Bill of Material records ([BOM.E](../BOM-E/README.md)).

**Data Fields**

| **Item** | The line item number.                                             |
| -------- | ----------------------------------------------------------------- |
| **Part** | The part number of the component.                                 |
| **Desc** | The first line of the description for the associated part number. |
| **Code** | One of the following four codes defining the part. C - Component  |
part A - Assembly P - Phantom assembly L - Line
**Qty**|  The quantity required of the part to make one unit of the assembly
defined by the bill of material.
**UM**|  The unit of measure associated with the quantity.
**Material**|  The material cost for the associated part.
**Labor**|  The labor cost for the associated part.
**Outside Processing**|  The outside processing cost for the associated part.
**Fixed Overhead**|  The fixed overhead cost for the associated part.
**Variable Overh**|  ead The variable overhead for the associated part.
**Material Overh**|  ead The material overhead for the associated part.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
