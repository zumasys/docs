##  Parts Master Listing (PARTS.R1)

<PageHeader />

**Form Details**  
[ Form Details ](PARTS-R1-1/README.md)   

**Purpose**  
The PARTS.R1 procedure creates a parts master listing. The user may restrict
the output to include only specified categories or all part numbers. The
report is sorted by category and part number.  
  
If the report is sent to Excel or the grid viewer, the data for each part will appear on a single row. The description and notes will be capped at 500 characters each. Only the first five manufacturers entered in [ PARTS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) will appear on the report. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part Number** The number which identifies the part.  
**Description** The full description of the part as entered in the Parts
Master. Below the description all of the notes for the part are printed.  
**Rev** The current revision level of the part.  
**UM** The unit of measure code used for the part.  
**Cat** The category that the part number is associated to.  
**Type** One of the following four codes defining the part. C - Component part
A - Assembly P - Phantom assembly L - Line  
**Status** One of the following codes which specifies the current status of
the part. P - Preliminary (awaiting approval) A - Approved C - Change in
process I - Inactive D - Set for  
**ABC Code** The ABC code assigned to the part number.  
**Lot?** Shows the letter "Y" if the part is lot controlled.  
**Manufacture** r Name The names of all of the manufacturers who provide a
component which is compatible with the specifications for the part.  
**Manufacture Number** r Part The part numbers used by the associated
manufacturers for the item they supply.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />