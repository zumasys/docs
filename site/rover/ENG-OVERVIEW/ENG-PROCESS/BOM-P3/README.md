##  Bill of Material Mass Change Update (BOM.P3)

<PageHeader />

**Form Details**  
[ Form Details ](BOM-P3-1/README.md)   

**Purpose**  
The BOM.P3 procedure is used to perform mass change updates against the bill
of materials file, or to load the specified changes into an engineering change
notice.  
  
The procedure determines which bills of material to change based on the part
number and/or reference designator you specify. You may also limit the items
selected by specifying a pre-defined save-list of the eligible bill of
material IDs. The procedure searches the line items of each bill of material
on file, or in the save-list specified, for a match on the part number and/or
reference designator.  
  
For each item that is found, the procedure will perform one of the following
actions that you have specified:  
  
  
\- Add a new line item  
\- Change the line item  
\- Delete the line item  
\- Phase-In a new line item by placing an end effectivity date on  
the existing line item, and a start effectivity on the new item.  
\- Phase-Out the line item by setting the end effectivity date.  
  
If you specify an Engineering Change Notice (ECN) when the procedure is run, the proposed changes are loaded into the ECN. Once loaded into the ECN, the entries may be modified if required, and posted to the bills of material by the [ ECN.P1 ](../ECN-P1/README.md) procedure. If an ECN is not specified the changes are posted directly to the bills of material. 

**Frequency of Use**  
As required.

**Prerequisites**  
None required, but you may want to use the [ BOM.R5 ](../../ENG-REPORT/BOM-R5/README.md) report first to see which items will be affected before you actually make the change with this procedure. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />