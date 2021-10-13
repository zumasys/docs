## Convert Inventory (IT.E4)
<PageHeader />

**Form Details**
[Form Details](../IT-E4-1/README.md)

**Purpose**
The IT.E4 procedure is used to convert one or more part numbers into one or
more different part numbers without creating a work order. The operator enters
the part number(s) to be created, quantities, and locations. For each part a
ratio must be entered that will represent the portion of the cost assigned to
this part from the total costs of the parts consumed. Total ratio of all parts
created must be 100%.

The part number(s) consumed must be entered, along with the quantities and
locations. If any inventory will go negative, a warning message is given if
negatives are allowed, otherwise the transaction will get an error.

When the operator's entry is filed the system creates an inventory transaction
for each part consumed, moving the quantity to an adjustment location. For
each part created, it's quantity is moved from the same adjustment location.
The total costs of the parts consumed are assigned to the parts created
according to the ratios and quantities entered.

**Frequency of Use**
As required.

**Prerequisites**
Entry of valid inventory locations ([INVLOC.E](../INVLOC-E/README.md)) and assignment
of the conversion adjustment location in [INV.CONTROL](../INV-CONTROL/README.md).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
