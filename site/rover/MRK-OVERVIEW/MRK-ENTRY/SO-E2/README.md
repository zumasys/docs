##  Sales Order Accounting Release (SO.E2)

<PageHeader />

**Form Details**  
[ Form Details ](SO-E2-1/README.md)   

**Purpose**  
The SO.E2 procedure is used to release sales orders, even if the customer is on credit hold or if they are currently exceeding their limit. Releasing an order means that no further credit checks will be performed for that sales order, even if the [ SO.E ](../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E) procedure is re-saved.   
  
The process will display some limited sales order data on the screen, in order to ensure it is the correct sales order. When the user presses the "Release" button, if their user ID is in the [ MRK.CONTROL ](../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL) valid list, that ID will be placed into the "Released By" field. The record must be saved to complete the release. 

**Frequency of Use**  
As required.

**Prerequisites**  
The list of valid user ID's must be entered in [ MRK.CONTROL ](../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL) . This list controls which users can use the SO.E2 procedure and approve the release. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />