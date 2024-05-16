# Rover Web v1.0.32 Release Notes

<badge text= "Version 1.0.32" vertical="middle" />

<PageHeader />

These are the release notes for version 1.0.32 (4/26/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.0.32) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.0.32) today!

## New Features

- **Rover Web**
  - **Accounting**
    - A GL Transaction entry screen is now available to enter new GL Journal entries via Rover Web.
      ![GL Transaction Entry](./gl-entry-screen.gif)
  - **Point of Sale** A Pick Ticket can now be printed after order creation. There is a user based default pick ticket printer option available in "Settings", and the printer can be optionally changed for each print request.
      > Note: Currently only supported by select ERPs.
  - **Point of Sale** Improvements to payment processing after order origination.  
  - **Point of Sale** Additional fields have been added to `MRK.CONTROL` to show more information about the sales order in the Order Summary page.
    - Tax Codes
    - Ship Via
    - Sales Reps
    - Pay Terms
    - Order Status
  - **Point of Sale** Sales Order Shopping Cart Enhancements
    - You can now view inventory for parts in both the part search and the cart. Click on the available quantity labels to view.
    - Custom sales order line item fields defined in `SO` FDICT can now be viewed and updated.
    - Line item notes have been added in the additional section. Click on the left hand column to expand the row!
  - **API Improvements** Improvements to default communication of user context from Rover Web to backend API endpoints.

## Bug Fixes

- **Rover Web**
  - **Payment Processing**
    - An issue has been resolved where in certain cases an incorrect payment method was passed to the backend system. 
  - **Point of Sale**
    - Improved the Parts Search Scanning behavior when "Auto Add Parts" is disabled in user settings.
    - Updating items in the shopping cart now focuses back to the part search.
  - **Opportunities**
    - Cleaned up UI for headers for id, phone number and name fields
    - Added error handling for if a date or customer did not come back
    - Fixed missing statuses
  - **Field Service**
    - Added error handling if certain inputs were not selected (ex: operations type, report type)
    - Fix added to not allow multiple updates by disabling button

<PageFooter />
