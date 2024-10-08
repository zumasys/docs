# Rover Web v1.9.0 Release Notes

<badge text= "Version 1.9.0" vertical="middle" />

<PageHeader />

These are the release notes for version 1.9.0 (10/?/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.9.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.9.0) today!

## New Features

- **Rover Web**
  - **Production Scheduling**
    - The Production Scheduling module has made its initial debut on the web! This initial release provides the ability to view work order, Gannt chart to view scheduled operations, ability to drag and drop operations to the Gannt chart, and allow moving operations to different work centers. To get setup contact your _Client Success Manager_ or [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20Production%20PScheduling).
    - A new option has been added to `WC.E` to enable scheduling for work centers.
    ![WC.E](./work-center-form.png)
    - To create a scheduling group navigate to the schedule tab in `WO.CONTROL` to create a new group.
    ![WO.CONTROL](./wo-control-scheduling.png)
    - View, filter, and sort work orders in the Work Orders table.
    ![Work Orders Table](./production-scheduling-work-orders.gif)
    - Drag and drop operations to the Gannt chart
    ![Scheduling Operations](./production-scheduling-drag-and-drop.gif)
    - Modify scheduled operations by dragging or clicking on the operation.
    ![Edit Scheduled Operations](./production-scheduling-adjusting-operations.gif)
  - **Point of Sale**
    - Credit Card payment option is now hidden when in User Mode
    - Updated Modular security access rights in POS. Cash functions and views will only be enabled for users with the `CASH.E` command. Invoice views will only be enabled for users with the `AR.E` command.  
    - Added `sell_as` property at the `PRICE` level will dictate how line items are consolidated. Setting `sell_as` to "new" will result in the line item automatically being added as new line, instead of incrementing the quantity of an existing line itme.
  - **Accounting**
    - Only users with the `ACCOUNTING` command will have access to the accounting module. Access rights within accounting will now be modular as well. The `GLCHART.E` command will enable the GL tab, the `AR.E` command will enable the AR tab, and the `AP.E` command will enable the AP tab.

## Bug Fixes

<PageFooter />
