##  Unposted Register Listing for All Register Files (REG.R3)

<PageHeader />

**Form Details**  
[ Form Details ](REG-R3-1/README.md)   

**Purpose**  
The purpose of REG.R3 is to obtain a listing of the register records that have not yet been interfaced to the general ledger via [ GLINT.P1 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-1/GLINT-P1) . A separate report will print for each register file that has unposted entries. There are four register files - APREG, ARREG, INVREG and WOREG - used by the system.   
  
The report can be run for a specific date range, account number or
module/register file. One of the primary reasons reports like the accounts
payable and receivable aging reports will not reconcile to the financial
reports is because not all register records have been interfaced to the
general ledger. Therefore, it is recommded, that this report be run monthly
for all accounts and modules with no starting date and an ending date equal to
the last day of the month being closed.

**Frequency of Use**  
As required.

**Prerequisites**  
Register transactions must exist.

**Data Fields**

**Reg.Id** The register record number.  
**Reg.Date**  
**Account** The GL account number from the register record.  
**Description** The description of the GL account number as it has been defined in [ GLCHART.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) .   
**Procedure** The procedure which caused this register record to occur (e.g. [ AP.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E) , [ CHECKS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E) , etc.).   
**Record.Id** The ID of record that generated this register entry from the associated procedure. For example, if a check was created via [ CHECKS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E) , the RECORD.ID is the check number. However, if the procedure that created this register entry was a sales order shipment, the record id is the shipment number.   
**Name** The customer or vendor name for the associated RECORD.ID. If the
register entry was generated for a check, the vendor's name will be displayed.
If the register entry was generated for a shipment, the customer's name will
be displayed. Please note that a name will not appear on this report for all
entries.  
**Amount** The amount (dollar value) of the register record entry.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />