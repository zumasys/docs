##  Shipment Reversal Entry (SHIP.E3)

<PageHeader />

**Form Details**  
[ Header ](SHIP-E3-1/README.md)   
[ Line Items ](SHIP-E3-2/README.md)   

**Purpose**  
The SHIP.E3 procedure is used to reverse existing shipment records which have already been posted. The user enters the number of the shipment to be reversed and the data from the shipment is displayed for review but may not be changed. When the record is filed inventory transactions are created to move the materials back into inventory. The reversal will be posted by the [ SHIP.P1 ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/comm-e/SHIP-P1) procedure and a credit memo will be created in the Accounts Receivable system.   
  
Shipment records which have not been posted may be changed with the [ SHIP.E2 ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/SO-P1/SHIP-E2) procedure. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />