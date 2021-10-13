## Mass Change Check Date on Posted Checks (CHECKS.P6)
<PageHeader />

**Form Details**
[Form Details](../CHECKS-P6-1/README.md)

**Purpose**
The purpose of CHECKS.P6 is to change the check date on posted checks. Checks
can be selected for a range of checks or a check run that was created via the
[AP.P1](../AP-P1/README.md) procedure. Checks that have been voided or cleared will not
be selected.

When the checks were originally posted, ARREG (register) records were created
to track the debits and credits that will be posted to the general ledger.
This procedure creates reversing register records for the original check date
and new register records for the new check date. Both the original and new
check dates must both fall into an open fiscal period.

Additionally, the check date will be changed on the accounts payable or
commission records that were paid by the check.

If you want to view the results before updating the CHECKS records, do not
select the UPDATE CHECKS option.

**Frequency of Use**
As required.

**Prerequisites**
Checks must exist in the CHECKS file. This procedure is not used to change the
check date on items that are schedule against a check run. This procedure will
update the general ledger. Therefore, the fiscal periods for the new and
original check dates must fall into open fiscal periods.

**Data Fields**

| **CHECK ID** | The check number or id.                                          |
| ------------ | ---------------------------------------------------------------- |
| **OLD DATE** | The original check date. This is the date that will be changed.  |
| **VENDOR**   | The vendor the check was issued to.                              |
| **MESSAGE**  | If the check date cannot be changed, a message will be displayed |
in this field explaining why the change could not be made. If the date can be
changed, a message will be displayed in this field confirming the change.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
