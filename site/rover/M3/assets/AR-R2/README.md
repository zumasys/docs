## A/R Items on Hold (AR.R2)
<PageHeader />

**Form Details**
[Form Details](../AR-R2-1/README.md)

**Purpose**
The AR.R2 procedure is used to print a listing of all AR items which are
currently on hold. The presence of any hold code in the item qualifies that
item to appear on this report.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **AR.Item**       | The record ID of the item in the AR file.                           |
| ----------------- | ------------------------------------------------------------------- |
| **Cust#**         | The customer number on the AR item.                                 |
| **Customer.Name** | The name of the customer as it appears in the CUST file.            |
| **Inv.Date**      | The date of the AR item.                                            |
| **Hold**          | The hold code present in the AR item. This is a user- defined code. |
| **Hold.Date**     | The date on which the hold code was placed on this AR item.         |
| **Inv.Balance**   | The balance of the AR item.                                         |

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
