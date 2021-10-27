##  Recalculate PO Balance in the Vendor File (PO.P3)

<PageHeader />

**Form Details**  
[ Form Details ](PO-P3-1/README.md)   

**Purpose**  
The PO.P3 procedure recalculates and sets the open order amount in the vendor file. This amount is displayed on query procedures such as the vendor inquiry ( [ VENDOR.Q ](../../../../rover/AP-OVERVIEW/AP-REPORT/VENDOR-Q) ). 

**Frequency of Use**  
The open order amount is maintained automatically as purchase orders are
entered and receipts are processed. Therefore, the only time you really need
to run this procedure is when the file has been corrupted or records have been
purged from the purchase order file.

**Prerequisites**  
Entry of purchase order records ( [ PO.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />