##  Shipment Confirmation (SHIP.E2)

<PageHeader />

##  Shipment Header

![](./SHIP-E2-1.jpg)

**Shipment Number** Shipment numbers are assigned automatically by the system
when the record is filed. If you are creating a new shipment you should leave
this prompt blank. If you want to make a change to an existing shipment you
should enter the full shipment record ID. The ID of a shipment record is made
up of the sales order number followed by a sequential number maintained for
each sales order. For example, the first shipment for sales order 123 would be
123-1, the second 123-2 etc.  
  
**Status** The status field contains the current status of the shipment
record. It will display one of the following codes:  
N - The items have not been shipped.  
S - The items have been shipped.  
P - The shipment has been posted and the accounts receivable record has been
created.  
If the status code is not already set to "P" then the user may enter the code "N" for new, or "S" for shipped. The "N" status sets the shipment as a new shipment just as the [ SHIP.E ](../../SHIP-E/README.md) procedure does, and does not create any inventory transactions. The "S" status will confirm the shipment by creating inventory transactions, and will be posted the next time the procedure [ SHIP.P1 ](../../../MRK-PROCESS/SHIP-P1/README.md) is run. Once the status has been set to "S" and the record has been filed, you may not reset the status to "N".   
  
**Invoice#** This field contains the invoice number assigned to the shipment. The way in which the invoice number is assigned depends upon the parameters defined in the [ MRK.CONTROL ](../../MRK-CONTROL/README.md) procedure. The control setting will be set to one of the following options.   
  
\- Require the entry of an invoice number.  
\- Let the system assign the number when the  
shipment record is filed.  
\- Let the system assign the number when the  
shipment is posted.  
  
**Sales Order#** Enter the sales order number from which this shipments will
occur. This must be a valid sales order.  
  
**Customer** Contains the name of the customer assigned to the sales order.
The customer name is displayed for information only and may not be changed.  
  
**Customer PO#** Contains the customer purchase order number. The purchase
order number is displayed for information only and may not be changed.  
  
**Date** Enter the date the shipment actually occurred or enter the date on
which it is planned to occur. The system will default the current date.  
  
**Ship Via** Enter the method of shipment or carrier to be used for shipping
the items. This data is loaded from the sales order, but can be changed if
desired.  
  
**Waybill#** Enter the number of the waybill which will accompany the
shipment.  
  
**Route#** The shipment route that this shipment will be delivered on as defined by [ ROUTESHIP.E ](ROUTESHIP-E/README.md) . It is displayed here for information only.   
  
**Load Date** The route's load date for this shipment as defined by [ ROUTESHIP.E ](ROUTESHIP-E/README.md) . It is displayed here for information only.   
  
**Notes** Enter any notes which pertain to the entire shipment. These notes
will print on the shipment form.  
  
**Ship Seq No** Contains the shipping sequence number define in [ cust.e ](cust-e/README.md) . If present this number will default in for you from [ so.e ](so-e/README.md) but can be changed as required. There is a right click option to display all shipping addresses available for this customer.   
  
**Commercial?** Check this box if the shipment is being sent to a commercial
address.  
  
**Ship Name** Enter the name of the company the shipment will be sent to.  
  
**Ship To Address** Contains the ship to name and address as shown on the
sales order. This data is defaulted in from the sales order record and may be
changed as required. Please note that if you will be interfacing to the
Federal Express Software System, you are only allowed to bring over two lines
of the shipping address.  
  
**Ship City** The city the shipment is being delivered to.  
  
**Ship State** The state the shipment is being delivered to.  
  
**Ship Zip** The zip code the shipment is being delivered to.  
  
**Ship Country** Enter the country this shipment will be sent to. Please note that you may be required to enter the country name as it has been entered in the [ SHIP.CONTROL ](../../SHIP-CONTROL/README.md) procedure. For example, instead of entering U.S.A. you may need to enter United States. If this requirement has been applied to your account, an error message will be displayed if the entry made into this field does not match the entry found in [ ship.control ](../../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/CUST-E/CUST-E-8/ship-control) .   
  
