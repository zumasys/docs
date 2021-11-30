##  Reload Transaction History on INV File (INV.P2)

<PageHeader />

**Form Details**  
[ Form Details ](INV-P2-1/README.md)   

**Purpose**  
The INV.P2 procedure is used to load inventory transaction history ID numbers and dates to the inventory file. These are used for online viewing on the [ INV.Q ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-2/INV-Q) procedure. The number of days loaded is based on the [ INV.CONTROL ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL) record "Trans History Days" specified. The current INV record's IT ID's are cleared prior to loading. All IT history is still maintained on the IT file and can be viewed via the IT.R series reports. 

**Frequency of Use**  
This procedure should be run if the [ INV.CONTROL ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL) "Trans History Days" parameter has been changed. It also should be run if transaction history has occured before the [ INV.CONTROL ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL) parameter was set. 

**Prerequisites**  
Entry of the Transaction History Days parameter on the [ INV.CONTROL ](../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />