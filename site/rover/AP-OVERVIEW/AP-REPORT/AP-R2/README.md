##  A/P Items on Hold (AP.R2)

<PageHeader />

**Form Details**  
[ Form Details ](AP-R2-1/README.md)   

**Purpose**  
The AP.R2 procedure is used to create a listing of all A/P items which have a hold flag present. The hold flags and dates were placed on the record during the [ AP.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/README.md) procedure as required by the user. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Apid** The record ID of the item in the AP file.  
**Vend#** The vendor number.  
**Vendor.Name** The name of the vendor as it appears in the Vendor file.  
**PO#** The purchase order number.  
**Invoice#** The vendor invoice number as it appears in the AP file.  
**Inv.Date** The invoice date.  
**Hold** The hold code assigned to this AP record. This is a user-defined
code.  
**Hold.Date** The date on which this record was placed on hold.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />