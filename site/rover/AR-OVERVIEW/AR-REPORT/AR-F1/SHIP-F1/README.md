##  Invoice/Packing Slip Printing (SHIP.F1)

<PageHeader />

**Form Details**  
[ Form Details ](SHIP-F1-1/README.md)   

**Purpose**  
The SHIP.F1 procedure is used to print invoice/packing slips on pre- printed forms. One copy of this form is usually sent along with the materials as the packing slip with another copy sent separately as the invoice, and the remaining copies for internal files. Another approach is to use this procedure for printing the packing slip only and using the [ AR.F1 ](../../../../../rover/AR-OVERVIEW/AR-REPORT/AR-F1) procedure to print invoices as a separate activity. The user determines which shipments are to be printed by entering their numbers.   
  
The [ SHIP.F3 ](SHIP-F3/README.md) procedure is available to print the same form except without the dollar values shown. 

**Frequency of Use**  
Invoice/Packing slip forms may be printed as required and may be also be re-
printed at any time.

**Prerequisites**  
Entry of the selected Shipment reocrds ( [ SHIP.E ](../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E) or [ SHIP.E2 ](../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-4/SHIP-E/SO-P1/SHIP-E2) ). 

**Data Fields**

**PO Number** The customer purchase order number associated with the shipment.  
**Invoice No** The invoice number assigned to the shipment.  
**Ship No** The shipment number which is made up of the sales order number
follwed by a dash and a sequential number.  
**Type** The user defined sales order type code.  
**Date** The shipment date.  
**Page** The page number.  
**Waybill No** The waybill number assigned to the shipment.  
**Sold To** The name and address of the customer who purchased the items on
the shipment.  
**Ship To** The name and address of the location to which the items are to be
shipped.  
**Representative** The name of the sales rep associated with the shipment.  
**Terms** The terms of payment which apply to the invoice.  
**Contact** The name of the person at the customer to be contacted on matters
regarding the shipment.  
**Phone** The telephone number of the customer.  
**Ship Via** The method of shipment (carrier) to be used in sending the items.  
**F.O.B.** The location at which responsibility for the materials shipped
passes from you to the customer.  
**Item** The line item numbers.  
**Part Number** The part number of the item shipped.  
**Description** The description of the item shipped.  
**Notes** Contains all notes associated with the shipment.  
**UM** The unit of measure in which the materials are being priced and
delivered.  
**Date** The dates on which the associated items were shipped.  
**Quantity** The quantity shipped on the associated date.  
**Unit Price** The price to be paid for each unit of the associated item.  
**Ext Price** The result of multiplying the quantity shipped by the unit
price.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />