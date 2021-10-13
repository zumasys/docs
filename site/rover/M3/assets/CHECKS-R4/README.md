## A/P Stop Pay Check Listing (CHECKS.R4)
<PageHeader />

**Form Details**
[Form Details](../CHECKS-R4-1/README.md)

**Purpose**
The CHECKS.R4 procedure is used to print a listing of checks with a stop
payment flag for a selected period.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Check#**       | The record ID of the item in the CHECKS file.                        |
| ---------------- | -------------------------------------------------------------------- |
| **Vend#**        | The vendor number.                                                   |
| **Vendor.Name**  | The name of the vendor as it appears in the Vendor file.             |
| **Chk.Date**     | The date of the check.                                               |
| **Check.Amount** | The total amount of the check.                                       |
| **Disc.Amount**  | The amount of discount taken on the check.                           |
| **St**           | The current status of the check record. (P = posted, other codes are |
user-defined)

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
