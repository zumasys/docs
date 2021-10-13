## Lot Trace Report (LOT.R1)
<PageHeader />

**Form Details**
[Form Details](../LOT-R1-1/README.md)

**Purpose**
The LOT.R1 procedure is used to create indented lot trace reports. The lot
trace report allows you to see the ultimate destination of a given lot and all
of the interim steps (e.g. what it was used to create), or its ultimate source
and all of the interim steps (e.g. what was used to make it.)

A situation in which you might use this report is where it has been determined
that a given part in a finished item is faulty and you want to first determine
which lot it came from, and then all of the other assemblies which have used
the same lot so that corrective action can be taken. First you would run the
report to list all sources for the lot number associated with the end item;
this will tell you the lot number of the problem component. Next you would run
the report to show all of the destinations for the component lot number which
would tell you all of the items in which the problem lot was used.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Level**|  The place at which the associated lot number appears in the
hierarchy relative to the lot number specified.
-  
**Lot Number**|  If destination was selected this will be the number of the
lot that consumed the lot number at the previous level. If source was selected
this will be the number of the lot that was consumed by the lot number at the
previus level.
**Part**|  The part number associated with the lot.
**Desc**|  The first line of the description for the associated. part number.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
