# Rover Web v1.0.18 Release Notes

<badge text= "Version 1.0.18" vertical="middle" />

<PageHeader />

These are the release notes for version 1.0.18 (05/01/2023) of the Rover Web application.

## Features

- **Sales Orders**
  - Adding duplicate parts with same date now adds the quantity instead of adding a new line item.
  - You can now view a list of parts with prices based on customer code and add them to a sales order.

- **Dashboard**
  - Filters can be added to the user `SECURITY` record and passed into Rover BI dashboards.

- **Customers**
  - Added ability to pay invoices from the `CUSTOMER` module.

## Updates

- **Sales Orders**
  - Date table can now be filtered by multiple `CUSTOMERS` and multiple `SALES REP` columns.
  - Data table filter indicators have been updated to be more clear.

- **Sales Opportunities**
  - Date table can now be filtered by multiple `CUSTOMERS` and multiple `ASSIGNED TO` columns.
  - Data table filter indicators have been updated to be more clear.

- **Sales Quotes**
  - Date table can now be filtered by multiple `CUSTOMERS` and multiple `QUOTED BY` columns.
  - Data table filter indicators have been updated to be more clear.

- **Customers**
  - Badges within `CUSTOMER` module tabs now update with filters

- **General**
  - Icon to download PDF's has been updated to be more consistent between modules

## Bug Fixes

- **Customers**
  - Issue with saving customers in General Tab has been resolved.

- **Sales Opportunities**
  - Closing sales opportunties after making changes now reverts back to the original record.

- **General**
  - Dates have been updated to work in Firefox browser.

<PageFooter />
