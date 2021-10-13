## Summary Customer Credit Listing (CUST.R4)
<PageHeader />

**Form Details**
[Form Details](../CUST-R4-1/README.md)

**Purpose**
The CUST.R4 report is used to provide a quick review of the credit status of
your customers. The report will tell you which customers are on credit hold,
what their credit limit and open balances are along with their average pay
days.

You have multiple selection options when running this report. For example, you
can limit the report to customers with past due invoices so you can receive a
listing of customers to contact for payment status. You can, also, limit the
report to only customers with an open balance (A/R or sales order). You can
exclude customers on credit hold or only include customers on credit hold.




**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Cust#**      | The number assigned to the customer record.             |
| -------------- | ------------------------------------------------------- |
| **Name**       | The name of the customer.                               |
| **Start Date** | The date this customer started doing business with your |
company. This date will only appear on the report if it was entered in the
[CUST.E](../CUST-E/README.md) procedure.
**Credit Hold**|  A "Y" will appear in this column if the customer was placed
on credit hold in [CUST.E](../CUST-E/README.md).
**Credit Limit**|  The credit or dollar limit that was given to this
**A/R Balance**|  The current open invoice amount for this
**Order Balance**|  The current sales order balance for this customer.
**Day Limit**|  The number of days you consider an invoice past due. This
field can be set by customer in [CUST.E](../CUST-E/README.md). If no entry is made in
[CUST.E](../CUST-E/README.md), the report will use the past due days field in
[AR.CONTROL](../AR-CONTROL/README.md).
**Invoices Past Due**|  The number of invoices that are past due based on the
entry made into the day limit/past due days field.
**Avg Pay Days**|  The average pay days for this customer.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