**Ship Attn** Enter the name of the person or contact that this shipment is
being delivered to.  
  
**Ship Phone** The phone number associated with the ship address.  
  
**Email Address** Enter the email address that should be used when notifying
the customer of the shipment.  
  
**Ups Account Number** Enter the account number for that should be charged if
the shipment will be paid by a third party. This number will only be
passed/interfaced to the freight carrier's software if the freight code is "T"
for third party.  
  
**Shipper Account** If required, enter the shipper's / company's account
number in this field.  
  
**Saturday Delivery** Check this box if the order will be delivered on a
Saturday.  
  
**Tax Codes** Enter the sales tax code(s) to be used for this shipment. These
codes are originally defaulted from the sales order. They are reloaded if a
different ship address is selected from the customer ship to address list.
They may be changed manually, as required. This tax code will only be applied
to the line items and miscellaneous charges that have been flagged as taxable.
If no line items or misc. charges have been flagged as taxable, no tax will be
added to the invoice.  
  
If a resale number is entered on the header tab of [ SO.E ](../../SO-E/README.md) , tax will not be applied to the line items or miscellaneous charges. However, tax will applied to the freight if the freight amount is flagged as taxable.   
  
**Tax Pcts** Displays the tax percentage for the associated tax code.  
  
**Tax Rate** The total sales tax rate.  
  
**Misc Charge Amount** The miscellaneous charges field allows you to specify
additional charges to be billed to the customer for the shipment. Charges are
defined by entering the amount in this field followed by a description of the
charge and the general ledger account number in the two fields which follow.
You may enter as many miscellaneous charges as needed.  
  
**Misc Taxable** If the corresponding miscellaneous charge is taxable, enter
'Y'. If it is non-taxable, enter "N" or leave this field empty.  
  
**Misc Charge Description** Enter a one line description of the associated
miscellaneous charge.  
  
**Misc Charge G/L Acct#** Enter the general ledger account number associated
with the miscellaneous charge.  
  
**Freight Code** Enter the letter "P" if the freight charges for the shipment
are being prepaid. Enter "C" if the charges are to be collected from the
customer by the carrier. Enter the letter "T" if the charges are to be paid by
a third party. Enter the letter "F" if no freight charges are to be billed to
the customer.  
  
**Cod** Check this box if the shipment is to be sent C.O.D. (cash on
delivery).  
  
**Freight Amount** Enter the dollar amount of any freight charges to be billed to the customer for the shipment. If a freight charge was entered on the sales order (via [ SO.E ](../../SO-E/README.md) ) with a freight type of ACTUAL, the freight amount will be loaded into this field for you but can be changed as required.   
  
**Freight Account#** If a freight amount is entered the general ledger account number associated with it should be entered in this field. The account number is defaulted initially from the [ MRK.CONTROL ](../../MRK-CONTROL/README.md) record.   
  
**Freight Taxable** Check this box if the freight is taxable.  
  
**Status** The status field contains the current status of the shipment
record. It will display one of the following designations.  
New - The items have not been shipped.  
Shipped - The items have been shipped.  
Posted - The shipment has been posted and the accounts receivable record has
been created.  
  
  
**Total Qty** This field contains the total quantity which appear on screen 2
of this shipment.  
  
**Total Amt** This field contains the total value of this shipment, including
freight and miscellaneous charges.  
  
**Credit Card** If this box is checked it indicates that the order is being
paid by credit card.  
  
**Processed** If this box is checked it indicates the the credit card has
already been charged. The credit card is charged when the order is saved based
on the shipment status. If the status is set to "N" the user will be asked if
the credit card is to be processed. If the status is set to "S" and the card
has not already been processed the processing will be done without asking the
user. If the credit card has already been processed and the record is deleted
a credit will be issued against the card. Changes in the value of the order
may also cause credits or additional charges to be added to the credit card.  
  
**Pull Date** This is the date the shipment was pulled using the bar code
shipment pull procedure.  
  
**Calc** Click this button to recalculate the tax rate.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />