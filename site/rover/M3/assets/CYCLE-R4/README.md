## Unposted Cycle Tag Report (CYCLE.R4)
<PageHeader />

**Form Details**
[Form Details](../CYCLE-R4-1/README.md)

**Purpose**
The CYCLE.R4 procedure is used to print an audit report of all tags which have
not yet been posted for a given cycle date. The report will list all tags by
cycle date and then in tag number sequence. It is intended to be used to check
the status of a cycle count and verify that all counted tags have been posted.

**Frequency of Use**
As required.

**Prerequisites**
The cycle counts should have been entered in the [CYCLE.E](../CYCLE-E/README.md)
procedure.

**Data Fields**

| **Tag**|  The tag number associated with the part number in the inventory
location to be counted.
-  
**Part Number**|  The number of the part counted.
**Description**|  The description as is appears in the Parts file.
**Invloc**|  The inventory location at which the count occurred.
**Cyc Date**|  The date on which the part was due to be cycled.
**St**|  The current status of this tag. (N = New, C = Counted, P = Posted)
**Count Date**|  The actual date the count occurred for this tag.
**Inits**|  The initials of the person who performed the count of this tag.
**Count Quantity**|  The quantity counted and entered for this part number at
the inventory location.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
