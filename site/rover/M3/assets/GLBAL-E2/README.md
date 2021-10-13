## Previous Balance Entry (GLBAL.E2)
<PageHeader />

**Form Details**
[Form Details](../GLBAL-E2-1/README.md)

**Purpose**


The GLBAL.E2 procedure is used to enter beginning balances for General Ledger
account numbers. One record is required for each account number for each
fiscal year required. The field which defines the record key is made up of the
account number, an asterisk (*) and the fiscal year for which you are entering
beginning balances. After filing a record, you may enter only the account
number in the next record, and the fiscal year will automatically default,
saving data entry time.

**Frequency of Use**
Generally, this field is used when first implementing the General Ledger
module to load starting balances.

**Prerequisites**
The fiscal year must have been defined in the [FY.E](../FY-E/README.md) procedure and
the account numbers must have been defined by the [GLCHART.E](../GLCHART-E/README.md)
process.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
