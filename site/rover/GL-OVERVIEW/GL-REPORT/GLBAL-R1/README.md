##  G/L Trial Balance Report (GLBAL.R1)

<PageHeader />

**Form Details**  
[ Form Details ](GLBAL-R1-1/README.md)   

**Purpose**  
The GLBAL.R1 procedure is used to print a General Ledger Trial Balance report. All accounts found in the GLCHART file are selected for this report. The amounts printed represent the current balance of the account based upon the report date selected. The report period and year are defaulted from the [ GL.CONTROL ](../../GL-ENTRY/GL-CONTROL/README.md) record. The amounts on the report will change when the report date is changed. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Account#** The account number found in the GLCHART file.  
**Description** The description for the selected account number.  
**Debit.Amount** The debit balance of the account on this line.  
**Credit.Amount** The credit balance of the account on this line.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />