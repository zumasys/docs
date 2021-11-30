##  Unposted Physical Tag Report (PHYS.R3)

<PageHeader />

**Form Details**  
[ Form Details ](PHYS-R3-1/README.md)   

**Purpose**  
The PHYS.R3 procedure is used to print an audit report of all tags which have
not yet been posted for a given physical. The report will list all tags by
physical date and then in tag number sequence. It is intended to be used to
check the status of a physical count and verify that all counted tags have
been posted.

**Frequency of Use**  
As required.

**Prerequisites**  
The physical counts should have been entered in the [ PHYS.E ](../../../../rover/INV-OVERVIEW/INV-ENTRY/PHYS-E) procedure. 

**Data Fields**

**Tag** The tag number associated with the part number in the inventory
location to be counted.  
**Part Number** The number of the part counted.  
**Description** The description as is appears in the Parts file.  
**Invloc** The inventory location at which the count occurred.  
**Phy Date** The date on which the part was to be counted.  
**St** The current status of this tag. (N = New, C = Counted, P = Posted)  
**Count Date** The actual date the count occurred for this tag.  
**Inits** The initials of the person who performed the count of this tag.  
**Count Quantity** The quantity counted and entered for this part number at
the inventory location.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />