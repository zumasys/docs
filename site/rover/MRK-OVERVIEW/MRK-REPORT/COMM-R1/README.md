##  Commission Listing by Rep (COMM.R1)

<PageHeader />

**Form Details**  
[ Form Details ](COMM-R1-1/README.md)   

**Purpose**  
The COMM.R1 procedure is used to list all commission records created within a
specified date range. You may select a specific rep to report against or you
may choose to include all reps. If all reps are chosen the report is listed in
rep name sequence with the section for each rep printed on a separate page.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Date** The date on which the commission record was posted.  
**Invoice#** The number of the invoice associated with the commission record.  
**Customer** The name of the customer on the associated invoice.  
**PO#** The purchase order number issued by the customer.  
**Gross Sales** The extended sales price if the item upon which the commission
is based.  
**Order%** The percentage of the gross sales amount for which the sales rep is
given credit.  
**Comm%** The commission percentage used to calculate the amount of commission
to be paid to the sales rep.  
**Comm Amt** The commission amount to be paid to the sales rep. This amount is
calculated as follows... Comm Amt = (Gross Sales x Order%) x Comm% Note: The
Order% and Comm% must first be divided by 100 to obtain a percentage.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />