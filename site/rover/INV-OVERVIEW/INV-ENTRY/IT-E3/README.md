##  Project Inventory Transaction (IT.E3)

<PageHeader />

**Form Details**  
[ Form Details ](IT-E3-1/)   

**Purpose**  
The IT.E3 procedure is used to enter individual inventory transactions which
record the movement of materials from and to projects. The operator enters the
part number and quantity being moved, the project it is coming from and/or
going to, the location it is coming from, and the location it is going to.  
  
When the operator's entry is filed the system creates a record in the Inventory Transaction file (IT) which records the pertinent information about the transaction. At the same time it updates the inventory balance in the Inventory file (INV) for both the from and to locations. To record the financial effect of the transaction, inventory register (INVREG) records are created when the record is filed. The record is also posted to the associated project records with the [ PROJECT.P1 ](PROJECT-P1/) procedure.   
  
This procedure is meant to be used for movements of material to and from projects only. General purpose inventory movements can be accomplished using the [ IT.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E/IT-E) and [ IT.E2 ](../../../../rover/INV-OVERVIEW/INV-ENTRY/IT-E2) procedures. 

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of valid inventory locations ( [ INVLOC.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/INVLOC-E) ), and projects ( [ PROJECT.E ](PROJECT-E/) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />