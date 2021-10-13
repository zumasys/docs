## Inventory Requisition Entry (INVREQ.E)
<PageHeader />

##

![](./INVREQ-E-1.jpg)

| **ID**|  Enter the requisision ID to access an existing record, or leave
blank to have the system assign a number for a new requisition.

-  
**Load**|  f you wish to create a new inventory requisition from an existing
one, enter the existing Requisition ID here. This function can only be used
with new records.

**Requested By**|  Enter the name of the person making the request. This will
automatically default to the userid name of the person entering the
requisition.

**Request Date**|  Enter the date on which the requisition was initiated. The
current date will be loaded as the default on new records.

**Due Date**|  Enter the due date for receiving the parts.

**Status**|  This field contains the current status of the requisition. The
following options are available: O - Open C - Closed. When a new requisition
is entered the status will be set to "N". When the requisition is filled using
[IT.E2](../IT-E2/README.md), the system will set the status to "C" automatically. You
may also set the status to "C" manually to close one that will not be filled.

**Status Desc**|  Contains the text Open or closed depending on the entry in
the status field.

**Date Closed**|  Enter the date on which this requisition was closed. This
date will be set by the system when all quantities have been issued to the
requestor. The only time you should need to set this date is when you manually
close the requisition.

**Part No**|  Enter the part number required.

**Part Desc**|  The part description will default from the parts master.

**Qty Reqd**|  Enter the quantity required for the associated part number.

**Stock Loc**|  Enter the stock location to pull the material from if there is
a specific location that is required to be used.

**To Loc**|  Enter the location the parts will be moved to, if known.

**Qty Issued**|  This is the quantity of this part number that has been moved,
for reference only. This is updated automatically by [IT.E2](../IT-E2/README.md).

**Notes**|  Enter any notes associated with this inventory requisition. They
will print in the requisition form.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
