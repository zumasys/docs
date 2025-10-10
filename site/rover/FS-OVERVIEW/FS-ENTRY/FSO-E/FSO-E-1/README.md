##  Field Service Order Entry (FSO.E)

<PageHeader />

##  General

![](./FSO-E-1.jpg)

**Order No** Enter the order number you wish to add or change. Leave this
field blank if you want to enter  
a new order and have the system assign the order number when you save the
order.  
  
**Co Code** Enter the company code this record should be applied to. The
company code must be predefined in the CO.CONTROL procedure. If only one
company code exists, it will automatically be inserted into this record for
you.  
  
**Serial No** Enter the serial number of the equipment serviced by this order.
You may leave this field blank if there is no serial number available, however
the service history for the serial number will not be updated.  
  
**Vendor Id** Enter the vendor that should be invoiced for any warranty charges. If a vendor has been defined in [ SERIAL.E ](../../SERIAL-E/README.md) , it will be loaded into this screen for you but can be changed as required.   
  
**Hold Code** A user defined code indicating that the order is on hold. Only
new/open orders can be placed on hold and the status cannot be updated to "C"
for complete while on hold. At file time, the system will notify the user if
the customer has exceeded their credit limit and give the user the option to
place this order on hold. If the user places the order on hold, a "C" (for
credit hold) will be entered into the hold code field.  
  
**Hold Date** The date the order was placed on hold.  
  
**Order Type** Enter the code that identifies the type of order being
processed.  
  
**Status** The system will default the status of "O" (open) when the order is first entered. When you have made all of your entries and are ready for the to be posted, enter the letter "C" (complete). When the order is filed with a "C" status inventory and labor will be posted, and the order will be available for processing by the invoice posting procedure [ FSO.P1 ](../../../FS-PROCESS/FSO-P1/README.md) .   
  
**Order Date** Enter the date on which the original request for service was
made. On new orders the system will default the current date which may be
changed if appropriate.  
  
**Sched Date** Enter the date on which the service is scheduled to be
performed.  
  
**Service Date** Enter the date on which the service was performed.  
  
**Post Date** Contains the date on which the order was posted and an invoice was created by the [ FSO.P1 ](../../../FS-PROCESS/FSO-P1/README.md) procedure. It may not be changed.   
  
**Service Unit** Enter the identification of the service unit (van, truck
etc.) that was used in performing the service.  
  
**Service Unit Description** Contains the description of the service unit used
to perform the service. It may not be changed.  
  
**PM Service** Check this box if preventive maintenance was performed on the
equipment as part of the service order.  
  
**Last PM Date** Displays the last preventive maintenance date as recorded in
the Serial file.  
  
**Meter** Enter the reading taken from the meter on the equipment at the time
the service was performed. For example, miles or hours.  
  
**Rep** Enter the identification of each representative involved in carrying
out the service order. These will be loaded automatically based on the service
unit entered, but may be changed as required.  
  
**Order Pct** Enter the percentage to be used in determining the level of
credit given to each rep for their involvement in carrying out the service
order. These percentages affect are used along with the commission percentage
to determine the amount of commission to be paid.  
  
**Equipment Part** Enter the part number of the equipment being serviced.  
  
**Equipment Model** Enter the model number of the equipment being serviced.
This information may be loaded automatically based on the part number entered.  
  
**Equipment Desc** Enter the description of the equipment being serviced. This
information is loaded from the Serial file when available.  
  
**Category** Displays the category defined in the parts master for the
equipment.  
  
**Cust No** Enter the number of the customer associated with the equipment.
This may be the owner or renter of the equipment. When available this
information will be loaded automatically from the Serial file.  
  
**Customer Name** Contains the name of the customer as it appears on the
customer master file. It may not be changed.  
  
**Address** Enter the address at which the equipment resides and the service
is to be performed.  
  
**Bill To** Enter the number of the customer that is to be billed for the
service order.  
  
**Bill To Name** Contains the name of the bill to customer for the order. It
may not be changed.  
  
**Bill To Addres** Contains the address of the customer to be billed for the
service order.  
  
**Zone** Enter the geographic zone within which the equipment resides. The
zone is used in the calculation of service rates.  
  
**Contact** Enter the name of the person to contact at the customer regarding
the service order.  
  
**Phone** Enter the phone number of the contact person at the customer site.  
  
**PO Number** Enter the purchase order number assigned by the customer for the
service order. This number will be referenced on the invoice.  
  
**Invoice.No** Contains the invoice number assigned for the service order. This number is assigned at the time the invoice is created during the posting of the order with [ FSO.P1 ](../../../FS-PROCESS/FSO-P1/README.md) . It may not be changed.   
  
**Terms** Enter the terms code that defines the payment requirments for the
service order.  
  
**Terms Description** Contains the description of the payment terms defined by
the terms code. This may not be changed.  
  
**Notes** Enter any notes applicable to the service order.  
  
**Tax Code** Enter each of the tax codes that applies to the address at which
the equipment resides.  
  
**Tax Percent** Contains the percentage of the associated tax code.  
  
**Total Tax%** Contains the sum of all the individual tax percentages.  
  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />