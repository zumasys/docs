## Shipment Line Item Reversal Entry (SHIP.E6)
<PageHeader />

**Form Details**
[Form Details](../SHIP-E6-1/README.md)

**Purpose**
The SHIP.E6 procedure is used to reverse individual line items from existing
shipment records which have already been posted. The user enters the number of
the shipment to be reversed and the data from the shipment is displayed for
review. One or more line items may be reversed by flagging the line item(s).
If an item has already been reversed on a prior reversal shipment, then that
line item will show a zero quantity and cannot be flagged for reversal.

The reversal shipment will be originally created as status "New" and no
inventory will be returned. When you are ready to finalize the reversal,
change the status to "Shipped" and inventory transactions are created to move
the materials back into inventory. After the status has been changed to
"Shipped", no further changes will be allowed. At that time any line items
that are not reversed will be removed.
If the original shipment was paid by a credit card, then the credit card
transaction will be reversed after prompting the user for the option to
reverse the charges.
The reversal will be posted by the [SHIP.P1](../SHIP-P1/README.md) procedure and a
credit memo will be created in the Accounts Receivable system.

Unlike [SHIP.E3](../SHIP-E3/README.md), this procedure is not a total reversal;
therefore the miscellaneous charges and freight will not be reversed. To
reverse those charges a total reversal must be done with
[SHIP.E3](../SHIP-E3/README.md). Also, any credit memos applied to the original
shipment will not be reopened.

Shipment records which have not been posted may be changed with the
[SHIP.E2](../SHIP-E2/README.md) procedure.

**Frequency of Use**
As required.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
