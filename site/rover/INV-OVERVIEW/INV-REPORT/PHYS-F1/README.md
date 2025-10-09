##  Print Physical Tags (PHYS.F1)

<PageHeader />

**Form Details**  
[ Form Details ](PHYS-F1-1/README.md)   

**Purpose**  
The PHYS.F1 procedure is used to print physical inventory tags. The format is
intended to fit a 3 by 5 card stock on continuous form. One tag is printed for
each record in the PHYS file if no range is requested. A range of tags may be
selected if it is necessary to re-print tags.

**Frequency of Use**  
Whenever a physical inventory is to be taken.

**Prerequisites**  
Creation of physical inventory (PHYS) records.

**Data Fields**

**Tag Number** The sequential number assigned to the tag.  
**Part Number** The part number of the item to be counted.  
**Description** The description of the item to be counted. (Only the first 3
lines of the description are printed.)  
**Location** The inventory location where this part is to counted for this
tag.  
**Quantity** The quantity actually counted is entered here by the person who
performed the count.  
**Counted By** The initials of the person who performed the count.  
**Date** The date on which the count was performed.  
**Entered** The date on which this tag was entered into the system in [ PHYS.E ](../../../../../rover/INV-OVERVIEW/INV-ENTRY/PHYS-E) .   
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />