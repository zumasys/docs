##  Vendor Rating Listing (VENDOR.R2)

<PageHeader />

**Form Details**  
[ Form Details ](VENDOR-R2-1/README.md)   

**Purpose**  
The VENDOR.R2 procedure is used to produce a vendor rating listing. The report
is listed in vendor name sequence and allows you to filter which vendors are
included based on their rating. For example, you may elect to list only those
vendors with a rating below 80%. In addition you may define if the overall
rating is to be used, or only the quality or delivery rating. You can specify
one or more months of statistics to report on.

**Frequency of Use**  
As required.

**Prerequisites**  
The [ VENDOR.P2 ](../../../../../../../../../rover/AP-OVERVIEW/AP-REPORT/VENDOR-Q/VENDOR-Q-9/DMR-CONTROL/DMR-CONTROL-1/VENDOR-P2) procedure must have been run to summarize the vendor statistics for the period(s) on which you want to report. 

**Data Fields**

**Vendor#** The number which identifies the associated vendor on the data
base.  
**Name** The name of the vendor.  
**Quality Weighting%** The percentage that determines how much of the overall
rating is based on the quality rating.  
**Delivery Weighting%** The percentage that determines how much of the overall
rating is based on the delivery rating.  
**Quality Rating** The rating percentage calculated for the vendor's quality.  
**Delivery Rating** The rating percentage calculated for the vendor's delivery
performance.  
**Combined Rating** The combined rating assigned to the vendor by taking the
weighted quality and delivery ratings together.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />