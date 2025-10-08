##  Parts Master Entry (PARTS.E)

<PageHeader />

**Form Details**  
[ General ](PARTS-E-1/README.md)   
[ Material Control ](PARTS-E-2/README.md)   
[ Customer/Supplier ](PARTS-E-3/README.md)   
[ Ecn Change History ](PARTS-E-4/README.md)   
[ Configuration Notes ](PARTS-E-5/README.md)   
[ Images ](PARTS-E-6/README.md)   
[ Web ](PARTS-E-7/README.md)   
[ Change History ](PARTS-E-8/README.md)   
[ Export ](PARTS-E-9/README.md)   
[ Quality ](PARTS-E-10/README.md)   
[ Attachments ](PARTS-E-11/README.md)   

**Purpose**  
The PARTS.E procedure is used to enter new part numbers into the Parts Master file (PARTS) and also to change existing records. The information which may be entered includes descriptive data used to define the part from an engineering standpoint, material control parameters used in the procurement process, and approved manufacturers of purchased components. The procedure also supports the logging of Engineering Change Notices (ECN), which may be entered manually or posted automatically through the [ ECN.P1 ](../../ENG-PROCESS/ECN-P1/README.md) procedure.   
  
This procedure does not allow records to be deleted directly but instead provides a status field which may be set which will cause the batch procedure [ PARTS.P2 ](../../ENG-PROCESS/PARTS-P2/README.md) to determine if the part number is being referenced by any other files in the system. If the part is not referenced anywhere it is deleted. 

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of valid unit of measure codes ( [ UM.CONTROL ](UM-CONTROL/README.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />