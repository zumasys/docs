## Batch Entry Procedure for Cash Transactions (CASH.E4)
<PageHeader />

**Form Details**
[Form Details](../CASH-E4-1/README.md)

**Purpose**
The CASH.E4 procedure is a batch payment posting process. In the top portion
of the screen there is a field for you to enter the total deposit amount to be
applied in this session/batch. The deposit amount is the total of all checks
to be entered.

The bottom portion of the screen is used to enter the information for a
specific check. It is in this section that you would apply the individual
checks against the open accounts receivable items for the specific customer.
In addition to direct check payments, discounts and write-offs may also be
taken directly within this screen. Further, the CASH.E4 procedure may be used
to 'net' credits and debits within the same customer account with the entry of
a zero check.

Additionally, credit and/or debit memos may be created in the CASH.E4
procedure by adding additional line items in the lower portion of the screen.
This is done by leaving the document type and date fields empty and placing
the amount in the application amount field. For credit memos, the amount is
entered as a positive number. To create a debit memo (e.g. charge back), enter
the amount as a negative number.

When the record is saved, the procedure will verify that the total of all
checks matches the total deposit amount. If the two amounts do not match, you
will not be able to save the record.

The amounts are posted immediately upon the filing and individual cash records
will be created for each check. In order to correct any data entry mistakes,
the cash record may be reversed through [CASH.E2](../CASH-E2/README.md) and then re-
entered correctly via this procedure or [CASH.E](../CASH-E/README.md).
[CASH.E](../CASH-E/README.md) is similar to cash.e4 except that the checks are entered
individually and not in batch.

If you will be using [RECON.E](../RECON-E/README.md) to reconcile your bank statements,
it is recommended that a deposit id be entered on all cash receipts. In
[recon.e](../Recon-e/README.md), there is a option to load in all un-cleared cash
receipts. These cash receipts are loaded in by date by deposit id so that the
deposit amount in [recon.e](../Recon-e/README.md) reflects the deposit amount
referenced on the bank statement. Therefore, when assigning deposit ids, the
same deposit id may be used for multiple checks if the checks will be part of
the same deposit made into the bank account.

**Frequency of Use**
As required.

**Prerequisites**
Initialization of the accounts receivable control record ([AR.CONTROL](../AR-
CONTROL/README.md)), and entry of the customer and terms records to be referenced.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
