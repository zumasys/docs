##  MRP Horizontal Report (MRP.R1)

<PageHeader />

**Form Details**  
[ Form Details ](MRP-R1-1/README.md)   

**Purpose**  
The MRP.R1 procedure is used to produce a horizontal material requirements
planning report. This report can be processes for specific parts or categories
of parts. When running the report for specific parts, it is not necessary to
enter the categories.

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
**Daily TPOP** This quantity represents a time phased requirement that is
added to the required quantity figure for each day. It inflates demand for the
part beyond actual requirements and serves as a fixed forecast if used.  
**Lead Time** The time required to obtain or manufacture the part.  
**Order Policy** The policy to be used when ordering the part number. Discrete
- Order only what is required. Fixed - Order based on the parameter defined by
Order Min, Max and multiple.  
**Period Start** The date on which each planning period begins.  
**Period End** The date on which each planning period ends.  
**Requirements** The quantity required of the part in each period.  
**Sched Receipts** The quantity of parts scheduled for delivery or completion
from production in each period.  
**Projected Bal** The projected on-hand balance for each period after
considering the impact of forecast, requirements and scheduled receipts.  
**Planned Orders** The quantity the system has determined needs to be ordered
beyond the existing orders to satisfy demand.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />