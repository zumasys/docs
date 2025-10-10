##  Bank Reconciliation (RECON.E)

<PageHeader />

**Form Details**  
[ Header ](RECON-E-1/README.md)   
[ Deposits ](RECON-E-2/README.md)   
[ Checks ](RECON-E-3/README.md)   
[ Adjustments ](RECON-E-4/README.md)   

**Purpose**  
The RECON.E procedure is used to enter the clear amounts and dates for checks
and deposits after they have been processed by the bank. Its' purpose is to
track any variances between the originally entered amounts and the amount
which the bank registered. There is a section where adjustments can be entered
to handle entries on the bank statement which do no correspond to any specific
M3 entries.  
  
This procedure has no General Ledger impact. Any adjustments and/or variances must be processed either through valid M3 module procedures such as [ CASH.E3 ](../CASH-E3/README.md) or [ CHECKS.E ](../../../AP-OVERVIEW/AP-ENTRY/CHECKS-E/README.md) or through a journal entry in [ GLTRANS.E ](../../../GL-OVERVIEW/GL-ENTRY/GLTRANS-E/README.md) . 

**Frequency of Use**  
Upon receipt of bank statement.

**Prerequisites**  
The checks and deposits must already exist on the system.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />