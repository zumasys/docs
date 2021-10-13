## Accounting Control Record Entry (ACCT.CONTROL)
<PageHeader />

## Defaults

![](./ACCT-CONTROL-1.jpg)

| **Control.ID**|  "ACCT" will be automatically entered as the key to this
record in the CONTROL file. This record contains the default information for
certain accounting functions that pertain to both accounts payable and
accounts

-  
**AR Aging Method**|  Select the default for the aging method in
[AR.R3](../AR-R3/README.md): Invoice Date (default), Due Date, or Register Date. Note:
The Register Date is generally only used to balance the aging to the General
Ledger at period end.

**A/R Col 1 Days**|  Enter the number of aging days for the first column
(bucket) to appear on the aging report. If you wish the first column to show
"Past Due" items, enter a zero "0". For a "Current" column, enter the number
of days you consider an item current (eg. 30).

**A/R Col 1 Heading**|  Enter the heading to appear at the top of the first
column of the aging report (e.g. Past Due, Current, etc.).

**A/R Col 2 Days**|  Enter the number of aging days for the second column
(bucket) to appear on the aging report. If you wish the second column to show
31 to 60 day items, enter "60".

**A/R Col 2 Heading**|  Enter the heading to appear at the top of the second
column of the aging report (e.g. 31-60 Days).

**A/R Col 3 Days**|  Enter the number of aging days for the third column
(bucket) to appear on the aging report. If you wish the third column to show
61 to 90 day items, enter "90".

**A/R Col 3 Heading**|  Enter the heading to appear at the top of the third
column of the aging report (e.g. 61-90 Days).

**A/R Col 4 Days**|  Enter the number of aging days for the fourth column
(bucket) to appear on the aging report. If you wish the fourth column to show
over 90 day items, enter "9999".

The last two buckets (4 and 5) will be summarized into one on the a/r
statements due to spacing restrictions.

**A/R Col 4 Heading**|  Enter the heading to appear at the top of the fourth
column of the aging report (e.g. Over 90 Days).

**A/R Col 5 Days**|  Enter the number of aging days, if required, for the
fifth column (bucket) to appear on the aging report. If you wish the fifth
column to show over 90 day items, enter "9999". If this field is left blank
only 4 aging periods will appear on the report.

The last two bucketss (4 and 5) will be summarized into one on the a/r
statements due to spacing restrictions.

**A/R Col 5Heading**|  Enter the heading to appear at the top of the fifth
column of the aging report (e.g. Over 120 Days).

**Activity Days**|  Enter the number of days used to determine how much
activity is shown in the [CUST.Q](../CUST-Q/README.md) procedure (i.e. AR activity).
This field only controls the number of days which are displayed in the
[CUST.Q](../CUST-Q/README.md) procedure and has no bearing on the amount of history
maintained. If this field is changed, the activity in [CUST.Q](../CUST-Q/README.md)
will be changed the next time the [SALES.P2](../SALES-P2/README.md) procedure generates
the snapshot data.

**Commission Calculation**|  Enter either "P" for Profit or "S" for Sales.
This will determine how the commissions are calculated. If nothing entered,
(S)ales will be the default.

**Update Sales**|  Check this box if you wish to have Sales records created
during [AR.E](../AR-E/README.md). Leave this box unchecked if Sales records should only
be created from shipments and rma receipts. Please note, that sales records
are created by line item. Therefore, if you create an invoice with no line
items no sales records will be created.

**Update Commissions**|  Check this box if you wish to have commission records
created during [AR.E](../AR-E/README.md). Leave this box unchecked if commission
records should only be created from shipments or rma receipts. Please note,
that comm records are created by line item. Therefore, if you create an
invoice with no line items no comm records will be created.

**Create Commission Accrual Records**|  Check this box if you wish to create
register records to accrue commissions at the same time the commission records
are created via [ship.p1](../Ship-p1/README.md), [rmarec.p1](../Rmarec-p1/README.md),
[ar.e](../Ar-e/README.md) and [comm.e](../Comm-e/README.md). If this box is checked, account
numbers must be entered in the following two fields.

**Comm Pay Account**|  Enter the commission pay/accrual account that will be
debited/credited in the ARREG register file when the commission records are
created. When the commission record is paid via [CHECKS.P3](../CHECKS-P3/README.md) an
offsetting entry will be made against this account number in the APREG
register file.

**Comm Expense Account**|  Enter the expense account for commissions that
should be used as the offsetting entry to the commission pay account when you
are creating commission accrual records.

**Days AR History**|  Enter the number of days of AR balance history to be
kept for determining the highest AR balance and average AR balance for each
customer. This will be displayed on [CUST.Q](../CUST-Q/README.md). For instance, to see
the highest AR balance by customer over the past year, enter 365. It will be a
rolling period of time. Note, if you increase the time period, the missing
days cannot be automatically recaptured. It will build up to the # days
specified. If you decrease the number, the next time [AR.P6](../AR-P6/README.md) runs,
it will adjust the data accordingly. [AR.P6](../AR-P6/README.md) should be included in
the nightly batch run.

**AP Aging Method**|  Select the default for the aging method in
[AP.R3](../AP-R3/README.md): Invoice Date, Due Date, Register Date.

**A/P Col 1 Days**|  Enter the number of aging days for the first column
(bucket) to appear on the aging report. If you wish the first column to show
"Past Due" items, enter a zero "0". For a "Current" column, enter the number
of days you consider an item current (eg. 30).

**A/P Col 1 Heading**|  Enter the heading to appear at the top of the first
column of the aging report (e.g. Past Due, Current, etc.).

**A/P Col 2 Days**|  Enter the number of aging days for the second column
(bucket) to appear on the aging report. If you wish the second column to show
31 to 60 day items, enter "60".

**A/P Col 2 Heading**|  Enter the heading to appear at the top of the second
column of the aging report (e.g. 31-60 Days).

**A/P Col 3 Days**|  Enter the number of aging days for the third column
(bucket) to appear on the aging report. If you wish the third column to show
61 to 90 day items, enter "90".

**A/P Col 3 Heading**|  Enter the heading to appear at the top of the third
column of the aging report (e.g. 61-90 Days).

**A/P Col 4 Days**|  Enter the number of aging days for the fourth column
(bucket) to appear on the aging report. If you wish the fourth column to show
over 90 day items, enter "9999".

**A/P Col 4 Heading**|  Enter the heading to appear at the top of the fourth
column of the aging report (e.g. Over 90 Days).

**A/P Col 5 Days**|  Enter the number of aging days for the fourth column
(bucket) to appear on the aging report. If you wish the fourth column to show
over 90 day items, enter "9999".

**A/P Col 5 Heading**|  Enter the heading to appear at the top of the fourth
column of the aging report (e.g. Over 120 Days).

**A/P Activity Days**|  Enter the number of days used to determine how much
activity is shown in the [VENDOR.Q](../VENDOR-Q/README.md) procedure (i.e. AP
activity). This field only controls the number of days which are displayed in
the [VENDOR.Q](../VENDOR-Q/README.md) procedure and has no bearing on the amount of
history maintained.

**Days AR History**|  Enter the number of days of AP balance history to be
kept for determining the highest AP balance and average AP balance for each
vendor This will be displayed on [VENDOR.Q](../VENDOR-Q/README.md). For instance, to
see the highest AP balance by vendor over the past year, enter 365. It will be
a rolling period of time. Note, if you increase the time period, the missing
days cannot be automatically recaptured. It will build up to the # days
specified. If you decrease the number, the next time [AP.P7](../AP-P7/README.md) runs,
it will adjust the data accordingly. [AP.P7](../AP-P7/README.md) should be included in
the nightly batch run.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
