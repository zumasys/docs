##  A/P Aging Report (AP.R3)

<PageHeader />

**Form Details**  
[ Form Details ](AP-R3-1/README.md)   

**Purpose**  
The AP.R3 procedure is used to create an A/P aging report. This report lists
all open A/P items which satisfy the criteria entered. The following are
prompted when running this report:  
  
  
1\. Cutoff Date The date through which all activity should be  
printed. Invoices with payment processed after  
this date will display only the invoice amount.  
  
  
2\. Invoice This will determine whether the aging is to be  
Due Date done based upon the invoice date, due date or  
Register the register date. The register date should be  
used when balancing to the general ledger.  
  
  
3\. Detail or The detail option will print every item found  
Summary on file which fits the criteria. The summary  
option will print one total line per vendor.  
  
  
4\. Vendor An entry in this field will print an aging for  
only one vendor. Leaving this field null will  
print all vendors.

**Frequency of Use**  
As required.

**Prerequisites**  
The column headings and date ranges to be included in each column must be entered into the [ ACCT.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL) entry procedure. 

**Data Fields**

**Apid** The record ID of the item in the AP file.  
**Invoice.Number** The vendor invoice number as it appears in the AP file.  
**Date** Either the invoice date or the due date, depending upon the option
selected.  
**Invoice.Amt** The total invoice amount as it appears on the vendor's
invoice. This is the original amount of the invoice.  
**Check.Amount** The amount of the associated check listed.  
**Checks** All checks which have been paid against this AP item, through the
cut-off date specified.  
**Chk.Date** The date on which any checks were paid.  
**"Aging Columns"** There are four (4) aging columns available on this report. An example of these is: Current 31-60 days 61-90 days over 90 days The actual column titles and day break points is determined by what is entered in the [ ACCT.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL) entry screen.   
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />