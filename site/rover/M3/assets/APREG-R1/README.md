## AP Register Listing (APREG.R1)
<PageHeader />

**Form Details**
[Form Details](../APREG-R1-1/README.md)

**Purpose**
The APREG.R1 procedure is used to print a listing of all Accounts Payable
register transactions for a period. This report can be run either in detail or
summary, for all or selected account numbers.

**Frequency of Use**
This report should be run as a period end audit report of the tran- sactions
which will be posted to General Ledger. It can be run as required to audit
progress through the period.

**Prerequisites**
Accounts Payable register transactions are created automatically by the system
through the [AP.E](../AP-E/README.md), [CHECKS.E](../CHECKS-E/README.md),
[RECEIPTS.P1](../RECEIPTS-P1/README.md) and [APR.P1](../APR-P1/README.md) procedures.

**Data Fields**

| **Acct Number**   | The General Ledger account number.                           |
| ----------------- | ------------------------------------------------------------ |
| **Vendor Number** | The number of the vendor from the AP record.                 |
| **Vendor Name**   | The name of the vendor, as read from the Vendor file.        |
| **Check Notes**   | Miscellaneous notes from the Check file, if the register was |
the result of a check transaction.
**Invoice Number**|  The invoice number from the AP item, if the regis- ters
was the result of an AP transaction.
**Record Date**|  The date of the record which created this register record.
**Apreg ID**|  The record id of the APREG entry.
**Apreg Date**|  The date for which the register entry was made.
**Apreg Amount**|  The total amount of the register record.
**Procedure Name**|  The procedure which caused this register record to occur
(e.g. [AP.E](../AP-E/README.md), [CHECKS.E](../CHECKS-E/README.md), etc.).
**Record Id**|  The record id which caused this register record to occur (e.g.
AP id, Check number, etc.).
**Post Date**|  The date this register was posted to General Legder.
*****|  An asterisk will print in the right-most column if the register date
differs from the record date.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
