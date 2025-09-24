##  Executive Control Definitions (EXEC.CONTROL)

<PageHeader />

**Form Details**  
[ Form Details ](EXEC-CONTROL-1/README.md)   

**Purpose**  
The EXEC.CONTROL procedure is used to define information which will be used by
the Executive Business Summary inquiry and reports. The information entered in
this procedure is utilized to calculate the Projected Accounts Receivable and
Projected Accounts Payable amounts.

**Frequency of Use**  
The entries in this procedure must be loaded prior to executing the [ EXEC.P1 ](../../EXEC-REPORT/EXEC-Q/EXEC-P1/README.md) procedure for a specific date. Depending upon the manner in which the data is entered, daily updates of this procedure may be required. This would be necessary for items such as the entry of a beginning cash balance as a projected AR item with a cutoff date of "-1". The amount entered would fall into the Past Due bucket and affect the projected cash figures into the future. 

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />