## AR Invoice Distribution Listing (AR.R8)
<PageHeader />

**Form Details**
[Form Details](../AR-R8-1/README.md)

**Purpose**
The AR.R8 procedure is used to create an accounts receivable invoice
distribution listing for a specified date range. The report will list the AR
items and display the general ledger accunt number.

Additionally, a summary page will be printed, showing totals for each general
ledger account number.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **AR Id**          | The record ID of the item in the AR file.                     |
| ------------------ | ------------------------------------------------------------- |
| **Cust**           | The customer number.                                          |
| **Cust Name**      | The name of the customer as it appears in the customer file.  |
| **Purchase Order** | The customer's purchase order number.                         |
| **Inv Date**       | The invoice date.                                             |
| **Inv Amount**     | The total amount of the invoice.                              |
| **Account**        | The general ledger account number to which an amount has been |
distributed.
**Description**|  The description of the general ledger account number.
**Amount**|  The distribution amount, associated to the account.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
