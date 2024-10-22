# Rover Web v1.10.0 Release Notes

<badge text= "Version 1.10.0" vertical="middle" />

<PageHeader />

These are the release notes for version 1.10.0 (10/24/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.10.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.10.0) today!

## New Features

- **Rover Web**
    - **Inventory**
        - The inventory module has officially been added with significant updates. This new release provides a data table that pulls in all existing purchase orders. You can now view, sort, filter, and search through existing purchase orders.
        ![Inventory](./inventory-module.png)
        - The ability to create a receipt is available.
        ![New Receipt](./new-receipt.png)
        - When selecting a purchase order from the table, you will be taken to a screen where you can either receive all items or clear all quantities received for the purchase order. You can also check the top box to select all and fill the available quantity received, or select items individually. Entering a partial quantity will result in an orange tint on the row, while entering a greater quantity will result in a red tint. The correct quantity will be displayed in blue.
        ![Select Receipt](./receipt-select.png)
    - **Production Scheduling**
        - New columns BOM, Urgent and Request date have been added to the unscheduled order table.
        - Added ability to edit work order notes within the unscheduled order table.
    - **Point of Sale**
      - Added support for read only custom fields.
        > Note: Currently only supported by select ERPs.
      - Additional help text has been added to the Payment section.

## Bug Fixes
 - **General**
   - Email dialog now automatically adds email address when navigating to the next field.
   - Calendar popup no longer appears unintentionally when using browser autocomplete. 
    > Note: Issue only appeared in Microsoft Edge.