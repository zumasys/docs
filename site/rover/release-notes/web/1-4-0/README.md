# Rover Web v1.4.0 Release Notes

<badge text= "Version 1.4.0" vertical="middle" />

<PageHeader />

These are the release notes for version 1.4.0 (8/3/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.4.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.4.0) today!

## New Features
- **Rover Web**
  - **Point of Sale**
    - The Shopping Cart UI has been improved to allow editing multiple line items at the same time and improve saving of line item notes.
    ![Cart Updates](./CartUpdates.png)
    - The invoices workflow has been updated to allow issuing a refund to an invoice. This can only be done for one invoice at a time. When processing a refund, a display is presented to allow selecting which line items and quantities to refund.
    > Note: Currently only supported by select ERPs.
    ![Invoice Credit](./pos-invoice-refund.gif)
    - In order header before part selection workflows, existing orders, invoices, receipt history and payment method menu items are now avaialble on the order header stage of POS.
    ![Order Header Menu](./OrderHeaderMenu.png)
## Bug Fixes

- **Rover Web**
    - **Manufacturing**
      - Resolved issue with additional data column in the  Manufacturing module not displaying during print/export.
      > Note: Currently only supported by select ERPs.
    - **Point of Sale**
      - Resolved issue with sales tax from a previous order displaying initially after selecting a new customer.
      - Resolved issue with multi-company integrations not setting company dropdown correctly based on valdiation response from host.
      > Note: Currently only supported by select ERPs.
<PageFooter />
