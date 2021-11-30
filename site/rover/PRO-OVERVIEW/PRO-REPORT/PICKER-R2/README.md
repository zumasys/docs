##  Work Order Inventory Availability Listing (PICKER.R2)

<PageHeader />

**Form Details**  
[ Form Details ](PICKER-R2-1/README.md)   

**Purpose**  
The PICKER.R2 procedure provides the ability to perform a "What if" check
against an existing work order to determine the availability of the component
parts. The user specifies the work orders to be checked and the the method to
be used for performing the check. He also specifies if he wants to see the
status of all components, or only those which show a potential shortage.  
  
There are two methods which may be used to check the available inventory. One
method checks the current inventory balance without regard to any other
demands on the components. The other method utilizes the projected balances as
calculated by MRP thus taking into account any other demands on the required
parts. The second method gives you a worst case scenerio since it assumes the
work order you are checking would be the last in line for the parts.

**Frequency of Use**  
As required.

**Prerequisites**  
Creation of the picking list through [ WO.E ](../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/CHECKS-E/AP-CONTROL/GLCHART-E/GLCHART-E-1/GLCHART-R2/WO-CONTROL/WO-E) . 

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
**Qty Avail** The quantity of the component part that is available to the work
order.  
**Qty Short** The quantity of the component that will be short.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />