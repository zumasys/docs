##  Create Commission Precheck Records (COMM.P3)

<PageHeader />

**Form Details**  
[ Form Details ](COMM-P3-1/README.md)   

**Purpose**  
The COMM.P3 procedure is used to create Precomm records which will be used to
process and generate commission checks. One option is to select all
commissions to be paid as of a specified cutoff date. A second option is to
directly enter the commission items which are to be paid. All records created
when this procedure is run are assigned to a check run number, which is used
by supporting procedures such as the check printing process.  
  
The Precomm file is a 'hold' file for processing a commission check run. Its'
purpose is to allow the printing of checks in a 'work file'. This allows the
re-printing of a check run, when required due to problems such as data entry
error or printer jam, without having any affect on the COMM file until the
checks are actually posted.  
  
Any COMM items which are selected for payment are flagged so they will not be
processed again.

**Frequency of Use**  
As required.

**Prerequisites**  
Setup of the Commission Pay Account and Commission Expense Account field in [ ACCT.CONTROL ](../../AP-ENTRY/ACCT-CONTROL/README.md) procedure. It is highly recommended that the [ COMM.R4 ](../../AP-REPORT/COMM-R4/README.md) report be run to give visibility to the commissions which would be selected by this process when the cutoff date is used. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />