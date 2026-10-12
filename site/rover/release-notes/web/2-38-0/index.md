# Rover Web v2.38.0 Release Notes

<badge text= "Version 2.38.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.38.0 (10/12/2026) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.38.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.38.0) today!

## New Features

### General

- Updated the application to use shared Zumasys component and composable libraries for common UI patterns, pagination, category navigation, and recently viewed record handling.

- Improved responsive tab behavior so overflowing dashboard tabs stay usable on smaller screens and collapse into a menu when appropriate.

- Added better selection-cell behavior in data tables so clicking a selection cell toggles the checkbox more naturally.

### Point of Sale

- Replaced the category picker dialog with a shared category selection component for a more consistent browsing experience.
- Improved category filtering and navigation logic within POS.
- Added support for newly created tickets and customers to appear in recently viewed lists.

### Accounting

- Recently viewed Accounts Payable and Accounts Receivable records now use record IDs instead of row indices when removing items, improving reliability when lists are reloaded or compacted.
- Recently viewed records now preserve recency order more consistently when refreshed.

### Ticketing

- Newly created tickets are now added to recently viewed tickets.
- Recently viewed tickets now refresh and display in the correct recency order.
- Improved ticket navigation and removal behavior in the recently viewed list.

### Session Management

- Improved session token synchronization across open tabs so refreshed credentials stay aligned between tabs.
- Reduced the chance of an idle tab trying to use an expired refresh token.
- Improved logout behavior so other open tabs are notified when a session ends.
- Added safer handling for transient refresh failures so network issues do not immediately force a full session logout.

## Bug Fixes

### General

- Fixed several cases where UI state could become stale after refactoring shared components and composables.
- Improved error handling when creating customers so failures are surfaced more clearly.

### Point of Sale

- Fixed category dialog behavior after moving it into a shared component.
- Fixed some tab and scroll behavior in dashboard-style views.

### Accounting

- Fixed recently viewed list removal to target the correct record even when display order and stored order differ.

### Ticketing

- Fixed a race condition where out-of-order refresh responses could re-add removed tickets.
- Fixed recently viewed ticket deletion to operate by ticket ID rather than display index.

### Session Management

- Fixed an issue where one tab’s refresh could overwrite another tab’s newer credentials.
- Fixed cross-tab session logout handling so open tabs are kept in sync.
- Fixed refresh handling so transient network/server errors do not masquerade as session expiration.

<PageFooter />