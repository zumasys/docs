# Rover Web v1.0.24 Release Notes

<badge text= "Version 1.0.24" vertical="middle" />

<PageHeader />

These are the release notes for version 1.0.24 (10/04/2023) of the Rover Web application.

## Features

- **Point of Sale**
  - Product availability now displays in both list and grid views for parts.
  - Improved customer search by adding the ability to filter inactive customers.
  - Added ability to increase or decrease the quantity of a part based on the sell quantity.
  - Part search can be configured to use a scanner. Add a prefix/suffix in the settings page to enable!
  - Part categories now support subcategories. You can navigate through the categories using the breadcrumbs.


## Updates

- **Rover Scan**
  - PACK Shipment: 'To Location' now defaults to 'PACK' and scanner begins at 'SHIP #' prompt.
  - PICK Shipment: 'To Location' now defaults to 'PICK' and scanner begins at 'SHIP #' prompt.
  - Inventory Check: Locations without inventory are now hidden from the list.


## Bug Fixes

- **Point of Sale**
  - Resolved the issue where clicking the minus symbol on the part quantity caused the part info display.

- **Tickets & Time**
  - Fixed a bug causing ticket or time entry saving to fail when attachments lacked descriptions.

- **Sales Orders**
  - Addressed an issue where signature information was not displaying correctly when viewing a sales order.

- **Rover Scan**
  - Fixed a bug in the `Inventory Transfer` program where the bin number was disabled for bin-controlled parts.


<PageFooter />
