# Testing 

**Created At:** 6/26/2017 10:37:45 PM  
**Updated At:** 8/11/2017 12:04:26 AM  


# Introduction

This document is intended for reviewing testing process during your journey of converting to jBase.  It will explain the elements of testing and responsibilities of each party.  *Testing is the responsibility of the customer*.  We at Zumasys are excellent technologists but we do not work in your business, understand your business work flows, or understand how to use your applications (the way your users may).  Therefore, it is imperative that you, the customer, take responsibility for the testing of the system to ensure that the migrated system behaves precisely as your current system.

## Test Plan

You will define a test plan that includes all critical work flows involving the migrated applications.  Generally, your application menus will provide a good framework for testing.  Our engineers can use pre-developed utilities or create new utilities to convert your menus into test steps that can be used to track the progress of the testing.   Ultimately, however, some additional detail will need to be defined in the test plan to ensure that all critical process steps are tested.  We have outlined a general guideline for testing from our previous migrations that might assist you in defining a test plan.

- Define test users in your company
- Test users must be available during onsite testing hand off to maximize engineer visit
- Engineer is onsite to hand off for testing
- Introduction to system
- Identify critical day to day items and test
- Networking
- Hardware testing
- Background processes
- Cron jobs
- Month end/reports
- Sanders Supply to continue testing.  We have identified and provided a guide below as to the critical items that should be tested.  Please know that below serves as a guide and is not inclusive of all the testing that should be completed on your system.
- Application testing
- Test Menus
- Reports
- Report Balancing
- A/R pre report balancing
- A/R post report balancing
- A/P pre report balancing
- A/P post report balancing
- CUSTOM REPORT SCREENS ON 33
- TCL REPORTS
- Close A/R Month end
- Check printing
- A/P entry
- PO rec
- Close A/P month end
- Balance G/L
- Pickticket flow O, DO, RGA, RI
- Cash invoice flow C, RC
- Processing Invoices
- Applying cash
- Applying A/R
- Service charges
- BIDS TO ORDERS
- ENTER ADJUSTMENTS
- Enter and receive transfers
- Purchase orders and Stock Receipts
- Forcast
- Goodnight routine
- Physical Inventory
- Roll LIFO
- REBUILD UTILITIES
- File resizing
- Data purge
- Networking
- communication with branches
- 3rd Party/EDI Services/processes
- third party integration with shims
- SHIMS-SET
- SCHMITT PRICE BOOKS
- PHOCAS DOWNLOADS
- WEBSTORE PRICING
- WIT TESTING
- POSITIVE PAY
- Phantom processes
- Month End
- Users/permissions
- Licensing
- jBase admin 101
- System Review
- Peripheral devices – printers, scanners, etc.
- Faxing and emailing Invoices from SHIMS
- Statement printing, emailing, faxing
- Backups
- nightly/month end backups


## Timeline

There are various phases to testing during your conversion.  The timeline to cut-over is dependent on the level of effort provided by you and your team.

- Week 1 - Zumasys engineer onsite for testing handoff
- Week 2 – Customer testing.  Engineer involved only for roadblock issues
- Week 3 – Customer testing
- Week 4 – Customer testing


## Jira – Issue reporting software

At Zumasys, we are constantly striving to improve our processes.  We are currently using Jira, a software bug reporting software to report issues during the testing and post go-live phase.  Below you will find instructions on how to get started with Jira.

When reporting issues, please make sure to enter in as much details as you can about how you received the error, the method used to get to the error such as menu numbers. Additionally, if possible, always include screenshots.  Please see below for an example of an issue reported:

### Customer Reporting:

- Brief description of the issue
- Menu sequence
- Any attachments – screenshots


### Example:

Description of the issue: Month end Report shows unassigned variable.

User id: DanE

Menu sequence: 17, 5, 11, 05/12/17, 05/17/17, Y, Y, Y

Attachments: Report page attached

## Accessing Jira

Project Manager will create a user account for you to log onto Jira

Log onto Jira - [https://zumasys.atlassian.net/](https://zumasys.atlassian.net/)

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/116824/blob)

Click on Projects in the menu header and click on your project name

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/116823/blob)

Click on “what needs to be done” and enter in issue to be reported

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/116822/blob)

Mark it as “Bug” or “Task”

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/116821/blob)

Ticket will be reviewed only when the highlighted details are completed: Priority, Description, and any attachments that contains screenshots.

![](https://static.helpjuice.com/helpjuice_production/uploads/upload/image/3397/116820/blob)
