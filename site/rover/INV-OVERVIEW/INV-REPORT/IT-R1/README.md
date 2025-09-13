##  Inventory Transaction Listing (IT.R1)

<PageHeader />

**Form Details**  
[ Form Details ](IT-R1-1/)   

**Purpose**  
The IT.R1 procedure is used to create an inventory transaction listing for a
specified date range. The records included in the report are sorted by
transaction date and part number with page breaks occurring on changes in the
transaction date.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Trans#** The number of the inventory transaction.  
**Part.Number** The part number of the items moved in the transaction.  
**Description** The first line of the description of the part number as it
appears on the Parts Master.  
**Quantity** The total quantity of the part moved by the transaction.  
**From.Loc** The name of the inventory location from which the material was
taken.  
**To.Loc** The name of the inventory location to which the material was moved.  
**From.WO** The work order from which the material was moved.  
**To.WO** The work order to which the material was sent.  
**Created.By** A name which describes the procedure which caused the transaction to occur. These include [ IT.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E/IT-E) , RECEIPTS, PICKER, PHYS, CYCLE and SHIPMENT.   
**Record.ID** The ID of the record which initiated the transaction.  
**Li#** The line item number on the record which initiated the transaction.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />