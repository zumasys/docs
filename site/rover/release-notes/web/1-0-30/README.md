# Rover Web v1.0.30 Release Notes

<badge text= "Version 1.0.30" vertical="middle" />

<PageHeader />

These are the release notes for version 1.0.30 (3/1/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.0.30) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.0.30) today!

## New Features

- **Rover Web**
  - **Point of Sale**
    - New flags have been added to `MRK.CONTROL` in the 'POS' tab.
    - Hide the PO# display in the Invoices table
    - Allow Invoice posting upon Ship/ Order Finalization
  - **Offline Mode**
    - Ability to save customer, part, and pricing information in your browser to allow using Point of Sale while disconnected from the internet.
    - A new icon is shown in the top right of the Point of Sale screen showing connectivity status
      ![Online Status](./pos-online.png)
    - Clicking this brings up the option to view and refresh saved data to keep up to date when using POS offline
      ![Offline Data Caching](./pos-caching.png)
    - When offline, if you have data saved, the icon will be yellow, and you will still be able to perform customer and prices searches in Point of Sale.
      ![Offline Parts Search](./pos-offline-parts-search.png)
- **Draft Orders**
  - Ability to start an order and save the current progress. A new tab `Unsaved Orders` has been added to manage all draft orders.
   ![Draft Sales Orders](./draft-orders.gif)
  - **Invoices**
    - Ability to use stored Credit Card or Bank Account for payment
    - Ability to save new Payment Method
    > NOTE: This page will eventually be replaced by the new Accounting page
  - **Customers**
    - **Accounts Recievable**
      - Ability to use stored Credit Card or Bank Account for payment
      - Ability to save new Payment Method
    - **Accounting**
      - The Accounting module has made its initial debut on the web! This initial release provides accounting information for Payables, Receivables, and a General Ledger Trial Balance at a quick glance with more features coming soon.
      ![Accounts Payable](./accounting-ap.png)
      ![Accounts Receivable](./accounting-ar.png)
      ![GL Trial Balance](./accounting-gl.png)
  - **Rover Portal**
    - **Invoices**
      - Ability to use stored Credit Card or Bank Account for payment
      - Ability to save new Payment Method
        ![Stored Credit Card](./cc.png)
        ![Stored Bank Account](./ach.png)

## Updates

- **Portal**
  - **Orders**
    - Parts table is now paginated
      ![Orders Paging](./paging.png)

<PageFooter />
