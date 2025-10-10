##  Cancel a Cycle Count (CYCLE.P3)

<PageHeader />

**Form Details**  
[ Form Details ](CYCLE-P3-1/README.md)   

**Purpose**  
The CYCLE.P3 procedure is used to cancel a cycle count for which cycle records have been created. This procedure will select all records for the cycle date entered, and assign new cycle dates based upon the number of days in the [ INV.CONTROL ](../../INV-ENTRY/INV-CONTROL/README.md) procedure. All cycle records will be voided. 

**Frequency of Use**  
This procedure is run as required to cancel a cycle count.

**Prerequisites**  
The cycle records must have been generated for the selected date.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />