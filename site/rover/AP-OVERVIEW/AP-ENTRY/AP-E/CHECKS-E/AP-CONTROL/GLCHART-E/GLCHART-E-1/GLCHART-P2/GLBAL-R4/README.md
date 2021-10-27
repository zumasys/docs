##  Balance Report by Account Group (GLBAL.R4)

<PageHeader />

**Form Details**  
[ Form Details ](GLBAL-R4-1/README.md)   

**Purpose**  
The GLBAL.R4 procedure is used to print a listing of all account numbers,
sorted by account group and sub group. The information listed on this report
is the current period amount and year to date amount, for the period
specified.

**Frequency of Use**  
As required.

**Prerequisites**  
The account groups and sub groups must be assigned either through the [ GL.CONTROL ](../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) and [ GLCHART.P2 ](../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-P2) procedures, or manually through the [ GLCHART.E ](../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) procedure. 

**Data Fields**

**Account#** The account number found in the GLCHART file.  
**Description** The description for the selected account number.  
**Current Amount** The current month amount.  
**YTD Amount** The year to date amount for this account.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />