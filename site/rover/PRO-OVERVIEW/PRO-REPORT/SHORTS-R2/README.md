##  Shortage Expedite Listing (SHORTS.R2)

<PageHeader />

**Form Details**  
[ Form Details ](SHORTS-R2-1/README.md)   

**Purpose**  
The SHORTS.R2 procedure is used to create the shortage expedite listing. The
user may list all of the part numbers short or selected parts only.
Information about the shortage and all of the open purchase orders for the
short part are displayed.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

**Data Fields**

**Part#** The number of the part that is short.  
**Desc** The description of the part as defined on the parts master.  
**Notes** Any notes that were entered about the shortage in the [ SHORTS.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/SO-E-2/INV-Q/INV-Q-1/SHORTS-E) procedure.   
**WO ID** The numbers of the work orders which show a shortage for the part.  
**Rel Date** The date on which the work order was to be released for kitting.
This is the date the parts were actually required.  
**Qty Short** The quantity of the part short on the work order.  
**Vendor** The number of the vendor supplying the part.  
**Name** The name of the vemdor supplying the part.  
**Contact** The name of the person to be contacted at the vendor about the
purchase order.  
**Phone** The phone number of the vendor.  
**PO** The number of the purchase order containing the parts.  
**LI#** The line item number on the purchase order for the parts.  
**Due Date** The dates on which the parts are scheduled for delivery.  
**Quantity** The quantity of the parts due on the associated date.  
**PO Line Notes** Any notes present on the purchase order line item.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />