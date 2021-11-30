##  Un-posted G/L Transaction Listing (GLTRANS.R2)

<PageHeader />

**Form Details**  
[ Form Details ](GLTRANS-R2-1/README.md)   

**Purpose**  
The GLTRANS.R2 procedure is used to print a list of all unposted journal entries (transactions). The report is sorted in transaction number sequence. Any records which print on this report must be posted via the [ GLTRANS.P1 ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-1/GLTRANS-P1) procedure before they will appear on any finanical reports.   
  
This report may be used as a pre-posting audit report if the system is set no
to post GLTRANS records on-line.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Tr#** The transaction (journal) number.  
**Tr.Date** The transaction date for the journal entry.  
**Posted** The date onm which this transaction was posted. If this field is
blank, the record has not yet been posted.  
**Jnl#** The journal number to which this transaction belongs.  
**Description** The notes from the transaction report. Also found in this
column are detail lines from the transaction record, including line number,
account number, account description and amount.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />