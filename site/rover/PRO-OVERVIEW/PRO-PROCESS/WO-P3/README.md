#  Work Order Finalization Process (WO.P3)

<PageHeader />

**Form Details**  
[ Form Details ](WO-P3-1/README.md)   

**Purpose**  
The WO.P3 procedure is used to finalize closed work orders. The user enters
the cut-off date to be compared to the close date of each work order. All work
orders with a closed date less than or equal to the cut-off date will be
finalized. The status of each work order is changed to "F" (final) and all of
the appropriate work order variances are calculated. After a work order is
finalized no other transactions may be made against it.  
  
There are several variances calculated for standard cost work orders and only one for average cost work orders. When the variances are calculated work order register records are created for subsequent posting to the general ledger. Only those amounts not already posted by the work order posting process ( [ WO.P4 ](../WO-P4/README.md) ) are used in creating the register records.   
  
The variances calculated for standard cost work orders are material, labor,
outside processing, fixed overhead, variable overhead, material overhead and
completion variance. Only the completion variance is calculated for average
cost work orders. This variance basically handles the disbursement of any
value not consumed by completions.

**Frequency of Use**  
Usually run as part of the month end closing process.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />