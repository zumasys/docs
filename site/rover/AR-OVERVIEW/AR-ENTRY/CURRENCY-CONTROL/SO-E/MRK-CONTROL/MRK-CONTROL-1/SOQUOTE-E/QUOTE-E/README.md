##  Quote Entry (QUOTE.E)

<PageHeader />

**Form Details**  
[ Header ](QUOTE-E-1/README.md)   
[ Detail Costs ](QUOTE-E-2/README.md)   
[ Material Cost ](QUOTE-E-3/README.md)   
[ Labor Cost ](QUOTE-E-4/README.md)   
[ Attachments ](QUOTE-E-5/README.md)   

**Purpose**  
The QUOTE.E procedure is used to enter new sales orders quotations into the
system and to change existing quotations. The procedure consists of four
screens. The first contains header information such as customer, prospect,
sales rep and status code, as well as information about what is being quoted,
such as part number and quantity breaks (if required). Screen 2 contains all
of the sum- arized cost information from all of the detail on the other
screens. Screen 3 contains the material costs, effectively displaying a bill
of material for the part being quoted. Screen 4 allows the user to assign a
series of steps (i.e. routing) in order to define the labor cost requirements.  
  
This procedure allows the user to create customers, prospects, bills of
material and routings, if desired, when the quote is approved and filed.

**Frequency of Use**  
As required.

**Prerequisites**  
Initialization of the marketing control record ( [ MRK.CONTROL ](../../../../../../../../../../../rover/AP-OVERVIEW/AP-ENTRY/AP-E/AP-E-1/CURRENCY-CONTROL/SO-E/MRK-CONTROL) ) and the entry of the rep records to be referenced. When the quote is "author- ized", the component material must be present in the Parts file. Similarily, the routing steps must be identified in the Routing file. 

<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />