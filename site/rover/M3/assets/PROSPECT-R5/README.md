## Prospect Pipeline Report (PROSPECT.R5)
<PageHeader />

**Form Details**
[Form Details](../PROSPECT-R5-1/README.md)

**Purpose**
The PROSPECT.R5 procedure is used to create a pipeline report based upon the
status of Prospects. This report lists in prospect status, then name sequence.
The user may select specific status codes and sales reps.

This report is in excess of 240 columns wide. It is intended to be used with
the Grid Viewer or exported to Excel.

**Frequency of Use**
As required.

**Prerequisites**
None.

**Data Fields**

| **Status**             | The status of the prospect.                |
| ---------------------- | ------------------------------------------ |
| **Status Description** | The description of the status, as found in |
[PROSPECT.CONTROL](../PROSPECT-CONTROL/README.md).
**Name**|  The name of the prospect.
**City**|  The city where the prospect is located.
**State**|  The state in which the prospect is located.
**Date**|  The date which the prospect was entered.
**Rep**|  The sales rep assigned to the prospect.
**Rep Name**|  The name of the sales rep, from the REP file.
**Source**|  The source of the prospect.
**Stage**|  The stage(s) as found in [PROSPECT.E](../PROSPECT-E/README.md).
**Units**|  The number of units for each stage.
**Ext Amount**|  The extended price for each stage.
**Est Close**|  The estimated close of each stage.
**Prob**|  The estimated probability of close of each stage.
**Stat**|  The status of each stage.
**Notes**|  The header notes from [PROSPECT.E](../PROSPECT-E/README.md).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
