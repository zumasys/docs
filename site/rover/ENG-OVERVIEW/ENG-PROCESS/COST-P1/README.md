##  Cost Rollup Process (COST.P1)

<PageHeader />

**Form Details**  
[ Form Details ](COST-P1-1/README.md)   

**Purpose**  
The COST.P1 procedure rolls up the costs for each part number in the parts master file. Material, labor and overhead costs are calculated and loaded as part of the process. The user may specify if the current or book costs are to be rolled up and if all or only specified part numbers are to be processed. Normally only current costs are rolled up and then rolled over via the [ COST.P2 ](../COST-P2/README.md) procedure. The ability to rollup book standard costs is available primarily for the purpose of introducing new products prior to the formal rollup and rollover of current costs.   
  
Costs are rolled up based on the low level code by processing the parts at
each level beginning at the lowest and continuing until the top level is
reached. Therefore, if you are rolling up only specified part numbers it is
assumed that the costs for any sub-assemblies or components have already been
rolled up. The costs are calculated as follows:  
  
  
Total Cost The sum of all top level and sub level costs.  
  
  
Material If the part identifies a bill of material then  
the cost is derived by taking the total of all  
component material costs (excluding assemblies  
but including the material costs of phantoms)  
on the bill of material. Component part costs  
are entered directly by the user via [ COST.E ](../../ENG-ENTRY/COST-E/README.md) .   
  
  
Labor If a routing record is referenced for the assembly  
then labor costs are calculated based on the hours  
in the routing, divided by the standard lot size,  
and multiplied by the rates defined in the work  
center records. Otherwise the entry made by the  
user through [ COST.E ](../../ENG-ENTRY/COST-E/README.md) is used.   
  
  
Outside Processing This amount is entered directly by the user  
through [ COST.E ](../../ENG-ENTRY/COST-E/README.md) .   
  
  
Fixed Overhead If a routing is present then this amount is  
the sum of all of the labor amounts for each  
work center multiplied by the work center fixed  
overhead by the user via [ COST.E ](../../ENG-ENTRY/COST-E/README.md) multiplied   
by the default fixed overhead percentage.  
  
  
Variable Overhead If a routing is present then this amount is  
the sum of all of the labor amounts for each work  
center multiplied by the work center variable  
overhead percent. Otherwise it is the labor amount  
entered by the user via [ COST.E ](../../ENG-ENTRY/COST-E/README.md) multiplied by the   
default variable overhead percentage.  
  
  
Material Overhead This cost is derived by first adding together  
the material and outside processing costs. This  
amount is then divided by the standard lot size to  
obtain the fixed portion of the material costs. The  
first mount is then used again and multiplied by the  
variable overhead percentage to obtain the variable  
amount. The fixed and variable amounts are then  
added together.  
  
Freight If the part identifies a bill of material then  
the cost is derived by taking the total of all  
component freight costs (excluding assemblies  
but including the freight costs of phantoms)  
on the bill of material. Component part freight costs  
are entered directly by the user via [ COST.E ](../../ENG-ENTRY/COST-E/README.md) . 

**Frequency of Use**  
The rollup procedure may be run as often as required if current costs are
being processed since it does not affect the book standards used to value
inventory. The same holds true for book standards to the degree that the
resultant changes in inventory values can be properly reflected through manual
entries to the general ledger.  
  
You should always run this procedure prior to running the cost rollover procedure ( [ COST.P2 ](../COST-P2/README.md) ). 

**Prerequisites**  
All of the parts and bill of material records to be included in the rollup must be entered through the [ PARTS.E ](../../ENG-ENTRY/PARTS-E/README.md) and [ BOM.E ](../../ENG-ENTRY/BOM-E/README.md) procedures as well as the material costs for each component part through [ COST.E ](../../ENG-ENTRY/COST-E/README.md) . If you want the system to calculate the labor costs based on routing file data then you must also enter all of the appropriate routing records with the [ ROUTING.E ](../../../PRO-OVERVIEW/PRO-ENTRY/ROUTING-E/README.md) procedure, otherwise you may enter a labor amount directly with the [ COST.E ](../../ENG-ENTRY/COST-E/README.md) procedure.   
  
Since the cost rollup relies on the low level code in the parts master to determine the order in which the parts are to be processed you must insure that these low level codes reflect the current product structure. The [ PARTS.P4 ](../PARTS-P4/README.md) procedure generates the low level codes. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />