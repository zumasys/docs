# Rover Web v1.1.0 Draft Release Notes

<badge text= "Version 1.1.0" vertical="middle" />

<PageHeader />

These are the release notes for version 1.1.0 (5TBD) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.1.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.1.0) today!

## New Features

- **Rover Web**
  - **Point of Sale**
    - Point of sale now allows requiring entry of user credentials for every order, allowing different users to enter orders on the same machine without logging out and back in. This is enabled via the `pos_require_entry_user_authentication` property in MRK.CONTROL (Shown as Require Entry User authentication).
    ![Point of Sale Entry User](./pos-entry-user.gif)
    - Point of sale now supports updating the customer mailing address with a new address saved on the Order Info Tab if there is no existing mailing address. This is enabled via the `pos_auto_create_cust` property in MRK.CONTROL (Shown as POS Auto Create Customer Prompt)
    - Payout is now enabled via the `pos_allow_payout` property in MRK.CONTROL (Shown as POS Allow Payout)
    - Payout now routes the user to the payment screen to select refund type
    - Payout now supports a receipt lookup option for refund type
    ![Payout Receipt Lookup](./receipt_lookup.png)

## Bug Fixes

- **Rover Web**
  - **Point of Sale**
    - Fixed behavior when hitting the Enter key while "Quick Scan" is enabled, this will now perform a search as expected.
    - QAV Table always shows headers
    - Payout payment submition now works as expected
    - Payment via Split Tender with a credit in the invoice list now works as expected
  - **Customers**
    - Creating a new ticket now defaults the customer field to the current customer

<PageFooter />
