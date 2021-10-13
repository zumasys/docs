## Lot Entry (LOT.E)
<PageHeader />

## Sources

![](./LOT-E-3.jpg)

| **Source Date**|  Contains the date on which the associated transaction
posted a quantity to the lot record.

-  
**Source Qty**|  The quantity posted to the lot on the associated date.

**Source Cost**|  Specifies the cost that was used when posting the items in
the associated transaction. The lot cost is changed to account for these costs
as they are posted by averaging.

**Source Type**|  This field contains a two digit code which defines the type
of document associated with the posting to the lot record. For example, "WO"
is work order etc.

**Source.ID**|  Contains the ID of the document associated with the
transaction which posted to the lot.

**Source Li**|  The line item, if any, on the associated document that
initiated the posting to the lot record.

**Source Vendor**|  If the associated transaction was a receipt from a
purchase order (Type = "RC") then this field will contain the number of the
vendor on the purchase order.

**Source.Name**|  Contains the name of the vendor on the purchase order for
the items posted.

**Source.Lot**|  Contains the lot number from which the items on the
associated transaction were taken. If the transaction was a receipt then this
will be the vendor's lot number.

**Source Loc**|  The location from which the items were moved in the
associated transaction.

**Lot#**|  The number of the current lot record being displayed.

**Part#**|  The number of the part which identifies the items on the current
lot.

**Desc**|  The first line of the part description as defined in the parts
master.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
