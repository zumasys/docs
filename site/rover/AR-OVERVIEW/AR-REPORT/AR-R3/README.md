##  A/R Aging Report (AR.R3)

<PageHeader />

**Form Details**  
[ Form Details ](AR-R3-1/README.md)   

**Purpose**  
The AR.R3 procedure is used to create an accounts receivable aging report.
This report lists all open A/R items which satisfy the criteria entered. This
invoices may be aged based on the invoice date, payment due date, or register
date. When using this report for balancing against the general ledger, the
register date method should be used to insure proper alignment with the data
that was interfaced to the general ledger system.  

**Frequency of Use**  
As required.

**Prerequisites**  
The column headings and date ranges to be included in each column must be entered into the [ ACCT.CONTROL ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL) entry procedure. 

**Data Fields**

**ARid** The record ID of the item in the AR file.  
**PO.Number** The customer's purchase order number as it appears in the AR
file.  
**Date** Either the invoice date or the due date, depending upon the option
selected.  
**Invoice.Amt** The total invoice amount as it appears on the customer's
invoice. This is the original amount of the invoice.  
**Check.Amount** The amount of the associated check listed.  
**Checks** All checks which have been paid against this AR item, through the
cut-off date specified.  
**Chk.Date** The date on which any checks were paid.  
**"Aging Columns"** There are four (4) aging columns available on this report. An example of these is: Current 31-60 days 61-90 days over 90 days The actual column titles and day break points is determined by what is entered in the [ ACCT.CONTROL ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL) entry screen.   
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />