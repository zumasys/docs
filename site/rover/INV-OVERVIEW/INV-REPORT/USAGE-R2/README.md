##  Usage and Projected Months of Stock by Part (USAGE.R2)

<PageHeader />

**Form Details**  
[ Form Details ](USAGE-R2-1/README.md)   

**Purpose**  
USAGE.R2 shows an inventory balance as of any past date, similar to [ INV.R14 ](../../../../rover/INV-OVERVIEW/INV-REPORT/INV-R14/README.md) , and also shows usage for the selected period, as well as average usage. The average usage is used in combination with the inventory balance to calculate projected months of stock available. The report can be sorted by part number, category or inventory location. You can also select by category and/or location.   
  
Note: For the inventory balance, you can only run this report for as far back
as you have inventory transaction history available in the IT file. This
should be kept in mind when running purges against the IT file.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part Number** The part numbers of all the inventory items.  
**Description** The description of the part number.  
**CAT** The category code associated with the part.  
**UM** The inventory stocking unit of measure.  
**Unit Cost** The unit cost of the part as of the inventory date.  
**Usage Qty** The total usage for the part based on the start and end date
entered.  
**Quantity** The inventory balance as of the inventory cutoff date.  
**Avg. Usage** The average usage for the number of months specified in the [ INV.CONTROL ](../../INV-ENTRY/INV-CONTROL/README.md) record.   
**Months of Stock** Quantity divided by average usage.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />