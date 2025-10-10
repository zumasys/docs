##  Invoice E-Form Printing (AR.F4)

<PageHeader />

**Form Details**  
[ Form Details ](AR-F4-1/README.md)   

**Purpose**  
The AR.F4 procedure is used to print / reprint invoices on blank paper using a PDF background. Any AR item, whether it came from the shipments process, was entered through [ AR.E ](../../AR-ENTRY/AR-E/README.md) , or was created through [ ARR.P1 ](../../AR-PROCESS/ARR-P1/README.md) may be selected and printed. If invoices are printed using the [ SHIP.F2 ](../../../MRK-OVERVIEW/MRK-REPORT/SHIP-F2/README.md) or [ SHIP.F5 ](../../../MRK-OVERVIEW/MRK-REPORT/SHIP-F5/README.md) procedures, then the AR.F4 process need only be run when a reprint of an invoice is required. 

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of the selected Shipment reocrds ( [ SHIP.E ](../../../MRK-OVERVIEW/MRK-ENTRY/SHIP-E/README.md) or [ SHIP.E2 ](../../../MRK-OVERVIEW/MRK-ENTRY/SHIP-E2/README.md) ). 

**Data Fields**

**PO Number** The customer purchase order number associated with the shipment.  
**Invoice No** The invoice number assigned to the shipment.  
**Ship No** The shipment number which is made up of the sales order number
followed by a dash and a sequential number. For items created in the accounts
receivable module, this field will be blank.  
**Type** The user defined sales order type code. For items created in the
accounts receivable module, this field will be blank.  
**Date** The shipment date.  
**Page** The page number.  
**Waybill No** The waybill number assigned to the shipment.  
**Sold To** The name and address of the customer who purchased the items.  
**Ship To** The name and address of the location to which the items are to be
shipped.  
**Representative** The name of the sales rep associated with the invoice.  
**Terms** The terms of payment which apply to the invoice.  
**Contact** The name of the person at the customer to be contacted on matters
regarding the invoice.  
**Phone** The telephone number of the customer.  
**Ship Via** The method of shipment (carrier) to be used in sending the items.  
**F.O.B.** The location at which responsibility for the materials shipped
passes from you to the customer.  
**Item** The line item numbers.  
**Part Number** The part number of the item being billed.  
**Description** The description of the item being billed.  
**Notes** Contains all notes associated with the invoice.  
**UM** The unit of measure in which the materials are being priced and
delivered.  
**Date** The dates on which the associated items were shipped.  
**Quantity** The quantity billed on the associated date.  
**Unit Price** The price to be paid for each unit of the associated item.  
**Ext Price** The result of multiplying the quantity by the unit price.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />