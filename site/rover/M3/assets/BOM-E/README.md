## Bill of Material Entry (BOM.E)
<PageHeader />

**Form Details**
[BOM](../BOM-E-1/README.md)
[Change History](../BOM-E-2/README.md)
[Attachments](../BOM-E-3/README.md)

**Purpose**
The BOM.E procedure is used to enter new assemblies into the Bill of Material
file (BOM), change existing records and delete records from the file.

The information contained in each record consists of the item numbers, part
numbers, quantities, and reference designation information for each item on
the assembly parts list. The revision of the assembly is also displayed and
may be updated when appropriate. The revision is then written onto the
corresponding PARTS file record. The where used file (WU) is updated for each
of the component parts, and the low level codes are also recalculated if
required through the bill of material structure as required.

If desired the user may create a new Bill of Material by loading the data from
an existing record and making the appropriate changes. This is done by
entering the part number of an existing Bill of Material at the prompt called
"Master".

The Bills of Material may also be updated through the ECN process based on
entries made in [ECN.E](../ECN-E/README.md) and posted through [ECN.P1](../ECN-P1/README.md).

**Frequency of Use**
As required.

**Prerequisites**
Entry of Part records ([PARTS.E](../PARTS-E/README.md)).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
