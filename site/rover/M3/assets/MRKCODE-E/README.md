## Marketing Code Entry (MRKCODE.E)
<PageHeader />

**Form Details**
[Marketing Sales Defaults](../MRKCODE-E-1/README.md)

**Purpose**
The MRKCODE.E procedure is used to define attributes that are to be applied to
the sales order. These attributes include the sales account number and cost of
goods location to be used. The MRKCODE record ID can be referenced in the
parts master file so that when the part is entered in a sales order the
attributes in the associated MRKCODE record are applied. This allows you to
apply a specific sales account to pre- defined groups of products. If no
MRKCODE is present in the parts master record, the standard defaults from the
[MRK.CONTROL](../MRK-CONTROL/README.md) record are used.

**Frequency of Use**
Marketing codes are usually defined when the system is being setup prior any
transaction processing. New codes may be added at any time, but care must be
taken to insure that existing codes which are currently being referenced by
other records in the system are not changed or deleted.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
