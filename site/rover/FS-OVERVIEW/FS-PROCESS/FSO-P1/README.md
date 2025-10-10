##  Post Field Service Orders (FSO.P1)

<PageHeader />

**Form Details**  
[ Form Details ](FSO-P1-1/README.md)   

**Purpose**  
The FSO.P1 procedure is used to post service orders which have been
completed.. When a service order is posted an accounts receivable record is
created in the AR file based on the data recorded in the field service order.
Commission and sales history records are also created. All orders which have
been completed but have not been posted are automatically selected and posted
by the procedure, unless a cutoff date is entered. Then only the completed
orders that have not been posted with a close date less than or equal to the
cutoff date are selected.

**Frequency of Use**  
It is recommended that the posting procedure be run at the end of each day to
insure that accounts receivable records are available for processing. Less
frequent processing may be done if desired but should be done at least once a
month before the end of the month closing.

**Prerequisites**  
Setup of the appropriate account numbers in the [ AR.CONTROL ](../../../AR-OVERVIEW/AR-ENTRY/AR-CONTROL/README.md) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />