##  A/P Items Awaiting Invoicing (AP.R1)

<PageHeader />

**Form Details**  
[ Form Details ](AP-R1-1/README.md)   

**Purpose**  
The AP.R1 procedure is used to create a listing of all A/P items which are in
the AP file, but which have not yet been invoiced. The report will select all
A/P items which do not have an invoice number present. The records which will
normally qualify for this report have been created through the receiving
process.  
  
A cutoff date is prompted when running this report. All items received through
the Receiving process through the date entered will be selected for this
report. Leaving the cutoff date null assumes you wish to print all accrual
items.  
  
This is not a balancing report to be used in reconciling the General Ledger. It looks only at the current state of the accounts payable file. For balancing the accrual account, use the [ AP.R9 ](AP-R9/README.md) report. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Apid** The record ID of the item in the AP file.  
**Vend#** The vendor number.  
**Vendor.Name** The name of the vendor as it appears in the Vendor file.  
**Rec.Date** The date on which the receipt was processed.  
**Li#** The line items number(s) on the AP record.  
**Part.Number** The part number corresponding to each line number. This may be
blank for non-inventory parts.  
**Part.Description** The description corresponding to the part number. This
comes either from the Parts file, or as entered from the PO record, if
different.  
**Rec.Qty** The quantity of the part number which was received on the
corresponding line item.  
**Ext.Cost** The total extended cost of the line item.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />