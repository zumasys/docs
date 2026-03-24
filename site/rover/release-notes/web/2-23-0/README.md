# Rover Web v2.23.0 Release Notes

<badge text= "Version 2.23.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.23.0 (3/25/2026) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.23.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.23.0) today!

## New Features

### General

- Migrated the application build system to Vite for significantly faster build times and an improved development experience.
- Added an offline mode toggle, allowing users to switch the application into offline mode directly from the UI.
- Updated support for the new Rover categories structure in application navigation.
- Improved session initialization and post-login navigation for a smoother user experience, including better handling of redirect paths and prevention of race conditions during session startup.

### Accounts Receivable / Accounts Payable

- Enhanced the AR and AP search experience with a dynamic heading that shows "Search Results for - {term}", a reset button to clear search terms and column filters, and automatic clearing of the search input after each search.
- Refactored the AR/AP landing and detail pages with updated, responsive UI components for a more modern and flexible layout.
- Filter and search state is now properly persisted and restored when navigating between the AR/AP dashboard and detail views, including date range and total record count restoration.
- Added support for displaying aged credit information in accounting views.

### Customer Inquiry

- Added a new **Receipt History** tab to the Customer Inquiry form, providing quick access to receipt history for any customer.
- The search input is now automatically focused when navigating to Customer Inquiry, so users can begin typing immediately.

### Point of Sale

- POS shipping now supports dynamic header input fields driven by formsdef configuration, enabling custom shipping forms per integration.
- After order finalization, workflow actions can now drive navigation behavior, including automatic filtering of the invoice list to the relevant invoice.
- The accounting dashboard now supports dynamic card lookups rendered from backend configuration, with context-aware form dialogs.
- Modernized the QuickTicket form layout with a responsive grid, improved field validation, and a dedicated Ticket ID display.

### Production / Scheduling

- The scheduling gantt chart now displays non-working days and holidays sourced from MC control configuration and warns users when rescheduling items to non-working days.
- Work order operations now support multivalued date and time entries for more detailed operation tracking.
- Users can now scroll the gantt chart horizontally while dragging bars, making it easier to schedule operations across wider time ranges.
- Work order splitting can now be enabled or disabled based on WO control settings.
- Updated work order display to show operation phase information.
- Improved day separation in the production board print preview and export.

### Sales Orders / Quotes

- Added support for additional fields on sales order quotes with corrected correlative handling.

### Field Service / Billing

- Filter selections on the ticket datatable are now persisted across navigation.

## Bug Fixes

### General

- Added validation for records before writing to IndexedDB, preventing common uncaught errors caused by invalid key paths.
- Menu items driven by formsdef configuration now properly enforce security settings, ensuring unauthorized items are not displayed.
- Fixed an issue where default navigation links could accumulate when filter operations were called repeatedly.
- Resolved layout issues where page content could be cut off by the application footer.

### Accounts Receivable

- Fixed an issue where search state became inconsistent after viewing an AR detail item and returning to the dashboard.

### Accounts Payable

- Resolved inconsistent search behavior on the AP landing page.

### Inventory

- Corrected URL encoding for inventory items containing special characters.

### Point of Sale

- Addressed an issue where a single cached part search result would not display correctly.

### Production

- Fixed non-operation property saves failing in the scheduling overlay.
- Resolved page break issues in the production board print preview.

### UI / Styling

- Fixed visual inconsistencies with split button components.
- Corrected styling for input switch labels.
- Improved style and class merging logic for input components.
- Enhanced button styling and added consistent action button classes across the application.

<PageFooter />
