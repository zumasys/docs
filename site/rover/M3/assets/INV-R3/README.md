## Cycle Date Assignment Listing (INV.R3)
<PageHeader />

**Form Details**
[Form Details](../INV-R3-1/README.md)

**Purpose**
The INV.R3 procedure is used to produce a report which displays the number of
parts to be counted by date, as assigned by the cycle date assignment
procedure ([INV.P1](../INV-P1/README.md)). The report is run for a specific inventory
location. This report is intended to be used to audit the effects of the
[INV.P1](../INV-P1/README.md) procedure and verify the number of parts to be counted by
ABC code is correct.

**Frequency of Use**
As required.

**Prerequisites**
The [INV.P1](../INV-P1/README.md) procedure should have been run to assign the cycle
dates.

**Data Fields**

| **Date**|  The date on which the parts are to be counted. An entry of "No
Date" indicates there are stratified parts with no cycle dates assigned.
-  
**A.Parts**|  The number of A parts to be counted.
**B.Parts**|  The number of B parts to be counted.
**C.Parts**|  The number of C parts to be counted.
**Other**|  The number of parts with no ABC code which have an assigned cycle
date.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
