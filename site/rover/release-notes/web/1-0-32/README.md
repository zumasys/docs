# Rover Web v1.0.32 Release Notes

<badge text= "Version 1.0.32" vertical="middle" />

<PageHeader />

These releases notes are pre-release and will be updated with final revisions when Version 1.0.32 is released to production.

These are the release notes for version 1.0.32 (4/26/2024) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v1.0.32) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v1.0.32) today!

## New Features

- **Rover Web**
  - **Accounting**
    - A GL Transaction entry screen is now available to enter new GL Journal entries via Rover Web.
      ![GL Transaction Entry](/assets/img/screenshots/release-notes/rover-web-1.0.32/gl-entry-screen.gif)
  - **Point of Sale** A Pick Ticket can now be printed after order creation. There is a user based default pick ticket printer option available in "Settings", and the printer can be optionally changed for each print request.
      > Note: Currently only supported by select ERPs. 
  - **Point of Sale** Improvements to payment processing after order origination.  
  - **API Improvements** Improvements to default communication of user context from Rover Web to backend API endpoints.
## Bug Fixes

- **Rover Web**
  - **Payment Processing**
    - An issue has been resolved where in certain cases an incorrect payment method was passed to the backend system. 
  - **Point of Sale**
    - Improved the Parts Search Scanning behavior when "Auto Add Parts" is disabled in user settings

<PageFooter />
