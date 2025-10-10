# Post ECN Data to the Parts Master (ECN.P1)

<PageHeader />

**Form Details**  
[Form Details](ECN-P1-1/README.md)

**Purpose**  
The ECN.P1 procedure is used to post the changes documented with [ECN.E](../../ENG-ENTRY/ECN-E/README.md) to the parts master and bill of material files. Use of this procedure is optional. You should not run this procedure if you are making the changes to the parts master and bill of material files manually.
  
To avoid posting the changes listed in an ECN more than once, you may only run this procedure one time for an ECN. If you make subsequent additions to the ECN with [ECN.E](../../ENG-ENTRY/ECN-E/README.md) , you must make the appropriate changes manually to the bill of materials file with [BOM.E](../../ENG-ENTRY/BOM-E/README.md) .
  
All part numbers referenced on the ECN will automatically have their status set to "A" (Approved) when this procedure is run. This is done to reset the status which was changed to "C" (Change in process) by the [ECN.E](../../ENG-ENTRY/ECN-E/README.md) procedure.

**Frequency of Use**  
As required.

**Prerequisites**  
None.

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />
