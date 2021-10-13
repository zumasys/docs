## SO Pick List (SO.R17)
<PageHeader />

**Form Details**
[Form Details](../SO-R17-1/README.md)

**Purpose**
The SO.R17 procedure is used to print sales order picking lists. The picking
list includes the part numbers and quantities of each item to be included on
the order. The report provides a blank column that may be used to write in the
actual quantity pulled for each item. You may select specific orders to be
printed or all eligible orders. The user has the option to print the order
quantity or the open quantity on the

**Frequency of Use**
Sales order picking lists are usually printed in situations where the items to
be shipped are pulled from finished goods inventory. The frequency depends
upon the daily activity level of the business.

**Prerequisites**
Creation of SO records.

**Data Fields**

| **Sales Order**       | The number of the sales order to be pulled.                   |
| --------------------- | ------------------------------------------------------------- |
| **SO Date**           | The date the order was placed.                                |
| **Ship Via**          | The method of shipment or carrier to be used.                 |
| **Cust#**             | The sold to customer number.                                  |
| **Name**              | The name of the customer.                                     |
| **Ship To**           | The ship to address.                                          |
| **Line**              | The line item numbers of the items.                           |
| **Part Number**       | The part number of the item to be shipped.                    |
| **Description**       | The description of the item to be shipped.                    |
| **Invloc**            | The inventory location from which the items are to be pulled. |
| **Order or Open Qty** | Contains either the order or open qty, as selected by         |
the user.
**Pick Qty**|  A blank space provided for the person pulling the items to
indicate the actual quantity pulled.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
