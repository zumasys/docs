##  G/L Transaction Reversal (GLTRANS.E2)

<PageHeader />

**Form Details**  
[ Form Details ](GLTRANS-E2-1/README.md)   

**Purpose**  
The GLTRANS.E2 procedure is used to reverse journal entries preivously posted
in the General Ledger module. By entering the number of the journal
(transaction) entry to be reversed, the system loads that previous record with
all signs reversed. The transaction may not be modified and will cause a
complete reversal of the original transaction. The is the method which must be
used to address erroneous journal entries which have been posted.  
  
Please note that if the journal entry you wish to reverse was created via [ GLTRANS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E) and has not been posted, you can edit or delete the journal entry via [ GLTRANS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E) . If the journal entry was system generated via [ GLINT.P1 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-1/GLINT-P1) , you cannot delete it in [ GLTRANS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E) . Instead you will need to post the journal entry and then use GLTRANS.E2 to reverse it. 

**Frequency of Use**  
As required.

**Prerequisites**  
The record to be reversed must exist in the GLTRANS file. The fiscal year must have been defined in the [ FY.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E/GLTRANS-E-1/FY-E) procedure and the account numbers must have been defined by the [ GLCHART.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) process. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />