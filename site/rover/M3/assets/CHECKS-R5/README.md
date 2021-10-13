## Un-Cleared Checks Listing (CHECKS.R5)
<PageHeader />

**Form Details**
[Form Details](../CHECKS-R5-1/README.md)

**Purpose**
The CHECKS.R5 procedure is used to print a listing of checks which have not
yet cleared the bank. All records which contain no clear date or amount are
selected, provided they fall within the specified date range.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Check#**      | The record ID of the item in the CHECKS file.               |
| --------------- | ----------------------------------------------------------- |
| **Vend#**       | The vendor number.                                          |
| **Vendor.Name** | The name of the vendor as it appears in the Vendor file. If |
the check was entered via [CHECKS.E4](../CHECKS-E4/README.md), then this is the first
line of the notes.
**Chk.Date**|  The date of the check.
**Check.Amount**|  The total amount of the check.
**St**|  The current status of the check record. (P = posted, other codes are
user-defined)

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
