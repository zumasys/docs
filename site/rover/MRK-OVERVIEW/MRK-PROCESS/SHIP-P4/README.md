#  Import Shipping Data (SHIP.P4)

<PageHeader />

**Form Details**  
[ Form Details ](SHIP-P4-1/README.md)   

**Purpose**  
The SHIP.P4 procedure is used to import shipment data from the FEDEX or UPS. The data is retireved from a file which is selected by the user and defined in [ SHIP.CONTROL ](../../MRK-ENTRY/SHIP-CONTROL/README.md) . In [ SHIP.CONTROL ](../../MRK-ENTRY/SHIP-CONTROL/README.md) , you, also, have an option to import the data from the shipping entry procedures like [ SHIP.E2 ](../../MRK-ENTRY/SHIP-E2/README.md) when the record is open or saved. However, SHIP.P4 should be run daily or included in a daily batch/background process.   
  
SHIP.P4 should be processed before [ SHIP.P1 ](../SHIP-P1/README.md) (shipment posting procedure). One of the fields that SHIP.P4 updates is the freight amount field on the header tab. The charges entered into this field are billed to the customer. Once [ SHIP.P1 ](../SHIP-P1/README.md) runs, that field cannot be updated.   
  
  
  

**Frequency of Use**  
As required.

**Prerequisites**  
The UPS or FEDEX system must be set up to map data from M3.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />