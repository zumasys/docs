##  MPS Horizontal Report (MPS.R1)

<PageHeader />

**Form Details**  
[ Form Details ](MPS-R1-1/README.md)   

**Purpose**  
The MPS.R1 procedure is used to produce a horizontal master production
schedule report.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part Number** The number that identifies the part number printed.  
**Description** The description of the part number.  
**Unit/Meas** The stocking unit of measure for the part.  
**On Hand** The on hand balance at the time the MPS was processed.  
**Shortages** The quantity of the part that is short on work orders.  
**Safety Stock** The safety stock quantity as defined in the Parts file.  
**Max Stock** The maximum stock quantity as defined in the Parts file.  
**Scrap Factor** The percentage of the part expected to be scrapped out of any
production.  
**Order Min** The minimum suggested order quantity.  
**Order Mult** The suggested multiple in which the part should be planned.  
**Order Max** The maximum size at which any single order should be set.  
**Avg Mo Usage** The average monthly usage of the part number.  
**Lead Time** The time required to obtain or manufacture the part.  
**Order Policy** The policy to be used when ordering the part number. Discrete
- Order only what is required. Fixed - Order based on the parameter defined by
Order Min, Max and multiple.  
**Period Start** The date on which each planning period begins.  
**Period End** The date on which each planning period ends.  
**Forecast** The forecasted sales for each period that have not been consumed
by actual requirements.  
**Requirements** The quantity required of the part in each period.  
**Sched Receipts** The quantity of parts scheduled for delivery or completion
from production in each period.  
**Projected Bal** The projected on-hand balance for each period after
considering the impact of forecast, requirements and scheduled receipts.  
**Avail to Prom** The Quantity that is available to promise for delivery in
each period. Available to promise always appears in the first period, and also
in any subsequent periods that also have scheduled receipts. The quantity
shown represents what is available until the next quantity shown.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />