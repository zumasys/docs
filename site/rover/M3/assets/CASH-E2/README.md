## Reverse an A/R Cash Posting (CASH.E2)
<PageHeader />

**Form Details**
[Form Details](../CASH-E2-1/README.md)

**Purpose**
The CASH.E2 procedure is used to reverse previously posted customer payments
which were entered through the [CASH.E](../CASH-E/README.md) or [CASH.E4](../CASH-E4/README.md)
processes. The procedure consists of one screen, of which the top portion is
the information about the check amount which was applied. The bottom portion
of the screen contains all accounts receivable items which were affected by
the previous posting.

The amounts are reversed immediately upon the filing of the cash record. You
will not be able to reverse the cash transaction if any of the accounts
receivable items have had additional cash payments applied to them.

**Frequency of Use**
As required.

**Prerequisites**
Initialization of the accounts receivable control record ([AR.CONTROL](../AR-
CONTROL/README.md)), and entry of the customer and terms records to be referenced. A
cash record must exist prior to being reversed.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
