##  Reload Picker and Woinv Data (WO.P6)

<PageHeader />

**Form Details**  
[ Form Details ](WO-P6-1/README.md)   

**Purpose**  
WO.P6 is used to mass update all "R" status work orders in order to refresh
the PICKER and WOINV records. The procedure will select all work orders with a
status of "R", read either the WOBOM or BOM record and rebuild the complete
PICKER and WOINV records.  
  
The output from this procedure will display the work order number and a
message indicating either "Processed" or "No BOM record".

**Frequency of Use**  
As required.

**Prerequisites**  

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />