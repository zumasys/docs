# Rover Web v2.28.0 Release Notes

<badge text= "Version 2.28.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.28.0 (06/03/2026) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.28.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.28.0) today!


## New Features
### Rover Portal
**Invoices**
  - `AR.CONTROL` can be used to disable invoice download links, and to disable the ability for a customer to use a saved credit card or ACH details for payment.
 - Invoice data fetch has been improved to support lazy loading as well as filter and sort logic more consistent with other AR selection logic.
 
## Bug Fixes

### Customer Inquiry

- Fixed a contact loading/update issue in Customer Inquiry so contact data is handled correctly when editing or saving contacts.
- Improved handling of customer contact ID collections for new, edited, and deleted contacts.
- Improved host side error handling to allow display of custom error messages.

### Scan / Inventory

- Fixed an inventory lot-detail issue where lot data could remain visible when switching between scanned part numbers.
- Improved protection against stale lot responses when multiple inventory lookups happen close together.


<PageFooter />