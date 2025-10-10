##  Mass Change Maximum Entry (PD.P1)

<PageHeader />

**Form Details**  
[ Form Details ](PD-P1-1/README.md)   

**Purpose**  
This procedure provides an automated method of changing the maximum number of characters available for entry in a given field everywhere it occurs on a form in the system. If you are changing the field size of the ID field in a file, any other file that has a field that identifies this file as its reference file will also be changed. For example, if the field size of the record id in the PARTS file is 20 characters, and you need to allow up to 26 characters, you could run this procedure with the new settings and it would change every procedure in the system to allow 26 rather than 20 characters every place that part number is prompted. This includes procedures such as sales order entry ( [ SO.E ](../../../MRK-OVERVIEW/MRK-ENTRY/SO-E/README.md) ) which have a reference to the PARTS file from their part number field.   
  
Warning:  
Be very cautious when running this procedure since it can potentially affect
large numbers of procedures.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />