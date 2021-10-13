## A/R Customer Activity Listing (AR.R5)
<PageHeader />

**Form Details**
[Form Details](../AR-R5-1/README.md)

**Purpose**
The AR.R5 procedure is used to print an activity listing for selected
customers. All AR items on file which fall within the selected date range are
display, regardless of their current status. The report is sorted and totalled
by customer name. Each new customer prints on a separate page.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Invoice#**   | The record ID of the item in the AR file.                    |
| -------------- | ------------------------------------------------------------ |
| **Inv.Date**   | The date of the AR item.                                     |
| **Terms.Code** | The terms code for the associated AR item.                   |
| **Due.Date**   | The date the AR item is due to be paid, based upon the terms |
code.
**Inv.Amount**|  The total amount of the AR item.
**Check#**|  The check number(s) on file against this AR item.
**Check.Date**|  The check date(s) for the associated check(s).
**Check.Amount**|  The amount(s) paid by the associated check(s).
**Balance.Due**|  The current balance due on the AR item.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
