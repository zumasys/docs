##  Bill of Material Import (BOM.E2)

<PageHeader />

**Form Details**  
[ BOM ](BOM-E2-1/README.md)   
[ Change History ](BOM-E2-2/README.md)   

**Purpose**  
The BOM.E2 procedure is used to import a bill of material from a text or Excel
file. The text file can be a comma delimited or tab delimited file. You will
be be prompted for the path to this file and the file type (Excel, comma or
tab).  
  
This procedure will load the data entered in the file onto the screen. Once the data has been loaded, you can make changes to it before saving the record. Once the record has been saved, you can use [ BOM.E ](../BOM-E/README.md) to make additional changes to the bill if required.   
  
All part numbers, including the assembly number to be imported, must exist in the database. If the component parts do not exist, a line item will be added to the bill as a placeholder. However, the "part number" will be displayed in the reference designator field and not the part number field. Once the part number has been entered in [ PARTS.E ](../PARTS-E/README.md) , you can update the bill of material.   
  
  
The layout of the file is as follows.  
  
The line item data should begin on the 5th row.  
  
1\. Column 1 - Index  
2\. Column 2 - Line Item Number  
3\. Column 3 - Part Number  
4\. Column 4 - Quantity  
5\. Column 5 - Reference

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of Part records ( [ PARTS.E ](../PARTS-E/README.md) ). [ PARTS.E ](../PARTS-E/README.md) can be found in the data entry section of the engineering module. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />