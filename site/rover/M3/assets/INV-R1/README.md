## Costed Inventory Listing (INV.R1)
<PageHeader />

**Form Details**
[Form Details](../INV-R1-1/README.md)

**Purpose**
The INV.R1 procedure is used to produce a costed inventory listing. The report
includes all of the part numbers defined in the Parts Master file and shows
the current inventory balance and value for each item with subtotals by
category and a grand total for all items. Zero balance items can be optionally
suppressed.

There are options to select/suppress printing of cost groups, categories and
locations. Do not change costing method if you are reconciling to the G/L.

Additionally, if one of the cost groups is set to standard cost, the user may
select to include Standard, Current or Previous cost fields by changing Cost
Method field.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Part.Number** | The part number identifying the inventory.                   |
| --------------- | ------------------------------------------------------------ |
| **Category**    | The category for the associated part number as it appears on |
the Parts Master.
**Description**|  The description for the associated part number as it appears
on the Parts Master.
**Unit of Measure**|  The unit of measure for the associated part number as it
appears on the Parts Master.
**Unit.Cost**|  The cost for one unit of the associated part number.
**Quantity**|  The total quantity of the part on hand in all inventory
locations.
**Ext.Cost**|  The result of multiplying the unit cost of the part number by
the quantity.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
