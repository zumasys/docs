##  MRP Horizontal Report (MRP.R1)

<PageHeader />

##

![](./MRP-R1-1.jpg)

**Job ID** Enter a unique ID if you wish to enter and save the parameters to
this procedure for future use. If you only need to run the procedure and do
not want to save your entry then you may leave this field empty.  
  
**Destination** Select the destination for the output from this procedure.  
  
**Process** Select the method to be used for processing the report. Foreground
is always available and must be used when output is directed to anything other
than a system printer (i.e. printers spooled through the database on the host
computer.) Depending on your setup there may be various batch process queues
available in the list that allow you to submit the job for processing in the
background or at a predefined time such as overnight. A system printer must be
specified when using these queues.  
  
**Format** Select the format for the output. The availability of other formats
depends on what is allowed by each procedure. Possible formats include Text,
Excel, Word, PDF, HTML, Comma delimited and Tab delimited.  
  
**Layout** You may indicate the layout of the printed page by specifying the
appropriate setting in this field. Set the value to Portrait if the page is to
be oriented with the shorter dimension (usually 8.5 inches) at the top or
Landscape if the longer dimension (usually 11 inches) is to be at the top.
Portrait will always be available but Landscape is dependent on the output
destination and may not be available in all cases.  
  
**Copies** Enter the number of copies to be printed.  
  
**Run Process** Click on the button to run the process. This performs the save
function which may also be activated by clicking the save button in the tool
bar or pressing the F9 key or Ctrl+S.  
  
**Group** Enter the name of the planning group that you want to run the MRP report against. The groups are defined in the [ PLAN.CONTROL ](../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E/PO-E-1/PLAN-CONTROL) procedure. If no group is entered, then the first group defined in [ PLAN.CONTROL ](../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E/PO-E-1/PLAN-CONTROL) is used.   
  
**Buyer** If you want to limit the MRP listing to include only those items for a specific buyer, then enter the code used to identify the buyer at this prompt. The buyer is associated to the part number in [ PARTS.E ](../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) .   
  
**Planner** If you want to limit the MRP listing to include only those items for a specific planner, then enter the code used to identify the planner at this prompt. The planner is associated to the part number in [ PARTS.E ](../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) .   
  
**Category** Enter each part category you would like included in the report.
The categories will be printed in the order they are entered. If you want to
list all of the parts then leave this field blank. You should also leave this
field blank if you want to print only specific part numbers. These can be
specified at the next prompt.  
  
**Part Number** Enter all of the part numbers you want included in the report.
The parts will be printed in the order they are entered. If you want to print
all part numbers then leave this field blank.  
  
**Cutoff Date** Enter the cutoff date, to be used in conjunction with the
planned order and/or the expedite option to determine if a part is to included
on the report. Leave this field blank to include all dates.  
  
**Make/Buy Parts** Enter one of the following letters which defines which
types of parts are to be included in the listing...  
  
M - Make parts only  
B - Buy parts only  
C - Combination make/buy  
A - All parts  
If no selection is entered then "A" is assumed. Also, any part that is not
defined as either make, buy or combination will be included.  
  
**Sort By** Select the method you wish to sort the report by. If no entry is
made in this field, the report will sort by category by part number. This
option does not apply when the report is run for selected part numbers.  
  
**Print Messages** Check this box if you want the MRP action messages
displayed on the report.  
  
**Include Phantoms** Check this box if you want phantom parts included in the
report.  
  
**Exceptions Only** Check this box if you only want to print those records
which show some exception condition which is specified in the exceptions area
on this form.  
  
**Parameter Violation** Check this box if parameter violations are to be
included in the exception listing.  
  
**Negative On Hand** Check this box if you want items which show a negative
balance on hand to be included in the exception report.  
  
**Past Due Orders** Check this box if you want orders which are past due to be
included in the exception report. This applies to scheduled receipts.  
  
**Order Expedites** Check this box if parts with orders that need to be
expedited should be included in the report.  
  
**Order De-expedites** Check this box if you want parts with receipts that are
scheduled too early to be included in the report.  
  
**Excess On Order** Check this box if parts with orders for more than is
needed should be included in the report.  
  
**Order Releases** Check this box if parts with recommended planned orders
should be included in the report.  
  
**Last Status Message** Contains the last status message generated by the
program.  
  
**Last Status Date** The date on which the last status message was generated.  
  
**Last Status Time** The time at which the last status message was generated.  
  
**Order Requirements** Check this box if parts with an requirement or demand
should be included in this report.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />