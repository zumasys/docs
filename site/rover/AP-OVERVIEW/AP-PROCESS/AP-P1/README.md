##  Create Prechecks Records (AP.P1)

<PageHeader />

**Form Details**  
[ Form Details ](AP-P1-1/README.md)   

**Purpose**  
The AP.P1 procedure is used to create Prechecks records which will be used to
process and generate checks. One option is to select all AP items to be paid
as of a specified cutoff date. A second option is to directly enter the AP
items which are to be paid. All records created when this procedure is run are
assigned to a check run number, which is used by supporting procedures such as
the check printing process. Whether or not an item is eligible for discount,
the user may 'force' the discount to be taken.  
  
The Prechecks file is a 'hold' file for processing a check run. Its' purpose
is to allow the printing of checks in a 'work file'. This allows the re-
printing of a check run, when required due to problems such as data entry
error or printer jam, without having any affect on the AP file until the
checks are actually posted.  
  
Any AP items which are selected for payment are flagged so they will not be
processed again.  
  
If you need to make changes to an existing check run, you can do so via the [ PRECHECKS.E ](../../AP-ENTRY/PRECHECKS-E/README.md) procedure. This procedure is found in the data entry section of the Accounts Payable Module. You can, also, cancel a check run via [ PRECHECKS.P1 ](../PRECHECKS-P1/README.md) which is found the processes section of the Accounts Payable Module. AP.P1 cannot be used to edit or cancel a check run. 

**Frequency of Use**  
As required.

**Prerequisites**  
Setup of the [ AP.CONTROL ](../../AP-ENTRY/AP-CONTROL/README.md) record ( [ AP.CONTROL ](../../AP-ENTRY/AP-CONTROL/README.md) ) and the establishment of dates and amounts to pay in the AP records. It is highly recommended that the [ AP.R5 ](../../AP-REPORT/AP-R5/README.md) report be run to give visibility to the AP items which would be selected by this AP.P1 process when the cutoff date is used. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />