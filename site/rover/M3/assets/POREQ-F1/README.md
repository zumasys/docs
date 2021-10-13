## Purchase Requisition Printing (POREQ.F1)
<PageHeader />

**Form Details**
[Form Details](../POREQ-F1-1/README.md)

**Purpose**
The POREQ.F1 procedure is used to print requisition forms on blank paper or
letter head. Threquisition to be pedrinted may be select ly individually, by a
range of requisition numbers or by a range of requisition dates.

**Frequency of Use**
Requisition forms may be printed as required and may be also be re-printed at
any time. The [POREQ.E](../POREQ-E/README.md) procedure may be enabled to automatically
print the forms as well by setting parameters on the printing tab in
[PO.CONTROL](../PO-CONTROL/README.md).

**Prerequisites**
Entry of the selected requisitions.

**Data Fields**

| **Requisition**|  The number of the requisition whose data appears on the
form.
-  
**Vendor**|  The name and address of the vendor who being propsed to supply
the items.
**Ship To**|  The name and address of the location to which the items are to
be shipped.
**Requested By**|  The name of the person requesting the items.
**Contact**|  The name of the person at the vendor to be contacted to procure
the items.
**Phone**|  The telephone number of the vendor.
**Item**|  The line item numbers.
**Description**|  The part numbers and/or description of the items requested.
**UM**|  The unit of measure in which the materials are being priced and
delivered.
**Date**|  The dates on which the associated items are being requested for
delivery.
**Quantity**|  The quantity requested on the associated date.
**Unit Price**|  The price to be paid (if known) for each unit of the
associated item.
**Ext Price**|  The result of multiplying the total quantity ordered by the
unit price.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
