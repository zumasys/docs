## Summary Costed Inventory Listing (INV.R6)
<PageHeader />

**Form Details**
[Form Details](../INV-R6-1/README.md)

**Purpose**
The INV.R6 procedure is used to produce a summary costed inventory listing by
category. The report includes all of the part numbers defined in the Parts
Master file and shows the current extended cost for each item with subtotals
by category and a grand total for all items.
There are options to select/suppress printing of cost groups, and to use the
standard cost instead of the default cost method for a cost group.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Cat**      | The category as found in the Parts file.                 |
| ------------ | -------------------------------------------------------- |
| **Quantity** | The total quantity of all parts on hand in all inventory |
locations for the category.
**Ext.Cost**|  The result of multiplying the unit cost of each part number by
it's quantity.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
