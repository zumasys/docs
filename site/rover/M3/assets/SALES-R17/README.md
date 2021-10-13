## Forecast to Sales Comparison (SALES.R17)
<PageHeader />

**Form Details**
[Form Details](../SALES-R17-1/README.md)

**Purpose**
This report displays the forecasted quantities versus the sales quantities.
The user specifies a calendar or fiscal year option. The report may be run in
detail format, displaying every part number, or only a summary version.

**Frequency of Use**
As required.

**Prerequisites**
The forecast must have been entered via the [SF.E](../SF-E/README.md) procedure.

**Data Fields**

| **Cat**         | The category of the part sold, as found in the parts file. |
| --------------- | ---------------------------------------------------------- |
| **Part.Number** | The part number sold.                                      |
| **Description** | The description of the part number, as it appears in the   |
parts file.
**Sale.Qty**|  The quantity sold/shipped to the customer. Returns are
processed as negative numbers.
**Sale.Amount**|  The total sale amount, quantity multiplied by the discounted
price.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
