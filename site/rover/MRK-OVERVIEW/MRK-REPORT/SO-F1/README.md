##  Sales Order Form Printing (SO.F1)

<PageHeader />

**Form Details**  
[ Form Details ](SO-F1-1/README.md)   

**Purpose**  
The SO.F1 procedure is used to print sales orders on pre-printed forms. One of
these forms is usually sent to the customer, while others may be maintained on
file as a legal copy of the agreement between you and the customer. The user
determines which sales orders are to be printed by entering their numbers.  
  
The sales order form includes information about all of the shipments which
have processed against it. Therefore, reprints run at a later date may not
look exactly like previous copies.

**Frequency of Use**  
Sales order forms may be printed as required and may be also be re-printed at
any time.

**Prerequisites**  
Entry of the selected sales orders ( [ SO.E ](../../MRK-ENTRY/SO-E/README.md) ). 

**Data Fields**

**PO No** The customer purchase order number.  
**SO No** The internal sales order number assigned to the order.  
**Type** The user defined type code assigned to the order.  
**Quote No** The original quote number referenced by the order.  
**Date** The date on which the sales order was entered.  
**Page** The current page number.  
**Sold To** The name and address of the customer who placed the order.  
**Ship To** The name and address where the items referenced on the order are
to be shipped.  
**Representative** The name of the sales rep assigned to the customer.  
**Terms** The terms of payment which apply to the sales order.  
**Contact** The name of the person at the customer to be contacted on matters
regarding the sales order.  
**Phone** The telephone number of the customer.  
**Ship Via** The method of shipment (carrier) to be used in sending the items.  
**F.O.B.** The location at which responsibility for the materials shipped
passes from you to the customer.  
**Item** The line item numbers.  
**Part Number** The internal part number ordered.  
**Description** The description of the item ordered.  
**Notes** Contains all notes associated with the sales order.  
**Due Date** The dates on which the associated items are supposed to be
shipped to the customer.  
**Quantity** The quantity scheduled to be shipped on the associated date.  
**Shipped** The total quantity of items shipped to date against the sales
order.  
**Balance** The remaining open balance for the line item.  
**Unit Price** The price to be paid for each unit of the associated item.  
**Ext Price** The result of multiplying the total quantity ordered by the unit
price.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />