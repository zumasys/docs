## Bank Reconciliation (RECON.E)
<PageHeader />

## Adjustments

![](./RECON-E-4.jpg)

| **Adj Date**|  Enter the date for the adjustment to be entered. Entries made
on this tab should reflect debits/credits that were referenced on the bank
statement but were not entered into the system as a cash or check record. If,
for example, the bank paid you interest on the account, you could either
create a cash entry via [CASH.E3](../CASH-E3/README.md) to reflect the deposit or you
could create a manual journal entry via [GLTRANS.E](../GLTRANS-E/README.md) to track
the deposit. If you create the cash entry, the deposit will be loaded into
this record for you as deposit. If you create the journal entry, the deposit
will not be loaded into this procedure for you and you will need to make an
entry on the adjustment tab in order to reconcile the bank statement.

-  
**Adj Account**|  Enter the g/l account number that the adjustment amount
should be applied to. This is not a required field. However, if you will be
creating a journal entry from this procedure, the account number should be
entered.

**Adj Desc**|  Enter the description of the adjusment being made.

**Adj Amt**|  Enter the amount of the adjustment being made to the cash/bank
account entered on the header tab. If the amount represents a deduction and/or
credit amount, it should be entered as a negative number. If the amount
represents a debit and/or deposit amount, it should be entered as a positive
number.

**Journal Amount**|  This field contains the amount that will be posted to the
journal entry for the associated g/l account number. This field is updated for
you and cannot be changed manually.

Example: You enter a credit of 10,000 in the cash account column to reduce the
balance in the cash account by 10,000. The amount in this column will show a
debit of 10,000.00. If you create a journal entry, the amount posted to the
associated g/l account will be a debit of 10,000.00.

**Total Adjustments**|  This field contains the total of the adjustment amount
column.

**Create Journal**|  Select this option if you wish to create a journal entry
for the adjustments made on this page. This option should only be selected
when all adjustments have been entered. When this option is selected,
[GLTRANS.E](../GLTRANS-E/README.md) will be opened for you and the accounts and amounts
will be loaded into the screen. If only one cash account has been entered on
the HEADER tab, it will be used as the offsetting account. If more than one
cash account has been entered, you will need to manually enter the offsetting
accounts in [GLTRANS.E](../GLTRANS-E/README.md).

If a journal entry was previously created for this recon id it will be opened
for you in [GLTRANS.E](../GLTRANS-E/README.md). If the journal entry is only hold, you
may adjust the journal entry as required. If the entry has already been
posted, you will need to create a new journal to make adjustments.

**Gltrans Id**|  This field displays the journal/GLTRANS number that was
created for this recon id. It is dsiplayed for reference only and cannot be
changed.

**Total Journal Amount**|


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
