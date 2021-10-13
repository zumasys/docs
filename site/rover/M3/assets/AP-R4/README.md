## A/P Vendor Activity Listing (AP.R4)
<PageHeader />

**Form Details**
[Form Details](../AP-R4-1/README.md)

**Purpose**
This report will print an activity listing for each vendor which has activity
for a selected period. One page is printed for each vendor. The following are
prompted:


1\. Vendor If a report for a single vendor is requested,
enter the number. Leaving this field null will
print reports for all vendors.


2\. Open Items? If only open items are required, enter 'Y'.
Otherwise, all items will be printed.


3\. Start Date If a range of dates is required, enter the begin-
date.


4\. End Date Enter the ending date for the range of dates
requested. Leave this field null to print all
activity since the start date entered.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **AP.ID**       | The record ID of the item in the AP file.               |
| --------------- | ------------------------------------------------------- |
| **Invoice#**    | The vendor invoice number as it appears in the AP file. |
| **Inv.Date**    | The invoice date as it appears in the AP file.          |
| **Terms.Code**  | The terms code assigned to the AP item.                 |
| **Due.Date**    | The date this item is due for payment.                  |
| **Inv.Amount**  | The original invoice amount of the AP item.             |
| **Payments**    | A total of all payments processed against this AP item. |
| **Balance.Due** | The balance due of this AP item.                        |

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
