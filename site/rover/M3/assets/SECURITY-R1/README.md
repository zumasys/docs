## User Security Profile Listing (SECURITY.R1)
<PageHeader />

**Form Details**
[Form Details](../SECURITY-R1-1/README.md)

**Purpose**
This report allows you to list all of the procedures that a specified user has
access to based on their security profile. You have the option of listing only
those items that are in the users profile, or to include all items so you can
see items that are available in the system but not granted to the user.

**Frequency of Use**
As required.

**Prerequisites**
Setup of the user in SECURITY.E.

**Data Fields**

| **Command**     | The name of each command avialable.                   |
| --------------- | ----------------------------------------------------- |
| **Description** | The description of the procedure accessed through the |
associated command.
**Access**|  Shows "YES" if the user has access to the command. If the user
has access to the command they may use it to view information. The subsequent
columns determine if the user can affect the data.
**Add**|  Contains the letter "Y" if the user is allowed to add new records
using the procedure.
**Change**|  Contains the letter "Y" if the user is allowed to make changes to
existing records.
**Delete**|  Contains the letter "Y" if the user is allowed to delete records.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
