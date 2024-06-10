# Rover Web v1.1.0 Draft Release Notes

<badge text= "Version 1.1.0" vertical="middle" />

<PageHeader />

These are the release notes for version 1.1.0 (5TBD) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.1.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.1.0) today!

## New Features

- **Rover Web**
  - **Customer Inquiry**
    - KPI cards have been added to the customer module, general tab. Clicking a card will activate the associated tab in the interface.
    ![Customer Module KPI Cards](./CustomerKPICards.png)
  - **Point of Sale**
    - Point of sale now allows requiring entry of user credentials for every order, allowing different users to enter orders on the same machine without logging out and back in. This is enabled via the `pos_require_entry_user_authentication` property in MRK.CONTROL (Shown as Require Entry User authentication).
    ![Point of Sale Entry User](./pos-entry-user.gif)
    - Point of sale now supports updating the customer mailing address with a new address saved on the Order Info Tab if there is no existing mailing address. This is enabled via the `pos_auto_create_cust` property in MRK.CONTROL (Shown as POS Auto Create Customer Prompt)
    - Payout is now enabled via the `pos_allow_payout` property in MRK.CONTROL (Shown as POS Allow Payout)
    - Payout now routes the user to the payment screen to select refund type
    - Payout now supports a receipt lookup option for refund type
    ![Payout Receipt Lookup](./receipt_lookup.png)
    - Point of sale now supports payment requirement based on Terms Net Days. Upon order finalization, customer with Terms Net Days greater than one will prompt user to either Continue to Payment or end the transaction.
    ![Terms Based Payment Prompt](./terms_based_payment.png)
    - Point of Sale now supports an option to bypass register mode. To enable, add `"bypass_reg_mode":"Y"` to the user response.
    - Point of Sale now supports displaying SO custom fields **selectively** in the Additional Information Section of the Order Info screen. This is enabled via the `pos_extra_info` properties in MRK.CONTROL (Shown as a selection list titled POS Extra Info). If no selection is made, all SO custom fields will be displayed by default.
    - When validation mode is enabled in POS, a validation call is made after initial customer selection before the Order Information tab is displayed.
      > Note: Currently only supported by select ERPs.
    - When validation mode is enabled in POS, the validation call can now return an error message to be displayed in the UI.
      > Note: Currently only supported by select ERPs.
    - When utilizing "Mixed User/Register Mode", a flag can now be included on a user login response to allow register mode bypass for a particular user.
      > Note: Currently only supported by select ERPs.
    - Ability to download invoices and view in another tab directly from table
    ![POS Download Invoice](./pos-download-invoice.png)

- **Customer Portal**
  - Print/export for invoices, tickets and orders table
  - Defaulted invoices to 50 per page for invoices
  - Changed row per page options and can sort by invoice amount
  - Notes field added under additional information for orders tab
  ![Customer Portal Notes](./customer-portal-notes.png)

## Bug Fixes

- **Rover Web**
  - **Point of Sale**
    - Fixed behavior when hitting the Enter key while "Quick Scan" is enabled, this will now perform a search as expected
    - QAV Table always shows headers
    - Payout payment submission now works as expected
    - Payment via Split Tender with a credit in the invoice list now works as expected
    - Line item custom field values are now populated in the sales order when adding to cart.    
    - Fixed issues with Mixed User/Register Mode not prompting for a user with admin credentials to select a register when the Rover Local Web Service is running, but the authenticated user lacks required permissions to select a register.
    - Fixed issues with inventory dialog display scrolling the base page headers out of view.
    - Credit Card entry modifications to user experience and fixed bug with adding/deleting cards
    - Delivery dates on line items now reflect the ship date entered in the order header
  - **Customers**
    - Creating a new ticket now defaults the customer field to the current customer
    - Fixed issues with navigation after adding or deleting an shipping address.
    - Credit Card entry modifications to user experience and fixed bug with adding/deleting cards
    - Delivery dates on line items now reflect the ship date entered in the order header
  - **Customers**
    - Creating a new ticket now defaults the customer field to the current customer
  - **Accounting**
    - Removed a search bar that served no purpose

- **Customer Portal**
  - Invalid date coming back in invoice table for due date resolved
  - Added the ability to see the invoices table only once the invoice data is ready

<PageFooter />
