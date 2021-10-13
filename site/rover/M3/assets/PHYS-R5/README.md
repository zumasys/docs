## Uncounted Physical Inventory Report (PHYS.R5)
<PageHeader />

**Form Details**
[Form Details](../PHYS-R5-1/README.md)

**Purpose**
The [PHYS.R2](../PHYS-R2/README.md) procedure is used to print a cost variation report
for all uncounted parts. All parts with a quantity on hand in a stocking
location included in the physical for which no tag has been created will
appear on this report. The quantities should then be verified and tags created
for these items.

This report should be reviewed after counts have been entered and before they
are posted to inventory.

**Frequency of Use**
As required.

**Prerequisites**

**Data Fields**

| **Part Number** | The number of the part counted.                               |
| --------------- | ------------------------------------------------------------- |
| **Description** | The description as is appears in the Parts file.              |
| **Invloc**      | The inventory location at which the count occurred.           |
| **Quantity**    | The quantity on hand for this part.                           |
| **Unit Cost**   | The unit cost of this part in the inventory location.         |
| **Ext.Cost**    | The total cost variance this count will have on the inventory |
location for this part. This is the amount that will feed to General Ledger
through the INVREG file when the tags are posted.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
