##  Close a Fiscal Period (FY.P1)

<PageHeader />

**Form Details**  
[ Form Details ](FY-P1-1/README.md)   

**Purpose**  
The FY.P1 procedure is used to close a fiscal period in the General Ledger module. The period to be closed is the current period displayed in [ GL.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) . If you wish to close a different period, you must update [ GL.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) . Information about the next fiscal period is displayed for edit purposes.   
  
If the period being closed is not the final period of a fiscal year, as defined in the FY file, then this procedure merely places a close flag in the FY file for the period and rolls the current period data in the [ GL.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) file by one period.   
  
If the period being closed is the final period of a fiscal year, then in addition to the above occurring, the balances for all income statement accounts are set to zero (0) in the new fiscal year and all balance sheet account balances are rolled forward into the new year. This balance of the income statement accounts is rolled into the retained earnings account number defined in the [ GL.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) procedure.   
  
Note: Prior to closing the year, check the following:  
  
1\. Make sure the next year is in the FY file ( [ FY.E ](FY-E/README.md) )   
2\. Verify that all accounts have been flagged as Income Statement or Balance Sheet accounts in [ GLCHART.E ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) .   
3\. Verify that the Retained Earnings account has been entered in [ GL.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) .   
  
It is important to note that this procedure does not 'finally' close a year and that journal entries may continue to be made via the [ GLTRANS.E ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E) procedure into the closed year until such time as it is finally closed via the [ FY.P2 ](FY-P2/README.md) procedure. Such journal entries will roll forward into the retained earning account in the now current fiscal year as required.   
  
Before a year end close may occur, the next fiscal year must be identified in the FY file using the [ FY.E ](FY-E/README.md) procedure. 

**Frequency of Use**  
As required.

**Prerequisites**  
Setup of the [ GL.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) record ( [ GL.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) ) and the establishment of a fiscal year via the [ FY.E ](FY-E/README.md) procedure. All general ledger accounts must be defined as balance sheet or income statement accounts in [ GLCHART.E ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />