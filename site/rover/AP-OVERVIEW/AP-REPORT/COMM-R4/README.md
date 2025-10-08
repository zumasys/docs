##  Commissions Eligible for Payment by Rep (COMM.R4)

<PageHeader />

**Form Details**  
[ Form Details ](COMM-R4-1/README.md)   

**Purpose**  
The COMM.R4 procedure is used to list all commission records with an open
amount that is eligible to be paid. An item is eligible to be paid if the
associated invoiceis greater than zero and has been paid partially or in full.
If the associated invoice amount is less than zero, the item is eligible for
payment immediately. You may select a specific rep to report against or you
may choose to include all reps. If all reps are chosen the report is listed in
rep name sequence with the section for each rep printed on a separate page.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Comm.ID** The ID of the commission record.  
**Date** The date on which the commission record was posted.  
**Invoice#** The number of the invoice associated with the commission record.  
**Customer** The name of the customer on the associated invoice.  
**Gross Sales** The extended sales price if the item upon which the commission
is based.  
**Order%** The percentage of the gross sales amount for which the sales rep is
given credit.  
**Comm%** The commission percentage used to calculate the amount of commission
to be paid to the sales rep.  
**Comm Amt** The commission amount to be paid to the sales rep. This amount is
calculated as follows... Comm Amt = (Gross Sales x Order%) x Comm% Note: The
Order% and Comm% must first be divided by 100 to obtain a percentage.  
**Eligible** The portion of the commission which is eligible for payment.  
**Amt.Paid** The total amount paid against the commission record.  
**Amt.To.Pay** The portion of the eligible amount which has not been paid
(Eligible - Amt.Paid).  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />