##  List Register Activity for a Record (REG.R1)

<PageHeader />

**Form Details**  
[ Form Details ](REG-R1-1/README.md)   

**Purpose**  
The REG.R1 procedure is used to print a listing of all register transactions for a selected record. The intent is to display all register entries, regardless of which register file they are in. For example, running against an AR record will show not only the [ AR.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-3/AR-E) activity, but also the SHIP activity, including the cost of goods transactions in the INVREG file. 

**Frequency of Use**  
As required.

**Prerequisites**  
Register transactions must exist.

**Data Fields**

**File** The register file that contains the associated data (e.g. INVREG,
APREG, ARREG, WOREG).  
**Reg.ID** The register record number.  
**Reg.Date** The date of the register record. This represents the GL date.  
**ID** The ID number of the customer or vendor for the record.  
**Name** The name of the customer or vendor.  
**Record.ID** The record ID that generated the register entry. Most often,
this will be the same as the record ID entered when running the report.
However, it is possible that it may be an associated record. For example, if
you are searching on an invoice number, this field may contain the shipment
number that generated the invoice.  
**Rec.Date** The transaction date of the record (e.g. invoice date).  
**Reference** The reference or source document.  
**Amount** The amount (dollar value) of the register record entry.  
**Procedure** The procedure which caused this register record to occur (e.g. [ AP.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E) , [ CHECKS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E) , etc.).   
**Account** The GL account number from the register record.  
**Description** The description of the GL account number.  
**GL.Date** This field contains the date on which the register record was
posted to the GL.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />