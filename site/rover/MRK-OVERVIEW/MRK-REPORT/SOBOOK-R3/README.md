##  Sales Order Bookings by Rep (SOBOOK.R3)

<PageHeader />

**Form Details**  
[ Form Details ](SOBOOK-R3-1/README.md)   

**Purpose**  
The SOBOOK.R3 procedure provides a detailed listing of sales order bookings by
sales rep for the period specified. You may limit the items included in the
listing to specific sales reps.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Rep Number** The number assigned to the sales rep.  
**Rep Name** The name of the associated sales rep.  
**Book Date** The date on which the booking took place.  
**So#** The sales order number against which the booking was posted.  
**Customer Number** The number of the customer assigned to the sales order.  
**Customer Name** The name of the customer.  
**Book Qty** The quantity of the item booked.  
**Unit Price** The price at which the item was booked.  
**Unit Disc Amt** The discount amount to be subtracted from the unit price
before calculating the book amount.  
**Order%** The percentage of the order that is to be credited to the rep.  
**Book Amount** The dollar amount of the booking reported on the booking
record. This amount is calculated as the unit price less the unit discount
amount, multiplied by the order percent, and multiplied by the book quantity.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />