## Bank Reconciliation Update Process (RECON.P1)
<PageHeader />

**Form Details**
[Form Details](../RECON-P1-1/README.md)

**Purpose**
The RECON.P1 procedure is used to update the bank reconciliation records that
reside in the RECON file by loading in the cash and check records for the
specified time period. In addition to loading in the deposits and checks,
there is a no option to flag those items as cleared. The option to clear
should only be selected when you are certain that the amounts have cleared the
bank else the information posted to the recon record will not accurately
reflect what has been posted to the bank account.

This procedure does not attempt to over-write any information that currently
exists in the recon record. Therefore, if you select the option to clear the
cash and/or check records, the procedure will only do so for the items being
loaded into the record and not for any items that are currently showing as
uncleared.

Like [recon.e](../Recon-e/README.md), this procedure has no General Ledger impact. Any
adjustments and/or variances that will be made via a journal entry in
[gltrans.e](../Gltrans-e/README.md) will still need to be entered directly into
[recon.e](../Recon-e/README.md).

**Frequency of Use**
As required.

**Prerequisites**
The checks and deposits must already exist on the system.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
