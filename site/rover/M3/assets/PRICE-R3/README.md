## Horizontal Price Listing (PRICE.R3)
<PageHeader />

**Form Details**
[Form Details](../PRICE-R3-1/README.md)

**Purpose**
The PRICE.R3 procedure provides the ability to list the prices defined in
[PRICE.E](../PRICE-E/README.md) in a horizontal format that can easily be exported to
Excel or the grid viewer. There are selection options for category, status and
pricing code. There is also an option to exclude the standard prices from the
report.

This report will only display the first price entered for the first quantity
break entered for the standard and code specific prices. Run
[PRICE.R1](../PRICE-R1/README.md) (sales and marketing module > reports & inquiries
section) to obtain a complete price listing.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Part Number**|  The part number as defined in the parts master for the
associated price.
-  
**Description**|  The first line of description for the part.
**Status**|  The part status.
**Category**|  The categroy code for the part.
**Unit Price**|  The price codes are displayed in the header of the report.
The unit price displayed in this field represents the first unit price entered
for the part.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
