##  Define Shipping Methods (SHIP.CONTROL)

<PageHeader />

**Form Details**  
[ Ship Controls ](SHIP-CONTROL-1/README.md)   
[ Interface Options ](SHIP-CONTROL-2/README.md)   
[ Countries ](SHIP-CONTROL-3/README.md)   
[ Country History ](SHIP-CONTROL-4/README.md)   
[ Ship From ](SHIP-CONTROL-5/README.md)   

**Purpose**  
The SHIP.CONTROL procedure is used to define default information which will be
used by the marketing and shipping procedures. This procedure, also, controls
the shipping methods (ship via data), as well as integration information to
UPS and Fedx software systems.  
  
The integration between the freight carrier's software and M3 is handled by
exporting and importing data to and from text files. The text files are comma
delimited or CSV files. They must be saved in a shared directory on a server
that can be accessed by both M3 and the freight carrier.  
  
When you are ready to begin using this feature, please contact Rover Data
Systems for a listing of the fields that will be imported and exported. One of
these fields is the shipping method or ship via field. The first tab of
SHIP.CONTROL contains a listing of the methods currently used by your company.
These methods need to be mapped in the freight carrier's system to match their
shipping methods. It is recommended that the limit entries option be selected
when using this feature. Any changes to the ship via field in SHIP.CONTROL
will need to be mapped in the freight carrier's software.  
  
When setting up the process for the first time or making changes to the
process, it is recommended that the field help be read as it contains
additional information about how the integration process works. If you do not
know how to set-up the import and export profiles in UPS or Fedex, you will
need to contact your representative for assistance.

**Frequency of Use**  
The entries in this procedure must be loaded prior to using any of the other
procedures in the Marketing Module. This is usually done as part of setting up
the system. The entries may be changed after that time as required.  
  
When interfacing data between M3 and a freight carrier, there are two procedures - [ SHIP.P3 ](SHIP-P3/README.md) and [ SHIP.P4 ](SHIP-P4/README.md) \- that must be run daily. These are mass update procedures that are usually included in a nightly batch routine. [ Ship.p3 ](Ship-p3/README.md) regenerates a text file used by the freight carrier to import data into their system. If you are doing the exports to the freight carrier in real time, this file will be updated when ship records are created and/or changed. [ Ship.p4 ](Ship-p4/README.md) is used to post the data from the freight carrier (tracking numbers, package dimensions, etc.) to the SHIP file in M3. When doing imports into M3 real time, the ship records may updated but in order to ensure that all updates have been made, [ SHIP.P4 ](SHIP-P4/README.md) should be run after all processing has completed on the freight carrier's software. Please note that when doing real time updates, there may be a period of time in which invalid tracking/waybill numbers are referenced in M3. If, for example, you process a package at 12:00 and void it at 3:00, there could be a period of time in which that voided waybill shows in the shipping and sales order procedures in M3. Running [ SHIP.P4 ](SHIP-P4/README.md) at the end of day will ensure that all voided packages are removed from the sales order and shipping records. 

**Prerequisites**  

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />