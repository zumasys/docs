##  Work Order Picklist Listing (PICKER.R1)

<PageHeader />

**Form Details**  
[ Form Details ](PICKER-R1-1/README.md)   

**Purpose**  
The PICKER.R1 procedure is used to print work order picking lists. The user
specifies which picklists are to be printed and whether or not line stock
items are to be included on the picking list.

**Frequency of Use**  
As required.

**Prerequisites**  
Creation of the picking list through [ WO.E ](../../PRO-ENTRY/WO-E/README.md) . 

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
**LI#** The sequential line item number for each item on the picking list.  
**Part** The part number of the component required.  
**Description** The description of the component part.  
**Ref Des** Any reference designator or note information related to the
component part.  
**Qty required** The quantity required of the component to complete the total
number of assemblies required.  
**Qty pulled** Contains a blank line for the person pulling the kit to
indicate the quantity actually pulled, or will contain the word "PHANTOM" if
the associated item is a phantom assembly which is not to be pulled, or
"BACKFLUSH" if the item will be backflushed and is not to be pulled, or "LINE
STOCK" if the item is to be consumed from line stock and not pulled from
stock.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />