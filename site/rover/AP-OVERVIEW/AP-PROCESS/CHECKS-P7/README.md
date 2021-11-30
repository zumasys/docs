##  Run Electronic Check Interface (CHECKS.P7)

<PageHeader />

**Form Details**  
[ Form Details ](CHECKS-P7-1/README.md)   

**Purpose**  
The CHECKS.P7 procedure is used to create an output file for vendor payment
information. This output file must be sent to the Payment Processor vendor.
This replaces the check printing process.  
Records in the PRECHECKS file, for the selected run#, will be listed in this
output file.  
Enter the Check Run #.  
Starting Check # will be defaulted. It will be a sequential number prefixed by
"E".  
As each CHECKS record is written, it is deleted from the PRECHECKS file.  
  
All AP records which are being processed by the CHECKS.P7 electronic data
transfer are updated with the check information and the open balance is
changed. Register (APREG) records are created for all amounts and account
numbers posted.

**Frequency of Use**  
As

**Prerequisites**  
[ AP.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL) , Payment Tab, Electronic Payments fields must be completed prior to [ AP.P1 ](../../../../rover/AP-OVERVIEW/AP-REPORT/CHECKS-F5/AP-P1) . A check run must have been created through the [ AP.P1 ](../../../../rover/AP-OVERVIEW/AP-REPORT/CHECKS-F5/AP-P1) procedure and all checks must have been successfully printed. Need to create a LIID for ECHECKS if starting with a number other than 1. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />