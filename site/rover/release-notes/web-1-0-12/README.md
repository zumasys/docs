# Rover Web v1.0.12 Release Notes

<badge text= "Version 1.0.12" vertical="middle" />

<PageHeader />

These are the release notes for version 1.0.12 of the Rover Web application.

## Features

- **Customers**
  - Upgraded the search function to display results to a data table
  - Now tracking recently viewed customers in a new data table
- **Tickets & Time**
  - Upgraded the main display to a data table
  - Added `Status` and `Date` columns
  - Allow filtering by multiple `Assignees`
  - Added sort options to all columns
- **Sales Quotes**
  - Added `Description` to line items
  - Add `Quote Total` to table
  - Default the `Quoted By` field to the current user (you!)
  - Default the `Quote Date` field to _Today_
  - Default the `Valid Thru` field to _30 days from Today_
  - Added the ability to update existing quotes
  - Added the ability to edit line items
  - Creating a quote by loading an opportunity now automatically updates the opportunity with the new quote `ID`
- **Invoices**
  - Added `Customer` column to the table
  - Now displaying the `Type` _description_ instead of `Type` _code_
- **General UI**
  - Right justified numeric fields

## Bug Fixes

- **Customer - Sales**
  - Current customer now used as default when creating new opportunities, quotes and orders
  - Filtering and Sorting
- **Sales Quotes**
  - Automatically reload data after saving quote
  - Sort via `Quoted By` now works correctly
- **Sales Opportunities**
  - Filtering by opportunities now persists through saving updates
  - Contacts now appear correctly when loading existing opportunities

<PageFooter />
