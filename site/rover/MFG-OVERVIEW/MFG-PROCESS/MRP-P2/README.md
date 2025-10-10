##  Independent Demand Netting (MRP.P2)

<PageHeader />

**Form Details**  
[ Form Details ](MRP-P2-1/README.md)   

**Purpose**  
The MRP.P2 nets sales order demand against independent demand by period, reducing independent demand that falls within the same period as the sales order. Independent demand will not be reduced below zero for any period. This procedure is an optional process that should be run before [ MRP.P1 ](../MRP-P1/README.md) . If this is to be run, then it is critical that the [ MRP.P1 ](../MRP-P1/README.md) parameters be set to: Load MPS Requirements = "Y" and Load Independent Demand = "N". This procedure uses the MPS files to do the netting, therefore, it cannot be run if using the MPS system to drive MRP. 

**Frequency of Use**  
This procedure is optional, to be used as required, but if used should be run on the same frequency as [ MRP.P1 ](../MRP-P1/README.md) . 

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />