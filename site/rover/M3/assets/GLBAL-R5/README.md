## Account Balance Report (GLBAL.R5)
<PageHeader />

**Form Details**
[Form Details](../GLBAL-R5-1/README.md)

**Purpose**
The GLBAL.R5 procedure is used to calculate and print the current balance of
any General Ledger account number, using posted General Ledger and unposted
register entries and unposted g/l transaction records. The report will print
the beginning balance of each period in the current year, up to and including
the month in which the cutoff date appears. Each posted journal entry will be
displayed and a total of unposted register records will be printed. The user
may select all or selected register files to be checked.

**Frequency of Use**
As required.

**Prerequisites**
The account number must exist in the GLCHART file.

**Data Fields**

| **Description**|  The description for the total being displayed. The may be
a beginning balance, a journal description, or a message indicating the
register which contains unposted records..
-  
**Trans**|  The transaction (journal) number(s) which have been posted against
this account number for the period.
**Tr.Date**|  The transaction (journal) date for each transaction.
**Debit.Amount**|  The amount posted to the account number from the
transaction record, if a debit amount.
**Credit.Amount**|  The amount posted to the account number from the
transaction record, if a credit amount.
**Balance**|  This column contains a running balance for the report.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
