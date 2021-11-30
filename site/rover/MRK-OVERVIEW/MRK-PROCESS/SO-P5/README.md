##  Sales Order Commitment Process (SO.P5)

<PageHeader />

**Form Details**  
[ Form Details ](SO-P5-1/README.md)   

**Purpose**  
The SO.P5 procedure can be used as a batch process to commit sales order schedules. The procedure uses either the date entered by the user as a cutoff date, or will calculate the cutoff date based upon the number of "Commit Days" found in [ MRK.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL) , committing those items with scheduled ship dates prior to the cutoff date. The commit flag on the sales order is also set by this procedure. 

**Frequency of Use**  
The inventory commitments are maintained automatically as sales orders are
entered and shipments are processed. Therefore, the only time you really need
to run this procedure is when the file has been corrupted or records have been
converted from another system.

**Prerequisites**  
None if you enter a cutoff date. If you choose to calculate the cutoff date, then the Commit Days must be entered in [ MRK.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />