##  Post Receipts (RECEIPTS.P1)

<PageHeader />

**Form Details**  
[ Form Details ](RECEIPTS-P1-1/README.md)   

**Purpose**  
The RECEIPTS.P1 procedure is used to post previously entered receipts. When a
receipt is posted an accounts payable accrual record is created in the AP file
based on the data recorded in the receipts record. All receipts which have not
been posted are automatically selected and posted by the procedure, unless a
cutoff date is entered. The cutoff date will allow unposted receipts with a
receipt date less than or equal to the cutoff date to be selected.

**Frequency of Use**  
It is recommended that the posting procedure be run at the end of each day to
insure that accounts payable accrual records are available when invoices are
received. Less frequent processing may be done if desired but should be done
at least once a month before the end of the month closing.

**Prerequisites**  
Setup of the appropriate account numbers in the [ AP.CONTROL ](../../../AP-OVERVIEW/AP-ENTRY/AP-CONTROL/README.md) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />