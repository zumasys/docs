## A/P Precheck Processing Report (AP.R5)
<PageHeader />

**Form Details**
[Form Details](../AP-R5-1/README.md)

**Purpose**
This will print a detail list of all AP item due for payment as of a selected
date. This is intended to be a pre-processing audit report for the computer
generated checks, meaning that it shows the user what the system would pay if
the check processing were executed with the same date. If items appear on this
report which you do not wish to pay, use the [AP.E](../AP-E/README.md) process to
change the date to pay. A cutoff date is prompted when running this report.
All items due for payment on or before that date will be printed.

**Frequency of Use**
When using the computer generated checks, this should be run immediately
prior.

**Prerequisites**
AP items must be on file with a date to pay entered.

**Data Fields**

| **Vend#**       | The vendor number who will be receiving payment.              |
| --------------- | ------------------------------------------------------------- |
| **Vendor.Name** | The name of the vendor as it appears in the Vendor file.      |
| **APid**        | The item in the AP file to be processed. This could be either |
invoices, debit memos or a combination.
**Invoice#**|  The vendor invoice number as it appears in the AP file.
**Inv.Date**|  The invoice date as is appears in the AP file.
**Pay.Date**|  The date to pay as it appears in the AP file.
**Amt.To.Pay**|  The amount of the AP item which is to be paid. This is a user
controlled field in the AP file, and can be changed to make payments as
required.
**Disc.Date**|  This is the date through which a discount is allowed, if
allowed by the terms negotiated with the vendor.
**Disc.Amount**|  The amount of discount which is to be taken.
**Net.Check.Amt**|  The total amount of the check to be written to the vendor.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
