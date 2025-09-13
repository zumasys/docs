##  Physical Cost Variation Report (PHYS.R2)

<PageHeader />

**Form Details**  
[ Form Details ](PHYS-R2-1/)   

**Purpose**  
The PHYS.R2 procedure is used to print a cost variation report of all parts
for a physical inventory. The report is intended to show the dollar and
quantity adjustment effect these tags will have on inventory. It is sorted by
inventory location within part number.  
  
This report should be reviewed after counts have been entered and before they
are posted to inventory.

**Frequency of Use**  
As required.

**Prerequisites**  
The counts should have been entered in the [ PHYS.E ](../../../../rover/INV-OVERVIEW/INV-ENTRY/PHYS-E) procedure and all uncounted tags should have been voided. 

**Data Fields**

**Part Number** The number of the part counted.  
**Description** The description as is appears in the Parts file.  
**Invloc** The inventory location at which the count occurred.  
**Tag** The tag number associated with the part number in the inventory
location to be counted.  
**St** The current status of this tag. (N = New, C = Counted, P = Posted)  
**Count Quantity** The quantity counted and entered for this part number at
the inventory location.  
**Beginning Quantity** The inventory balance as it appears in the Inv file
before the count.  
**Variance** The variance between the count quantity and the beginning
inventory balance. A negative number indicates a shrinkage in inventory.  
**Unit Cost** The unit cost of this part in the inventory location.  
**Variance** The total cost variance this count will have on the inventory
location for this part. This is the amount that will feed to General Ledger
through the INVREG file when the tags are posted.  
  
<badge text= "Version 8.10.57" vertical="middle" />

<PageFooter />