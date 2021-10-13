## Report Definition (RD.E)
<PageHeader />

##

![](./RD-E-1.jpg)

| **Report ID**|  Enter the name of an existing report, or the name you want
to assign to a new report. If you leave this field blank then a report id will
be automatically assigned when you save the record based on the file name
specified for the report. For example, if the file name used for the report is
SALES then the system will assign an id in the format SALES.CRn where n is the
next available number not already assigned to an existing report starting with
the text SALES.CR.

-  
**Title**|  Enter the title that is to appear in caption of the report
procedure.

**File Name**|  Enter the name of the file from which the data for the report
will be extracted.

**Suppress Detail**|  Check this box if the report detail is to be suppressed
(i.e. only print totals).

**Double Space**|  Check this box if the report output is to be double spaced.

**Max Width**|  The system will automatically calculate the width of the
report based on the output fields selected. If you wish to force the output
into a vertical format you may do so by specifying a maximum report width in
this field.

**Heading**|  Enter each line of heading text that is to appear at the top of
the report.

**Print Field**|  Enter the names of all of the fields that are to appear on
the report in the order the are to appear on the page.

**Total Field**|  Check this box if totals are to be calculated for the
associated field name.

**Sort Field**|  Enter the names of each field that is to be used as a
criteria for sorting the report output. Enter the field names in order with
the first field entered being the primary sort criteria.

**Sort Sequence**|  Enter the sort sequence for the associated field name.
Enter "A" for ascending or "D" for descending.

**Sort Break**|  You may specify a break point with the associated sort field.
A break point occurs when the data in the field being sorted changes. If you
specify a break point and have indicated that totals are to be generated (as
specified in the Output Field section) then subtotals will be generated at
these break points in addition to the grand totals at the end of the report.

The three options are:
N - No break point (Default)
B - Process break point
P - Process break point and start a new

**Compare Field**|  Enter the name of each field for which a predefined
comparison (filter) is to be specified for the report.

**Compare Oper**|  Enter one of the following comparison operators:

EQ - Equal
GT - Greater Than
LT - Less Than
GE - Greater Than or Equal
LE - Less Than or Equal
S - Starting With
E - Ending With
C - Containing
NEQ - Not Equal
NGT - Not Greater Than
NLT - Not Less Than
NGE - Not Greater Than or Equal
NLE - Not Less Than or Equal
NS - Not Starting With
NE - Not Ending With
NC - Not

**Compare Value**|  Enter one or more values to be compared to the data in the
associated field. Multiple values are treated as an or condition.

**Prompt Field**|  Enter the name of each field that is to be compared to one
or more values that are to be entered by the user at the time the report is
run.

**Prompt Oper**|  Enter one of the following comparison operators:

EQ - Equal
GT - Greater Than
LT - Less Than
GE - Greater Than or Equal
LE - Less Than or Equal
S - Starting With
E - Ending With
C - Containing
NEQ - Not Equal
NGT - Not Greater Than
NLT - Not Less Than
NGE - Not Greater Than or Equal
NLE - Not Less Than or Equal
NS - Not Starting With
NE - Not Ending With
NC - Not

**Prompt Name**|  Enter the text that is to appear as a prompt to the user for
entering the value to be used for the associated comparison.

**Prompt Multi**|  Check this box if the user is allowed to make multiple
entries for the associated comparison. Multiple entries are treated as an "OR"
condition.

**Import RD.E**|  Click this button if you want to load the definition of an
existing report defined through RD.E.

**Import REPORT.E**|  Click this button if you want to load the definition of
an existing report defined through REPORT.E.


<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
