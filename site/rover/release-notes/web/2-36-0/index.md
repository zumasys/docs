# Rover Web v2.36.0 Release Notes

<badge text="Version 2.36.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.36.0 (09/24/2026) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.36.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.36.0) today!

## New Features

### Authentication
- Added support for configured first-party embedded-app authentication, giving supported integrations a more seamless sign-in experience when opening Rover Web.
> Only supported by select ERPs

### Command Runner
- Added support for favorite commands in Command Runner, making frequently used actions faster to find and launch.

### Point of Sale
- Added improved offline support for default parts and customer-specific specifications so supported POS workflows can keep the right item details available even when connectivity is limited.
> Only supported by select ERPs
- Added clearer cache refresh progress and layout updates for offline data management, making saved-data refreshes easier to monitor.

### Production
- Added clearer scheduling conflict handling so planners can better understand when overlapping work needs to be rescheduled and what will move as a result.

### Reports / Print / Export
- Improved print/export column preferences so users can keep their own preferred column selections in supported workflows.

## Bug Fixes

### Accounting
- Fixed Accounting payment and order panel behavior to keep related customer actions, paging, and totals more consistent during account review workflows.

### Point of Sale
- Fixed offline search behavior for campaign pricing, cached parts, and customer-specific item results so lookups return more reliable matches.
> Only supported by select ERPs
- Fixed paging and total-count behavior in supported POS and lookup-heavy workflows for more consistent results across search and review screens.

### Production
- Fixed production scheduling conflict resolution so rescheduled work remains visible and push-out behavior is easier to follow.

### Tickets & Time
- Fixed ticket history loading issues so previous activity is retrieved more reliably during review.

### General
- Improved browser storage safeguards to reduce stale saved data and make online/offline transitions more reliable.
- Cleaned up stale keyboard handlers, listeners, and timers to improve overall application stability during longer sessions.

<PageFooter />
