## Receipts Reversal/Deletion (RECEIPTS.E3)
<PageHeader />

**Form Details**
[Line Items](../RECEIPTS-E3-1/README.md)
[Components](../RECEIPTS-E3-2/README.md)

**Purpose**
The RECEIPTS.E3 procedure provides the ability to delete an existing receipt
from the system. The receipt may be removed provided that there have been no
additional receipts entered against the purchase order, the receipt does not
have a debit posted against it, and no change has been made to the associated
accounts payable accrual record. RECEIPTS.E3 also cannot be used if the AP
record has already been deleted by the user in which case it is advisable to
use [RECEIPTS.E2](../RECEIPTS-E2/README.md).

The operator enters the number of the receipt to be deleted which causes the
original receipt data to be loaded onto the screen. The operator then uses the
File/Delete option on the menu to delete the receipt. The processing at this
point depends on the status of the receipt. If it is status "N" then no
inventory transactions are created.

If the record is a normal receipt and the status is "R" or "P" then inventory
transactions are created to remove the parts from inventory.

If the record being deleted is a debit receipt then the updating depends on
whether it is tied to an Mship record. If it is not and the status is "R" or
"P", then inventory transactions are created to move the parts back into
inventory.

If the debit receipt being deleted does have an associated Mship record and it
is status "R" then no inventory transactions are done and the associated Mship
record is also deleted. If the debit receipt is status "S" or "P", then
inventory transactions are created to move the parts back into inventory and
the Mship record will be set to status "C"ancelled.

If an accounts payable accrual record exists for the receipt, then it will be
deleted.

**Frequency of Use**
As required.

**Prerequisites**
Entry of the receipt record to be deleted ([RECEIPTS.E](../RECEIPTS-E/README.md) or
[RECEIPTS.E2](../RECEIPTS-E2/README.md)).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
