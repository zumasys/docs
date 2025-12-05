#  Sales Rep Entry (REP.E)

<PageHeader />

**Form Details**  
[ General ](REP-E-1/README.md)   
[ Contacts ](REP-E-2/README.md)   
[ Contact Log ](REP-E-3/README.md)   
[ Attachments ](REP-E-4/README.md)   

**Purpose**  
The REP.E procedure provides for the entry and maintenance of the Sales Rep
Master file (REP). The ID to each rep record is optionally assigned by the
user, or sequentially assigned by the system. Each record contains descriptive
information about the rep such as their name, address, telephone and fax
numbers, contact, and sales commission percentages which are defaulted in the
sales order entry procedure.  
  
There are fields for start and inactive dates in this procedure so that you can track when the rep started and stopped working for your company. When a rep becomes inactive, it is recommended that you run the [ CUST.R2 ](../../AR-OVERVIEW/AR-REPORT/CUST-R2/README.md) report for the rep. This report will give you a listing of all customers that have been assigned to this rep. Until the rep is removed from the customer record, it will get loaded into new quotes and sales orders. 

**Frequency of Use**  
Sales reps are usually loaded initially when the system is first installed,
with additions being made in the future as required.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />