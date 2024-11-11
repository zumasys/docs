# Rover Web v1.11.0 Release Notes

<badge text= "Version 1.11.0" vertical="middle" />

<PageHeader />

These are the release notes for version 1.11.0 (11/12/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.10.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.10.0) today!

## New Features

- **Rover Web**
  - **Customers**
    - Invoice Payment capabilites will only be available for users with the `CASH.E` command
  - **Accounting**
    - Invoice Payment capabilites will only be available for users with the `CASH.E` command

## Bug Fixes

- **Rover Web**
  - **Field Services**
    - Error observed when sending emails with a blank "To" email address has been resolved. Form will no longer submit without a filled "To" email address.
  - **POS**
    - Updating the amount on an invoice that has been added to the cart is now always bound by the original amount, instead of a previously updated amount.
  - **Production Scheduling**
    - Additional Operations now display the added Title as the Label in the Gantt Chart, instead of the base Operation.
  - **Customers**
    - Quotes and Orders Badge counts are now accurate.
    - Quotes and Orders Date sort now works properly.
    - Quotes Date filter now works properly.
    - Quotes and Orders paging is now functional.
