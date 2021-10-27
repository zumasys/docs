##  Physical Recount Comparison Report (PHYS.R6)

<PageHeader />

**Form Details**  
[ Form Details ](PHYS-R6-1/README.md)   

**Purpose**  
The PHYS.R6 procedure is used to print a report of all parts counted for a
physical inventory showing the sum of counted quantity and the sum of recount
quantity by inventory location, bin number, part number, and lot number. This
is for use with the bar coded physical inventory processes PHYS.BE and
PHYS.BE2 which does a recount. There is also an option to show only those
parts with count variances.  
  
This report should be reviewed if the recount process is being used, before
the tags are posted to inventory.

**Frequency of Use**  
As required.

**Prerequisites**  
The counts and recounts should have been entered in the PHYS.BE and PHYS.BE2
procedures.

**Data Fields**

**Part Number** The number of the part counted.  
**Description** The description as is appears in the Parts file.  
**Invloc** The inventory location at which the count occurred.  
**Bin Number** The bin location at which the count occurred.  
**Lot Number** The lot number associated with the part count.  
**Count Quantity** The quantity counted and entered for this part number,
location and bin.  
**Recount Quantity** The quantity counted and entered for this part number,
location and bin in PHYS.BE2.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />