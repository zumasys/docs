## Currency Exchange Rate Table (CURRENCY.CONTROL)
<PageHeader />

**Form Details**
[General](../CURRENCY-CONTROL-1/README.md)

**Purpose**
The CURRENCY.CONTROL procedure is used to define exchange rates between the
domestic currency and foreign currencies which may be used in the system
within order entry ([SO.E](../SO-E/README.md)) and purchasing ([PO.E](../PO-E/README.md)). They
can also be used in invoicing, AP entry, cash posting, and check processing.
The exchange rates are carried in the individual order records based on the
exchange rate within this table at the time the order is entered. For example,
EURO might be the code for the single European currency with an exchange rate
of .7806 Euro to the dollar.

The exchange rates should be updated on a regular basis. A batch process
exists to mass update open orders with foreign currency codes, to reflect
updated exchange rates if desired.

**Frequency of Use**
As required. Only needed for use when placing orders or purchasing in foreign
currency.

**Prerequisites**
None.

<badge text= "Version 8.10.57 " vertical="middle" />

<PageFooter />
