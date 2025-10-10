##  Supplier Performance Report (VENDOR.R3)

<PageHeader />

**Form Details**  
[ Form Details ](VENDOR-R3-1/README.md)   

**Purpose**  
The VENDOR.R3 procedure is used to produce vendor rating forms for each vendor
selected, or for all vendors. The form details the quality, delivery, and
combined rating for the vendor, and is printed in a format that allows it to
be folded and placed in a window envelope for mailing. You can specify one or
more months of statistics to report on.

**Frequency of Use**  
As required.

**Prerequisites**  
The [ VENDOR.P2 ](../../AP-PROCESS/VENDOR-P2/README.md) procedure must have been run to summarize the vendor statistics for the period(s) on which you want to report. 

**Data Fields**

**For** The name and address of the vendor whose information is detailed on
the form.  
**From** Your companies name and telephone number.  
**Quality Perform**  
**Quantity Received** The total quantity of items received from the vendor
during the rating period.  
**Reject Type** The types of rejects found during the rating period.  
**Quantity Rejected** The number of items rejected with the associated reject
type.  
**Reject%** The percentage of the total quantity received for the period, that
were rejected for the associated reject type (Quantity Rejected / Total
Quantity Received).  
**Factor%** The weighting factor applied to rejects associated with the reject
type.  
**Weighted** The final percentage for the associated reject type after
applying the factor (Reject% x Factor%).  
**Quality Rating** 100% minus the total of the weighted scores.  
**Delivery Perfor**  
**Work Days from Due Date** Each period range as defined in the [ PO.CONTROL ](../../../duplicates/PO-CONTROL/README.md) procedure. For example, "5 days early to 0 days late".   
**Receipts** The number of receipts made during the rating period that fall
within the associated "Work Days from Due Date".  
**Factor%** The weighting factor applied to receipts made in the associated
"Work Days from Due Date".  
**Value** The number of receipts multiplied by the factor.  
**Delivery Rating** The sum of the factored values.  
**Overall Perform**  
**Quality Rating** The Quality Rating multiplied by the Quality weighting as defined in the [ VENDOR.E ](../../AP-ENTRY/VENDOR-E/README.md) procedure.   
**Delivery Rating** The Delivery Rating multiplied by the Delivery weighting as defined in the [ VENDOR.E ](../../AP-ENTRY/VENDOR-E/README.md) procedure.   
**Overall Rating** The sum of the weighted quality and delivery ratings.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />