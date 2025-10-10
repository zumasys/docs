##  A/R Entry (AR.E)

<PageHeader />

**Form Details**  
[ Header ](AR-E-1/README.md)   
[ Line Items ](AR-E-2/README.md)   
[ Register History ](AR-E-3/README.md)   
[ Ship Address/Credit Card ](AR-E-4/README.md)   
[ Attachments ](AR-E-5/README.md)   
[ Collections ](AR-E-6/README.md)   
[ Change History ](AR-E-7/README.md)   

**Purpose**  
The AR.E procedure is used to enter or update Account Receivable records/invoices. In addtion to creating new invoices, records created from sales order shipments, RMA receipts or FSO records can be accessed and edited in this procedure. Invoices or credits created from [ CASH.E ](CASH-E/README.md) may also be viewed in this procedure but changes are not permitted to them.. If a change is required, the original cash record must be reversed or an offsetting AR record created.   
  
There are two (2) screens available in the AR.E procedure. The first is the
header screen. The header screen relates primarily to control information
about the particular record. For memo or other miscel- laneous billings, the
amount being invoiced or credited may be entered in the miscellaneous charges
area, and the second detailed data entry screen need never be accessed. The
second screen is for detail entry of part information. This data will already
be present if the record was created by the shipping process.  
  
When the record is filed, the following files are updated:  
  
AR - The record is filed in the AR file  
CUST - The open AR balance is updated  
ARCUST - The AR / CUST cross reference is updated  
ARREG - Register records are written for each account number  
identified in the AR record for future posting to GL.  
  
Changes made to invoices generated from another process do not update the
original records upon which the invoice was based. For example, deleting an
invoice generated from a shipment will not delete the shipper or re-open the
sales order. Inventory is, also, not updated from this procedure.

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of valid customers ( [ CUST.E ](CUST-E/README.md) ). Entry of valid general ledger account numbers ( [ GLCHART.E ](../../GL-OVERVIEW/GL-ENTRY/GLCHART-E/README.md) ). Entry of part numbers if they are to entered ( [ PARTS.E ](PARTS-E/README.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />