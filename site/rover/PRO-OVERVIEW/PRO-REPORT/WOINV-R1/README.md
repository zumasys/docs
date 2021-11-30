##  Work Order Shortage Listing (WOINV.R1)

<PageHeader />

**Form Details**  
[ Form Details ](WOINV-R1-1/README.md)   

**Purpose**  
The WOINV.R1 procedure is used to print individual shortage listings for a
work order. The user specifies the work orders to be printed.

**Frequency of Use**  
As required.

**Prerequisites**  
The work order picking list must have been processed by [ PICKER.E1 ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-CONTROL-1/PICKER-E1) . 

**Data Fields**

**Work Order** The number of the work order corresponding to the picklist.  
**Model** The model number of the assembly being built.  
**Assembly** The assembly number of the item being built as defined in the
parts master.  
**Desc** The first line of the description of the assembly from the parts
master file.  
**Revision** The revision level of the assembly being built.  
**Quantity** The quantity of the assembly being built.  
**Release** The date on which the work order is to be released to kitting.  
**Required** The date on which the assemblies are to be completed.  
**Customer** The name of the customer who ordered the assemblies.  
**Sales Order** The number of the sales order on which the order was posted.  
**Line Item** The line item number on the sales order which calls out the
assembly.  
**Part** The part number of the components taht are short.  
**Desc** The description of the part from the parts master.  
**Quantity** The quantity of the part that is short.  
**Notes** Any notes entered on the shortage record for the part.  
**Vendor** The number of the vendor supplying the part.  
**Name** The vendor's name.  
**Contact** The person at the vendor to contact regarding the purchase order.  
**Phone** The vendor's phone number.  
**PO** The purchase order number against which the parts are ordered.  
**Li** The line item number on the purchase order for the part.  
**Due Date** The dates on which the parts are scheduled for delivery.  
**Quantity** The quantity due on the associated due date.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />