## AR Collection Report (AR.R10)
<PageHeader />

**Form Details**
[Form Details](../AR-R10-1/README.md)

**Purpose**
The AR.R10 procedure is used to create an accounts receivable collection
listing for a specified set of criteria. The report will list the AR items and
display pertinent collection data.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **AR Id**       | The record ID of the item in the AR file.                    |
| --------------- | ------------------------------------------------------------ |
| **Cust.ID**     | The customer number.                                         |
| **Cust Name**   | The name of the customer as it appears in the customer file. |
| **Open.Amount** | The current open amount of the AR item.                      |
| **Inv Date**    | The invoice date.                                            |
| **Due.Date**    | The date on which the AR item was due to be paid.            |
| **Next.Action** | The next action date that has been entered in the            |
[AR.E](../AR-E/README.md) screen for this AR item.
**Status**|  The current collection status that has been assigned to this AR
item in [AR.E](../AR-E/README.md).
**Status.Description**|  The description of the collection status code, as
read from the [ACCT.CONTROL](../ACCT-CONTROL/README.md) screen.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
