## Print Shipping Pick Lists (SHIP.R1)
<PageHeader />

**Form Details**
[Form Details](../SHIP-R1-1/README.md)

**Purpose**
The SHIP.R1 procedure is used to print shipment picking lists. The picking
list includes the part numbers and quantities of each item to be included on
the shipment. The report provides a blank column that may be used to write in
the actual quantity pulled for each item. You may select specific shipments to
be printed or all eligible shipments.

**Frequency of Use**
Shipment picking lists are usually printed in situations where the items to be
shipped are pulled from finished goods inventory. The frequency depends upon
the daily activity level of the business.

**Prerequisites**
Creation of shipment records with either [SO.P1](../SO-P1/README.md),
[SHIP.E](../SHIP-E/README.md) or [SHIP.E2](../SHIP-E2/README.md).

**Data Fields**

| **Shipment**   | The number of the shipment to be pulled.                       |
| -------------- | -------------------------------------------------------------- |
| **Ship Date**  | The date the shipment is scheduled to take place.              |
| **Ship Via**   | The method of shipment or carrier to be used.                  |
| **Waybill No** | The waybill number assigned to the shipment.                   |
| **Ship To**    | The name and address of the location to which the items are to |
be shipped.
**Li#**|  The line item numbers of the shipment items.
**Part Number**|  The part number of the item to be shipped.
**Description**|  The description of the item to be shipped.
**Invloc**|  The inventory location from which the items are to be pulled.
**Quantity**|  The quantity to be shipped of the item.
**Pick Qty**|  A blank space provided for the person pulling the items to
indicate the actual quantity pulled.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
