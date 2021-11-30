##  Engineering Overview

<PageHeader />

[ Data Entry Procedures ](ENG-ENTRY/README.md) | [ Reports and Inquiries ](ENG-REPORT/README.md) | [ Update Processes ](ENG-PROCESS/README.md)

**Purpose**  
The Engineering module provides for the entry and maintenance of the Parts
Master, Bill of Material and Product Cost files. The system also maintains a
Where Used file based on the data entered in the Bills of Material, as well as
files which cross-reference the part number to model number, manufacturer part
number and part catagory.  
  
An Engineering Change Notice (ECN) system is provided to document and track
changes the the Parts Master and Bill of Material files. There is also the
ability to perform Mass Change Updates to the Bill of Materials, and link
these changes to the ECN system.  
  
Also included in the Engineering module is the product configurator which
allows the definition of a framework of options for or product or product
family. From this definition specific assemblies can be defined by selecting
from the available options.

**Prerequisites**  
None.

**Data Files**  
There are six primary data files and four cross-reference files which maintain
the data directly associated with the module.  
  
The Parts Master file (PARTS) is keyed by the part number and contains
descriptive information about each part such as description, notes, revision,
and manufacturer part numbers. It also contains material control information
such as ABC code, safety stock, lead time and order quantity.  
  
The Bill of Material file (BOM) is keyed by part numbers which define
assemblies. It contains all of the part numbers called out on the parts list
for the assembly, the quantity required of each part and any reference
designations applicable to those parts.  
  
The Product Cost file (COST) maintains the standard cost information for each
part number in the Parts Master. Three sets of costs (Current, Book, and
Previous) are maintained for each item. The cost elements maintained include
the total standard, material, labor, outside processing, fixed overhead,
variable overhead and material overhead.  
  
The Engineering Change Notice file (ECN) maintains information about changes
made to the Parts Master and Bill of Materials file. The file is keyed by a
sequential or manually assigned number. The use of this file and the ECN
system is optional.  
  
The Product Configuration file (PRODCON) maintains the definition of the
options available to configure a specific product. The file is keyed by a user
defined product code or model number.  
  
The Where Used file (WU) is keyed by part number and references all of the
Bill of Material records (BOM) that reference the part number.  
  
The Part Number to Category cross-reference (PARTCATEGORY) is keyed by
category and references all of the parts in that category. It is used by
several procedures to provide direct access to the part numbers for a given
category.  
  
The Part Number to Model cross-reference file (PARTMODEL) is keyed by model
number and references all of the parts that contain the model number. It is
used by several procedures to provide direct access to the part numbers for a
given model.  
  
The Part Number to Manufacturer Part cross-reference file (PARTMFG) is keyed
by the manufacturer part number and references all of the parts that reference
the manufacturer part number. It is used by several procedures to provide
direct access to the part numbers for a given manufacturer part.

**System Interface**  
The Engineering module doesn't rely on other modules for any of its functions,
but the majority of the other modules in the system make use of the data it
maintains. The modules making use of the data include Inventory, Purchasing,
Marketing, Manufacturing Planning and Production.

**User Interface**  
The user interface to the module consists of data entry procedures to enter
and modify the PARTS, BOM, COST, ECN and PRODCON files, reports and inquiries,
and batch update procedures. Access to these procedures is controlled by the
user's security profile. For example, some users may be allowed to enter new
parts into the Parts Master file while others may only be allowed to make
changes to existing records. Some users may only be allowed to look at the
data without the ability to change it, and some may not even be able to access
the procedure. Access to batch procedures such as the where used update are
usually restricted to use by only the system administrator since these are
usually run overnight.

**Setup Procedures**  
The only setup procedure which needs to be addressed before beginning with the normal flow of activities is setting up the unit of measure table. This table defines all of the valid unit of measure codes which may be used within the system. Specifically, these codes must be present before items may be entered into the Parts Master. The procedure used to update this table is [ UM.CONTROL ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-1/UM-CONTROL) . If you want to use the ECN system you will need to setup the parameters defined in the [ ECN.CONTROL ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E/BOM-E/ECN-E/ECN-E-1/ECN-CONTROL) procedure.   
  
Other modules in the system such as the Inventory and Purchasing modules may
require that the costs be rolled up prior to operation if standard costs are
to be used for tracking inventory dollar balances and variances.

**Flow of Activities**  
The basic activities associated with the Engineering module are the entry and
modifcation of the Parts Master, Bills of Material and Standard Costs. If
desired the Engineering Change system may be used to document the changes made
to the Parts Master and Bills of Material. If configured products are used
then the definition of the configurations and the subsequent creation of
configured parts is also performed. There is not necessarily a particular
order in which the functions are performed.  
  
The Parts Master is updated by the [ PARTS.E ](../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) procedure. All part numbers for component parts as well as assemblies should be entered in the Parts Master using [ PARTS.E ](../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) . Records may not be deleted directly by this procedure because the system must check to insure that there are no files in the data base which reference the part number. Since this is a time consuming process it is not done online. Instead a status field is provided which may be set to a delete code. The batch procedure [ PARTS.P2 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-1/PARTS-P2) may then be run to validate that the part number is not referenced and then delete it.   
  
Bills of Material are entered with the [ BOM.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E/BOM-E) procedure. Before a record can be added to the BOM file its part number must first be entered in the Parts Master file using [ PARTS.E ](../../rover/AP-OVERVIEW/AP-ENTRY/ACCT-CONTROL/ACCT-CONTROL-1/ar-e/PARTS-E) . In addition, any part number which will be called out on the bill of material must also have been entered on the Parts Master. Records may also be deleted with this procedure when required.   
  
Standard Costs are entered with the [ COST.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E) procedure. If the cost method being used to value inventory is standard then cost data should be entered for each part number identified in the parts master. Even if standard is not setup as the costing method for inventory valuation you may maintain standards for other purposes. Standard costs may be rolled up with the procedure [ COST.P1 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1) , and may be rolled over (book to previous, current to book) with the [ COST.P2 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2) procedure. The cost rollover is usually performed only once or twice a year after a physical inventory.   
  
Engineering Change Notices (ECN) are entered with the [ ECN.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E/BOM-E/ECN-E) procedure. The [ ECN.F1 ](ECN-F1/README.md) procedure may be used to print an ECN form if desired. When the ECN has been approved and is ready to be implemented, the [ ECN.P1 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/ECN-P1) procedure can be run to post the changes for the parts referenced to the Parts Master file. Mass changes to the Bill of Materials file can be performed using the [ BOM.P3 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E/BOM-E/ECN-E/BOM-P3) procedure, which can optionally post the assembly numbers changed to a specified ECN record. If you were going to post the changes from [ BOM.P3 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E/BOM-E/ECN-E/BOM-P3) to the ECN, you would want to perform this step before running [ ECN.P1 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/ECN-P1) .   
  
Product Configurations are entered with the [ PRODCON.E ](PRODCON-E/README.md) procedure. This defines the options available when configuring specific products with the [ PRODCON.E2 ](PRODCON-E2/README.md) procedure. When items are configured using [ PRODCON.E2 ](PRODCON-E2/README.md) the Parts Master and Bill of Material records are created automatically.   
  
The cross reference files PARTMODEL, PARTCATEGORY and PARTMFG are all updated
automatically when a record is filed. There is also a batch update procedure
which will rebuild all of the files based on the information in the Parts
Master.  
  
The Where Used file (WU) is automatically update when changes are mode to the bill of material with the [ BOM.E ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-2/INV-CONTROL/INV-CONTROL-1/COST-P2/COST-P1/COST-E/BOM-E) procedure. The batch process [ WU.P1 ](WU-P1/README.md) may be used to regenerate the entire file if required.   
  
The batch procedure [ PARTS.P2 ](../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/MSHIP-E/MSHIP-E-2/Parts-E/PARTS-E-1/PARTS-P2) determines which parts that have been setup for deletion are eligible and the deletes them. This procedure is also usually setup in a batch process to run on a regular basis. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />