# Rover Web v2.9.0 Release Notes

<badge text= "Version 2.9.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.9.0 (4/16/25) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.9.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.9.0) today!

## New Features

### Rover Web

#### General 

- Users can now press the "Enter" to apply filters in data tables instead of clicking the "Apply" button.
- Multiple dashboards and custom links are now supported in Rover Web.  Dashboards can be assigned to specific users via `SECURITY.E`.  Management of dashboards and links is handled in `WEB.CONTROL`.
    > Requires ACE version 9.0.691 and M3 updates
#### Production Scheduling

- The main work order listing table can now be controlled via a lookup, selected in WO.CONTROL.
![wo.control](./wo-control-lookup.png)
![Production Scheduling lookup table](./prod-sched-wo-lookup-table.png)

### Tickets

- A "Refresh" button has been added to the main Tickets datatable to allow for refreshing with the currently applied filters in place.

### Point of Sale

- Pricing via standard Rover CALC.PRICE logic is now supported.
> Requires M3 updates.
- Requirement for signatures during the shipping stage of order processing in Point of Sale is now handled on the host side for added flexibility.


