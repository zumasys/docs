##  Shipment Delivery Route Entry (ROUTESHIP.E)

<PageHeader />

**Form Details**  
[ General ](ROUTESHIP-E-1/README.md)   
[ Route Stops ](ROUTESHIP-E-2/README.md)   

**Purpose**  
The ROUTESHIP.E procedure is used to create shipment delivery routes. It
consists of two screens. The first screen has description and delivery day
information. The second screen has stop#'s, customers, and shipments. The key
to the ROUTESHIP record is Route*LoadDate. If an existing predefined route# is
entered, then the load date entered should match one of the load days in the
ROUTE record. If so, then upon entry of the load date, all customers on the
route with shipments due to be delivered on the associated delivery dates will
be loaded and appear on the second screen of this procedure.  
  
If a special one-time delivery route is needed, then it can be entered here
manually without creating a ROUTE record. The delivery days, customers, and
shipments can all be entered manually. The route# entered could be any ID that
doesn't exist as a ROUTE record.  
  
After the customers and shipments have been entered or loaded on the second
screen, they can be adjusted by adding to or deleting shipments and/or
customers. Also, if the delivery load will be too large, then there is a
feature to split the route in two. This is done by positioning on the stop#
where the split is to occur, and using the right click option. A new routeship
record will be created using the route# with an "A" appended to it for the new
record key.  
  
The Routeship ID is stored on each shipment record. A shipment may only be referenced on one routeship record. ROUTESHIP records can also be created through a batch method using [ ROUTESHIP.P1 ](../../MRK-PROCESS/ROUTESHIP-P1/README.md) . 

**Frequency of Use**  
As required.

**Prerequisites**  
Customer records must exist and ROUTE records may be set up in advance.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />