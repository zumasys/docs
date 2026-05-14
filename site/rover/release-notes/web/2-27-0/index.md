# Rover Web v2.27.0 Release Notes

<badge text= "Version 2.27.0" vertical="middle" />

<PageHeader />

These are the release notes for version 2.27.0 (TBD) of the Rover Web application and can be made available to customers running _Rover ERP_, _IMACS_ and other non-Zumasys owned systems. Contact your _Client Success Manager_, [Sales](mailto:sales@zumasys.com?subject=Rover%20Web%20v2.27.0) or [Support](mailto:help@zumasys.com?subject=Rover%20Web%20v2.27.0) today!

## New Features

### Customers

- **CUST.Q View-Only Access:** Users with **CUST.Q** permissions can now access the Customer Inquiry module in a read-only mode. All action buttons (New, Save, Delete) and input fields are disabled, allowing users to view customer data without the ability to make changes. **Note** Previously, users with CUST.Q "add" and "edit" access would be able to access and edit customer information. This will require updates from administrators to ensure users that manage customer data can continue to do so.
- **CUST.E Full Edit Access:** Users with **CUST.E** permissions retain full edit access to customer records. When a user has both **CUST.E** and **CUST.Q** permissions, **CUST.E** takes precedence and full edit access is granted.
- **Read-Only Enforcement Across Customer Tabs:** The read-only access control is now enforced consistently across all Customer Inquiry tabs, including General, Ship To Addresses, Contacts, Credit Cards, Contact Logs, and Attachments. Field-level restrictions such as **block_fields** and **hide_fields** are preserved for **CUST.Q** view-only users.

