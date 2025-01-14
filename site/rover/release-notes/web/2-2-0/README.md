# Rover Web v2.2.0 Draft Release Notes

<badge text= "Version 2.2.0 Draft" vertical="middle" />

<PageHeader />

These are the release notes for version 2.2.0 (TBD) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.2.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.3.0) today!

## New Features

- **Rover Web**
  - **Inventory Module**
    - Added Parts information to the Inventory module.
      ![Parts Table](./inventory-parts.png)
    - Added ability to view and edit parts information.
      ![Part View](./inventory-parts-2.png)
    - Added Inventory, Commitments, Shortages, On Order, Lot, Usage, Allocations, and Transactions tabs to the Parts view.
    - ![Part Inventory](./inventory-parts-3.png)
    - Added ability to add lookup table to the Parts view. Requires update to [INV.CONTROL](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-2/README.md).
  - **Point of Sale**
    - Customer Ship-To addresses can now be lazy loaded to improve performance for integrations with large numbers of ship-to addressses on individual customer records.
      > Only supported by select ERPs
    - Auto submission of search is now controlled by a User Setting. When disabled, entries into customer and part lookup fields in POS are not automatically submitted after a timeout.
      ![Auto Search User Setting](./auto-search-user-setting.png)
    - Payouts are now allowed when more than one credit is selected.
    - Additional options have been added to control when payment overages can remain on account rather then being returned as change.
      > Only supported by select ERPs

## Bug Fixes
