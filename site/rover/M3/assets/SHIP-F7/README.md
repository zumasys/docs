## Proforma Invoice EForm Printing (SHIP.F7)
<PageHeader />

**Form Details**
[Form Details](../SHIP-F7-1/README.md)

**Purpose**
The SHIP.F7 procedure is used to print a proforma invoice on blank paper using
a PDF form background. Another approach is to use [AR.F2](../AR-F2/README.md) or
[AR.F4](../AR-F4/README.md) procedures to print invoices as a separate activity after
the shipment has been posted and an AR record is created. The user determines
which shipments are to be printed by entering their numbers. Alternatively,
records may be selected for printing with a range of dates or a range of
invoice numbers.

**Frequency of Use**
Invoice forms may be printed as required and may be also be reprinted at any
time.

**Prerequisites**
Entry of the selected Shipment records ([SHIP.E](../SHIP-E/README.md) or
[SHIP.E2](../SHIP-E2/README.md)).

**Data Fields**

| **PO Number**|  The customer purchase order number associated with the
shipment.
-  
**Invoice No**|  The invoice number assigned to the shipment.
**Ship No**|  The shipment number which is made up of the sales order number
followed by a dash and a sequential number.
**Type**|  The user defined sales order type code.
**Date**|  The shipment date.
**Page**|  The page number.
**Waybill No**|  The waybill number assigned to the shipment.
**Sold To**|  The name and address of the customer who purchased the items on
the shipment.
**Ship To**|  The name and address of the location to which the items are to
be shipped.
**Representative**|  The name of the sales rep associated with the shipment.
**Terms**|  The terms of payment which apply to the invoice.
**Contact**|  The name of the person at the customer to be contacted on
matters regarding the shipment.
**Phone**|  The telephone number of the customer.
**Ship Via**|  The method of shipment (carrier) to be used in sending the
items.
**F.O.B.**|  The location at which responsibility for the materials shipped
passes from you to the customer.
**Item**|  The line item numbers.
**Part Number**|  The part number of the item shipped.
**Description**|  The description of the item shipped.
**Notes**|  Contains all notes associated with the shipment.
**UM**|  The unit of measure in which the materials are being priced and
delivered.
**Date**|  The dates on which the associated items were shipped.
**Quantity**|  The quantity shipped on the associated date.
**Unit Price**|  The price to be paid for each unit of the associated item.
**Ext Price**|  The result of multiplying the quantity shipped by the unit
price.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
