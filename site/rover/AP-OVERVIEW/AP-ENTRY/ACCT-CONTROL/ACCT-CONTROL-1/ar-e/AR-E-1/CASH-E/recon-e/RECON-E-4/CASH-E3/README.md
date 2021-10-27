##  Miscellaneous Cash Entry (CASH.E3)

<PageHeader />

**Form Details**  
[ Main ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-2/CASH-F1/cash-e3/CASH-E3-1)   
[ Change History ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-2/CASH-F1/cash-e3/CASH-E3-2)   

**Purpose**  
The CASH.E3 procedure is used to post miscellaneous cash receipts which are
not directly related to accounts receivable items. The procedure consists of
one screen, of which the left portion is the information about the check
amount being applied. The right-hand section of the screen is used to directly
apply the amounts to general ledger account numbers.  
  
The amounts are posted immediately upon the filing of the cash record. The
company code, cust id, name, check number, bank number, deposit id and notes
may be changed on existing records. Additionally, the cash/deposit account and
post date may be changed on posted records but not on records that have been
cleared or reversed. If the post date or cash account are changed, reversing
register records will be created to offset the original entries and new
register records will be created for the new account and/or date. Please note
that both the original post date and new date must occur in an open fiscal
period.  
  
If changes are required to the check amount, g/l account and amount fields,
you can delete a cash record by using the FILE > DELETE option. Please note
that if you delete records from a prior fiscal/calendar period and you re-run
your cash reports for those periods, the reports will not match the reports
you ran earlier for those periods.  
  
If you will be using [ RECON.E ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/CASH-E-1/RECON-E) to reconcile your bank statements, it is recommended that a deposit id be entered on all cash receipts. This will help matching the deposit amounts on the statement to separate deposits displayed on the [ RECON.E ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/CASH-E-1/RECON-E) screen. Therefore, when assigning deposit ids in CASH.E3, the same deposit id may be used for multiple cash records if they will be part of the same deposit made into the bank account. 

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the accounts receivable control record ( [ AR.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/AR-CONTROL) ), and entry of the general ledger account numbers to be referenced. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />