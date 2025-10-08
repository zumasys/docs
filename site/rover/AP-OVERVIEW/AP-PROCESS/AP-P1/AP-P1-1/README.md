##  Create Prechecks Records (AP.P1)

<PageHeader />

##

![](./AP-P1-1.jpg)

**Job ID** Enter a unique ID if you wish to enter and save the parameters to
this procedure for future use. If you only need to run the procedure and do
not want to save your entry then you may leave this field empty.  
  
**Destination** Select the destination for the output from this procedure.  
  
**Process** Select the method to be used for processing the report. Foreground
is always available and must be used when output is directed to anything other
than a system printer (i.e. printers spooled through the database on the host
computer.) Depending on your setup there may be various batch process queues
available in the list that allow you to submit the job for processing in the
background or at a predefined time such as overnight. A system printer must be
specified when using these queues.  
  
**Format** Select the format for the output. The availability of other formats
depends on what is allowed by each procedure. Possible formats include Text,
Excel, Word, PDF, HTML, Comma delimited and Tab delimited.  
  
**Layout** You may indicate the layout of the printed page by specifying the
appropriate setting in this field. Set the value to Portrait if the page is to
be oriented with the shorter dimension (usually 8.5 inches) at the top or
Landscape if the longer dimension (usually 11 inches) is to be at the top.
Portrait will always be available but Landscape is dependent on the output
destination and may not be available in all cases.  
  
**Copies** Enter the number of copies to be printed.  
  
**Run Process** Click on the button to run the process. This performs the save
function which may also be activated by clicking the save button in the tool
bar or pressing the F9 key or Ctrl+S.  
  
**Disb.Acct#** Enter the cash disbursement G/L account number which will be used for this check run. This entry is defaulted from the [ AP.CONTROL ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL) file.   
  
**Check Date** Enter the date to be used as the check date. This can differ
from both the cutoff date and the current date as needed. This date will also
be used to calculated discount eligilibity.  
  
**Co Code** Enter the company code the checks will be issued against. This code must be predefined in the CO.CONTROL procedure. If only one code exists, it will automatically be inserted into this procedure for you. The disbursement account number will be loaded in from the [ AR.CONTROL ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/AR-CONTROL) record for this company code.   
  
**Use Company Code** Check this box if you wish to only pay a/p records that
are issued against the company code referenced above. If this box is not
checked, then you may pay a/p records for any company code. Please note that
the above company code is the company code that will be posted to the check
record. Therefore, you may have a check for company code '1' that pays for a/p
records with different company codes. The program will not attempt to issue
separate checks based on company code.  
  
**Force A/P Discount** Check this box If you wish to take a discount on all
items, regardless as to the date. Do not check this box if you wish to use the
standard date calculations to determine if the discount should be allowed.  
  
**Exclude Credit Card Invoices** Check this box if you wish to exclude
invoices that are scheduled to be paid by credit card from the check run. If
this option is selected, invoices that are scheduled to be paid by credit card
will not be included in the vendor lookups or when using the batch creation
option. However, you may manually enter an AP.ID that is scheduled to be paid
by credit card.  
  
Please note that the system uses the terms code on the AP record to determine
if the invoice is scheduled to be paid by a credit card.  
  
**Electronic Vendors** Chose an option if you want to limit the vendors to only include vendors that are part of the electronic payment system or exclude them. If this option is selected, vendors with an "Electronic Collection ID" on [ VENDOR.E ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/VENDOR-E) will included/excluded in the vendor lookups or when using the batch creation option. However, you may manually enter any AP ID.   
Leave blank to ignore this option.  
  
**Cutoff Date** Enter the date which will be compared to the date to pay in
the AP records in order to select which items are ready to be paid. This field
is only used for batch selection. If you are going to directly enter AP items,
this field is left blank.  
  
**Vendor Id** If you wish to creat a check for selected vendor based on a
cutoff/due date, enter the vendor id(s) in this field. If no entry is made in
this field, all open invoices for all vendors with a due date less than or
equal to the cutoff date will be selected. This option only applies when using
the batch creation process to create the check run. If you will manually be
entering the AP.IDS, do not make any entries in this field.  
  
**Exclude Vendors** Check this box if you wish to exclude the vendor ids
entered in the above field from the check run. Please note that this option
only applies when using the batch creation process.  
  
**AP.Ids** If you wish to select individual Accounts Payable items for
payment, enter the AP numbers here. If you wish to select all items eligible
for payment by a selected date, leave this field null and use the Cutoff Date.
You may also use the help key to load all open AP items for a vendor.  
  
**Vendor** The number of the vendor for which the AP item is being paid.  
  
**Vendor Name** The name of the vendor which is being paid.  
  
**Force AP Discount** Check this box If you wish to take a discount on this
item, regardless as to the date. Do not check this box if you wish to use the
standard date calculations to determine if the discount should be allowed.  
  
**Amt to Pay** This field contains the amount to pay for the associated AP
item. The amount is loaded directly from the amount to pay field in the AP
record. If there is no amount to pay on the AP item, the balance due will be
used. This field can be changed as required but cannot exceed the open invoice
balance.  
  
**Resort by Vendor** Select this option if you wish to resort the a/p items
entered on this screen by vendor name.  
  
**Entry Recap** Pressing this button will display the total amount entered for
each vendor.  
  
**Total** This field is the total of all AP items selected when they have been
manually entered.  
  
**Last Status Message** Contains the last status message generated by the
program.  
  
**Last Status Date** The date on which the last status message was generated.  
  
**Last Status Time** The time at which the last status message was generated.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />