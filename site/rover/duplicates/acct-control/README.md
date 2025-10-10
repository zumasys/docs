##  Accounting Control Record Entry (ACCT.CONTROL)

<PageHeader />

**Form Details**  
[ Defaults ](../../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/README.md)   
[ Bank Accounts ](../../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-2/README.md)   
[ AR Collection ](../../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-3/README.md)   
[ Vendor ](../../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-4/README.md)   
[ Change History ](../../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-5/README.md)   

**Purpose**  
The ACCT.CONTROL procedure is used to define default information which will be
used by the accounting processes (i.e. Accounts Payable and Accounts
Receivable).  
  
Specifically, the aging days and column headers for the aging reports must be
defined. Since the data is not actually stored in a "bucketed" format, when
you change the fields in this procedure, the aging reports will change the
next time you run them. The last two bucketss (4 and 5) will be summarized
into one on the a/r statements due to spacing restrictions.  
  
On the BANK ACCOUNTS tab in this procedure, you can enter in the names and accounts of the banks that will be used in banking transactions. If present, the names and accounts will print on the deposit slips that are generated via [ CASH.F1 ](../../AR-OVERVIEW/AR-REPORT/CASH-F1/README.md) . 

**Frequency of Use**  
The entries in this procedure must be loaded prior to using the aging reports.
This is generally done as part of setting up the system. The entries may be
changed, after that time, as required.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />