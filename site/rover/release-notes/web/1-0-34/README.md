# Rover Web v1.0.34 Draft Release Notes

<badge text= "Version 1.0.34" vertical="middle" />

<PageHeader />

These are the release notes for version 1.0.34 (5TBD) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.0.34) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.0.34) today!

## New Features

- **Rover Web**
  - **Point of Sale**
    - Partial Shipment Option, which includes:
    ![Partial Ship Option](./PartialShip.png)
    - New Ship Options Screen
    - PO Origination capabilities
    ![POS Ship Form](./ShipForm.png)
    - Shipment Address updates
    ![POS Ship Address Form](./shipaddress.png)
    - Optional "On the Fly" Customer Creation from the POS Customer Search
    ![POS On the Fly Customer Creation](./OnTheFlyCust.png)
    - Customer Search via Phone Number
    - Open Order Total Display on each invoice line
    ![Source Order Total](./SourceOrderTotal.png)
    - Optional Credit Memo Application to Order
    - Mixed User/Register Mode
    - Payment Overage checkbox can be hidden
    - Payment Overage can now have a default value
    - New category filter using tree-based selection. Enable using `MRK.CONTROL`
    - Ability to show keyword search in parts table. Enable using `MRK.CONTROL`
    - Cost column has been added to the cart view. Enable using `MRK.CONTROL`
  - **Accounting**
    - A new GL Card which allows viewing, interfacing, and posting Registers and GL Transactions
    ![Accounting GL Card](./accounting-gl-card.gif)
    - An Invoice Date column has been added to the Accounts Receivable Data Table, and the Customer Name column has been moved to the first column of the table
    ![Accounting AR Table](./accounting-ar-table-invoice-date.png)
  - **Invoices**
    - The Invoices page will be deprecated in 1.0.35 now that the Accounting page is available.

## Bug Fixes

- **Rover Web**
  - **Point of Sale**
    - Voided Transaction Receipt now accurately reflects the Void action, instead of the original transaction.
    - Updating an Invoice Amount will now clear all Tenders and reset the overage default
    - Fixed issue with ACH payment options missing.
  - **Inventory**
    - Updated inventory to include Plan Group, Shortages, and Allocated amounts.
  - **Accounting**
    - Fixed an issue with select drill downs from the AR KPI

<PageFooter />
