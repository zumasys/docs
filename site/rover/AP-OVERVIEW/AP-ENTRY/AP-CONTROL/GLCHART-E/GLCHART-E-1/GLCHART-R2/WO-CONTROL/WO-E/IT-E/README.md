##  Inventory Transaction Entry (IT.E)

<PageHeader />

**Form Details**  
[ Form Details ](IT-E-1/README.md)   

**Purpose**  
The IT.E procedure is used to enter individual inventory transactions which
record the movement of materials from one location to another. The operator
enters the part number and quantity being moved, the location it is moving
from and the location it is moving to.  
  
When the operator's entry is filed the system creates a record in the
Inventory Transaction file (IT) which records the pertinent information about
the transaction. At the same time it updates the inventory balance in the
Inventory file (INV) for both the "from" and "to" locations. To record the
financial effect of the transaction, inventory register (INVREG) records are
created when the record is filed.  
  
If the balance on hand in the" from" location will go negative as a result of
processing the transaction a message will appear to warn the operator of this
situation. If the "Negatives OK" flag in the associated INVLOC file is set to
"N" then the system will not allow the transaction to be processed.

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of valid inventory locations ( [ INVLOC.E ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/INVLOC-E) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />