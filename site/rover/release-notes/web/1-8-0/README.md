# Rover Web v1.8.0 Release Notes

<badge text= "Version 1.8.0" vertical="middle" />

<PageHeader />

These are the release notes for version 1.8.0 (9/20/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.7.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.7.0) today!

## New Features

- **Rover Web**
  - **Point of Sale**
    - Support fractional part quantities based on the "fractions" propery in `PARTS.E`
    - Adds a new user setting to determine flow for searched open orders. When "Load Searched Orders into Parts View" is on, searching for an order will navigate the user to the Parts Tab for editing. When turned off, the user will be routed to the Orders Tab. The default for this toggle is off.
        > Only supported by select ERPs
    - If validation is turned on, a validation request will be sent upon clicking "Select Parts." The user will not be able to proceed until the Order Information is successfully validated.
    - The Parts Search is now re-focused after an item is added to the cart via mouse-click.

## Bug Fixes

- **Point of Sale**
  - Submission of payment for a ROA or an OI transaction no longer clears the invoices cart
  - Invoices summary is retained on the Confirrmation screen
  - Vendor selection on the Ship View has been fixed
  - Error/ Success messages are no longer duplicated/layered
<PageFooter />
