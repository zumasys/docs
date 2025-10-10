##  Create Shipment Routes (ROUTESHIP.P1)

<PageHeader />

**Form Details**  
[ Form Details ](ROUTESHIP-P1-1/README.md)   

**Purpose**  
The ROUTESHIP.P1 procedure is used to create shipment delivery routes in a
batch mode. The only entry required is load date. When run, all delivery
routes that are due to be loaded on this date (based upon the data in the
ROUTE file) will be selected and will have a corresponding routeship record
created with shipments for the customers on that route. An output report is
produced, showing all routeshipments that were created. If a record already
exists for that route#/load date, then a message on the report will indicate
that.  
  
The routeship records can be adjusted manually as needed using [ ROUTESHIP.E ](../../MRK-ENTRY/ROUTESHIP-E/README.md) . 

**Frequency of Use**  
As required. This procedure could be run daily to automatically create each
day's routeshipments.

**Prerequisites**  
ROUTE records must be created and shipments must exist.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />