## Rebate Control Table (REBATE.CONTROL)
<PageHeader />

**Form Details**
[Form Details](../REBATE-CONTROL-1/README.md)

**Purpose**
The REBATE.CONTROL procedure is used to define default information which will
be used in creating customer rebates. Multiple types of rebates can be set-up
with different frequencies. For example, you can set-up one type of rebate
which will be added the invoice and another type which will be given at the
end of each quarter. For "invoice" type rebates, the rebate amount will
automatically be added to the invoice for you when the invoice is created via
[SHIP.E2](../SHIP-E2/README.md). For other types of rebates, reports can be created to
determine the rebate amount the customer is entitled to for a given period.

**Frequency of Use**
The entries in this procedure must be set-up before the specific customer
rebates can be defined in [CUST.E](../CUST-E/README.md).

**Prerequisites**
The account numbers must exist in the GLCHART file. New account numbers can be
created via [GLCHART.E](../GLCHART-E/README.md).

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
