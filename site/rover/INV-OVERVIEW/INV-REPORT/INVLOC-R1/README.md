##  Inventory Location Listing (INVLOC.R1)

<PageHeader />

**Form Details**  
[ Form Details ](INVLOC-R1-1/README.md)   

**Purpose**  
The INVLOC.R1 procedure is used to print a listing of all inventory locations
defined in the system.

**Frequency of Use**  
As required.

**Prerequisites**  
The inventory locations must have been entered in the [ INVLOC.E ](../../INV-ENTRY/INVLOC-E/README.md) procedure. 

**Data Fields**

**Location** The name or code of the inventory location.  
**Description** The description as is appears in the Invloc file.  
**Type** The type of inventory location. AD = Adjustment CG = Cost of Goods,
SK = Stocking LS = Line Stock MB = Mat'l Review Board PO = Purchasing WO =
Work Order SC = Scrap  
**Phys** A flag indicating if this location is a physical location. A 'Y'
indicates yes. An 'N' indicates this location is used only to capture costs.  
**Neg Ok** A flag indicating if negative quantities are permitted in inventory
for this location.  
**Account No** The General Ledger account number associated with this
inventory location.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />