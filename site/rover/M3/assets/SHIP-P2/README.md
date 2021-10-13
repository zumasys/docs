## Shipment Purge Process (SHIP.P2)
<PageHeader />

**Form Details**
[Form Details](../SHIP-P2-1/README.md)

**Purpose**
The SHIP.P2 procedure is used to purge inactive shipment records from the data
base. The criteria used to deterime which records are purged is based on a
user defined cut-off date. All shipments which have a post date that is less
than or equal to the cut-off date will be deleted. If you do not want to
delete shipment records until their associated sales order is deleted then you
do not need to run this procedure. The sales order purge procedure
([SO.P4](../SO-P4/README.md)) will delete the shipments at the same time it deletes the
sales order.

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

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
