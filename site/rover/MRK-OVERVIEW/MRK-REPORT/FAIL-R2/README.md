##  Failure Statistics Report (FAIL.R2)

<PageHeader />

**Form Details**  
[ Form Details ](FAIL-R2-1/README.md)   

**Purpose**  
The FAIL.R2 procedure provides a listing of the failures reported for returned products broken down by the failure codes defined in the [ FAIL.CONTROL ](../../../../rover/MRK-OVERVIEW/MRK-ENTRY/FAIL-CONTROL) procedure. The product groups which may be listed are defined in the [ MTBF.CONTROL ](../../../../rover/MRK-OVERVIEW/MRK-ENTRY/MTBF-CONTROL) procedure. You may elect to list a single product group or a combination of all groups.   
  
The report will list the number of failures reported for any given failure
code as well as the percentage it represents of all other failures. If you
choose to print only one product group the percentages are based upon the
number of returns for that product group only, not a percentage of all
products. It should also be noted that the percentages are unlikely to total
to 100 percent since the RMA procedure allows the entry of multiple failure
codes for a single return.

**Frequency of Use**  
As required.

**Prerequisites**  
The product groups in the [ MTBF.CONTROL ](../../../../rover/MRK-OVERVIEW/MRK-ENTRY/MTBF-CONTROL) procedure must be defined, and the failure codes must be defined in the [ FAIL.CONTROL ](../../../../rover/MRK-OVERVIEW/MRK-ENTRY/FAIL-CONTROL) procedure. [ FAIL.R1 ](../../../../rover/MRK-OVERVIEW/MRK-REPORT/FAIL-R1) must have been run to summarize the failure statistics from RMA reocrds. 

**Data Fields**

**Fail Code** The failure code as defined in [ FAIL.CONTROL ](../../../../rover/MRK-OVERVIEW/MRK-ENTRY/FAIL-CONTROL) .   
**Description** The description of the associated failure code.  
**Quantity Failed** The number of units which were assigned with the failure
code.  
**Percentage of Failures** The percentage of all units returned which were
assigned the failure code.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />