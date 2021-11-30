##  Recalculate AR Balance in the Cust File (AR.P2)

<PageHeader />

**Form Details**  
[ Form Details ](AR-P2-1/README.md)   

**Purpose**  
The AR.P2 procedure recalculates the AR balance maintained in the customer
file. It will first clear all balances from the file and then read the open
balance of all AR items and update the CUST file.

**Frequency of Use**  
The AR balance is maintained automatically as AR items are entered or checks
are processed. Therefore, the only time you really need to run this procedure
is when the file has been corrupted or records have been purged from the AR
file.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />