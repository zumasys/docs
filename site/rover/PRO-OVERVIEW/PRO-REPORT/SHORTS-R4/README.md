##  Shortage Listing by Planner (SHORTS.R4)

<PageHeader />

**Form Details**  
[ Form Details ](SHORTS-R4-1/README.md)   

**Purpose**  
SHORTS.R4 provides a listing of work order part shortages by planner. The
report shows each part number that is short and the work orders that are
waiting for the part. A new page is started for each planner. You may limit
the report to specific planners.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part#** The part numbers that is short.  
**Desc** The description of the part number.  
**Notes** Any notes from the shortage file, entered via [ SHORTS.E ](../../PRO-ENTRY/SHORTS-E/README.md) , regarding the shortage.   
**WO.ID** All of the work order numbers that show the part as short.  
**Assembly Number** The part number that identifies the assembly being
produced on the work order.  
**Model Number** The model number associated with the work order assembly.  
**Customer Name** If the work order references a specific customer, the
customer's name will appear in this column.  
**SO#** If the work order is associated with a specific sales order, the sales
order number will appear in this column.  
**Li#** If the work order is associated to a specific sales order line item
number, it will be displayed in this column.  
**Due Date** The date on which the work order is scheduled to be completed.  
**Qty Short** The quantity of the part shown as short on the work order.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />