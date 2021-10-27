##  Parts Master Entry (PARTS.E)

<PageHeader />

**Form Details**  
[ General ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-1)   
[ Material Control ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-2)   
[ Customer/Supplier ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-3)   
[ Ecn Change History ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-4)   
[ Configuration Notes ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-5)   
[ Images ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-6)   
[ Web ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-7)   
[ Change History ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-8)   
[ Export ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-9)   
[ Quality ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-10)   
[ Attachments ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-11)   

**Purpose**  
The PARTS.E procedure is used to enter new part numbers into the Parts Master file (PARTS) and also to change existing records. The information which may be entered includes descriptive data used to define the part from an engineering standpoint, material control parameters used in the procurement process, and approved manufacturers of purchased components. The procedure also supports the logging of Engineering Change Notices (ECN), which may be entered manually or posted automatically through the [ ECN.P1 ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/ECN-P1) procedure.   
  
This procedure does not allow records to be deleted directly but instead provides a status field which may be set which will cause the batch procedure [ PARTS.P2 ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-1/PARTS-P2) to determine if the part number is being referenced by any other files in the system. If the part is not referenced anywhere it is deleted. 

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of valid unit of measure codes ( [ UM.CONTROL ](../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-1/UM-CONTROL) ). 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />