# Rover Web v2.21.0 Release Notes

<badge text= "Version 2.21.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.21.0 (1/14/2026) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.21.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.21.0) today!

## New Features

### Rover Web

### General

 - Added support for dynamic, `FORMSDEF.E` defined forms to return warning response to the UI.  Those warning can be displayed as toast messages with auto-dismiss, or as modal dialogs requiring feedback from the end user.

#### Production

 - Added the option in `WO.CONTROL` to restrict scheduling of work orders in the Scheduling board to only allow scheduling by operation, preventing drag/drop at the whole Work Order level.

 - Added support for different Production Board and Unscheduled Orders data lookups to be used for each individual Scheduling Group defined in `WO.CONTROL`. Additionally, scheduling groups can be restricted to specific users.
 ![Scheduling Groups in WO.CONTROL](./wo-control-scheduling.png)

 - Added support for lookup-driven display tabs in the Work Order Details screen.
![Work Order Details Lookups](./wo-lookups.gif)

#### Point of Sale
 
 - Upon creation of a quote, users are now directed to the Quotes table.
 
 - Refactored how line item additional field details are defined in `MRK.CONTROL`.  Added the ability for changes to line item detail fields to trigger validation from the cart dialog.

## Bug Fixes

### General
 
 - Addressed an issue with filter dialogs on Rover BI embedded dashboards being obscured by the Rover Web copyright footer.

### Point of Sale

 - Corrected an issue that would prevent parts from being automatically added to the cart when only one search result was found.
 
 - Corrected an issue causing automated addition of a product to the cart to fail in specific situations when using a barcode scanner, and rapidly scanning inputs.

 - Corrected an issue causing automated addition of a product to the cart to fail when POS is using Part search mode rather than Price search mode.

### Production

 - When using a Lookup to display Unscheduled Orders in the Scheduling section, the table now displays "Operations" in the column heading for operations.
 - Corrected an issue that may prevent work orders and operations from correctly dragging and dropping from the unscheduled orders table when using a Lookup.

<PageFooter />
