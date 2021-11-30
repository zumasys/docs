##  Create Physical Inventory Records (PHYS.P1)

<PageHeader />

**Form Details**  
[ Form Details ](PHYS-P1-1/README.md)   

**Purpose**  
The PHYS.P1 procedure is used to create physical tag records for all parts
with inventory records. Records are written to the Phys file with an assigned,
sequential tag number generated from the LIID file. Extra, blank tags are
generated for each inventory location, based upon the percentage requested.
When complete, a physical date is written into the INV record in the Control
file to show that a physical inventory is in process. When selected, the part
numbers are sorted by category code.  
  
This process does not 'freeze' any inventory locations.

**Frequency of Use**  
This procedure should be run when a physical inventory is to be taken.

**Prerequisites**  
The physical inventory control data must be entered into the [ INV.CONTROL ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL) procedure to define the parameters of a physical. It is incumbent upon the user to stop inventory movements when the actual count is in process. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />