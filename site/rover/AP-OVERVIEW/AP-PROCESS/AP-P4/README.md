##  Recalculate AP Balance in Vendor File (AP.P4)

<PageHeader />

**Form Details**  
[ Form Details ](AP-P4-1/README.md)   

**Purpose**  
The AP.P4 procedure recalculates the AP balance maintained in the Vendor file.
It will first clear all balances from the Vendor file and then read the open
balance of all AP items and update the Vendor file.

**Frequency of Use**  
The AP balance is maintained automatically as AP items are entered or checks
are processed. Therefore, the only time you really need to run this procedure
is when the file has been corrupted or records have been purged from the AP
file.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />