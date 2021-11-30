##  Failure Statistics Update (FAIL.P1)

<PageHeader />

**Form Details**  
[ Form Details ](FAIL-P1-1/README.md)   

**Purpose**  
The FAIL.P1 procedure builds the summarized failure statistics data used in
the calculation of Mean Time Between Failure (MTBF). The procedure summarizes
data from the shipment and RMA transactions into monthly records by model type
for the period you define as the month start and month end dates. It is very
important that the start and end dates represent the beginning and end of a
single monthly period to insure proper calculation of MTBF.  
  
Because a period of time may pass between the time RMAs are first entered into
the system and when the problem determination (e.g. failure codes) are entered
into the system, it is recommended that this procedure be run for a period
that is at least one month behind the current period to allow time for the
failure codes to be logged. For example, at the end of the month of April you
would run this procedure for the month of March (3-1 thru 3-31). You may want
to wait two or more months if your cycle time between RMA entry and problem
diagnosis is longer.  
  
If a period is summarized to early or if an error was made in the entry of the
start and end dates you may run the procedure again for the same period. The
procedure will rebuild the records for the period selected.

**Frequency of Use**  
This procedure may be run at any time, but is usually run as part of the month
end processing.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />