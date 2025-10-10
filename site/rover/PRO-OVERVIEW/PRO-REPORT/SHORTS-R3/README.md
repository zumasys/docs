##  Shortage Listing (SHORTS.R3)

<PageHeader />

**Form Details**  
[ Form Details ](SHORTS-R3-1/README.md)   

**Purpose**  
The SHORTS.R3 procedure is used to create a listing of all shortage that have
a balance greater than zero in inventory. This report is useful in checking
for the presence of parts which could be used for to fill the work orders that
are short.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part#** The number of the part that is short.  
**Desc** The description of the part as defined on the parts master.  
**Notes** Any notes that were entered about the shortage in the [ SHORTS.E ](../../PRO-ENTRY/SHORTS-E/README.md) procedure.   
**WO ID** The numbers of the work orders which show a shortage for the part.  
**Assembly** The number of the assembly being built on the work order.  
**Model** The model number of the assembly being built on the work order.  
**Customer Name** The name of the customer who ordered the assemblies.  
**Due Date** The date the items are scheduled to be shipped.  
**Qty Short** The quantity of the components the are short on the work order.  
**On Hand** The quantity of the part in the associated inventory location.  
**Invloc** The inventory location associated with the quantity on hand.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />