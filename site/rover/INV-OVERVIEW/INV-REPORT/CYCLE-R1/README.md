##  Cycle Count Listing (CYCLE.R1)

<PageHeader />

**Form Details**  
[ Form Details ](CYCLE-R1-1/README.md)   

**Purpose**  
The CYCLE.R1 procedure is used to print a cycle count sheet of all parts to be
counted for a given cycle date. Separate sheets will print for each inventory
location to be counted.

**Frequency of Use**  
Normally, cycle listings are printed daily for the parts to be counted.

**Prerequisites**  
The [ CYCLE.P1 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/CYCLE-P1) procedure must have been run to generate cycle tags for a given cycle date. 

**Data Fields**

**Tag** The tag number associated with the part number in the inventory
location to be counted.  
**Part Number** The number of the part to be counted.  
**Description** The description as is appears in the Parts file.  
**Balance** The inventory balance as it appears in the Inv file.  
**Count Qty** The actual count as logged be the person who performed the cycle
count (their name should be logged at the top of this report.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />