##  Purchase Order Entry Defaults (PO.CONTROL)

<PageHeader />

**Form Details**  
[ Defaults ](PO-CONTROL-1/README.md)   
[ PO Req Parameters ](PO-CONTROL-2/README.md)   
[ Container Parameters ](PO-CONTROL-3/README.md)   

**Purpose**  
The PO.CONTROL procedure is used to define default information which will be used by the purchase order entry procedure ( [ PO.E ](../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E) ). The information entered in this procedure is loaded into the corresponding fields on new purchase orders so that the same information does not have to be entered on every purchase order. The user has the option of changing any of these defaults on the purchase order after they are loaded. The procedure also defines the options for automatic printing of purchase orders and receipt travelers from [ PO.E ](../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E) and [ RECEIPTS.E ](RECEIPTS-E/README.md) .   
  
The one field that is not a default which must be entered is the PO location.
This defines the inventory location (INVLOC) which contains the purchases
clearing account used during receipt and debit processing.  
  
Also defined in this procedure are the control parameters and defaults for the
vendor rating system.

**Frequency of Use**  
The entries in this procedure must be loaded prior to using any of the other
procedures in the Purchasing Module. This is usually done as part of setting
up the system. The entries may be changed after that time as required.

**Prerequisites**  
The receiving, stocking and PO locations must have been previously defined in the Inventory Location file ( [ INVLOC.E ](../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/INVLOC-E) ), as well as the terms code to be referenced. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />