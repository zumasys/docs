## Vendor Rating Statistics Update (VENDOR.P2)
<PageHeader />

**Form Details**
[Form Details](../VENDOR-P2-1/README.md)

**Purpose**
The VENDOR.P2 procedure updates the Vendor Rating Statistics file
(VENDORRATING) with the rating statistics for the period specified. The
operator must specify the first and last day of the month for which the
statistics calculation is to be performed. This procedure can only be run for
one month at a time and can be rerun for any month.

There is a "run for previous month" check box that, when checked, allows the
procedure to run for the month immediately prior to the dates entered. This is
meant to be used when running the VENDOR.P2 procedure as part of the nightly
update process. Normally, you do not want to run this procedure during the
current month, as it may skew the statistics. Therefore, placing this into the
nightly process and checking the box will cause the procedure to run every
night. The intent is to alleviate having to remember to run it after each
month.

The procedure selects all of the Receipts and DMR records which occured during
the month specified and determines the early/late days for each receipt to
calculate delivery performance. The quality performance is determined using
the DMR records and the weightings for each are specified in
[DMR.CONTROL](../DMR-CONTROL/README.md).

Multiple months of statistics are kept and can be reported using
[VENDOR.R2](../VENDOR-R2/README.md) or [VENDOR.R3](../VENDOR-R3/README.md) or viewed on
[VENDOR.Q](../VENDOR-Q/README.md). All months currently maintained which are in excess
of the number of months defined in the [DMR.CONTROL](../DMR-CONTROL/README.md) record
will be dropped.

**Frequency of Use**
This procedure should be run at the end of each month after all receipts and
DMR transactions have been entered It is usually included in the month end
batch processing queue.

**Prerequisites**
All of the receipts transactions for the period should be entered prior to
running this procedure.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
