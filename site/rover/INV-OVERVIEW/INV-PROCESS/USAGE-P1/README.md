##  Inventory Usage Update (USAGE.P1)

<PageHeader />

**Form Details**  
[ Form Details ](USAGE-P1-1/README.md)   

**Purpose**  
The USAGE.P1 procedure updates the Usage History file (USAGE) with the
accumulated usage for the period specified. The operator must specify the
first and last day of the month for which the accumulation is to be performed.
This procedure can only be run for one month at a time.  
  
There is a "run for previous month" check box that, when checked, allows the
procedure to run for the month immediately prior to the dates entered. This is
meant to be used when running the USAGE.P1 procedure as part of the nightly
update process. Normally, you do not want to run this procedure during the
current month, as it may skew the statistics. Therefore, placing this into the
nightly process and checking the box will cause the procedure to run every
night. The intent is to alleviate having to remember to run it after each
month.  
  
The procedure selects all of the inventory transactions (IT) which occured
during the month specified and determines which of them constitute a usage of
material. The procedures considers usage to be any transaction which moved
materials from a physical to a non-physical location. This includes movements
to work orders and shipments, it does not include transactions created by
debits against purchase order receipts since those transactions constitute a
return rather than a consumption of the materials. Also not included are
records generated as a result of a cycle or physical inventory.  
  
All months currently maintained which are in excess of the number of months defined in the [ INV.CONTROL ](../../INV-ENTRY/INV-CONTROL/README.md) record will be dropped. 

**Frequency of Use**  
This procedure should be run at the end of each month after all inventory
transactions have been entered It is usually included in the month end batch
processing queue.

**Prerequisites**  
All of the inventory transactions for the period should be entered prior to
running this procedure.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />