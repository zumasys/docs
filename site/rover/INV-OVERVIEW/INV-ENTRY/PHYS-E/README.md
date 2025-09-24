##  Enter Physical Inventory Counts (PHYS.E)

<PageHeader />

**Form Details**  
[ Form Details ](PHYS-E-1/)   

**Purpose**  
The PHYS.E procedure is used to enter inventory quantities counted as a result
of a physical count. Normally, the counts will be logged on the Physical Tags
by the person(s) actually performing the physical count.  
  
This procedure is set up to enter multiple tags on one screen, with the actual
updating of the tags being performed when the Save command is selected. Until
that command is completed, no tags are actually updated.  
  
Along with the count entry, the initials of the person who performed the count
and the date the count was actually done are entered. These two fields
automatically default to the last data entered, eliminating the problem of
repeatedly entering the same data.  
  
This procedure is also used to change tags which were entered incorrectly.  
  
If the count quantity is zero, you may change status to "C" and enter a
quantity of zero. You can, also, change the status to "V". When the physical
inventory is posted, the system will set the quantity to zero for you on all
voided tags.  
  
Changes to tags are allowed until they are posted to inventory, at which time
no modifications are allowed.

**Frequency of Use**  
This procedure is used when a Physical Inventory is in process.

**Prerequisites**  
Initialization of the inventory control record ( [ INV.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL) ) and entry of the required inventory locations and General Ledger account numbers.   
Prior to this procedure, the following procedures must have been executed:  
1) Generate Physical Tags ( [ PHYS.P1 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/PHYS-P1) )   
2) Print Physical Tags ( [ PHYS.F1 ](PHYS-F1/) ) 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />