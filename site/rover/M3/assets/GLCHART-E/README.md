## Chart of Account Entry (GLCHART.E)
<PageHeader />

**Form Details**
[Form Details](../GLCHART-E-1/README.md)

**Purpose**
The GLCHART.E procedure is used to enter the General Ledger chart of accounts.
Any account number required to print on financial reports or which will be
used by any module must be entered.

You may flag an account as inactive to prevent it from being used on future
transactions. However, if the account is referenced on a CONTROL, INVLOC,
MRKCODE, STAX or VENDOR record, you will not be able flag the account as
inactive until the account number has been changed on those records. In
addtion, transactions that already reference the account number are not
affected. It is recommended that you run [GLCHART.R2](../GLCHART-R2/README.md) after
flagging an account as inactive. This report will print a listing of inactive
accounts that are still posted to open records such as a/p, a/r, s/o, etc. The
report will, also, list control or set-up records using the inactive accounts.
This important to prevent an inactive account from being used in the future.




**Frequency of Use**
All account numbers which will be used by the system must be entered prior to
their use. Subsequently, account numbers may be added as needed.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
