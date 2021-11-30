##  Indented Where Used Listing (WU.R2)

<PageHeader />

**Form Details**  
[ Form Details ](WU-R2-1/README.md)   

**Purpose**  
The WU.R2 procedure is used to create indented where used listings. The user
must specify each part number to be included in the report. The report will
show each assembly on which the specified part numbers are referenced but,
unlike the standard where used listing, will also show each next higher level
assembly until it reaches the highest level in the product structure. To
visually denote the current level one period (.) is placed in front of the
assembly number for each level.

**Frequency of Use**  
As required.

**Prerequisites**  
Building of the Where Used file ( [ WU.P1 ](../../../../rover/ENG-OVERVIEW/ENG-PROCESS/WU-P1) ). 

**Data Fields**

**Assembly Number** The part numbers of all the assemblies on which the
specified component part number is referenced, as well as each higher level
assembly.  
**Assembly Description** The first line of the description for each of the
assemblies listed.  
**Line Item** The line item numbers on the associated assembly bill of
material which reference the component part number for the first level, and
the assembly number for each higher level assembly.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />