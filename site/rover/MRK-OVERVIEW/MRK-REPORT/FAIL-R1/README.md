##  Observed MTBF Report (FAIL.R1)

<PageHeader />

**Form Details**  
[ Form Details ](FAIL-R1-1/README.md)   

**Purpose**  
The FAIL.R1 procedure is used to report the Mean Time Between Failure (MTBF)
for different products. A Chi Squared Distribution is used to calculate the
MTBF based upon data collected and summarized from RMAs and shipments.  
  
The procedure allows you to specify which model groups are to be included in
the report and the parameters to be used in performing the calculation. The
calculation parmeters allow you to specify the period of history to be used as
well as the confidence level.

**Frequency of Use**  
As required.

**Prerequisites**  
The parameters in the [ MTBF.CONTROL ](../../../../rover/MRK-OVERVIEW/MRK-ENTRY/MTBF-CONTROL) procedure must be defined, and data must have been summarized by the [ FAIL.P1 ](FAIL-P1/README.md) procedure. 

**Data Fields**

**Time Period** The number of months of historical shipment and return data
used in the calculation.  
**Through Month** The number corresponding to the calendar month of the year
which defines the last month of history data used.  
**Through Year** The year associated with the "Through Month".  
**Daily Operating Hours** The number of hours which were assumed as the amount
of time the product was in operation for each 24 hour period.  
**Operating Offset** The number of months that are assumed to have passed from
the time of shipment until the product is put into operation.  
**Confidence Level** The confidence level, stated as a percentage, used in the
calculation.  
**Model** The model code associated with the MTBF data as defined in the [ MTBF.CONTROL ](../../../../rover/MRK-OVERVIEW/MRK-ENTRY/MTBF-CONTROL) procedure.   
**Number Shipped** The number of units shipped within the time period
specified.  
**Operating Hours** The total number of operating hours calculated for the
units shipped within the time period.  
**Number Failed** The number of units which failed within the time period.  
**Lower Confidence Level** The number of hours that an individual unit can be
assumed to operate before a failure occurs (worst case).  
**Mean Confidence Level** The number of hours that an individual unit can be
assumed to operate before a failure occurs (on average).  
**Upper Confidence Level** The number of hours that an individual unit can be
assumed to operate before a failure occurs (best case).  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />