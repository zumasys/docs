## Enter A/R Cash (CASH.E)
<PageHeader />

**Form Details**
[Main](../CASH-E-1/README.md)
[Change History](../CASH-E-2/README.md)

**Purpose**
The CASH.E procedure is used to post customer payments against open accounts
receivable items. The procedure consists of one screen, of which the top
portion is the information about the check amount being applied. The bottom
portion of the screen contains all open accounts receivable items for the
specific customer so that the credit may be applied. In addition to direct
check payments, discounts and write-offs may also be taken directly within
this screen. Further, the CASH.E procedure may be used to 'net' credits and
debits within the same customer account with the entry of a zero check.

Write-off amounts represent the amount of an invoice for which payment will
not be received. Write-off amounts should not be included in the check amount.

Additionally, credit and/or debit memos may be created in the CASH.E procedure
by adding additional line items in the lower portion of the screen. This is
done by leaving the document type and date fields empty and placing the amount
in the application amount field. For credit memos, the amount is entered as a
positive number. To create a debit memo (e.g. charge back), enter the amount
as a negative number.

If you will be using [RECON.E](../RECON-E/README.md) to reconcile your bank statements,
it is recommended that a deposit id be entered on all cash receipts. In
[recon.e](../Recon-e/README.md), there is a option to load in all un-cleared cash
receipts. These cash receipts are loaded in by date by deposit id so that the
deposit amount in [recon.e](../Recon-e/README.md) reflects the deposit amount
referenced on the bank statement. Therefore, when assigning deposit ids, the
same deposit id may be used for multiple checks if the checks will be part of
the same deposit made into the bank account.

To apply excess cash to a write off account instead of creating a debit memo,
the corresponding flag in [AR.CONTROL](../AR-CONTROL/README.md) must be set to "Y", and
the user will be prompted at file time for confirmation before the update
occurs.

The amounts are posted immediately upon the filing of the cash record. The
check number, bank number, deposit id and notes may be changed on existing
records. Additionally, the cash/deposit account and post date may be changed
on posted records but not on records that have been cleared or reversed. If
the post date or cash account are changed, reversing register records will be
created to offset the original entries and new register records will be
created for the new account and/or date. Please note that both the original
post date and new date must occur in an open fiscal period. For all other data
entry mistakes, the cash record may be reversed with the
[CASH.E2](../CASH-E2/README.md) procedure, then re-entered correctly.

**Frequency of Use**
As required.

**Prerequisites**
Initialization of the accounts receivable control record ([AR.CONTROL](../AR-
CONTROL/README.md)), and entry of the customer and terms records to be referenced.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
