##  Sales Order Quote Entry (SOQUOTE.E)

<PageHeader />

**Form Details**  
[ Header ](SOQUOTE-E-1/README.md)   
[ Summary Lines ](SOQUOTE-E-2/README.md)   
[ Detail Lines ](SOQUOTE-E-3/README.md)   
[ Ship/Tax ](SOQUOTE-E-4/README.md)   
[ Attachments ](SOQUOTE-E-5/README.md)   
[ Change History ](SOQUOTE-E-6/README.md)   

**Purpose**  
SOQUOTE.E provides the ability to enter multi-line sales quotations. You may specify an existing customer or prospect as the receipient, or enter name, address and contact information for someone who is not already defined. If the quote results in a sale, it may be used in the sales order entry procedure ( [ SO.E ](../SO-E/README.md) ) to automatically load the quote data into the order. When the sales order is filed the quote record is updated with the sales order number to indocate that it became an order. Quotes can be printed with the [ SOQUOTE.F1 ](../../MRK-REPORT/SOQUOTE-F1/README.md) procedure.   
  
There is another procedure available called [ QUOTE.E ](../QUOTE-E/README.md) which can be used to quote unique make to order items that require the generation of a cost estimate to determine pricing. 

**Frequency of Use**  
As required.

**Prerequisites**  
Setup of the [ MRK.CONTROL ](../MRK-CONTROL/README.md) procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />