## Cash Deposit Slip Form (CASH.F1)
<PageHeader />

**Form Details**
[Form Details](../CASH-F1-1/README.md)

**Purpose**
The CASH.F1 procedure is used to print a cash deposit slip form that can be
submitted to the bank along with the checks. A separate slip will print for
each deposit id within a given account number, if a specific account number is
selected. The user has the option to sort the entries by bank number or by
cash record ID.

**Frequency of Use**
As required.

**Prerequisites**
Entry of the bank name and number in the accounting control procedure
([ACCT.CONTROL](../ACCT-CONTROL/README.md)). If this data has not been entered in
[acct.control](../Acct-control/README.md), it will have to be manually entered on the
deposit slip form. A deposit.id must be entered on cash transactions created
via [cash.e](../Cash-e/README.md) and [cash.e3](../Cash-e3/README.md).

**Data Fields**

| **Company Name**|  The name of the company as defined in the co.control
procedure.
-  
**Bank Name**|  The name of the bank as entered in [acct.control](../Acct-
control/README.md).
**Bank Account**|  The bank account as defined in [acct.control](../Acct-
control/README.md).
**Deposit Slip Id**|  The deposit slip id as entered in [cash.e](../Cash-e/README.md)
or [cash.e3](../Cash-e3/README.md).
**Bank No**|  The customer's bank id/number as entered in [cash.e](../Cash-e/README.md)
or [cash.e3](../Cash-e3/README.md).
**Check Amount**|  The amount of the check.
**Cash Number**|  The id number assigned by the system to the cash transaction
record. The following two fields plus this one will only print on the report
if the deposit.only field is not checked.
**Check Number**|  The customer's check number.
**Deposit Slip**|  The deposit slip.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
