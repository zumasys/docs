##  Post Shipments (SHIP.P1)

<PageHeader />

**Form Details**  
[ Form Details ](../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ship-p1/SHIP-P1-1)   

**Purpose**  
The SHIP.P1 procedure is used to post previously entered shipments. When a
shipment is posted an accounts receivable record is created in the AR file
based on the data recorded in the shipment record. Commission and sales
history records are also created. All shipments which have been confirmed but
have not been posted are automatically selected and posted by the procedure,
unless a cutoff date is entered. Then only the confirmed shipments that have
not been posted with a ship date less than or equal to the cutoff date are
selected.

**Frequency of Use**  
It is recommended that the posting procedure be run at the end of each day to
insure that accounts receivable records are available for processing. Less
frequent processing may be done if desired but should be done at least once a
month before the end of the month closing.

**Prerequisites**  
Setup of the appropriate account numbers in the [ AR.CONTROL ](../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/AR-CONTROL) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />