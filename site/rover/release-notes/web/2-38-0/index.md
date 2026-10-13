# Rover Web v2.38.0 Release Notes

<badge text= "Version 2.38.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.38.0 (10/12/2026) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.38.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.38.0) today!

## New Features

### General

- Dashboard tabs now scroll when they overflow and collapse into a menu on smaller screens.
- The **Open Source Licenses** link in the footer is now styled as a link.

### Point of Sale

- The category picker now uses the shared Zumasys category selection dialog, including the search box and breadcrumb navigation, for a consistent browsing experience.

### Billing

- Clicking anywhere in a ticket's selection cell now toggles its checkbox.

### Ticketing

- Newly created tickets are now added to the Recently Viewed tab.
- Recently viewed tickets show a loading indicator while opening a ticket, and rows show a pointer cursor on hover.

### Customers

- Newly created customers are now added to the Recently Viewed tab.

### Session Management

- Open tabs, including print and export tabs, now share refreshed credentials so every tab stays signed in.
- Logging out in one tab now signs out all other open tabs in the same session.

## Bug Fixes

### General

- Fixed an issue where an idle tab, such as a print or export view, could try to use an expired refresh token and fail.
- Fixed a missing error message when creating a customer failed.

### Accounting

- Fixed removal from the Recently Viewed Accounts Payable and Accounts Receivable lists so the correct record is removed even when the list order has changed or been compacted.
- Fixed the order of recently viewed Accounts Receivable records so re-viewing a record moves it to the top.

### Ticketing

- Fixed a race condition where out-of-order refresh responses could re-add removed tickets to the Recently Viewed tab.
- Fixed the Recently Viewed Tickets order so the most recently viewed ticket appears first.
- Fixed an issue where text typed into a new quick ticket before it finished loading could be lost.
- Fixed part filtering for customers with no matching customer-type items.

### Session Management

- Fixed an issue where temporary network or server errors during a token refresh logged users out of every tab. Users are now signed out only when the server rejects the refresh token.
- Fixed multiple "valid RoverJWT is required" notifications appearing at once when a session expires.

<PageFooter />