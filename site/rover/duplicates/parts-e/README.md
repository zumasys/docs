##  Parts Master Entry (PARTS.E)

<PageHeader />

**Form Details**  
[ General ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/PARTS-E-1/README.md)   
[ Material Control ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/PARTS-E-2/README.md)   
[ Customer/Supplier ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/PARTS-E-3/README.md)   
[ Ecn Change History ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/PARTS-E-4/README.md)   
[ Configuration Notes ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/PARTS-E-5/README.md)   
[ Images ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/PARTS-E-6/README.md)   
[ Web ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/PARTS-E-7/README.md)   
[ Change History ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/PARTS-E-8/README.md)   
[ Export ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/PARTS-E-9/README.md)   
[ Quality ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/PARTS-E-10/README.md)   
[ Attachments ](../../ENG-OVERVIEW/ENG-ENTRY/PARTS-E/PARTS-E-11/README.md)   

**Purpose**  
The PARTS.E procedure is used to enter new part numbers into the Parts Master file (PARTS) and also to change existing records. The information which may be entered includes descriptive data used to define the part from an engineering standpoint, material control parameters used in the procurement process, and approved manufacturers of purchased components. The procedure also supports the logging of Engineering Change Notices (ECN), which may be entered manually or posted automatically through the [ ECN.P1 ](../../ENG-OVERVIEW/ENG-PROCESS/ECN-P1/README.md) procedure.   
  
This procedure does not allow records to be deleted directly but instead provides a status field which may be set which will cause the batch procedure [ PARTS.P2 ](../../ENG-OVERVIEW/ENG-PROCESS/PARTS-P2/README.md) to determine if the part number is being referenced by any other files in the system. If the part is not referenced anywhere it is deleted. 

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of valid unit of measure codes ( [ UM.CONTROL ](../../ENG-OVERVIEW/ENG-ENTRY/UM-CONTROL/README.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />