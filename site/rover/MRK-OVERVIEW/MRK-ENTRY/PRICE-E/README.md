##  Price Entry (PRICE.E)

<PageHeader />

**Form Details**  
[ Prices ](PRICE-E-1/README.md)   
[ Change History ](PRICE-E-2/README.md)   

**Purpose**  
The PRICE.E procedure provides for the entry and maintenance of product prices for use in the sales order entry procedure ( [ SO.E ](../SO-E/README.md) ). The record is optionally keyed by part number or a combination of part number and customer code. In either case, both standard and special pricing are allowed, with an effectivity date for controlling either sales dates or "toggling" the effective prices each period that price changes are required. In the latter case (part number and customer code) the same data may be entered, but each part number can carry a different price depending upon the customer code. Therefore, groups, or types of customers can be given favorable or increased prices for the same part, depending upon their status. You may further define pricing by using quantity breaks. 

**Frequency of Use**  
Prices are usually loaded initially when the system is first installed, with
additions and/or changes being made in the future as required.

**Prerequisites**  
Entry of the parts records ( [ PARTS.E ](../../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/README.md) ) and optionally the customer records ( [ CUST.E ](../../../AR-OVERVIEW/AR-ENTRY/CUST-E/README.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />