##  Contract Pricing Entry (CPRICE.E)

<PageHeader />

**Form Details**  
[ Form Details ](CPRICE-E-1/README.md)   

**Purpose**  
The CPRICE.E procedure provides for the entry and maintenance of contract prices for use in the sales order entry procedure ( [ SO.E ](../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E) ) and the product configurator pricing logic. The contract can define prices for one or more part numbers and the contract can apply to one or more customers. For each part number there are start and end effectivity dates and commission percent. The commission percent is optionally entered for the part and will override the standard rep commission percent on a sales order or quote. If the same part number is listed more than once, then all entries for the part that meet the date criteria will be checked and the one with the lowest price will be used. Contract prices take precendence over product prices entered in [ PRICE.E ](../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/CUST-E/CUST-E-1/PRICE-E) . 

**Frequency of Use**  
Contract prices can be defined and updated anytime contracts are negotiated.

**Prerequisites**  
Entry of the parts records ( [ PARTS.E ](../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) ) and the customer records ( [ CUST.E ](../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/CUST-E) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />