##  Purchase Price Variance Report (AP.R12)

<PageHeader />

**Form Details**  
[ Form Details ](AP-R12-1/README.md)   

**Purpose**  
This report shows purchase price variances based on data in the accounts
payable file (AP). Only AP records associated with purchase receipts that have
a variance between purchase price and standard cost are shown. The user is
prompted for start and end receipt cutoff dates. Also the report can be
limited by part number and PO stocking location.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Receipt Date** The date of the receipt.  
**AP ID** The AP ID created during receipts posting. Contains PO# appended
with - and a number.  
**Vendor Name** The PO vendor's name.  
**Li** The line item from the PO record.  
**Part Number** The PO part number for the associated line item.  
**Description** The part descripton for the associated line item.  
**Quantity** The quantity received for the associated line item.  
**UM Factor** The UM factor to convert buy UM to stocking unit of measure, if
present on the PO.  
**Actual Cost** Unit price from AP record as recorded from the PO for the
associated line item.  
**Price Per** Price Per from the PO item, if entered.  
**Std. Cost** The standard cost at the time of receipt for the associated line
item.  
**Freight.Cost** The standard freight cost at the time of receipt for the
associated line item.  
**Material Overhead** The standard material overhead cost at the time of
receipt for the associated line item.  
**Unit Variance** The difference between the actual and standard cost
(factored by the UM factor and price per.)  
**Percent** The unit variance as a percentage of the actual cost.  
**Total Variance** The unit variance multiplied by the stocking quantity.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />