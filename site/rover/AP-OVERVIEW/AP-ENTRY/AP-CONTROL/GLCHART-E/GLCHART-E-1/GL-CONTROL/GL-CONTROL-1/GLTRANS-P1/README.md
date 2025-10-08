##  Post All Un-Posted G/L Transactions (GLTRANS.P1)

<PageHeader />

**Form Details**  
[ Form Details ](GLTRANS-P1-1/README.md)   

**Purpose**  
The GLTRANS.P1 procedure is used to post all un-posted GLTRANS records. Unposted GLTRANS journal entries may occur in one of two ways. First, the [ GL.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) may be setup to allow the filing of [ GLTRANS.E ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E) without posting. This allows the editing of all transactions prior to posting. Second, all GLTRANS records created though the [ GLINT.P2 ](GLINT-P2.htm) interface posting process are filed without posting. 

**Frequency of Use**  
As required.

**Prerequisites**  
Setup of the [ GL.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) record ( [ GL.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) ) and the establishment of a fiscal year via the [ FY.E ](FY-E/README.md) procedure. All account numbers used must be present in the GLCHART file. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />