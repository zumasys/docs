## A/R Check Register (CASH.R1)
<PageHeader />

**Form Details**
[Form Details](../CASH-R1-1/README.md)

**Purpose**
The CASH.R1 procedure is used to print a cash receipts / check register for a
selected period. The report has an option to include miscellaneous cash
receipts processed through [CASH.E3](../CASH-E3/README.md). Miscellaneous cash receipts
should be excluded when using this report as a balancing tool.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Check#**        | The check number on file in the CASH record.                   |
| ----------------- | -------------------------------------------------------------- |
| **Cash#**         | The record ID of the CASH item.                                |
| **Cust**          | The customer number from which the cash / credit was received. |
| **Customer.Name** | The name of the customer as it appears in the CUST file.       |
| **Chk.Date**      | The date of the check.                                         |
| **Check.Amount**  | The total amount of the check.                                 |
| **AR.Item**       | The AR item(s) paid by this check.                             |
| **App.Amount**    | The amount of the check applied to each AR item.               |
| **Disc.Amount**   | The amount of discount allowed on each AR item.                |
| **Write.Off.Amt** | The amount written off against the AR item.                    |

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
