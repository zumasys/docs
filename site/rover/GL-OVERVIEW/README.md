##  General Ledger Overview

<PageHeader />

[ Data Entry Procedures ](GL-ENTRY/README.md) | [ Reports and Inquiries ](GL-REPORT/README.md) | [ Update Processes ](GL-PROCESS/README.md)

**Purpose**  
The General Ledger module provides the ability to capture and report financial
information which has occurred either by other modules in the system, or by
manually entering transactions from outside the system. While there are some
standard, predefined reports such as a trial balance, the strength of this
module is the ability to design and develop reports through the GLRPT report
framework procedures.  
  
This module provides the ability to maintain a chart of accounts, budgets,
user defined fiscal periods and journal entries made either directly through a
data entry procedure, or posted from register in the financial modules.

**Prerequisites**  
None.

**Data Files**  
There are six primary data files which maintain the data directly associated
with the module.  
  
The Chart of Accounts file (GLCHART) maintains one record for each account number to be used. They are entered individually through the [ GLCHART.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) procedure. The structure of the account number is completely user defined.   
  
The journal transaction file (GLTRANS) maintains one record for each journal entry made. These records are either entered through the [ GLTRANS.E ](../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E) procedure, created as a result of reversing a journal ( [ GLTRANS.E2 ](GLTRANS-E2/README.md) ) or created by the module interface procedure ( [ GLINT.P1 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL/GL-CONTROL-1/GLINT-P1) ). Each record contains a list of debits and credits to be made and must balance before filing.   
  
The fiscal year definition file (FY) maintains one record for each fiscal year
required. Fiscal years and periods are completely user defined with any number
of periods required. A record for each fiscal year is required before
processing in that year.  
  
The report framework file (GLRPT) contains one record for each financial
report developed. These reports are user defined in terms of content, in that
the user is allowed to define which account numbers and amounts are to appear
on the report and what totals are to be calculated.  
  
The general ledger balance file (GLBAL) maintains one record for each account
number within one fiscal year. For each of these records, an amount is carried
for each fiscal period defined in that year. For example, if the sales account
number is 100-500 and the current fiscal year is 1991, then a record will
exist 100-500*1991. Within this record one value will be stored for each
fiscal period in 1991 which contains the current balance of the account number
for that period. Another field is stored in this file which contains the
budgets for each fiscal period, if any. With the exception of the budget
information and the beginning balance field, this file is completely system
controlled and no user update is allowed.  
  
The interface file (GLINT) is a holding file for module interface records
which are processed. Each record contains the total amount, by account number,
which will be posted to an account number for a fiscal period. When these
records are posted to general ledger (creating journal entries) they are
deleted from the file.

**System Interface**  
This module contains interfaces to all modules which either reference an
account number, or from which amounts will be posted via the interface
procedures.

**User Interface**  
The user interface to the module consists of data entry procedures to enter
chart of accounts, journal entries, budgets, report frameworks, standard
reports and inquiries, and batch update procedures. Access to these procedures
is controlled by the user's security profile. For example, some users may be
allowed to enter budgets while others may only be allowed to make changes to
existing records. Some users may only be allowed to look at the data without
the ability to change it, and some may not even be able to access the
procedure. Access to batch procedures is usually restricted to use by only the
system administrator since these are usually run overnight.

**Setup Procedures**  
There are three setup processes which must be performed prior to beginning the normal flow of activities. The first is the definition of the fiscal year ( [ FY.E ](../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E/GLTRANS-E-1/FY-E) ). At a minimum, the current fiscal year must be entered prior to using the general ledger module. Chart of account records must also be entered ( [ GLCHART.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) ). These are required not only for this module, but for use of any module, since they all require the entry and verification of an account number in one form or another. The general ledger control record ( [ GL.CONTROL ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GL-CONTROL) ) must also be setup before normal activities may begin. 

**Flow of Activities**  
The flow of processing for the general ledger module originates from two places. First, journal entries may be made directly with the [ GLTRANS.E ](../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E) procedure. This allows the entry of adjustments to automatically posted amounts, as well as utilizing the module as a stand alone module if desired. If the general ledger module is to be one of the first modules implemented, then this stand alone method will be used until all financial modules are implemented. The second source of input to this module is the interface file and records which are created from the register files in the various modules.   
  
The entry of the chart of accounts ( [ GLCHART.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E) ) and the fiscal year ( [ FY.E ](../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/AR-E-1/CASH-E/recon-e/RECON-E-4/GLTRANS-E/GLTRANS-E-1/FY-E) ) must be done prior to utilizing this module. Optionally, budgets and beginning balances may be entered directly into the GLBAL file. Beginning balances may also be entered through journal entries into the prior period, if desired.   
  
At some point in time it may be appropriate purge some of the older journal entries from the system. This is done with the [ GLTRANS.P2 ](GLTRANS-P2/README.md) procedures. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />