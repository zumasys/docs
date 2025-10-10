##  Inventory Transaction Listing for a Batch Number (IT.R7)

<PageHeader />

**Form Details**  
[ Form Details ](IT-R7-1/README.md)   

**Purpose**  
The IT.R7 procedure is used to create an inventory transaction listing for a
specified batch number within a date range. The records included in the report
are sorted by transaction date.  
  
The batch number is most commonly assigned by the [ IT.E4 ](../../INV-ENTRY/IT-E4/README.md) inventory conversion procedure. All transactions resulting from a single [ IT.E4 ](../../INV-ENTRY/IT-E4/README.md) process are assigned a single batch number. This allows the user to see everything that was affected. 

**Frequency of Use**  
As required.

**Prerequisites**  
Batch numbers must have been assigned to the IT record.

**Data Fields**

**Trans#** The number of the inventory transaction.  
**Date** The date on which the inventory transaction was made.  
**Part.Number** The part number for which the transaction was made.  
**Description** The description of the part number as it appears in the Parts
file.  
**Quantity** The total quantity of the part moved.  
**Unit.Cost** The unit cost of the parts moved.  
**Ext.Cost** The extended cost of all parts moved.  
**Frm.Loc** The name of the inventory location from which the material was
taken.  
**To.Loc** The name of the inventory location to which the material was moved.  
**Notes** The motes which were entered by the person making the movement.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />