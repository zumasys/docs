##  Inventory Balance as of a Specific Date (INV.R14)

<PageHeader />

**Form Details**  
[ Form Details ](INV-R14-1/)   

**Purpose**  
The purpose of INV.R14 is to give you an estimate of the inventory balance as
of a certain date. This report will be less accurate the more inventory
transactions are back-dated and the more cost adjustments are made independent
of inventory transactions. The process examines inventory transactions to
determine what the closing balance would have been for each part number on the
date specified. You can choose to sort the report by category or location and
limit the report to include only specific categories and locations. You also
have the option of suppressing items that have a zero balance to reduce the
size of the report.  
  
Note: You can only run this report for as far back as you have inventory
transaction history available in the IT file. This should be kept in mind when
running purges against the IT file.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part Number** The part numbers of all the inventory items.  
**Description** The description of the part number.  
**CAT** The category code associated with the part.  
**UM** The inventory stocking unit of measure.  
**Unit Cost** The unit cost of the part as of the cutoff date.  
**Quantity** The inventory balance as of the cutoff date.  
**Ext Cost** The extended cost of the inventory (Quantity X Unit Cost).  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />