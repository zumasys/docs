##  RMA Receipts Entry (RMAREC.E)

<PageHeader />

**Form Details**  
[ Line Items ](RMAREC-E-1/README.md)   
[ FSO Operations ](RMAREC-E-2/README.md)   

**Purpose**  
The RMAREC.E procedure is used to receive items previously identified on an RMA with the [ RMA.E ](../RMA-E/README.md) procedure. You enter the RMA number for the items being received and enter the quantity of each item received. You do not have to receive all of the items in one receipt. Items that were not received or were partially received will show as backordered on the RMA.   
  
This procedure does not allow you to identify failure codes or problem and correction information. The intent of this procedure is to allow personnel on the receiving dock to identify what has been received. The status of the receipt is automatically set to "R" (received) and there are no inventory transactions generated. Inventory is moved when the status of the receipt is changed to "C" (confirmed). Use the [ RMAREC.E2 ](../RMAREC-E2/README.md) procedure to set the status and identify failure information. If a one step receipt is desired, you may use the [ RMAREC.E2 ](../RMAREC-E2/README.md) procedure for the initial receipt. 

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of an RMA with the [ RMA.E ](../RMA-E/README.md) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />