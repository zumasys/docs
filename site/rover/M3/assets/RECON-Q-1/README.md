## Bank Register Query Screen (RECON.Q)
<PageHeader />

##

![](./RECON-Q-1.jpg)

| **Record Id**|

-  
**Cash Account**|  Enter the cash or credit card account number(s) you wish to
view activity for.

**Account Description**|  The descripton for the associated account number as
it was entered in [GLCHART.E](../GLCHART-E/README.md).

**Current Balance**|  This field contains the current balance in the
associated account for the current fiscal year. The balance is calculated by
taking the ending balance currently posted to the g/l for this account and
adding and/or subtracting any unposted register or gltrans records to it. The
ending balance used is for the fiscal year represented that the current date
is part of. If no balance is displayed in this account it is because the
fiscal year for the current date could not be found.

**Refresh**|  Press this button to refresh the current balance for the
associated cash account.

**Start Date**|  Enter the starting date to be used in this screen.

**End Date**|  Enter the ending date to be used in selecting

**Type**|  If you only wish to load in transactions for a specific type of
withdrawal or deposit, enter the type code in this field. The valid entries
are CASH, CC (credit card), CHECK or JOURNAL (misc. journal entry). If you
select CASH, cash reversals will be included. If you select CHECK, voided
checks will be included. If you limit this report to a specific type of
transaction, the ending balance displayed below will not reflect the balance
in the account as of the ending date.

**Load**|  Press this button when you are ready to load the data into the
screen below.

**Trans Date**|  The date the transaction occurred.

**Type**|  The type of transaction. The valid entries would be: CHECK, CASH,
JOURNAL (journal entry made via [GLTRANS.E](../GLTRANS-E/README.md)), CC-AR (credit
card payment made via [AR.E](../AR-E/README.md)), CC-SH (credit card payment made via
shipping process), CREV (cash reversal), VOID (voided check). If the source is
JOURNAL, the entry was made via [GLTRANS.E](../GLTRANS-E/README.md) as a miscellaneous
posting to the cash account.

**Record Id**|  The record id. If the transaction type is CASH, CHECK or G/L,
the record id will be the CASH id, check number or journal entry. If the
transaction type is CC (credit card), the record id will be the AR.ID the
credit card payment will be applied to.

**Name**|  If the transaction on this field is a check, the vendor name the
check was written to will appear in this field. If the transaction type is a
cash or credit card entry, the customer name the cash or credit card payment
was received from will appear in this field. If the type is a journal entry
(i.e. G/L), no name will appear in this field.

**Withdrawal**|  This field contains the credits or withdrawals that were made
from this account. Typically the withdrawals will be check transactions.
However, if you had to reverse a cash transaction or refund a customer via
credit card, the entry would, also, appear in this field.

**Deposit**|  The deposits or debits that were made to the above account(s),
will appear in this field. Typically these will be the credit card or cash
transactions. However, if a check was voided or deleted the entry will appear
in this field.

**Balance**|  This field contains the balance in the account(s) after the
current transaction is deducted or added to the previous balance.

**Total Withdrawals**|  This field contains the total withdrawals or credits
made from the above cash account(s).

**Total Deposits**|  This field contains the total deposits or debits made to
the above cash account(s).


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
