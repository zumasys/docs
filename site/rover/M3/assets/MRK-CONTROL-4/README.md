## Marketing Module Controls and Defaults (MRK.CONTROL)
<PageHeader />

## Credit Cards

![](./MRK-CONTROL-4.jpg)

| **Type**|  Enter all of the credit card types that you will support. A list
of options can be found in the right click menu.

-  
**Card Description**|  Displays the description of the associated card type.

**Account Number**|  When a credit card transaction is processed against a
shipment an invoice is created and automatically paid by the credit card. This
is done by creating a cash posting record in the same way that the
[CASH.E](../CASH-E/README.md) process does. The difference in credit card processing is
that there is typically a percentage of the amount charged by the credit card
company based on the amount of the transaction. Therefore you need to specify
each general ledger account number along with a percentage to indicate how the
amount should be distributed. For example, if you have a $100 transaction and
the credit card company is charging a 2.5% transaction fee then you would
enter a cash or cash accrual account number for the net amount you expect to
receive with a percentage of 97.5 and a transaction expense account with a
percentage of 2.5%. The percentages must total 100%.

**Creditcard Percent**|  Enter the percentage of the transaction to be posted
against the associated general ledger account number. The sum of the
percentages must equal 100. For example, two and one half percent is entered
as 2.50.

**Preauth Overcharge**|  Credit card preauthorizations are done during sales
order entry and ecommerce site order processing. Depending on your workflow
you may want to overcharge the preauthorization to account for additional
charges not yet known. For example, if freight charges are estimated or
flagged as to be determined, you may want to overcharge the preauthorization
by an amount that would normally cover any freight expense. When the card
capture step is performed it will only capture the amount you actually charge,
but will avoid having to make a separate charge for the freight. This avoids
the additional transaction charge and the customer will only see one charge
against their card instead of two.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
