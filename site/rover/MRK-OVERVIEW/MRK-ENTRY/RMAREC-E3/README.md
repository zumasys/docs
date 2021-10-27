##  Reverse Posted RMA Receipts (RMAREC.E3)

<PageHeader />

**Form Details**  
[ Header ](RMAREC-E3-1/README.md)   
[ Line Items ](RMAREC-E3-2/README.md)   

**Purpose**  
The RMAREC.E3 procedure is used to reverse an RMA receipt that has already been posted with [ RMAREC.P1 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMAREC-P1) . Enter the receipt ID to be reversed. This will populate the form with information from the receipt so you can verify that it is the correct item. You are not allowed to change any of this information. When you save the record a reversal record will be created which will also appear on the original RMA record reducing the number of items received. When this reversal record is posted it will create a debit memo in accounts receivable if a credit memo was created by the receipt being reversed. Inventory will also be reversed, but any work orders created by the original receipt must be closed manually using [ WO.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E) .   
  
If the receipt has not been posted you may delete it using the [ RMAREC.E2 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMA-E/RMA-E-1/RMAREC-E2) procedure. 

**Frequency of Use**  
As required.

**Prerequisites**  
Posting of the receipt to be reversed with [ RMAREC.P1 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/RMAREC-P1) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />