##  Work Order Finalization Reversal Process (WO.E5)

<PageHeader />

**Form Details**  
[ Form Details ](WO-E5-1/README.md)   

**Purpose**  
The WO.E5 procedure is used to un-finalize a work order. When the record is
saved, the status on the work order is changed from "F" for finalized to "C"
for closed. This is the only update that occurs to the work order in this
procedure. The users can then re-open the work order, post additional cost or
material to it.  
  
The previous variances that were calculated against the work order will be adjusted when the work order is re-finalized via [ wo.e2 ](../wo-e2/README.md) or [ wo.p3 ](../../PRO-PROCESS/WO-P3/README.md) . 

**Frequency of Use**  
As required.

**Prerequisites**  
The work order must be finalized.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />