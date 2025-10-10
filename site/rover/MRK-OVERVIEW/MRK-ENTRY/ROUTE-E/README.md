##  Delivery Route Entry (ROUTE.E)

<PageHeader />

**Form Details**  
[ General ](ROUTE-E-1/README.md)   
[ Route Stops ](ROUTE-E-2/README.md)   

**Purpose**  
The ROUTE.E procedure is used to create delivery routes. It consists of two
screens. The first screen has description and delivery day information. There
can be multiple load days and delivery days for a route. Each load day is
associated with one or more delivery days. If the route is considered a weekly
route, that is, it happens every week, then there is no need to enter a
delivery interval. If the route is not delivered weekly, then a delivery
interval should be entered to control the frequency of the delivery route.  
  
The second screen of the procedure lists all the stops on the route. Each stop
number is associated with a customer. The customer can only be on one stop of
one route. The route number is stored in the customer record. When a sales
order is entered for that customer, if a route# exists for the customer, then
the route record is read to determine when the next scheduled delivery date
will be and this will be defaulted as the sales order schedule date.  
  
The route record is also used when creating Routeship records via [ ROUTESHIP.E ](../ROUTESHIP-E/README.md) or [ ROUTESHIP.P1 ](../../MRK-PROCESS/ROUTESHIP-P1/README.md) for delivery of the shipments for the customers on the route. 

**Frequency of Use**  
As required.

**Prerequisites**  
Customer records must exist to be referenced on the ROUTE.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />