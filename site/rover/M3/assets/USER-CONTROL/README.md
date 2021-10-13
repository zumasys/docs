## Define Terminal Users (USER.CONTROL)
<PageHeader />

**Form Details**
[Form Details](../USER-CONTROL-1/README.md)

**Purpose**
The USER.CONTROL procedure allows you to assign a terminal and printer type to
each serial line on the system. Many different types of peripherals may be
defined and supported in the Terminals and Printers file, but only one may be
assigned to each serial line at any one time. This procedure allows each
serial line to be assigned a different set of peripherals.

Also identified in this procedure are the default print queue and slave
printer width and depth. Enter the print queue which will most often be used
by the user. Remember that this may always be overridden during the running of
any report. If a slave printer is connected directly to the terminal, the
width and depth settings will help control the pitch and style when output is
sent.

In most cases it will not be necessary to define information in this file
manually. The system, when possibly, will query the device for its type and
update the record automatically. This procedure is of little use when
connected via a network because the port number can change each time a
connection is made.

**Frequency of Use**
Generally, this is setup for all users when the system is installed. When any
changes are made to any peripheral in use, this procedure should be updated in
order for that peripheral to operate correctly.

**Prerequisites**
The terminal and printer must be identified in the TERMDEV.E and PRINTER.E
procedures.

<badge text= "Version 8.10.15 10/27/14" vertical="middle" />

<PageFooter />
