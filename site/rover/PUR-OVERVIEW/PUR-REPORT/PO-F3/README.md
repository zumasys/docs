##  Purchase Order EForm Printing (PO.F3)

<PageHeader />

**Form Details**  
[ Form Details ](PO-F3-1/README.md)   

**Purpose**  
The [ PO.F2 ](PO-F2/README.md) procedure is used to print purchase order forms on blank paper using a predefined PDF document as the form background. One copy is usually sent to the vendor, while others may be maintained on file as a legal copy of the agreement between you and the vendor. The user determines which purchase orders are to be printed by entering their numbers, a date range or range of numbers.   
  
The purchase order form includes information about all of the receipts which
have processed against it. Therefore, reprints run at a later date may not
look exactly like previous copies.  
  
You may designate that the user be given the option of outputing the sales order form to print, email, fax etc. through the [ PO.CONTROL ](../../PUR-ENTRY/PO-CONTROL/README.md) procedure. You may also specify footer text that will cause one copy for each footer specified to be printed. 

**Frequency of Use**  
Purchase order forms may be printed as required and may be also be reprinted
at any time.

**Prerequisites**  
The path to the PDF file to be used as the form background must be specified in the [ FORM.CONTROL ](../../../ACE-OVERVIEW/ACE-ENTRY/FORM-CONTROL/README.md) procedure. 

**Data Fields**

**PO Number** The number of the purchase order whose data appears on the form.  
**Vendor** The name and address of the vendor who is supplying the items on
the purchase order.  
**Ship To** The name and address of the location to which the items are to be
shipped.  
**Buyer** The name of the buyer who placed the purchase order.  
**Terms** The terms of payment which apply to the purchase order.  
**Contact** The name of the person at the vendor to be contacted on matters
regarding this purchase order.  
**Phone** The telephone number of the vendor.  
**Ship Via** The method of shipment (carrier) to be used in sending the items.  
**F.O.B.** The location at which responsibility for the materials shipped
passes from the vendor to you.  
**Li#** The line item numbers.  
**UM** The unit of measure in which the materials are being priced and
delivered.  
**Sched Date** The dates on which the associated items are supposed to be
received from the vendor.  
**Sched Quantity** The quantity scheduled to be received on the associated
date.  
**Received** The total quantity of items received to date against the purchase
order.  
**Balance** The remaining open balance for the line item.  
**Part Number** The internal part number ordered.  
**Description** The description of the item ordered including the vendors part
number.  
**Notes** Contains all notes associated with the purchase order.  
**Unit Price** The price to be paid for each unit of the associated item.  
**Ext Price** The result of multiplying the total quantity ordered by the unit
price.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />