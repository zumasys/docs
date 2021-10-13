## Refund Check Entry (CHECKS.E4)
<PageHeader />

**Form Details**
[Form Details](../CHECKS-E4-1/README.md)

**Purpose**
The CHECKS.E4 procedure is used to enter hand checks into the system for the
purpose of sending a refund to a customer for outstanding credit memos. The
procedure consists of one screen and is keyed by the check number.

The check amount must equal the distribution amount and equal the absolute
value of the total A/R credit memo amounts.

When filed, the AR records are updated with the check information and a debit
memo is created in the AR file. ARREG (AR register) and APREG (AP register)
records are created.

You may, also, print the check on a laser based check form from this
procedure. The A/R credit memos will not print on the check.

An existing check record cannot be changed. [CHECKS.E](../CHECKS-E/README.md) must be
used to delete the record, if necessary. If deleted, the credit memos and
debit memo will not be reopened. If you delete records from a prior
fiscal/calendar period and you re-run your check reports for those periods,
the reports will not match the reports you ran earlier for those periods.

**Frequency of Use**
As required to process refund checks.

**Prerequisites**
Initialization of the Accounts Payable control record ([AP.CONTROL](../AP-
CONTROL/README.md)), the Accounts Receivable control record ([AR.CONTROL](../AR-
CONTROL/README.md)) and entry of the customer record to be referenced. The credit
memos to be closed must exist in the AR file.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
