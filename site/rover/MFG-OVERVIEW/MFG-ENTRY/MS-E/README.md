##  Master Schedule Entry (MS.E)

<PageHeader />

**Form Details**  
[ Form Details ](MS-E-1/README.md)   

**Purpose**  
The MS.E procedure is used to define master schedule items used in the MPS
planning process. The master schedule defines the planned production for the
factory. Until a master schedule item or work order is present there is no
demand shown for lower level assemblies and components, even if there is
demand at the top level. This is a primary difference between the MPS and MRP
processes. MRP will inform you of suggested changes to the schedule when
demand changes, and assumes that you will go along with these suggestions and
change the schedule. MPS informs you of the changes but does not assume you
will follow them. You have to actually make the change before it affects lower
levels. This allows tighter control of the load on the factory.  
  
Using MS.E you lay-out the planned completion dates and quantities for the item. If you use [ PLAN.E ](../PLAN-E/README.md) or [ WO.E ](../../../PRO-OVERVIEW/PRO-ENTRY/WO-E/README.md) screens to release master schedule items as work orders, then each date and quantity that is consumed will be flagged so that it no longer appears on the MPS since it has been replaced by a firm order. If you enter work orders on [ WO.E ](../../../PRO-OVERVIEW/PRO-ENTRY/WO-E/README.md) without selecting a master schedule item, you will need to remove the planned dates from the MS.E manually.   
  
Master schedule items may also be created automatically based on planning bills. (See [ PB.E ](../PB-E/README.md) and [ PB.P1 ](../../MFG-PROCESS/PB-P1/README.md) ) 

**Frequency of Use**  
As required.

**Prerequisites**  
Plan Group must be entered on [ PLAN.CONTROL ](../PLAN-CONTROL/README.md) . Part numbers must be defined in [ PARTS.E ](../../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/README.md) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />