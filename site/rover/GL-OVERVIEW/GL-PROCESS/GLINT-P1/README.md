##  Create Journal Entries from Transaction Registers (GLINT.P1)

<PageHeader />

**Form Details**  
[ Form Details ](GLINT-P1-1/README.md)   

**Purpose**  
The GLINT.P1 procedure is used to interface all or selected modules into the
General Ledger module. The process selects all register records for the
requested modules (e.g. APREG for Accounts Payable) and summarizes them into
the GLINT file. The record key for this file is made up as follows :  
  
Module * Year * Period * Account number  
  
As each record in the register file is processed, a GL post date is written
into the record to allow future purging of the file and to disallow reposting
of these records accidentally. For this reason, it is possible to run the
GLINT.P1 procedure more than once for any given fiscal period without double
posting the amounts.  
  
You have the option to include or exclude register records which were created
for periods that have been closed. If you include these items, you can change
the date on the gltrans (journal entry) record to an open period if required.  

**Frequency of Use**  
Generally, this procedure is performed as part of each month end.

**Prerequisites**  
Setup of the [ GL.CONTROL ](../../GL-ENTRY/GL-CONTROL/README.md) record ( [ GL.CONTROL ](../../GL-ENTRY/GL-CONTROL/README.md) ) and the establishment of a fiscal year via the [ FY.E ](../../GL-ENTRY/FY-E/README.md) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />