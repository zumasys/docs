##  Planning Bill Entry (PB.E)

<PageHeader />

**Form Details**  
[ Form Details ](PB-E-1/README.md)   

**Purpose**  
The PB.E procedure is used to define planning bills for use with the MPS
system. Planning bills allow you to build a multi-level structure that is
similar to that of a bill of material, in which each planning bill references
one or more items. Some of these items will be other planning bills that
reference their own set of items. The difference is that each item is
associated with a percentage instead of a quantity. The way in which this
percentage is applied depends on how you intend to use the planning bill.  
  
There are three different ways to utilize planning bills. You can generate
master schedule items at multiple levels, sales forecast at multiple levels,
or sales forecast at the top level and production forecast at lower levels.  
  
The method for generating multi-level master schedule or sales forecast items is the same. You define the planning bills at each level and specify the items with their associated percentages. Then you enter the dates and quantities you are projecting for the top level planning bills only, not the lower level bills. Then you run the [ PB.P1 ](../../MFG-PROCESS/PB-P1/README.md) procedure which generates either sales forecast or master schedule items based on the parameters you provide when the procedure is run. If you select the multi-level option then the percentages you defined will be used to generate the appropriate percentages for each date and quantitiy in the lower level bills.   
  
To generate sales forecast at the top level with production forecast at the lower levels you would follow the same procedure as described above except you must answer "No" to the multi-level option in [ PB.P1 ](../../MFG-PROCESS/PB-P1/README.md) . This will generate sales forecast for the items in the top level bill only. To generate the lower level production forecast you would answer "Yes" to the multi-level option in [ MPS.P1 ](../../MFG-PROCESS/MPS-P1/README.md) which will then use the data in the lower level bills against unconsumed forecast from the higher levels. The difference between the two methods is that the production forecast method allows you to use the planning bills to forecast lower level items such as product options for only the portion of the of sales forecast that has not already been consumed by actual sales. When using planning bills in this fashion, the record IDs for each bill must be defined as assemblies in the parts master.   
  
Note: Make sure that you do not answer "Yes" to the multi-level option  
in both [ PB.P1 ](../../MFG-PROCESS/PB-P1/README.md) and [ MPS.P1 ](../../MFG-PROCESS/MPS-P1/README.md) . This will inflate the forecast at lower   
levels.

**Frequency of Use**  
This process is usually performed once at the beginning of each planning
cycle, with adjustments made as required.

**Prerequisites**  
Part numbers must be defined in [ PARTS.E ](../../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/README.md) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />