##  G/L Fiscal Date Entry (FY.E)

<PageHeader />

##

<img width="1292" height="1124" alt="FY E" src="https://github.com/user-attachments/assets/9206b17f-bd71-44c2-8e46-def27e65aaf1" />


**FYID** There is one fiscal year record for each fiscal year required. Each
is identified by "FY" followed by the four digit year (e.g. FY1990).  
  
**Create Future Fiscal Years** If you wish the system to generate future
fiscal years, enter the last year for which a fiscal year should be defined.
For example, if you wish to set-up all fiscal years through 2030, enter 2030
in this field. Please note, that if the future fiscal years have already been
set-up, this option will not over-write those entries.  
  
**Dummy Prompt** Dummy prompt.  
  
**Per#** This is a multi-valued field which allows for as many period numbers
to be defined as required, normally either twelve or thirteen. This field is
associated with fields 2 through 5 which follow.  
  
**Quarter** Enter the quarter number to which this period belongs. This field
will be used in the GL report procedures for quarter-to-date calculations.  
  
**Per name** This field allows for a descriptive period name to be entered. If
you are using a calendar year, the most commonly used names are "Jan" through
"Dec". However, there is no predetermined requirement. One name is required
for each period number defined.  
  
**Period Starts** This field contains the starting dates if the periods
defined. For all dates after the first period, the period starting date must
be one day after the previous periods end date. This will be automatically
defaulted during entry.  
  
**Period Ends** This is the end date of the period being defined. There must
be a start and an end date for each period defined.  
  
**Per closed** This is a system controlled field, containing the date on which the period was closed via [ FY.P1 ](../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-1/FY-P1) or FY.E. It will contain the actual system date that the procedure was run, so it will normally differ from the period end date. This date is displayed for reference only and cannot be changed.   
  
**Close Period** Check this box if you wish to close a fiscal period. Fiscal periods can also be closed via [ FY.P1 ](../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-1/FY-P1) . Please note that [ FY.P1 ](../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-1/FY-P1) must be used when closing the final fiscal period of the year. If there are periods open prior to the one you are closing, they will also be closed when the record is saved. For example, if periods 1 - 3 are showing as open and you select this option for period 3, periods 1, 2 and 3 will be closed when the record is saved.   
  
**Open Period** Check this box, if the associated fiscal period has been
closed and you wish to re-open it. You may re-open more than one fiscal period
but you cannot open a period if there is a later period that is closed. For
example, if periods 1 - 6 are closed you cannot re-open period 4 unless you,
also, re-open periods 5 and 6. You may not re-open the final period of the
year if the fiscal year has been finalized. The final period of the year
cannot be re-opened if any fiscal year after this one has been
closed/finalized.  
  
Please note that when the final period of the year is closed, the year itself
is closed and the balances are rolled forward to the next fiscal year. You may
re-open this period for purposes of making data entry adjustments but the
balances are not backed out of the beginning balances for the next fiscal
year. When the fiscal year is re-closed, the balances will not be rolled
forward a second time.  
  
**Year closed** This field contains the date on which the year end closing procedure, [ FY.P1 ](../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-1/FY-P1) , was run. Journal entries can still be created via [ GLTRANS.E ](../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E) once this date is set, but not after the final closed date. The posting program will automatically roll amounts posted to Income Statement accounts into the Retained Earnings account after the close. This date is displayed for reference only and cannot be changed.   
  
**Year final** This is the date on which the final year end closing procedure ( [ FY.P2 ](../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-1/FY-P1/FY-P2) ) was run. This date signifies that all balances have bee checked and 'frozen', and that no further journal entries will be required (or permitted) into this fiscal year. This date is displayed for reference only and cannot be changed.   
  
**Orig Close Date** This field contains the date the fiscal year was originally closed via [ FY.P1 ](../../../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-1/FY-P1) . A date will appear in this field and not the "Year Closed Date" field if the fiscal year has been re-opened. This date represents the date the balances for the fiscal year were rolled forward to the next fiscal year.   
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />
