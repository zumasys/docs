##  Commission Statements by Rep (COMM.R2)

<PageHeader />

**Form Details**  
[ Form Details ](COMM-R2-1/README.md)   

**Purpose**  
The COMM.R2 procedure is used to print commission statements which may be sent
to the sales reps. You are prompted to enter the date range to be used in
selecting the commission records to be printed, and also the sales rep to be
reported against. You may also elect to include all of the sales reps with
activity in the period specified. If all reps are chosen the report is listed
in rep name sequence with the section for each rep printed on a separate page.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Date** The date on which the commission record was posted.  
**Invoice#** The number of the invoice associated with the commission record.  
**Customer** The name of the customer on the associated invoice.  
**Part Number** The part number shipped to the customer.  
**Description** The description of the item shipped to the customer.  
**Shipment#** The number of the shipment against which the commission was
calculated.  
**Qty** The quantity of the item shipped to the customer.  
**PO#** The purchase order number issued by the customer.  
**Gross Sales** The extended sales price if the item upon which the commission
is based.  
**Order%** The percentage of the gross sales amount for which the sales rep is
given credit.  
**Comm%** The commission percentage used to calculate the amount of commission
to be paid to the sales rep.  
**Comm Amt** The commission amount to be paid to the sales rep. If a specific
or flat commission amount has not been entered, the amount is calculated as
follows... Comm Amt = (Gross Sales x Order%) x Comm% Note: The Order% and
Comm% must first be divided by 100 to obtain a percentage.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />