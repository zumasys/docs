# Rover Web v2.7.0 Draft Release Notes

<badge text= "Version 2.7.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.7.0 (TBD) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.7.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.7.0) today!

## New Features

### Rover Web

#### Accounting

- Added security feature to restrict write access to certain fields. [SECURITY.E](../../../../rover/ACE-OVERVIEW/ACE-ENTRY/SECURITY-E/SECURITY-E-3/README.md).
  > Only supported by select ERPs

#### Point of Sale
  
- _Sales Opportunities_ are now available in the `Point of Sale` module if enabled in `MRK.CONTROL`. This update also removes opportunities from the `Sales` module.
- Support to allow prices to be calculated based on the `CALC.PRICE` correlative has been added.

## Bug Fixes

### Rover Web

#### Customers
  
- Fixed a UI bug where contacts updated on one customer would show in the contacts on other customers.
  > This was strictly a UI issue and did not update the actual customer record.

#### Point of Sale

- Resolved an issue where selecting a recently viewed customer may bring up a previously viewed order.
- Inventory lookups now work with lookups with exploded multivalued data such as PO line items.
- Fixed issue with required options in the order header information not being enforced.
