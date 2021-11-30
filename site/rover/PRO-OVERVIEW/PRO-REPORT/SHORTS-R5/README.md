##  Shortage Listing by Sales Order (SHORTS.R5)

<PageHeader />

**Form Details**  
[ Form Details ](SHORTS-R5-1/README.md)   

**Purpose**  
SHORTS.R5 provides a listing of work order part shortages by sales order
number. The report shows each part number that is short and the work orders
that are waiting for the part. You may limit the report to specific sales
orders and exclude shortages/work orders that were not created for a sales
order.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part#** The part numbers that is short.  
**Desc** The description of the part number.  
**WO.ID** All of the work order numbers that show the part as short.  
**Assembly Number** The part number that identifies the assembly being
produced on the work order.  
**Customer Name** If the work order references a specific customer, the
customer's name will appear in this column.  
**SO#** If the work order is associated with a specific sales order, the sales
order number will appear in this column.  
**So Status** The status of the sales order.  
**Li#** If the work order is associated to a specific sales order line item
number, it will be displayed in this column.  
**Due Date** The date on which the work order is scheduled to be completed.  
**Qty Short** The quantity of the part shown as short on the work order.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />