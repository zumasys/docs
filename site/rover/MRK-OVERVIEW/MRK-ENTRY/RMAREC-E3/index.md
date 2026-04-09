##  Reverse Posted RMA Receipts (RMAREC.E3)

<PageHeader />

**Form Details**  
[ Header ](RMAREC-E3-1/index.md)   
[ Line Items ](RMAREC-E3-2/index.md)   

**Purpose**  
The RMAREC.E3 procedure is used to reverse an RMA receipt that has already been posted with [ RMAREC.P1 ](../../MRK-PROCESS/RMAREC-P1/index.md) . Enter the receipt ID to be reversed. This will populate the form with information from the receipt so you can verify that it is the correct item. You are not allowed to change any of this information. When you save the record a reversal record will be created which will also appear on the original RMA record reducing the number of items received. When this reversal record is posted it will create a debit memo in accounts receivable if a credit memo was created by the receipt being reversed. Inventory will also be reversed, but any work orders created by the original receipt must be closed manually using [ WO.E ](../../../PRO-OVERVIEW/PRO-ENTRY/WO-E/index.md) .   
  
If the receipt has not been posted you may delete it using the [ RMAREC.E2 ](../RMAREC-E2/index.md) procedure. 

**Frequency of Use**  
As required.

**Prerequisites**  
Posting of the receipt to be reversed with [ RMAREC.P1 ](../../MRK-PROCESS/RMAREC-P1/index.md) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />