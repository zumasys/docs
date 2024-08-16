# Rover Web v1.5.0 Release Notes

<badge text= "Version 1.5.0" vertical="middle" />

<PageHeader />

These are the release notes for version 1.5.0 (8/15/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.5.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.5.0) today!

## New Features
- **Rover Web**
  - **Point of Sale**
    - Ability to skip the sales tax calculation API call has been added. This is enabled by the "POS Skip Calc Tax" setting in MRK.CONTROL.
    > Note: Currently only supported by select ERPs.
    - Added ability to allow negative prices when editing parts in the cart. This is enabled by the "POS Allow Negative" setting in MRK.CONTROL.
    - Added additional validate API call after and Order has been edited.
  - **Field Services**
    - Added pagination to the Field Services table. 
## Bug Fixes

- **Rover Web**
  - **Field Services**
    - Fixed issue where creating a new field service then searching did not load the latest changes.
    - Fixed issue with sorting and filtering not returning the correct Field Services
<PageFooter />


Ah, the negative qty entry