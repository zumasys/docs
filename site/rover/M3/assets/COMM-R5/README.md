## Commission Payment Report (COMM.R5)
<PageHeader />

**Form Details**
[Form Details](../COMM-R5-1/README.md)

**Purpose**
The COMM.R5 report provides details about the amount paid on a commission
check. This report can be delivered to the representative along with the check
as a detailed breakdown of which commission were paid on the check. You may
choose to run this process for an entire check run by speciifying the check
run number, or by specifying a specific check number.

**Frequency of Use**
After processing a commission check run, or as required to reprint individual
check details.

**Prerequisites**
None.

**Data Fields**

| **Check**|  A separate page is printed for each check with the check number
printed in the header section of the page.
-  
**Rep**|  The rep number and name are printed in the header section of the
page.
**Date**|  The date of each invoice for which commissions were paid on the
check.
**Id**|  The record ID of each commission record (COMM) paid on the check.
**Invoice#**|  This is the invoice number in the accounts receivable system
that the commission is associated with.
**Customer**|  The name of the customer to whom the invoice was issued.
**Part**|  The part number, if any, that appears on the invoice.
**Description**|  A description of the product or service that appears on the
invoice.
**Gross Sales**|  The total amount of the invoice issued to the customer.
**Order%**|  The percentage of the order for which the representative was
given credit for the order. This is used in conjunction with the commission
percentage to determine the actual commission amount. Gross Sales x Order% x
Comm%.
**Comm%**|  The commission percentage used in conjuction with the Order% to
determine the actual commission amount.
**Commission Amount**|  The total commission amount payable against the
invoice. Note: this is not the amount paid on this check. See Check Amount.
**Prior Payments**|  If prior partial commission payments have been made
against the invoice, then those amounts will appear in this column.
**Check Amount**|  The amount paid against the commission on this check.
**Open Balance**|  The amount remaining to be paid against the commission.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
