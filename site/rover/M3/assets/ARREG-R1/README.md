## AR Register Listing (ARREG.R1)
<PageHeader />

**Form Details**
[Form Details](../ARREG-R1-1/README.md)

**Purpose**
The ARREG.R1 procedure is used to print a listing of all Accounts Receivable
register transactions for a period. This report can be run either in detail or
summary, for all or selected account numbers.

**Frequency of Use**
This report should be run as a period end audit report of the tran- sactions
which will be posted to General Ledger. It can be run as required to audit
progress through the period.

**Prerequisites**
Accounts Receivable register transactions are created automatically by the
system through the [AR.E](../AR-E/README.md), [CASH.E](../CASH-E/README.md),
[SHIP.P1](../SHIP-P1/README.md) and [ARR.P1](../ARR-P1/README.md) procedures.

**Data Fields**

| **Acct Number**      | The General Ledger account number.                             |
| -------------------- | -------------------------------------------------------------- |
| **Acct Description** | The description as is appears in the GLCHART file.             |
| **Reg Id**           | The record id of the ARREG entry.                              |
| **Date**             | The date for which the register entry was made.                |
| **Amount**           | The total amount of the register record.                       |
| **Procedure**        | The procedure which caused this register record to occur (e.g. |
[AR.E](../AR-E/README.md), [CASH.E](../CASH-E/README.md), etc.).
**Record Id**|  The record id which caused this register record to occur (e.g.
AR id, Cash number, etc.).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
