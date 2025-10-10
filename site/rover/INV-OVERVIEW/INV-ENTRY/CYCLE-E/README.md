##  Enter Cycle Inventory Counts (CYCLE.E)

<PageHeader />

**Form Details**  
[ Form Details ](CYCLE-E-1/README.md)   

**Purpose**  
The CYCLE.E procedure is used to enter inventory quantities counted as a
result of a cycle count. Normally, the counts will be logged on the Cycle
Count Sheet by the person actually performing the cycle count.  
  
This procedure is set up to enter multiple tags on one screen, with the actual
updating of the tags being performed when the File command is selected. Until
that command is done, no tags are actually updated.  
  
Along with the count entry, the initials of the person who performed the count
and the date the count was actually done are entered. These two fields
automatically default to the last data entered, eliminating the problem of
repeatedly entering the same data.  
  
If the count quantity is zero, you may change status to "C" and enter a
quantity of zero. You can, also, change the status to "V". When the tags are
posted to inventory, the system will set the quantity to zero on all voided
tags.  
  
This procedure is also used to change tags which were entered incorrectly, as
well as to void tags which are not to be used.

**Frequency of Use**  
Normally, this procedure is used daily for the cycle count sheet generated on
that day.

**Prerequisites**  
Initialization of the inventory control record ( [ INV.CONTROL ](../INV-CONTROL/README.md) ) and entry of the required inventory locations and General Ledger account numbers.   
  
Prior to this procedure, the following steps must have been performed:  
  
1) Stratify the ABC codes in the Parts file  
2) Assign Cycle Count dates in the Inventory file  
3) Generate Cycle Tags  
4) The actual count of the parts in the inventory

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />