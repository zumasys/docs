##  Work Order Inventory Purge Process (WOINV.P1)

<PageHeader />

**Form Details**  
[ Form Details ](WOINV-P1-1/README.md)   

**Purpose**  
The WOINV.P1 procedure is used to purge inactive work order inventory records from the data base. The criteria used to deterime which records are purged is based on a user defined cut-off date. All work order inventory records whose associated work order status is set to "F" (final) and close date is less than or equal to the cut-off date will be deleted. If you do not want to delete work order inventory records until their associated work order is deleted then you do not need to run this procedure. The work order purge procedure ( [ WO.P2 ](../WO-P2/README.md) ) will delete the work order inventory record at the same time it deletes the work order. 

**Frequency of Use**  
The frequency with which a purge is performed will vary depending on such
factors as available disk space and the amount of on-line history desired. At
a minimum purges should be performed on a yearly basis. Purging on a quarterly
or even a monthly basis may be desirable if the volume of transactions is
fairly high.

**Prerequisites**  
It is strongly recommended that a full account backup be performed prior to
executing any purge process. It is also recommended that this be a permanent
backup so that any records which were purged can be restored at a later date
if required.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />