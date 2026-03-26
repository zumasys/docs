# ECN Entry (ECN.E)

<PageHeader />

**Form Details**  
[General](ECN-E-1/index.md)
[BOM Changes](ECN-E-2/index.md)
[Routing Changes](ECN-E-3/index.md)
[Attachments](ECN-E-4/index.md)

**Purpose**  
The ECN.E procedure is used to document changes made to the parts master and bill of material files. This procedure can be used simply as an after the fact documenting tool, in which you make the changes to the bills of material manually and then document those changes in this procedure, or it can be used to actually make the changes to the bills of material based on the information you enter. The actual posting is performed by the [ECN.P1](../../ENG-PROCESS/ECN-P1/index.md) procedure. You may also use the bill of material mass change procedure [BOM.P3](../../ENG-PROCESS/BOM-P3/index.md) in conjuction with this procedure to make changes to bills of material.
  
When an ECN is filed, the status of all of the part numbers referenced on the ECN are automatically set to "C" (Changed in process). The [ECN.P1](../../ENG-PROCESS/ECN-P1/index.md) procedure sets the status to "A" (Approved) when it processes the ECN. If the ECN is filed again after being posted by [ECN.P1](../../ENG-PROCESS/ECN-P1/index.md) , it will not set the status of the parts to "C" again.
  
If changes are made to the ECN after it has been posted, those changes will
need to be made manually to the bill of material and/or routing records.

**Frequency of Use**  
As required.

**Prerequisites**  
Entry of the ECN control parameters through [ECN.CONTROL](../ECN-CONTROL/index.md).

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />
