## Critical Path Report (BOM.R8)
<PageHeader />

**Form Details**
[Form Details](../BOM-R8-1/README.md)

**Purpose**
The critical path report indicates the longest path through the product
structure based on the processing time defined in the routing file. The report
steps through each level of the bill of material structure for the assemblies
specified by the user. As it goes through each level it accumulates the
processing time required to complete each sub level assembly in the structure.
The path through the product structure representing the longest time required
is displayed in indented format. This allows planning to concentrate on the
items most critical to completing the item on time.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Level**|  The level in the product structure at which the associated part
number is positioned.
-  
**Part Number**|  The part number at the associated level in the structure.
**Description**|  The part description from the parts master.
**Lead**|  The individual lead time, in days, of the associated part number.
**Days**|  The cummulative number of days, from the bottom of the structure
upwards, indicating the elapsed time required to complete that level.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
