## ACE Overview
<PageHeader />

[Data Entry Procedures](../assets/ACE-ENTRY/README.md) | [Reports and Inquiries](../assets/ACE-REPORT/README.md) | [Update Processes](../assets/ACE-PROCESS/README.md)

**Purpose**
The ACE module controls all data entry screens, menus and security. There are
development tools available to create new or modify existing procedure and
screens. Additionally, terminal and printer definitions are maintained for any
peripheral device which will be used. System and account backup procedures are
also included.

**Prerequisites**
None.

**Data Files**
There are seven primary data files which maintain the data directly associated
with the module.

The File Dictionary file (FDICT) is keyed by file name and contains
descriptive information about each field in a data file including field
number, description, association, length and justification. Correlative
dictionary elements may also be defined.

The Menu file (MENU) is keyed by the module name and menu type, such as entry,
reports and process. It contains all procedures on the system which are
accessible to the user via the menu process.

The Software Modification file (MOD) is used to log any and all software
changes should be logged whenver a change is made. The information in this
file can later be used to evaluate the changes for the purpose of installing a
new release.

The Procedure Definition file (PD) is keyed by procedure name and contains
four screens of information regarding each data entry, report or process
screen in the system. Associated with this file, but not accessible
individually are:


1\. The Screen Definition file (SD) containing the screen format and
vidoe codes.


2\. The Procedure Execution file (PE) containing the compiled
(executable) version of the screen.


3\. The Screen Image file (SI) which contains the the precise image
of the screen. This is built the first time each terminal type
accesses the procedure and is stored to prevent having to rebuild
the screen each time, thereby saving time.

The Printers file (PRINTERS) is keyed by a user-defined printer code. This
file is used to define the characteristics of a particular printer model.

The Terminals file (TERMINALS) is keyed by a user-defined terminal code. This
file is used to define the characteristics of a particular terminal model.

The Security file (SECURITY) contains several levels of information:


1\. User profiles (PROFILE.E) which contains the valid procedures
for each user.


2\. Secured account names (ACCOUNTS.E) which identify, by account,
which accounts are secured.


3\. User line (USER.E) information about which terminal type is
assigned to each serial line.

**System Interface**
The ACE module interfaces to all other system modules.

**User Interface**
Normally, the user will not need, nor be allowed, access to the ACE module.
This module is intended to by controlled by the System Administrator.

**Setup Procedures**
The printers (PRINTERS.E) and terminals (TERMINALS.E) files must be updated to
contain the required information about the peripheral devices to be used.

User lines must be identified through USER.E to match a serial line with the
terminal device to be used on that line.

If security is to be established, then each user must be given specific access
to the procedures that are valid for them (PROFILE.E). Also, use ACCOUNTS.E to
signify that the account is secured.

**Flow of Activities**
The majority of the procedures in this module are established when the system
is first installed. The following processes may be used as needed:

FULL.BACKUP or SYS.BACKUP are used to perform tape backups. Whenever possible,
the FULL.BACKUP process should be used to obtain a complete system backup each
night. It is possible, however, that the size of the data to be backup up may
exceed the capacity of the tape unit. In this case, it is recommended that the
SYS.BACKUP procedure be used to back up critical data on a nightly basis.

The LIST.LOCKS and DELETE.LOCKS procedures provide the ability to identify and
clear record locks which may have been set by a user in a procedure, but not
cleared due to an abnormal abort.

The LIST.SQ and DELETE.SQ procedures provide the ability to identify and clear
screen report records which may have been set by a user in a procedure, but
not cleared due to an abnormal abort.

The MOD.E procedure is used to identify all software modifications and/ or
additions which have been made to the system by anyone. This is very important
when software changes are being evaluated for the purposes of a software
upgrade.

(C) Copyright 2015, Rover Data Systems, Inc.All rights reserved.<br>
<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
