##  Available Printers (PRINTER.CONTROL)

<PageHeader />

**Form Details**  
[ Server Printers [SVR] ](PRINTER-CONTROL-1/README.md)   
[ Database Printers [SYS] ](PRINTER-CONTROL-2/README.md)   
[ Client Printers [NET] ](PRINTER-CONTROL-3/README.md)   
[ Printer Type Assignment ](PRINTER-CONTROL-4/README.md)   

**Purpose**  
The PRINTER.CONTROL procedure is used to assign printers to specific print
queues on the system. Each printer (serial or parallel) which is present on
the system is given a print queue number starting with zero (0), which is
normally considered the default printer.  
  
In all print procedures, the print queue ID entered is verified against this
control record. Any print queue which is valid must be entered here.  
  
Additionally, the printer width and depth may be established for each line.
Normally, it is best to set these figures based upon the width of the actual
paper in the printer, not the potential carraige size. This allows you to have
narrow paper in a printer, and have the system automatically compress the
print size to fit the paper.  
  
The printing of a banner, containing the procedure name and user ID which
executed the report, may also be set here.  
  
To help prevent unwanted reports from being sent to the wrong printer, such as
listings being sent to a forms printer, you may assign valid procedures to a
printer number. Only those procedures identified will be able to be routed to
the specified printer. If any procedure may have it's output sent, leave the
valid procedure null.

**Frequency of Use**  
Generally, this need only be done when the system is initially installed. It
must also be changed whenever a printer is moved or added.

**Prerequisites**  
The printer ID must already be established in the Printers file.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />