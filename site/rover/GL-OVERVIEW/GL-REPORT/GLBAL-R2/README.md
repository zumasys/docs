##  Detailed General Ledger Report (GLBAL.R2)

<PageHeader />

**Form Details**  
[ Form Details ](GLBAL-R2-1/README.md)   

**Purpose**  
The GLBAL.R2 procedure is used to print a detailed General Ledger report. All accounts found in the GLCHART file are selected for this report. For the period selected in the [ GL.CONTROL ](../../GL-ENTRY/GL-CONTROL/README.md) procedure, the beginning balance, all transactions and journal amounts and ending balance a printed. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Account#** The account number found in the GLCHART file.  
**Description** The description for the selected account number.  
**Tr#** The transaction (journal) number(s) which have been posted against
this account number for the period.  
**Tr.Date** The transaction (journal) date for each transaction.  
**Amount** The amount posted to the account number from the transaction
record.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />