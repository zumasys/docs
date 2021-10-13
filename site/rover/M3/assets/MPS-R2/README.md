## Master Production Schedule Dollarized by Period (MPS.R2)
<PageHeader />

**Form Details**
[Form Details](../MPS-R2-1/README.md)

**Purpose**
This report provides a period based view of the Master Production Schedule
(MPS). Ten monthly periods are shown based on a user specified start period,
with a prior and future column representing all periods before and after the
ten periods. The report list each MPS part number with the quantity, extended
cost, and hours associated with each period.

There are several options available including which planning group to use,
which costing method, fiscal or calendar periods, and how the report is to be
sorted. You may also request a summary view which displays only totals.

**Frequency of Use**
As required.

**Prerequisites**
[MPS.P1](../MPS-P1/README.md) must be run to generate the MPS report files.

**Data Fields**

| **Part**         | Each MPS part number.                                          |
| ---------------- | -------------------------------------------------------------- |
| **Model Number** | The model number assigned to the part.                         |
| **Qty**          | The quantity of the part due to be completed in the associated |
period.
**$**|  The dollar value (cost) of the part due to be completed in the
associated period.
**Hrs**|  The number of extended hours identified on the routing for the part
.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
