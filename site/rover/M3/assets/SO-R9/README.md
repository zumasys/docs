## Sales Order Activity Listing (SO.R9)
<PageHeader />

**Form Details**
[Form Details](../SO-R9-1/README.md)

**Purpose**
The SO.R9 procedure provides a listing of all sales orders which have had
activity within the specified period. You may limit the listing to specific
sales order type codes.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **SO ID**    | The ID of the open sales order record.                    |
| ------------ | --------------------------------------------------------- |
| **Type**     | The user defined sales order type code for the order.     |
| **Customer** | The name and number of the customer assigned to the sales |
order.
**Li#**|  The line item numbers on the sales order which reference the part
number.
**Part**|  The part number on the associated line item.
**Description**|  The description of the pitem on the sales order.
**Rev**|  The revision of the part on order.
**Unit Price**|  The unit price for the item.
**Disc%**|  The percentage discount to be applied to the unit price on
invoices for the item.
**Sch Date**|  The dates on which the item was scheduled to be shipped.
**Sch Qty**|  The quantity to be shipped on the associated schedule date.
**Shp Date**|  The dates on which items have shipped.
**Ship Qty**|  The quantity of the items shipped on the associated date.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
