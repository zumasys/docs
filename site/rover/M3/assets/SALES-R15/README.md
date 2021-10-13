## Sales by Customer by Part (SALES.R15)
<PageHeader />

**Form Details**
[Form Details](../SALES-R15-1/README.md)

**Purpose**
This report provides information about sales by customer by part. The user
specifies a date range to be listed and may optionally limit the report to
include only certain customers. All of the sales made within the date range
defined are listed in descending quantity sequence. Subtotals are printed
after each customer.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Cust#**       | The number of the customer to whom the product was sold. |
| --------------- | -------------------------------------------------------- |
| **Name**        | The customer name.                                       |
| **Part.Number** | The part number sold.                                    |
| **Description** | The description of the part number, as it appears in the |
parts file.
**Sale.Qty**|  The quantity sold/shipped to the customer. Returns are
processed as negative numbers.
**Sale.Amount**|  The total sale amount, quantity multiplied by the discounted
price.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
