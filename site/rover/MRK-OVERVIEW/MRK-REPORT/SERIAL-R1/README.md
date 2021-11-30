##  Serial Number Listing (SERIAL.R1)

<PageHeader />

**Form Details**  
[ Form Details ](SERIAL-R1-1/README.md)   

**Purpose**  
The SERIAL.R1 procedure creates a listing of serial numbers for a selected
part number. The report is sorted by serial number.

**Frequency of Use**  
As required.

**Prerequisites**  
The process of tracking serial numbers must have been enabled in the [ MRK.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL) procedure. 

**Data Fields**

**Serial Number** The serial number for the parts shipped / received.  
**Document** The document number on which the part containing thie serial
number was entered. This will be either a shipment or RMA number.  
**Type** The type of document (e.g. SHIP, RMA).  
**Date** The document date.  
**Customer** The customer number and name.  
**Ship.Address** The ship to address as specified on the document.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />