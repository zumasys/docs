##  Purchase Order Backlog by Period (PO.R8)

<PageHeader />

**Form Details**  
[ Form Details ](PO-R8-1/README.md)   

**Purpose**  
The PO.R8 procedure is used to create the purchase order backlog report. The
report shows the total quantity and dollar value committed in each month for
each part number. There are a total of twelve periods which are displayed
horizontally across the page. The user specifies the period which is to be the
starting period for the report. The first bucket will contain all amounts and
quantities prior to the first period specified by the user. The next will
contain all of the amounts and quantities for the first month/year period
followed by buckets for each of the next nine months. The last bucket contains
all amounts and quantities beyond the tenth month. The report may also be run
in summary form where only the totals for each period are displayed without
the detail for each part number.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part** The part number associated with the bucketed amounts and quantities.  
**Description** The first line of the description for the part number.  
**Total Quantity** The total quantity for each bucket.  
**Total Dollars** The total dollars for each bucket.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />