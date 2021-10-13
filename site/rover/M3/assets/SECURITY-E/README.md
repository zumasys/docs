## Security Profile Entry (SECURITY.E)
<PageHeader />

**Form Details**
[General](../SECURITY-E-1/README.md)
[Access Rights](../SECURITY-E-2/README.md)
[Input Restrictions](../SECURITY-E-3/README.md)
[Output Restrictions](../SECURITY-E-4/README.md)
[User Settings](../SECURITY-E-5/README.md)
[Startup Procedures](../SECURITY-E-6/README.md)
[Change History](../SECURITY-E-7/README.md)

**Purpose**
The SECURITY.E procedure allows each user to be individually assigned security
down to the procedure level. Additionally, each user may have a different set
of security for each account on the system. Also identified is the user
password which will be prompted for when the user initially logs in.

If procedure level security is desired, each procedure to which the user has
access is entered in the command column. Additionally, update and retrieval
security may be set, allowing the user to inquire, but not update certain
procedures, or update, but not delete.

Any files to which the user is allowed access through the query language, or
any other TCL command is defined under the Files column.

Groups of commands may be loaded by entering the name of a menu containing the
desired commands. Individual adjustments can be made after the commands have
been loaded. In addition, the presence of a menu name in a users security
profile will allow additions made to the referenced menus available to the
user at the time they are entered with MENU.E. The user entering the new
information into the menu will be prompted to indicate which users will be
granted access and what type of access will be made available.

**Frequency of Use**
Generally, this is setup for all users when the system is installed. Changes
may be required as new procedures are introduced, or as a user is given new
tasks.

**Prerequisites**
The entries made here will not take effect until the account has been secured
with ACCOUNT.CONTROL.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
