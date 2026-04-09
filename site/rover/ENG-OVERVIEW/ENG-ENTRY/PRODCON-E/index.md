##  Product Definition (PRODCON.E)

<PageHeader />

**Form Details**  
[ Configurator Controls ](PRODCON-E-1/index.md)   
[ Engineering Data ](PRODCON-E-2/index.md)   
[ Material Control Data ](PRODCON-E-3/index.md)   
[ Images ](PRODCON-E-4/index.md)   
[ Configuration Options ](PRODCON-E-5/index.md)   
[ Option Helps ](PRODCON-E-6/index.md)   
[ Change History ](PRODCON-E-7/index.md)   

**Purpose**  
The PRODCON.E procedure is used to define the structure and selection options for configurable products. The product configurator allows you to define all of the possible options for a product or product family , instead of having to define each of them manually using [ PARTS.E ](../../ENG-ENTRY/PARTS-E/index.md) and [ BOM.E ](../BOM-E/index.md) .   
  
As customers place orders for specific configurations, the options desired may be selected using the [ PRODCON.E2 ](../PRODCON-E2/index.md) procedure. If the options selected are already defined by a previously configured assembly, then the procedure will return the part number of that assembly, otherwise a new part number will be assigned and a bill of material created. This process is also available during sales order entry ( [ SO.E ](../../../MRK-OVERVIEW/MRK-ENTRY/SO-E/index.md) ) if enabled in the [ MRK.CONTROL ](../../../MRK-OVERVIEW/MRK-ENTRY/MRK-CONTROL/index.md) procedure.   
  
Configured products can be defined as assemblies that are built prior to being
shipped, or as phantom assemblies in which the individual items selected are
pulled and shipped but are sold as a package at one price. An example of a
phantom assembly would be a stereo system in which the receiver, amplifier and
speakers are all pulled as individual items from inventory, but are sold as
one unit.

**Frequency of Use**  
As required.

**Prerequisites**  
Any part numbers that are to be referenced as options must have been entered into the Parts Master file with [ PARTS.E ](../../ENG-ENTRY/PARTS-E/index.md) . 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />