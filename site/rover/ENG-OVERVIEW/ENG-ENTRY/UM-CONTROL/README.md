##  Unit of Measure Definition (UM.CONTROL)

<PageHeader />

**Form Details**  
[ Form Details ](UM-CONTROL-1/README.md)   

**Purpose**  
The UM.CONTROL procedure is used to define the valid unit of measure codes which may be used within the system. The unit of measure code is a two character abbreviation for a unit of measure. For example, the code "EA" might be used to denote the unit of measure "Each", or "FT" might be used for "Foot". When a unit of measure is requested in a data entry procedure such as [ PARTS.E ](../PARTS-E/README.md) or [ PO.E ](../../../PUR-OVERVIEW/PUR-ENTRY/PO-E/README.md) it is validated against the entries made in this procedure. If a match is not found the entry is rejected.   
  
It is important that these entries be consistent over time. You should not
delete a unit of measure or change its meaning unless it is not currently
being referenced in the system.

**Frequency of Use**  
These entries are usually entered when the system is first being setup since
they are required before some other procedures may be used. After the initial
setup it is used as required to add new codes.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />