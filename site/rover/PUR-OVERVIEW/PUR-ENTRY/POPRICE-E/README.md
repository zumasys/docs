#  Purchase Price Entry (POPRICE.E)

<PageHeader />

**Form Details**  
[ Prices ](POPRICE-E-1/README.md)   
[ Change History ](POPRICE-E-2/README.md)   
[ Attachments ](POPRICE-E-3/README.md)   

**Purpose**  
The POPRICE.E procedure provides for the entry and maintenance of vendor supplied components for use by the Planner Screen ( [ PLAN.E ](../../MFG-OVERVIEW/MFG-ENTRY/PLAN-E/README.md) ). The record ID is a part number. Both standard and special pricing are allowed, with an effectivity date for controlling either purchase dates or "toggling" the effective prices each period that price changes are required. In the latter case (part number and vendor number) the same data may be entered, but each part number can carry a different price depending upon the vendor number. The [ PLAN.E ](../../MFG-OVERVIEW/MFG-ENTRY/PLAN-E/README.md) procedure will use this information to automatically create purchase orders based on the best price quantity combination. 

**Frequency of Use**  
Prices are usually loaded initially when the system is first installed, with
additions and/or changes being made in the future as required.

**Prerequisites**  
Entry of the parts records ( [ PARTS.E ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/README.md) ) and optionally the vendor records ( [ VENDOR.E ](../../AP-OVERVIEW/AP-ENTRY/VENDOR-E/README.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />