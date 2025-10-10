##  Sales Forecast Entry (SF.E)

<PageHeader />

**Form Details**  
[ Form Details ](SF-E-1/README.md)   

**Purpose**  
The SF.E procedure is used to define Sales Forecast items used in the MPS
planning process. The sales forecast defines anticipated sales of a product.
Using SF.E you lay-out the forecasted sales dates and quantities for the item.
Sales forecast items will be consumed by actual sales orders. For example, if
you enter a forecast of 100 units and enter a sales order for 50 units, the
mps procedures will show 50 pcs as forecast and 50 pcs as demand. If no sales
order was entered, you would see a 100 pc forecast.  
  
Please note that sales forecast, like sales orders, will never drive demand
down to mrp. Demand is driven to mrp by the creation of a work order and/or
master schedule item. This allows you to determine when demand should be
driven down to mrp and in what periods rather than basing that directly on a
sales order or forecast item.  
  
Sales forecast items may also be created automatically based on planning planning bills. (See [ PB.E ](../PB-E/README.md) and [ PB.P1 ](../../MFG-PROCESS/PB-P1/README.md) )   
  

**Frequency of Use**  
As required.

**Prerequisites**  
Part numbers must be defined in [ PARTS.E ](../../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/README.md) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />