# Rover Web v2.13.0 Release Notes

<badge text= "Version 2.13.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.13.0 (7/16/2025) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.13.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.13.0) today!

## New Features

### Rover Web

#### Point of Sale

  - Improved validation of tender input values.
  - When attempting to adjust invoices or credits in the cart while tenders are present, a confirmation dialog is displayed indicating tenders will be cleared.
  - During payment processing, the screen is blocked to avoid interruption of payments.
  - Pay Note is now required when processing a payout.
  - An MRK.CONTROL toggle has been added to allow the option groups in part detail for related parts to be collapsed by default.
  - Tenders can optionally be cleared based on an error response from payment processing.
    > Only supported by select ERPs
  - Ability to add/update/view coupons to sales orders has been added. Requires [MRK.CONTROL](../../../AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL/MRK-CONTROL-8/README.md#allow-coupons) toggle to be enabled.

#### Inventory

- Option groups in related parts can now be reordered.
- A lookup option has been added to improve transaction load time in part detail.

#### Customer Inquiry

- Lookup based customer search option has been added.
- "Type" column has been added to the customer contacts table.
  
#### Production Scheduling

- Defined substatus values are now displayed as options in WO edit.

#### General

- Search button has been added to fields with file dictionary references. This allows the ability to search against multiple lookup.
  > Availability is limited to input fields in Inventory Work Orders, Point of Sale Orders, and Point of Sale Quotes.

## Bug Fixes

### Rover Web

### Point of Sale

- An issue with automatic credit reduction during payment processing has been corrected.
- Customer count now properly displays in the badge based on lookup based search total record count.

<PageFooter />
