## Customer Entry (CUST.E)
<PageHeader />

## Rebate Controls

![](./CUST-E-7.jpg)

| **Customer Number**|  The number assigned to this customer. This field is
used for display purposes only.

-  
**Name**|  The name of the customer.

**Rebate Type**|  Enter the type of rebate that will be offered to this
customer.

**Rebate Description**|  Displays the description that has been entered for
this rebate in the [REBATE.CONTROL](../REBATE-CONTROL/README.md) procedure. The
description is displayed here for reference only and cannot be changed. If the
frequency of this rebate is "INVOICE" this description will print on the a/r
invoice.

**Rebate Acct**|  Enter the account number, the rebate dollars should be
applied to. If you wish to use the account numbers entered in
[REBATE.CONTROL](../REBATE-CONTROL/README.md) leave this field blank.

**Rebate Pct**|  Enter the percentage of the invoice that will be given as a
rebate. For example, if the invoice if for $100.00 and the rebate percentage
is 5.00, the customer will be given a $5.00 rebate.

**Rebate Freq**|  Enter the frequency with which the rebate will be given to a
customer.

INVOICE - A miscellaneous charge (credit) will be added to the invoice for the
rebate amount at the time the invoice is created. This rebate will not be
applied to misc. invoices created via [AR.E](../AR-E/README.md).

**From Sales Amt**|  Enter the starting range or sales volume the customer
should receive a rebate for. For example, you may offer a rebate to customers
who sell between 5,000.00 and 10,000.00 in a given month. This amount should
always be greater than the "to" amount for the previous entry.

**To Sales Amt**|  Enter the ending range or sales volume the customer should
receive a rebate for. For example, you may offer a rebate to customers who
sell between 5,000.00 and 10,000.00 in a given month. This amount should
always be greater than the from amount.

**Sales Acct**|  Enter the g/l account number that should be used for this
rebate type.

**Sales Percent**|  Enter the default percent that should be used for this
type of rebate.

**Sales Frequency**|  Enter the frequency or interval at which this rebate
should be issued.

The valid options are : MONTHLY, QUARTERLY, SEMI-ANNUALLY or ANNUALLY.

**Load All**|  Press this volume if you wish to load in the defaults for both
the sales volume and code specific type rebates.

**Load Code Rebates**|  Press this button if you wish to only load in the
defaults for the code specific rebates.

**Load Sales Rebates**|  Press this button if you wish to only load in the
defaults for the sales volume rebates.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
