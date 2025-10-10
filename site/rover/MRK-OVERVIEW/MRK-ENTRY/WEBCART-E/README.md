##  Release Web Orders (WEBCART.E)

<PageHeader />

**Form Details**  
[ Form Details ](WEBCART-E-1/README.md)   

**Purpose**  
Orders generated from the web based shopping cart are stored in the WEBCART file awaiting approval through the [ SO.E ](../SO-E/README.md) procedure. You can approve these orders by bringing up [ SO.E ](../SO-E/README.md) and entering the web order id to load the order into a sales order. After that the order is processed like any other sales order. To do this however you need a listing of web orders and have to key in each order number. WEBCART.E makes this process easier by displaying a list of all web orders pending approval in the WEBCART file. You can click on the "OK" button associated with a order to automatically launch the [ SO.E ](../SO-E/README.md) procedure and load the order id into the order number field. After you save the order the [ SO.E ](../SO-E/README.md) procedure will close automatically and return you to the WEBCART.E procedure so you can process additional orders. 

**Frequency of Use**  
As required.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />