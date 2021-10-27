##  Independent Demand Entry (ID.E)

<PageHeader />

**Form Details**  
[ Form Details ](ID-E-1/README.md)   

**Purpose**  
The ID.E procedure is used to define independent demand that is used as part of the MRP planning process. Independent demand is used in situations where inventory is being consumed outside of the standard production forecast. An example of this type of cunsumption is the need to maintain and deliver spare parts for service. By projecting the requirements of these lower level parts and entering them as independent demand, the planners using MRP to schedule production and purchases are aware of the requirements and can schedule accordingly. If a part has an independent demand, it will be shown in [ WO.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E) when a work order is being added for the part. If the ID is selected, then [ WO.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E) will use the ID as a default for creating the WO information. Upon saving the WO, the WO information will be tied to the independent demand item, and will appear on ID.E. 

**Frequency of Use**  
The frequency of use for this procedure depends on factors such as lead time
and how far in advance you can forecast your requirements. In general the
dates and quantities must be updated often enough to keep ahead of the lead
time required for the item.

**Prerequisites**  
Plan Group must be defined on [ PLAN.CONTROL ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/PO-E/PO-E-1/PLAN-CONTROL) . Part numbers must be defined in [ PARTS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />