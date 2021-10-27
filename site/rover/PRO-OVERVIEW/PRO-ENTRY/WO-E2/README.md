##  Work Order Finalization (WO.E2)

<PageHeader />

**Form Details**  
[ Form Details ](WO-E2-1/README.md)   

**Purpose**  
The WO.E2 procedure is used to finalize closed work orders. The user enters
the number of the work order to be finalized and files the record. The status
of the work order is changed to "F" (final) and all of the appropriate work
order variances are calculated. After the work order is finalized no other
transactions may be made against it.  
  
There are several variances calculated for standard cost work orders and only one for average cost work orders. When the variances are calculated work order register records are created for subsequent posting to the general ledger. Only those amounts not already posted by the work order posting process ( [ WO.P4 ](WO-P4/README.md) ) are used in creating the register records.   
  
The variances calculated for standard cost work orders are material, labor,
outside processing, fixed overhead, variable overhead, material overhead and
completion variance. Only the completion variance is calculated for average
cost work orders. This variance basically handles the disbursement of any
value not consumed by completions.

**Frequency of Use**  
Manual finalization of work orders is usually done right after the work order is closed or on a timely basis thereafter and before the end of the current accounting period. An alternative to this procedure is the batch posting procedure [ WO.P3 ](WO-P3/README.md) . 

**Prerequisites**  
The work order to be finalized must first be closed.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />