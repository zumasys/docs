##  Marketing Module Controls and Defaults (MRK.CONTROL)

<PageHeader />

**Form Details**

- [General](MRK-CONTROL-1/index.md)
- [RMA](MRK-CONTROL-2/index.md)
- [Module Interfaces](MRK-CONTROL-3/index.md)
- [Credit Cards](MRK-CONTROL-4/index.md)
- [Accounting](MRK-CONTROL-5/index.md)
- [POS](MRK-CONTROL-6/index.md)
- [POS - Select Cust](MRK-CONTROL-7/index.md)
- [POS - Order Header](MRK-CONTROL-8/index.md)
- [POS - Parts/Cart](MRK-CONTROL-9/index.md)

**Purpose**  
The MRK.CONTROL procedure is used to define default information which will be
used by the marketing entry procedures. The information entered in this
procedure is loaded into the corresponding fields on new sales orders so that
the same information does not have to be entered on every sales order. The
user has the option of changing any of these defaults on the sales order after
they are loaded.

**Frequency of Use**  
The entries in this procedure must be loaded prior to using any of the other
procedures in the Marketing Module. This is usually done as part of setting up
the system. The entries may be changed after that time as required.

**Prerequisites**  
The finished goods and cost of goods sold locations must have been previously defined in the Inventory Location file ( [ INVLOC.E ](../../../INV-OVERVIEW/INV-ENTRY/INVLOC-E/index.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />