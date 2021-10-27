##  Inactive G/L Accounts in Use Report (GLCHART.R2)

<PageHeader />

**Form Details**  
[ Form Details ](GLCHART-R2-1/README.md)   

**Purpose**  
The GLCHART.R2 procedure is used to print a listing of inactive accounts that are still posted to open or control records and could interface to the g/l if not changed. In this report, you select which files you wish to search on. For example, if you wish to check all control records - [ MRK.CONTROL ](MRK-CONTROL/README.md) , [ WO.CONTROL ](WO-CONTROL/README.md) , [ COST.CONTROL ](COST-CONTROL/README.md) , etc. - you would check the control records box. To search all open accounts receivable (including recurring a/r and artax) records, you would check the open a/r box.   
  
It is also possible to enter one or more active accounts on the screen. This allows the user to see where accounts are used prior to trying to set them to inactive in [ GLCHART.E ](../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) . 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Procedure** The name of the procedure where you can review/update the
record.  
**Record.Id** The record id you would enter into the associated procedure.  
**Field** The name of the field that contains the inactive g/l account number.  
**Account Number** The inactive g/l account number.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />