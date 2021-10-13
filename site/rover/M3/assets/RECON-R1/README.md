## Bank Reconciliation Listing (RECON.R1)
<PageHeader />

**Form Details**
[Form Details](../RECON-R1-1/README.md)

**Purpose**
The RECON.R1 procedure is used to print a listing of bank reconciliation data
which was entered in [RECON.E](../RECON-E/README.md). The user is prompted for a Recon
ID and the month start date, month end date and cash account number will be
displayed for verification.

There are six (6) sections available with this report:

1\. Cleared deposits
2\. Un-cleared deposits
3\. Cleared checks
4\. Un-cleared checks
5\. Adjustments
6\. Summary

The user may select which sections they wish to print. The default is all
sections.

**Frequency of Use**
As required.

**Prerequisites**
A record must exist in the Recon file.

**Data Fields**

| **1\. Cleared Deposits** |
| ------------------------ | ------------------------------------------------------------------ |
| **Date**                 | The date of the deposit. Lines on this report are a summary of all |
Cash records containing the same deposit date and deposit ID.
**Dep.ID**|  The deposit ID assigned to the Cash record in
[CASH.E](../CASH-E/README.md).
**Deposit.Amt**|  The total amount of the deposit.
**Cleared.Amt**|  The amount shown on the bank statement.
**Variance**|  The difference between the deposit amount and the cleared
amount.
**2 Uncleared Deposits**|
**Date**|  The date of the deposit. Lines on this report are a summary of all
Cash records containing the same deposit date and deposit ID.
**Dep.ID**|  The deposit ID assigned to the Cash record in
[CASH.E](../CASH-E/README.md).
**Deposit.Amt**|  The total amount of the deposit.
**3\. Cleared Checks**|
**Check**|  The check number from the Checks file.
**Date**|  The check date, as found in the Checks file.
**Vendor**|  The vendor number and a portion of the vendor name.
**Check.Amt**|  The total amount of the check.
**Cleared.Amt**|  The amount appearing on the bank statement for this check.
**Variance**|  The difference between the check amount and the cleared amount.
**4\. Uncleared Checks**|
**Check**|  The check number from the Checks file.
**Date**|  The check date, as found in the Checks file.
**Vendor**|  The vendor number and a portion of the vendor name.
**Check.Amt**|  The total amount of the check.
**5\. Adjustments**|
**Date**|  The date assigned to the adjustment entry.
**Description**|  A description of this adjustment.
**Adjust.Amt**|  The amount of the adjustment.
**6\. Summary**|  This page contains a summary recap of the information,
including a comparison of the banke statement totals and the system totals.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
