## Bill of Material Effectivity Purge (BOM.P2)
<PageHeader />

**Form Details**
[Form Details](../BOM-P2-1/README.md)

**Purpose**
The BOM.P2 procedure is used to purge lines from the Bill of Material file
based upon a selected effectivity date. Line items which contain an
effectivity date prior to the date selected will be removed from the Bill of
Material record.

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
