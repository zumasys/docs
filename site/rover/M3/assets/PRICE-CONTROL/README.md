## Price Code Definition (PRICE.CONTROL)
<PageHeader />

**Form Details**
[Form Details](../PRICE-CONTROL-1/README.md)

**Purpose**
The PRICE.CONTROL procedure is used to define the valid pricing codes which
may be used within the system. Pricing codes appear in the customer master
entry ([CUST.E](../CUST-E/README.md)), sales order entry ([SO.E](../SO-E/README.md)) and price
entry ([PRICE.E](../PRICE-E/README.md)). When a price code is assigned to a customer it
indicates that the pricing used for products, as defined in the price file,
for the customer will correspond to the prices setup for that code. If no code
is specified, or a particluar part number does not have a price for the code,
the standard price will be used. Price codes will default from the customer
record into a sales order but may be changed on each order as required.

It is important that these entries be consistent over time. You should not
delete a price code unless it is not currently being referenced in the system.

**Frequency of Use**
These entries are usually entered when the system is first being setup since
they are required before some other procedures may be used. After the initial
setup it is used as required to add new codes.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
