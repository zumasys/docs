##  Costed Multi-Level Bill of Material Comparison to Average (BOM.R10)

<PageHeader />

**Form Details**  
[ Form Details ](BOM-R10-1/README.md)   

**Purpose**  
This report compares the inventory average cost for an assembly to the calculated cost of an indented bill of material such as [ BOM.R4 ](../../../../rover/ENG-OVERVIEW/ENG-REPORT/BOM-R4) produces. There is an option to run for a range of bill of material numbers or to run all bill of materials. There is also an option to enter a variance percent, so that only those BOM's with a cost variance between the two costs are listed.   
  
This report only applies if you are using a cost method of average or lot
cost.

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of the specified Bill of Material records ( [ BOM.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E/BOM-E) ). 

**Data Fields**

**BOM ID** The part number of the bill of material item.  
**Desc** The first line of the description for the associated part number.  
**BOM Avg. Cost** The calculated cost for the part using the indented bill of
material, summing up all the individual average costs for the parts within the
BOM structure.  
**Inv Avg Cost** The average cost recorded from inventory transactions for the
specified cost group.  
**Variance Pct** The variance between the two costs, in percentage terms.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />