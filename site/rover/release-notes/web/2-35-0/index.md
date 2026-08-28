# Rover Web v2.35.0 Release Notes

<badge text="Version 2.35.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.35.0 (08/30/2026) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.35.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.35.0) today!

## New Features

### Authentication
- Added a new browser-based login handoff flow for authenticated sessions.
- Improved session renewal so users can stay signed in more reliably.

### Production
- Added improved scheduling behavior to keep overlapping operations moving correctly.
- Added support for handling operations that extend into non-working time more consistently.
- Added a save-in-progress indicator when updating production work orders.

### Point of Sale
- Improved part search behavior when no matching results are found.
- Kept remaining balance information visible during payment and confirmation flows.

### Offline / Parts
- Improved offline category filtering so parent categories include their descendants.
> Only supported by select ERPs
- Improved offline price record handling for campaign-specific items.
> Only supported by select ERPs

## Bug Fixes

### Production
- Fixed operation push-out behavior so rescheduled work orders remain visible and keep their expected duration.
- Fixed push-out handling across non-working days and split operations.
- Fixed the Save button to show loading state while production changes are being persisted.

### Point of Sale
- Fixed the search input to reset properly when a lookup returns no parts.
- Fixed remaining balance display logic for payment and confirmation screens.

### Offline / Parts
- Fixed offline category matching when selecting a parent category.
> Only supported by select ERPs
- Fixed campaign matching for cached price records when the campaign value is stored as `0`.
> Only supported by select ERPs

<PageFooter />