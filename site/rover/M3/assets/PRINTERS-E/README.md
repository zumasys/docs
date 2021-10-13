## Printer Definition (PRINTERS.E)
<PageHeader />

**Form Details**
[General Control Codes](../PRINTERS-E-1/README.md)
[Character Pitch Options](../PRINTERS-E-2/README.md)
[Font Options](../PRINTERS-E-3/README.md)
[Character Graphics](../PRINTERS-E-4/README.md)

**Purpose**
The PRINTERS.E procedure is used to define the printer or printers which will
be used on the system. Each type or model of printer must be defined here
prior to placing the printer into the PRINTER.CONTROL procedure.

Detailed characteristics of the printer, including intialization and reset
sequences, font capabilities, bold and underline codes and character pitch
sizes are entered in this procedure. These allow the system to control factors
such as print size to maximize the pitch for any given report. Additionally,
many form programs which have been designed to print on plain paper utilize
the font, bold and underline features of a printer.

The codes necessary to build this record are normally found in the printer
manual.

**Frequency of Use**
When a printer is added or changed.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
