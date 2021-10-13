## RMA Receipt Traveler (Multi-line) (RMAREC.R2)
<PageHeader />

**Form Details**
[Form Details](../RMAREC-R2-1/README.md)

**Purpose**
The RMAREC.R2 procedure is used to create multi-line RMA receipt travelers.
The multi-line receipt traveler shows all of the items on one page. To print
travelers with one line item per page user [RMAREC.R1](../RMAREC-R1/README.md).

**Frequency of Use**
As receipts are entered into the system or as required.

**Prerequisites**
None.

**Data Fields**

| **Receipt Number**|  The identification number of the receipt. This made up
of the RMA number followed by a dash and a sequential number from the RMA.
-  
**Receipt Date**|  The date the receipt was made as entered in the
[RMAREC.E](../RMAREC-E/README.md) or [RMAREC.E2](../RMAREC-E2/README.md) procedure.
**Customer No**|  The number of the customer on the RMA.
**Customer Name**|  The name of the RMA customer.
**Contact**|  The name of the contact as entered on the RMA.
**Li No**|  The line item number on the RMA for the item received.
**Part No**|  The internal number of the part received.
**Description**|  The multi-line description of the item received.
**Quantity**|  The quantity of the items received.
**Lot Number**|  The lot number if any assigned to the items received.
**Bin Number**|  If the location the items were returned to is bin controlled
this shows the bin number the items went into.
**Serial No**|  The serial numbers, if any, associated with the items
received.
**Problem**|  Notes describing the problem reported and/or found with the
items.
**Corrective Action**|  Notes defining the corrective action taken to correct
problems.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
