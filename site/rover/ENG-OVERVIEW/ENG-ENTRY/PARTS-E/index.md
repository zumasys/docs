#  Parts Master Entry (PARTS.E)

<PageHeader />

**Form Details**  
[ General ](PARTS-E-1/index.md)   
[ Material Control ](PARTS-E-2/index.md)   
[ Customer/Supplier ](PARTS-E-3/index.md)   
[ Ecn Change History ](PARTS-E-4/index.md)   
[ Configuration Notes ](PARTS-E-5/index.md)   
[ Images ](PARTS-E-6/index.md)   
[ Web ](PARTS-E-7/index.md)   
[ Change History ](PARTS-E-8/index.md)   
[ Export ](PARTS-E-9/index.md)   
[ Quality ](PARTS-E-10/index.md)   
[ Attachments ](PARTS-E-11/index.md)   

**Purpose**  
The PARTS.E procedure is used to enter new part numbers into the Parts Master file (PARTS) and also to change existing records. The information which may be entered includes descriptive data used to define the part from an engineering standpoint, material control parameters used in the procurement process, and approved manufacturers of purchased components. The procedure also supports the logging of Engineering Change Notices (ECN), which may be entered manually or posted automatically through the [ ECN.P1 ](../../ENG-PROCESS/ECN-P1/index.md) procedure.   
  
This procedure does not allow records to be deleted directly but instead provides a status field which may be set which will cause the batch procedure [ PARTS.P2 ](../../ENG-PROCESS/PARTS-P2/index.md) to determine if the part number is being referenced by any other files in the system. If the part is not referenced anywhere it is deleted. 

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of valid unit of measure codes ( [ UM.CONTROL ](../UM-CONTROL/index.md) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />