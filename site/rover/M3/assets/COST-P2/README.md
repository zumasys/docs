## Cost Rollover Process (COST.P2)
<PageHeader />

**Form Details**
[Form Details](../COST-P2-1/README.md)

**Purpose**
The COST.P2 procedure is used to rollover the standard costs in the COST file.
The standard, or book costs, are moved into the previous cost fields and the
current costs are moved into the standard cost fields. The current costs are
not altered. The user may specify if accounting transactions are to be created
to reflect any change in the inventory value as a result of a change in costs.
The procedure determines this by checking the inventory files for the presence
of an on-hand balance of the affected part and multiplying it by the
difference between the current and standard costs.

**Frequency of Use**
The rollover process is usually run only once a year at the close of a fiscal
year. It is also used during system implementation to initialize the standard
costs after they have been entered into the system via the current cost fields
with [COST.E](../COST-E/README.md).

**Prerequisites**
A cost rollup ([COST.P1](../COST-P1/README.md)) should always be performed prior to
running this procedure.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
