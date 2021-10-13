## Physical Count Listing (PHYS.R4)
<PageHeader />

**Form Details**
[Form Details](../PHYS-R4-1/README.md)

**Purpose**
PHYS.R4 provides physical inventory count sheets for the purpose of recording
counted quantities during a physical inventory. You may specify the locations
to be included in the listing and if the current balance is to be printed on
the report. If you prefer to print individual tags for each part, use the
[PHYS.F1](../PHYS-F1/README.md) procedure.

**Frequency of Use**
During physical inventory.

**Prerequisites**
The [PHYS.P1](../PHYS-P1/README.md) procedure must have been run to generate the
physical inventory count records.

**Data Fields**

| **Tag**         | The number assigned to the associated part and lot to be counted. |
| --------------- | ----------------------------------------------------------------- |
| **Part Number** | The part number to be counted.                                    |
| **Description** | The description of the part.                                      |
| **ABC**         | The ABC code assigned to the part number.                         |
| **UM**          | The inventory stocking unit of measure.                           |
| **Balance**     | Shows the current balance of the part number in inventory if      |
designated in the report processing parameters.
**Count Qty**|  An underline providing a place for the user to write down the
quantity counted of the part.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
