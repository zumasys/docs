## Generate Recurring A/P Items (APR.P1)
<PageHeader />

**Form Details**
[Form Details](../APR-P1-1/README.md)

**Purpose**
The APR.P1 procedure is used to create AP records for all eligible recurring
accounts payable items. An APR record is eligible if an invoice is due to be
created for a date prior to the selected cutoff date.

When executed, the open balance in the Vendor file is updated, as well as
APREG records which are created for all amounts and account numbers.

**Frequency of Use**
Generally, this process is run on a nonthly basis. However, it may be run more
frequently if required.

**Prerequisites**
Recurring accounts payable records must have been created through the
[APR.E](../APR-E/README.md) procedure.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
