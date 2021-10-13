## Work Order Bill of Material Listing (WOBOM.R1)
<PageHeader />

**Form Details**
[Form Details](../WOBOM-R1-1/README.md)

**Purpose**
The [BOM.R1](../BOM-R1/README.md) procedure is used to create work order bill of
material listings. The user may specify each bill of material he would like to
see by entering the work order number which identifies it.

**Frequency of Use**
As required.

**Prerequisites**
Creation of the work order bill of material record ([WO.E](../WO-E/README.md)).

**Data Fields**

| **Li no** | The line item number.                                             |
| --------- | ----------------------------------------------------------------- |
| **Part**  | The part number of the component.                                 |
| **Desc**  | The first line of the description for the associated part number. |
| **Code**  | One of the following four codes defining the part. C - Component  |
part A - Assembly P - Phantom assembly L - Line
**Quantity**|  The quantity required of the part to make one unit of the
assembly defined by the bill of material.
**Ref Designator**|  Reference designator information for the associated part
number.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
