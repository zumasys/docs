##  List Financial Report Structures (GLRPT.R1)

<PageHeader />

**Form Details**  
[ Form Details ](GLRPT-R1-1/README.md)   

**Purpose**  
The GLRPT.R1 procedure is used to list the structure of selected or all GLRPT financial report frameworks. The report is used to audit the data entry of the report structures entered by [ GLRPT.E ](../../../../rover/GL-OVERVIEW/GL-ENTRY/GLRPT-E/README.md) . 

**Frequency of Use**  
As required.

**Prerequisites**  
The account number must be present in the GLCHART file.

**Data Fields**

**Report** The name of the record in the GLRPT file.  
**Line** A sequential line counter which identifies each line of the report to
be processed.  
**From Account** The beginning account number to be printed on this line of
the report, or one of the valid action codes.  
**To Account** The ending account number to printed if a range has been entered in [ glrpt.e ](../../GL-ENTRY/GLRPT-E/README.md) .   
**Mask** If a range of account numbers has been selected, then a mask can be
applied to limit the number of items selected.  
**Description** The description of the account number as it appears in the
GLCHART file, or a miscellaneous description as allowed by the valid action
codes.  
**Supp** This codes signifies whether or not to suppress the printing of this
line of the report, but still process to amounts.  
**Tot#** The total number into which to add the amount from this line of the
report. This total may later be printed as a group or report total.  
**Roll** The total number into which to roll the current total for later
processing in the report.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />