##  Cash Transfer Entry (CASH.E5)

<PageHeader />

**Form Details**  
[ Form Details ](CASH-E5-1/README.md)   

**Purpose**  
The CASH.E5 procedure is used to transfer money from one account to another. The procedure consists of one screen, of which the left portion is the required information including amount, from account, to account, and clearing account. The clearing account will be defaulted from [ AR.CONTROL ](../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/AR-CONTROL) if it has been entered there. The right-hand section of the screen has optional entry fields such as check number, deposit ID, bank no, and AP check number.   
  
Two records will be created - a miscellaneous cash record and a CHECK record.
AR and AP registers will be created. You may optionally enter the check number
that will be created to offset the cash entry. This check number must not
exist in the CHECKS file. If not entered, a number will be generated prefixed
by "T" to use as the check ID and will be referenced in the notes section of
the cash record.  
  
If you will be using [ RECON.E ](../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/CASH-E-1/RECON-E) to reconcile your bank statements, it is recommended that a deposit id be entered on all cash receipts. This will help matching the deposit amounts on the statement to separate deposits displayed on the [ RECON.E ](../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/CASH-E-1/RECON-E) screen. Therefore, when assigning deposit ids in CASH.E5, the same deposit id may be used for multiple cash records if they will be part of the same deposit made into the bank account. 

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the accounts receivable control record ( [ AR.CONTROL ](../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/CHECKS-E4/AR-CONTROL) ), and entry of the general ledger account numbers to be referenced. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />