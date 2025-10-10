##  Batch Shipment Creation (SO.P1)

<PageHeader />

**Form Details**  
[ Form Details ](SO-P1-1/README.md)   

**Purpose**  
The SO.P1 procedure is used to create shipment records automatically from open sales order records. The user enters the date range to be used in selecting the items eligible for shipment. Any open sales order item that falls within the period specified and which is not on hold will be included. The planned ship date to be placed on each shipment is also defined by the user. Shipment records created by this procedure are set to status "New" and must be confirmed with the [ SHIP.E2 ](SHIP-E2/README.md) procedure after the actual shipment takes place. 

**Frequency of Use**  
This procedure may be run as required, but is usually run on a daily or weekly
period for a pre-defined period relative to the current date.

**Prerequisites**  
Setup of the [ MRK.CONTROL ](../../MRK-ENTRY/MRK-CONTROL/README.md) record ( [ MRK.CONTROL ](../../MRK-ENTRY/MRK-CONTROL/README.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />