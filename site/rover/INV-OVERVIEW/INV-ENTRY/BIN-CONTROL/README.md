##  Valid Bin Numbers (BIN.CONTROL)

<PageHeader />

**Form Details**  
[ Form Details ](BIN-CONTROL-1/README.md)   
[ Change History ](BIN-CONTROL-2/README.md)   

**Purpose**  
The BIN.CONTROL procedure is used to define the valid bin numbers which may be
used within the system. If any entries are found here, then all inventory
transactions containing a bin number will be validated against this list. If a
match is not found the bin entry is rejected. Entry of these bins are optional
- if no bin numbers are defined, then any bin number can be created by
inventory transactions when moving into a bin location.

**Frequency of Use**  
If locations are bin controlled and the bin entries are to be validated, then
defiinition of valid bins will need to be done before any inventory can be
moved to the bin locations.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />