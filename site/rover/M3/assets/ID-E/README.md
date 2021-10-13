## Independent Demand Entry (ID.E)
<PageHeader />

**Form Details**
[Form Details](../ID-E-1/README.md)

**Purpose**
The ID.E procedure is used to define independent demand that is used as part
of the MRP planning process. Independent demand is used in situations where
inventory is being consumed outside of the standard production forecast. An
example of this type of cunsumption is the need to maintain and deliver spare
parts for service. By projecting the requirements of these lower level parts
and entering them as independent demand, the planners using MRP to schedule
production and purchases are aware of the requirements and can schedule
accordingly. If a part has an independent demand, it will be shown in
[WO.E](../WO-E/README.md) when a work order is being added for the part. If the ID is
selected, then [WO.E](../WO-E/README.md) will use the ID as a default for creating the
WO information. Upon saving the WO, the WO information will be tied to the
independent demand item, and will appear on ID.E.

**Frequency of Use**
The frequency of use for this procedure depends on factors such as lead time
and how far in advance you can forecast your requirements. In general the
dates and quantities must be updated often enough to keep ahead of the lead
time required for the item.

**Prerequisites**
Plan Group must be defined on [PLAN.CONTROL](../PLAN-CONTROL/README.md). Part numbers
must be defined in [PARTS.E](../PARTS-E/README.md).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
