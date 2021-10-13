## Sales by Rep (SALES.R3)
<PageHeader />

**Form Details**
[Form Details](../SALES-R3-1/README.md)

**Purpose**
The SALES.R3 procedure provides a detailed listing of shipments by sales rep
for the period specified. You may limit the items included in the listing to
specific sales reps.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Rep Number**      | The number assigned to the sales rep.                           |
| ------------------- | --------------------------------------------------------------- |
| **Rep Name**        | The name of the associated sales rep.                           |
| **Ship Date**       | The date on which the shipment took place.                      |
| **Ship#**           | The shipment number against which the Sales record was posted.  |
| **Customer Number** | The number of the customer assigned to the shipment.            |
| **Customer Name**   | The name of the customer.                                       |
| **Ship Qty**        | The quantity of the item shipped.                               |
| **Price**           | The price at which the item was shipped.                        |
| **Disc**            | The discount amount to be subtracted from the unit price before |
calculating the net price.
**Cost**|  The total cost of the items shipped.
**Order%**|  The percentage of the order that is to be credited to the rep.
**Ext Price**|  The dollar amount of the shipment which is credited to the
sales rep. This amount is calculated as the unit price less the unit discount
amount, multiplied by the order percent, and multiplied by the shipped
quantity.
**Ext Cost**|  The total cost of the shipment which is credited to the sales
rep. This amount is calculated as the unit cost multiplied by the order
percent and then multiplied by the shipped quantity.
**Gross Margin**|  The total gross margin for the sales rep. This amount is
calculated as the extended price less the extended cost.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
