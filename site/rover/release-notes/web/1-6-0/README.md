# Rover Web v1.6.0 Draft Release Notes

<badge text= "Version 1.6.0 Draft" vertical="middle" />

<PageHeader />

These are the draft release notes for version 1.6.0 (8/29/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.6.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.6.0) today!

## New Features
- **Rover Web**
  - **General**
    - We have implemented product analytics via partner PostHog.  This allows our support and development teams to review user sessions to troubleshoot issues.
  - **Custom Data Integration**
    - Support has been added to allow for integration with custom data files on backend host systems.
    > Note: Currently only supported by select ERPs.
  - **POS**
    - The selected category is now included in line item detail passed to backend host systems.
    - Shopping cart UI improvements to limit the need to scroll horizontallly when large numbers of custom line item fields are defined.
    - Improved formatting of custom field label display.
## Bug Fixes

- **Rover Web**
  - **POS**
    - Resolved issue with "Change Due" message not being cleared between payment transactions
    - Resolved issue with incorrect line item schedule quantity data being transmitted to backend host during cart updates.
    - Resolved issue with validation requests during cart update operations occurring before cart updates were committed.  
  - **SCAN**
    - Refactor of a custom scan application to resolve data integrity issues.
    > Note: Currently only supported by select ERPs.
<PageFooter />