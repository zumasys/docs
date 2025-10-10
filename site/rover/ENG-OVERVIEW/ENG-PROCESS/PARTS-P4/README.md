##  Low Level Code Generation Process (PARTS.P4)

<PageHeader />

**Form Details**  
[ Form Details ](PARTS-P4-1/README.md)   

**Purpose**  
The PARTS.P4 procedure updates the low level code field in the Parts file. Low
level codes are used by MRP and cost rollup procedures, and define the lowest
level in the product structure where a given part is referenced.

**Frequency of Use**  
Low level codes are updated automatically as changes are mode to the bill of material records with [ BOM.E ](../../ENG-ENTRY/BOM-E/README.md) . PARTS.P4 usually only needs to run after loading bill of material data from an external source, such as when converting data from another system. 

**Prerequisites**  
Entry of Parts records ( [ PARTS.E ](../../ENG-ENTRY/PARTS-E/README.md) ) and Bill of Material records ( [ BOM.E ](../../ENG-ENTRY/BOM-E/README.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />