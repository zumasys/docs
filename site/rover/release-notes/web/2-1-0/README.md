# Rover Web v2.1.0 Release Notes

<badge text= "Version 2.1.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.1.0 (1/13/2025) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.1.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.1.0) today!

## New Features

- **Rover Web**
  - **Point of Sale**
    - Added ability to specify `SO` line item fields in Partial Ship table. Requires update to [MRK.CONTROL](../../../MRK-OVERVIEW/MRK-ENTRY/MRK-CONTROL/MRK-CONTROL-6/README.md#pos-partial-ship).
    - Added ability to send SMS messages directly from the POS order tables. When activated, an SMS button appears alongside the existing download and email icons. Clicking the SMS button initiates an action to send relevant order information via SMS.
    > Only supported by select ERPs

    ![SMS Order Button](./sms.png)
  - **Customers Module**
    - The navigation bar now remains fixed at the top while scrolling down the page.
    ![Customers Sticky Header](./customers-sticky.gif)
  - **Accounting Module**
    - The main view of the Accounting module features an Orders table displaying entries that align with the criteria used to produce the KPI summary data. When an order is selected, a tabbed interface opens, providing sections for order details and customer details.
    ![Accounting Orders](./accounting-orders.png)
  - **Production Module**
    - The production module now supports view only user permissions, allowing users with no write access to see current work orders and scheduling without the ability to make or save changes.
    ![Production Scheduling Read Only Access](./prod-sched-read-only.gif)

## Bug Fixes

- **Rover Web**
  - **Scan**
    - **Transfer**
      - Fixed an issue were messages are displayed as errors when they should be warnings.
    - **WO Completion**
      - Fixed an issue were messages are displayed as errors when they should be warnings.

<PageFooter />
