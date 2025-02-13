# Rover Web v2.5.0 Draft Release Notes

<badge text= "Version 2.5.0 Draft" vertical="middle" />

<PageHeader />

These are the release notes for version 2.5.0 (TBD) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.5.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.5.0) today!

## New Features

- **Rover Web**
  - **Point of Sale**
    - Add ability to require signature when finalizing orders. Requires update to [MRK.CONTROL](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-6/README.md#pos-require-ship-signature).
    - Added support for automatic processing of RMAs from the Invoices tab. This must be enabled via `MRK.CONTROL` using the _"Enable RMA Refund"_ checkbox in the `RMA` tab. Automatic processing applies to any __Customers__ whose `TERMS.E` type has _"Auto-Process RMA"_ enabled. Requires update to [MRK.CONTROL](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-2/README.md#enable-rma-refund). ![POS RMA](./pos-rma.gif)
  - **Tickets and Time**
    - Added `priority`, `status`, and `contacts` to ticket details.
    - Added ability to assign multiple contacts to one ticket.
  - **General**
    - Enhanced the contact lookup feature. This is enabled for __Tickets__, __Opportunities__, __Quotes__, __Orders__, and __Customers__. Requires update to [CONTACT.CONTROL](../../../../rover/AP-OVERVIEW/AP-ENTRY/CONTACT-CONTROL/CONTACT-CONTROL-1/README.md#contact-lookup).
    ![Contact Lookup](./contact-lookup.gif)

## Bug Fixes

- **Rover Web**
  - **Inventory Parts**
    - Fixed a UI issue where the __Parts__ and __Inventory__ tabs would disappear if no lookup was defined in `INV.CONTROL`
  - **POS**
    - The _"Product Details"_ modal is now easier to read on smaller form factor devices.
    - Updated the customer table header alignment.
    - Fixed issue where deletion of a duplicate part from the cart removing the first instance of the part rather than the selected line.
    - Enabling `Auto Save Orders as Draft` in user settings now suppresses the _"Transaction in Progress"_ dialog when navigating away from __POS__ with an unsaved order in the cart.

<PageFooter />
