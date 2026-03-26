##  Customer Inquiry (CUST.Q)

<PageHeader />

**Form Details**  
[ General ](CUST-Q-1/index.md)   
[ Summary ](CUST-Q-2/index.md)   
[ Detail Sales ](CUST-Q-3/index.md)   
[ Quotes ](CUST-Q-4/index.md)   
[ Open Order ](CUST-Q-5/index.md)   
[ Job Status ](CUST-Q-6/index.md)   
[ Open RMAs ](CUST-Q-7/index.md)   
[ A/R ](CUST-Q-8/index.md)   
[ A/R Activity ](CUST-Q-9/index.md)   
[ Contacts ](CUST-Q-10/index.md)   
[ Contact Log ](CUST-Q-11/index.md)   
[ Attachments ](CUST-Q-12/index.md)   

**Purpose**  
The CUST.Q procedure provides an on-line inquiry for a selected customer. The
inquiry includes information about the customers open balance, credit limit,
sales history, open orders, job status and A/R activity, contacts and the
contact log.  
  
The number of days of sales history which is displayed depends on parameters used when running [ SALES.P2 ](../../../MRK-OVERVIEW/MRK-PROCESS/SALES-P2/index.md) , a separate procedure that updates sales analysis data. Note that this update is normally setup as as part of the nightly batch processing.   
  
The number of days of A/R activity displayed depends on the setting in [ ACCT.CONTROL ](../../../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/index.md) .   
  
Information in CUST.Q is read-only data. You do have the ability to log transactions by using a button provided to add a new log transaction. Log transactions are stored in a separate data file. Customer data should be entered through the customer entry procedure ( [ CUST.E ](../../AR-ENTRY/CUST-E/index.md) )   

**Frequency of Use**  
As required.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />