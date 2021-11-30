##  A/R Items Due by a Specified Date (AR.R4)

<PageHeader />

**Form Details**  
[ Form Details ](AR-R4-1/README.md)   

**Purpose**  
The AR.R4 procedure is used to print a listing of all AR items due to be paid
as of a selected cut-off date. The information is sorted and totalled by
customer name.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**AR.Id** The record ID of the item in the AR file.  
**Cust#** The customer number on the AR item.  
**Customer.Name** The name of the customer as it appears in the CUST file.  
**Inv.Date** The date of the AR item.  
**Due.Date** The date on which the AR item is due, based upon the terms code.  
**Inv.Amount** The total, original amount of the AR item.  
**Due.Amount** The balance due of the AR item.  
**St** The current status of the AR item. (O=open, P=paid)  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />