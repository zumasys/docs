## AP Control Record Entry (AP.CONTROL)
<PageHeader />

**Form Details**
[General](../AP-CONTROL-1/README.md)
[Payments](../AP-CONTROL-2/README.md)

**Purpose**
The AP.CONTROL procedure is used to define default information which will be
used by the Accounts Payable module. The information entered in this procedure
is loaded into the corresponding fields on new AP items so that the same
information does not have to be entered on every invoice. The user has the
option of changing any of these defaults on the AP item after they are loaded.

**Frequency of Use**
The entries in this procedure must be loaded prior to using any of the other
procedures in the Accounts Payable Module. This is usually done as part of
setting up the system. The entries may be changed after that time as required.

**Prerequisites**
All account number must have been previously defined in the
[GLCHART.E](../GLCHART-E/README.md) procedure. All inventory locations must be
previously defined in the Inventory Location file ([INVLOC.E](../INVLOC-E/README.md)).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
