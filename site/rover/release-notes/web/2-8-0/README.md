# Rover Web v2.8.0 Release Notes

<badge text= "Version 2.8.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.8.0 (4/3/25) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.8.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.8.0) today!

## New Features

### Rover Web

#### Accounting

- AP and AR tables now default to open invoices (previously all) and showing 25 records per page (previously 5).

#### Customer Inquiry

- Access to Tickets & Time and Accounts Receivable tabs now enforce user level access defined in `SECURITY.E`
- Ability to add a phone number when creating a new customer has been added.
- Ability to restrict changes to credit settings has been enabled through `SECURITY.E` input restrictions.

#### Point of Sale

- A toggle has been added to control printing of register closeout reports.
 [MRK.CONTROL](../../../../rover\AP-OVERVIEW\AP-ENTRY\AP-E\AP-E-1\CURRENCY-CONTROL\SO-E\MRK-CONTROL\MRK-CONTROL-6\README.md#feature-toggles)
 > Only supported by select ERPs

- Ability to add a phone number when creating a new customer has been added.

#### Production Scheduling

- Production Scheduling now supports Workorder Substatus values when defined in Rover in `WO.CONTROL`.  This allows for more granular status values to be applied to meet specific workflow requirements.
- Improvements were made to usability of drag/drop of workorders to the Gantt chart when viewing a list of workorder items that cause the chart to be off the page.  When you start to drag a workorder, the window will automatically scroll to the chart to allow for easy scheduling.

## Bug Fixes

### Rover Customer Portal

- Display formatting for smaller screens has been improved.

### Rover Web

#### Point of Sale

- Voiding transactions in receipt history will no longer process duplicate void actions when the button is clicked while a transaction is already processing.
- Fixed issue with saving custom fields on non-stock items.
- Fixed issue with custom ID fields missing from the Parts search table.

#### Tickets
  
- Clicking "Save" multiple times in quick succession will no longer save duplicate billing entries to the ticket.
