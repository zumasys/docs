##  Work Order Entry Defaults (WO.CONTROL)

<PageHeader />

**Form Details**  
[ General ](WO-CONTROL-1/README.md)   
[ Accounts ](WO-CONTROL-2/README.md)   
[ Repair Codes ](WO-CONTROL-3/README.md)   

**Purpose**  
The WO.CONTROL procedure is used to define default information which will be used by the work order entry procedure ( [ WO.E ](WO-E/README.md) ). The information entered in this procedure is loaded into the corresponding fields on new work orders so that the same information does not have to be entered on every order. The user has the option of changing any of these defaults after they are loaded.   
  
In addition to the default fields there are several account number fields
which must be defined so that the cost accounting functions will operate
properly. If you are operating at standard cost you must define account
numbers for all of these fields. If average cost is used then only the
Completion Variance account needs to be defined.

**Frequency of Use**  
The entries in this procedure must be loaded prior to using any of the other
procedures in the Production Module. This is usually done as part of setting
up the system. The entries may be changed after that time as required.

**Prerequisites**  
The receiving, stocking and PO locations must have been previously defined in the Inventory Location file ( [ INVLOC.E ](../../../INV-OVERVIEW/INV-ENTRY/INVLOC-E/README.md) ), as well as the terms code to be referenced. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />