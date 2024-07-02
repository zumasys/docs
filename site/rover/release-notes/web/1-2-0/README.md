# Rover Web v1.2.0 Release Notes

<badge text= "Version 1.2.0" vertical="middle" />

<PageHeader />

These are the release notes for version 1.2.0 (7/1/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.2.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.2.0) today!

## New Features
- **Rover Web**
    - **Point of Sale**
      - Server side receipt printing with printer selection dialog.
      > Note: Currently only supported by select ERPs.
      - Optional "Maintain Cart Sort" function can be enabled using `MRK.CONTROL`.  This modifies the default behavior where line items in the cart are added to the top, and moved to the top as edits are made to the line items.
      - Optional "Increment Line Item Qty without Price Match" function can be enabled using `MRK.CONTROL`.  This modifies the default behavior where as a part is added to the cart, if the same part is already in the cart, the qty of the existing line item will only be incremented if the price in the cart matches the price of the part.  If the price has been adjusted in the cart, adding another instance of that same part will add a new line.  With this toggle enabled, the existing line item will have its Qty incremented even if the price does not match.      
      - Payment Submit buttons are now disabled after an initial click to avoid duplicate transactions.

## Bug Fixes

- **Rover Web**
  - **Point of Sale**
    - Addressed an issue with order code validation which allowed orders to be placed without an order type specified in certain situations.
    - Addressed an issue in which the "Order Information" step when editing and creating an order was not visible in Register mode.
    - Improved handling of line item numbering and ordering when saving new line items to an existing order.
  - **Customer Inquiry**
    - UI improvement to resolve issues with "+ Add" button being hidden at certain screen resolutions in the Credit Cards tab of Customer Inquiry.
    

<PageFooter />
