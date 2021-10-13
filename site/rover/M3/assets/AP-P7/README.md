## Calculate VENDAPBAL - AP Balance History (AP.P7)
<PageHeader />

**Form Details**
[Form Details](../AP-P7-1/README.md)

**Purpose**
The AP.P7 procedure calculates the daily AP balance maintained in the
VENDAPBAL file for determining the highest AP balance for each vendor over a
period of time.
The number of days of AP balance history to be kept is entered in the
[ACCT.CONTROL](../ACCT-CONTROL/README.md) field "Balance History Days". For instance,
to see the highest AP balance by vendor over the past year, enter 365. It will
be a rolling period of time. Note, if you increase the time period, the
missing days cannot be automatically recaptured. It will build up to the #
days specified. If you decrease the number, the next time AP.P7 runs, it will
adjust the data accordingly. AP.P7 should be included in the nightly batch
run.
The highest AP balance for the time period specified is displayed in
[VENDOR.Q](../VENDOR-Q/README.md).

**Frequency of Use**
This process should be run daily.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
