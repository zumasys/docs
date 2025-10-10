##  Calculate CUSTARBAL - AR Balance History (AR.P6)

<PageHeader />

**Form Details**  
[ Form Details ](AR-P6-1/README.md)   

**Purpose**  
The AR.P6 procedure calculates the daily AR balance maintained in the
CUSTARBAL file for determining the highest AR balance for each customer over a
period of time.  
The number of days of AR balance history to be kept is entered in the [ ACCT.CONTROL ](../../../AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/README.md) field "Balance History Days". For instance, to see the highest AR balance by customer over the past year, enter 365. It will be a rolling period of time. Note, if you increase the time period, the missing days cannot be automatically recaptured. It will build up to the # days specified. If you decrease the number, the next time AR.P6 runs, it will adjust the data accordingly. AR.P6 should be included in the nightly batch run.   
The highest AR balance for the time period specified is displayed in [ CUST.Q ](../../AR-REPORT/CUST-Q/README.md) . 

**Frequency of Use**  
This process should be run daily.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />