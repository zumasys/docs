##  Container Receipts Entry (CONTAINER.E)

<PageHeader />

**Form Details**  
[ Header ](CONTAINER-E-1/README.md)   
[ Line Items ](CONTAINER-E-2/README.md)   
[ Attachments ](CONTAINER-E-3/README.md)   

**Purpose**  
The CONTAINER.E procedure provides the ability to add container information
for a vendor and post receipts against purchase orders. The procedure consists
of two screens. The first screen contains the header information such as
vendor, freight, tax and misc. information. On this screen there is an option
to load all the open PO's for a vendor, or load certain purchase orders
individually.  
  
The line items screen contains all the detailed part, purchase order and
quantity information. Individual line items may be added, deleted, or changed
here. If an open PO exists for the part number entered, it will automatically
be loaded for you. If no PO exists for the part & vendor, then upon filing the
container information a purchase order will be created. The status will
initially be set to "N" for the container.  
  
When the container is physically received, the status should be changed to "R" and the information should be verified for accuracy. When it is determined that all information is correct on the container, the status should be changed to "C" to confirm the receipt. This will create receipt records and cause inventory transactions to occur. The container receipts will be posted through the normal receipts posting process, [ RECEIPTS.P1 ](../../../PUR-PROCESS/RECEIPTS-P1/README.md) .   
  
Once the receipts records have been created, the container cannot be deleted, and the receipt records cannot be modified through this process. [ RECEIPTS.E2 ](../../RECEIPTS-E2/README.md) can be used to correct individual receipt records on the container. 

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the purchase order control record ( [ PO.CONTROL ](../../PO-CONTROL/README.md) ), and entry of the vendor records to be referenced. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />