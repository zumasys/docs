##  Register Listing for a Specific Journal Entry (REG.R2)

<PageHeader />

**Form Details**  
[ Form Details ](REG-R2-1/README.md)   

**Purpose**  
The purpose of REG.R2 is to obtain a listing of the register detail for a journal entries created from a register file. There are four register files - APREG, ARREG, INVREG and WOREG - for which journal entries can be created. This report cannot be run for journal entries created in [ GLTRANS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E) since no register data exists for those journal entries.   

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