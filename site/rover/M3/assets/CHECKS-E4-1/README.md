## Refund Check Entry (CHECKS.E4)
<PageHeader />

##

![](./CHECKS-E4-1.jpg)

| **Check#**|  Enter the number of the hand check which you are logging into
the system. As checks should already have been manually prepared, you must
enter a check number. No changes are allowed to an existing check record, for
audit purposes. If a refund check needs to be deleted, it should be done
through [CHECKS.E](../CHECKS-E/README.md). If deleted, the original AR credit memos
will not be reopened.

-  
**Co Code**|  Enter the company code for this check. The company code must be
pre-defined in the CO.CONTROL procedure. If only one code exists, it will
automatically be inserted into this procedure for you.

**Match Co Code**|  Check this box if the company code posted to the AR
records needs to match the company code entered in this procedure.

**Check Date**|  Enter the date which appears on the check.

**Void Date**|  The date this check was voided. It is displayed here for
reference only and cannot be changed.

**Status**|  Displays the current status of the check. This may be one of the
following:
Posted - Check has been created and posted.
Voided - Check has been voided.
Stopped - Payment on the check has been stopped.
Cleared - Payment has cleared the bank.

**Cust Id**|  Enter the customer number that will be receiving the refund
check. This cust# will be used to create the debit memo in the AR file.

**Name**|  Enter the name of the customer for which you are creating a check.
If this field is left blank and there is a customer number present, the name
in the customer file will be used.

**Address**|  Enter the address of the customer for which you are creating a
check. If this field is left blank and there is a customer number present, the
address in the customer file will be used.

**Notes**|  Enter any notes applicable to this check. The first line, up to 16
characters, will be printed on the check stub.

**Check.Amt**|  Enter the amount for which the check was issued. This is the
actual amount paid by the check.

**Disb.Acct#**|  Enter the G/L account number from which this check is being
paid. This account number is defaulted from the [AP.CONTROL](../AP-CONTROL/README.md)
record and may be changed if desired.

**Disb Acct Desc**|

**AR IDs**|  Enter the AR records which were paid by this check. This field is
associated with the AR amounts field. If you wish to load all open AR credit
items for this customer, press the help key.

**AR.Amounts**|  Enter the amounts for each AR record which is being paid by
this check. The amount which defaults in this field is the balance of the AR
item. This may be changed to an amount less than the balance, but never
greater. The amount will be a negative number for the refund.

**Total AR**|  The total amount of the AR items specified. This is used to
display the running total of the items being paid.

**Expense Acct**|  Enter the miscellaneous account(s) that will offset the
credit memos. This will be used when creating the AR debit memo.

**Exp Acct Desc**|  This field contains the description of the GL account.

**Expense Amount**|  Enter the expense amount for the associated account
number.

**Total Misc Amount**|  This field is the total of all of the amounts listed
above. It must be equal to the absolute value of the total AR credit memo
amounts.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
