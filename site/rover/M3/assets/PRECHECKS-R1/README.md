## A/P Prechecks Listing by Run# (PRECHECKS.R1)
<PageHeader />

**Form Details**
[Form Details](../PRECHECKS-R1-1/README.md)

**Purpose**
The PRECHECKS.R1 procedure is used to print a listing of all records in the
Prechecks file for a selected check run number. The report is intended to be
an audit report prior to actually printing checks.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Run#**        | The check run number of which this record is a part.             |
| --------------- | ---------------------------------------------------------------- |
| **Preck#**      | The record ID of the item in the PRECHECKS file.                 |
| **Vend#**       | The vendor number.                                               |
| **Vendor.Name** | The name of the vendor as it appears in the Vendor file.         |
| **Check#**      | The actual check number. This will only exist if the checks have |
already be printed. Until then, this field field will be empty.
**Chk.Date**|  The date of the check.
**Check.Amount**|  The total amount of the check.
**Disc.Amount**|  The amount of discount taken on the check.
**APids**|  The accounts payable records against which this check are being
processed.
**AP.Amounts**|  The amount of each accounts payable record.
**AP.Disc.Amts**|  The amount of discount being taken on each accounts payable
record.
**St**|  The current status of the check record. (P = posted, other codes are
user-defined)

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
